import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditBookingForm from './makeupeditform';

function MakeupList() {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const resetFormData = () => {
    setCurrentBooking(null);
    setIsEditMode(false);
    loadDataFromAPI();
  }

  const loadDataFromAPI = () => {
    axios.get('https://651b95ed194f77f2a5ae9790.mockapi.io/makeup')
      .then((response) => {
        const bookingsData = response.data || [];
        setBookings(bookingsData);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }

  useEffect(() => {
    loadDataFromAPI();
  }, []);

  const addBooking = (newBooking) => {
    axios.post('https://651b95ed194f77f2a5ae9790.mockapi.io/makeup', newBooking)
      .then((response) => {
        const updatedBooking = response.data;
        setBookings((prevBookings) => [...prevBookings, updatedBooking]);
        resetFormData();
      })
      .catch((error) => {
        console.error('Error adding booking:', error);
      });
  }

  const editBooking = (updatedBooking) => {
    axios.put(`https://651b95ed194f77f2a5ae9790.mockapi.io/makeup/${updatedBooking.id}`, updatedBooking)
      .then((response) => {
        const updatedBookingData = response.data;
        setBookings((prevBookings) => {
          const index = prevBookings.findIndex((booking) => booking.id === updatedBookingData.id);
          if (index !== -1) {
            const updatedBookings = [...prevBookings];
            updatedBookings[index] = updatedBookingData;
            return updatedBookings;
          }
          return prevBookings;
        });
        setCurrentBooking(null);
        setIsEditMode(false);
      })
      .catch((error) => {
        console.error('Error updating booking:', error);
      });
  }

  const onEditBooking = (bookingToEdit) => {
    setCurrentBooking({ ...bookingToEdit });
    setIsEditMode(true);
  }

  const onCancelEdit = () => {
    setCurrentBooking(null);
    setIsEditMode(false);
  }

  const deleteBooking = (id) => {
    axios.delete(`https://651b95ed194f77f2a5ae9790.mockapi.io/makeup/${id}`)
      .then(() => {
        setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  }

  return (
    <div>
      {isEditMode && currentBooking && (
        <EditBookingForm
          booking={currentBooking}
          onSave={editBooking}
          onCancel={onCancelEdit}
          isEditMode={isEditMode}
        />
      )}
      <strong>Daftar Pemesanan Makeup</strong>
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Nama Instagram</th>
            <th className="border px-4 py-2">Alamat</th>
            <th className="border px-4 py-2">No. Telepon</th>
            <th className="border px-4 py-2">Tanggal Appointment</th>
            <th className="border px-4 py-2">Jenis Layanan</th>
            <th className="border px-4 py-2">Pesan Tambahan</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{booking.id}</td>
              <td className="border px-4 py-2">{booking.name}</td>
              <td className="border px-4 py-2">{booking.instagram}</td>
              <td className="border px-4 py-2">{booking.alamat}</td>
              <td className="border px-4 py-2">{booking.telepon}</td>
              <td className="border px-4 py-2">{booking.appointmentDate}</td>
              <td className="border px-4 py-2">{booking.serviceType}</td>
              <td className="border px-4 py-2">{booking.message}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover-bg-yellow-600"
                  onClick={() => onEditBooking(booking)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  onClick={() => deleteBooking(booking.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MakeupList;
