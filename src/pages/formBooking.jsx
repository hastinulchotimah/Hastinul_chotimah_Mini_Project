import React, { Component } from 'react';
import Navbar from "./navbar";
import axios from 'axios';
import backgroundImage from "./booking.avif";

class MakeupBookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
    this.makeupListRef = React.createRef();
  }

  componentDidMount() {
    this.loadBookings();
  }

  loadBookings() {
    axios.get('https://651b95ed194f77f2a5ae9790.mockapi.io/makeup')
      .then((response) => {
        this.setState({ bookings: response.data });
      })
      .catch((error) => {
        console.error('Error memuat data pemesanan:', error);
      });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleEditSubmit = (e) => {
    
    e.preventDefault();
    const { bookings, currentBooking } = this.state;
    const editedBookingIndex = bookings.findIndex((booking) => booking.id === currentBooking.id);

    if (editedBookingIndex !== -1) {
      const updatedBookings = [...bookings];
      updatedBookings[editedBookingIndex] = currentBooking;

      this.updateBookings(updatedBookings);
    }
  }
  
  resetForm = () => {
    this.setState({
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
    this.loadBookings(); 
  }

  handleSubmit = (e) => {
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
    } = this.state;
  
    const dataToSubmit = isEditMode ? currentBooking : {
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
          
          const updatedBookings = this.state.bookings.map((booking) =>
            booking.id === currentBooking.id ? response.data : booking
          );
          this.setState({ bookings: updatedBookings });
          this.resetForm();
        })
        .catch((error) => {
          console.error('Error mengupdate pemesanan:', error);
        });
    } else {
      axios
        .post('https://651b95ed194f77f2a5ae9790.mockapi.io/makeup', dataToSubmit)
        .then((response) => {
          this.setState((prevState) => ({
            bookings: [...prevState.bookings, response.data],
            successMessage: 'Pemesanan berhasil dikirim!', 
          }));
          this.resetForm();
          this.loadBookings();
        })
        .catch((error) => {
          console.error('Error menyimpan pemesanan:', error);
        });
    }
  }

  
  
  updateBookings = (updatedBookings) => {
    this.setState({ bookings: updatedBookings });
    this.makeupListRef.current.loadBookingsFromAPI();
    this.resetForm();
  }

  deleteBooking = (id) => {
    axios.delete(`https://651b95ed194f77f2a5ae9790.mockapi.io/makeup/${id}`)
      .then(() => {
        this.loadBookings();
      })
      .catch((error) => {
        console.error('Error menghapus pemesanan:', error);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editingBooking !== this.props.editingBooking) {
      const { editingBooking } = this.props;
      if (editingBooking) {
        this.setState({
          name: editingBooking.name,
          instagram: editingBooking.instagram,
          alamat: editingBooking.alamat,
          telepon: editingBooking.telepon,
          appointmentDate: editingBooking.appointmentDate,
          serviceType: editingBooking.serviceType,
          message: editingBooking.message,
          isEditMode: true,
          currentBooking: editingBooking,
        });
      }
    }
  }
 

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "110vh",
    };
    return (
      <div>
        <Navbar />
          <div className="mx-auto p-9 rounded-lg shadow-md opacity-90" style={backgroundStyle}>
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">Booking Jasa Makeup</h2>
            {this.state.successMessage && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
                {this.state.successMessage}
              </div>
            )}
            <form onSubmit={this.handleSubmit}>
              <div className="">
                <label className="block text-black font-semibold">Nama:</label>
                <input
                  className="border border-grey-300 rounded-lg p-2 w-full"
                  type="text"
                  name="name"
                  value={this.state.isEditMode ? this.state.currentBooking.name : this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="">
                <label className="block text-black font-semibold">Nama Instagram:</label>
                <input
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  type="text"
                  name="instagram"
                  value={this.state.isEditMode ? this.state.currentBooking.instagram : this.state.instagram}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="">
                <label className="block text-black font-semibold">Alamat:</label>
                <input
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  type="text"
                  name="alamat"
                  value={this.state.isEditMode ? this.state.currentBooking.alamat : this.state.alamat}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="">
                <label className="block text-black font-semibold">No.Telp:</label>
                <input
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  type="text"
                  name="telepon"
                  value={this.state.isEditMode ? this.state.currentBooking.telepon : this.state.telepon}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="">
                <label className="block text-black font-semibold">Tanggal Appointment:</label>
                <input
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  type="date"
                  name="appointmentDate"
                  value={this.state.isEditMode ? this.state.currentBooking.appointmentDate : this.state.appointmentDate}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="">
                <label className="block text-black font-semibold">Jenis Layanan:</label>
                <select
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  name="serviceType"
                  value={this.state.isEditMode ? this.state.currentBooking.serviceType : this.state.serviceType}
                  onChange={this.handleInputChange}
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
                  value={this.state.isEditMode ? this.state.currentBooking.message : this.state.message}
                  onChange={this.handleInputChange}
                />
              </div>
              <button className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700" type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
  }
}

export default MakeupBookingForm;
