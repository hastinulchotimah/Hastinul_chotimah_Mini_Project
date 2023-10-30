import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import backgroundImage from './booking.avif';
import axios from 'axios';

function MakeupBookingForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    instagram: '',
    alamat: '',
    telepon: '',
    appointmentDate: '',
    serviceType: '',
    message: '',
    bookings: [],
    currentBooking: null,
    isEditMode: false,
    successMessage: '',
  });

  const makeupListRef = useRef(null);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    axios.get('https://651b95ed194f77f2a5ae9790.mockapi.io/makeup')
      .then((response) => {
        setFormData({ ...formData, bookings: response.data });
      })
      .catch((error) => {
        console.error('Error memuat data pemesanan:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const { bookings, currentBooking } = formData;
    const editedBookingIndex = bookings.findIndex((booking) => booking.id === currentBooking.id);

    if (editedBookingIndex !== -1) {
      const updatedBookings = [...bookings];
      updatedBookings[editedBookingIndex] = currentBooking;

      updateBookings(updatedBookings);
    }
  };

  const resetForm = () => {
    setFormData({
      ...formData,
      name: '',
      instagram: '',
      alamat: '',
      telepon: '',
      appointmentDate: '',
      serviceType: '',
      message: '',
      isEditMode: false,
      currentBooking: null,
    });
    loadBookings();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      instagram,
      alamat,
      telepon,
      appointmentDate,
      serviceType,
      message,
      isEditMode,
      currentBooking,
    } = formData;

    const dataToSubmit = isEditMode
      ? currentBooking
      : {
          name,
          instagram,
          alamat,
          telepon,
          appointmentDate,
          serviceType,
          message,
        };

    if (isEditMode) {
      axios
        .put(`https://651b95ed194f77f2a5ae9790.mockapi.io/makeup/${currentBooking.id}`, dataToSubmit)
        .then((response) => {
          const updatedBookings = formData.bookings.map((booking) =>
            booking.id === currentBooking.id ? response.data : booking
          );
          setFormData({
            ...formData,
            bookings: updatedBookings,
            successMessage: 'Pemesanan berhasil dikirim!',
          });
          resetForm();
          alert('Terima kasih sudah percaya dengan jasa kami');
        })
        .catch((error) => {
          console.error('Error mengupdate pemesanan:', error);
        });
    } else {
      axios
        .post('https://651b95ed194f77f2a5ae9790.mockapi.io/makeup', dataToSubmit)
        .then((response) => {
          setFormData((prevState) => ({
            ...formData,
            bookings: [...prevState.bookings, response.data],
            successMessage: 'Pemesanan berhasil dikirim!',
          }));
          resetForm();
          alert('Terima kasih sudah percaya dengan jasa kami');
        })
        .catch((error) => {
          console.error('Error menyimpan pemesanan:', error);
        });
    }
  };

  const updateBookings = (updatedBookings) => {
    setFormData({ ...formData, bookings: updatedBookings });
    if (makeupListRef.current) {
      makeupListRef.current.loadBookings();
    }
    resetForm();
  };

  const deleteBooking = (id) => {
    axios
      .delete(`https://651b95ed194f77f2a5ae9790.mockapi.io/makeup/${id}`)
      .then(() => {
        loadBookings();
      })
      .catch((error) => {
        console.error('Error menghapus pemesanan:', error);
      });
  };

  useEffect(() => {
    if (props.editingBooking !== formData.currentBooking) {
      const { editingBooking } = props;
      if (editingBooking) {
        setFormData({
          ...formData,
          name: editingBooking.name,
          instagram: editingBooking.instagram,
          alamat: editingBooking.alamat,
          telepon: editingBooking.telepon,
          appointmentDate: editingBooking.appointmentDate,
          serviceType: editingBooking.serviceType,
          message: editingBooking.message,
          isEditMode: true,
          currentBooking: editingBooking,
          successMessage: '', 
        });
      }
    }
  }, [props.editingBooking, formData]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '110vh',
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto p-9 rounded-lg shadow-md opacity-90" style={backgroundStyle}>
        <h2 className="text-2xl font-semibold mb-4 text-center text-black">Booking Jasa Makeup</h2>
        {formData.successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
            {formData.successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="block text-black font-semibold">Nama:</label>
            <input
              className="border border-grey-300 rounded-lg p-2 w-full"
              type="text"
              name="name"
              value={formData.isEditMode ? formData.currentBooking.name : formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <label className="block text-black font-semibold">Nama Instagram:</label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="text"
              name="instagram"
              value={formData.isEditMode ? formData.currentBooking.instagram : formData.instagram}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <label className="block text-black font-semibold">Alamat:</label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="text"
              name="alamat"
              value={formData.isEditMode ? formData.currentBooking.alamat : formData.alamat}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <label className="block text-black font-semibold">No.Telp:</label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="text"
              name="telepon"
              value={formData.isEditMode ? formData.currentBooking.telepon : formData.telepon}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <label className="block text-black font-semibold">Tanggal Appointment:</label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="date"
              name="appointmentDate"
              value={formData.isEditMode ? formData.currentBooking.appointmentDate : formData.appointmentDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <label className="block text-black font-semibold">Jenis Layanan:</label>
            <select
              className="border border-gray-300 rounded-lg p-2 w-full"
              name="serviceType"
              value={formData.isEditMode ? formData.currentBooking.serviceType : formData.serviceType}
              onChange={handleInputChange}
              required
            >
              <option value="">Pilih Jenis Layanan</option>
              <option value="Makeup Pesta">Makeup Pesta</option>
              <option value="Makeup Pengantin">Makeup Pengantin</option>
              <option value="Makeup Wisuda">Makeup Wisuda</option>
            </select>
          </div>
          <div className="">
            <label className="block text-balck font-semibold">Pesan Tambahan:</label>
            <textarea
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="text"
              name="message"
              value={formData.isEditMode ? formData.currentBooking.message : formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button className="bg-blue-600 text-white rounded-lg p-2 hover-bg-blue-700" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MakeupBookingForm;
