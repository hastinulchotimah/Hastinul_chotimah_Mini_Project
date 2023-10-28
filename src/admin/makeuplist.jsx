import React, { Component } from 'react';
import axios from 'axios';
import EditBookingForm from './makeupeditform';

class MakeupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      lastUsedId: 0,
      currentBooking: null,
      name: '', 
      instagram: '',
      alamat: '',
      telepon: '',
      appointmentDate: '',
      serviceType: '',
      message: '',
      };
      this.makeupListRef = React.createRef();
    }

  resetFormData = () => {
    this.setState({
      name: '',
      instagram: '',
      alamat: '',
      telepon: '',
      appointmentDate: '',
      serviceType: '',
      message: '',
    });
  }
  componentDidMount() {
    this.loadBookingsFromAPI();
  }

  loadBookingsFromAPI() {
    axios.get('https://651b95ed194f77f2a5ae9790.mockapi.io/makeup')
      .then((response) => {
        const bookings = response.data || [];
        const lastUsedId = bookings.reduce((maxId, booking) => Math.max(maxId, booking.id), 0);
        this.setState({ bookings, lastUsedId });
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }

  addBooking = (newBooking) => {
    axios.post('https://651b95ed194f77f2a5ae9790.mockapi.io/makeup', newBooking)
      .then((response) => {
        const updatedBooking = response.data; 
        this.setState((prevState) => {
          const newId = prevState.lastUsedId + 1;
          updatedBooking.id = newId;
          const updatedBookings = [...prevState.bookings, updatedBooking];
          this.setState({ bookings: updatedBookings, lastUsedId: newId });
        });
      })
      .catch((error) => {
        console.error('Error adding booking:', error);
      });
  }
  
  editBooking = (updatedBooking) => {
    axios.put(`https://651b95ed194f77f2a5ae9790.mockapi.io/makeup/${updatedBooking.id}`, updatedBooking)
      .then((response) => {
        const updatedBooking = response.data;
        const { bookings } = this.state;
        const index = bookings.findIndex((booking) => booking.id === updatedBooking.id);
        if (index !== -1) {
          const updatedBookings = [...bookings];
          updatedBookings[index] = updatedBooking;
          this.setState({ bookings: updatedBookings, currentBooking: null });
        }
      })
      .catch((error) => {
        console.error('Error updating booking:', error);
      });
  }
  
  
  onEditBooking = (bookingToEdit) => {
    this.setState({
      currentBooking: { ...bookingToEdit },
      isEditMode: true,
    });
  }

  onCancelEdit = () => {
    this.setState({
      currentBooking: null,
      isEditMode: false,
    });
  }
  
  resetFormData = () => {
    this.setState({
      name: '',
      instagram: '',
      alamat: '',
      telepon: '',
      appointmentDate: '',
      serviceType: '',
      message: '',
    });
  }
  
  deleteBooking = (id) => {
    axios.delete(`https://651b95ed194f77f2a5ae9790.mockapi.io/makeup/${id}`)
      .then(() => {
        const updatedBookings = this.state.bookings.filter((booking) => booking.id !== id);
        this.setState({ bookings: updatedBookings });
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  }
  resetFormData = () => {
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
    this.loadBookingsFromAPI(); 
  }
  
  render() {
    const { bookings, currentBooking, isEditMode } = this.state;
    return (
      <div>
         {isEditMode && currentBooking && (
        <EditBookingForm
          booking={currentBooking}
          onSave={this.editBooking}
          onCancel={this.onCancelEdit}
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
                    onClick={() => this.onEditBooking(booking)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    onClick={() => this.deleteBooking(booking.id)}
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
}

export default MakeupList;