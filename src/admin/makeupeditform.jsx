import React, { Component } from "react";


class EditBookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      instagram: "",
      alamat: "",
      telepon: "",
      appointmentDate: "",
      serviceType: "",
      message: "",
    };
  }

  componentDidMount() {
    const { booking } = this.props;
    if (booking) {
      const {
        id,
        name,
        instagram,
        alamat,
        telepon,
        appointmentDate,
        serviceType,
        message,
      } = booking;
      this.setState({
        id,
        name,
        instagram,
        alamat,
        telepon,
        appointmentDate,
        serviceType,
        message,
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const updatedBooking = { ...this.state };
    this.props.onSave(updatedBooking);
  };

  handleCancel = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Nama:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Nama Instagram:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="instagram"
            value={this.state.instagram}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Alamat:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="alamat"
            value={this.state.alamat}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            No. Telepon:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="telepon"
            value={this.state.telepon}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Tanggal Appointment:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="appointmentDate"
            value={this.state.appointmentDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Jenis Layanan:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="serviceType"
            value={this.state.serviceType}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Pesan Tambahan:
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Simpan
          </button>
          <button
            className="focus:shadow-outline ml-2 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
            type="button"
            onClick={this.handleCancel}
          >
            Batal
          </button>
        </div>
      </form>
    );
  }
}

export default EditBookingForm;



