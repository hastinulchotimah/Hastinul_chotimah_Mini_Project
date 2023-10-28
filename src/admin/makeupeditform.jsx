import React, { useState, useEffect } from 'react';

function EditBookingForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    instagram: '',
    alamat: '',
    telepon: '',
    appointmentDate: '',
    serviceType: '',
    message: '',
  });

  useEffect(() => {
    if (props.booking) {
      const {
        id,
        name,
        instagram,
        alamat,
        telepon,
        appointmentDate,
        serviceType,
        message,
      } = props.booking;
      setFormData({
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
  }, [props.booking]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSave({ ...formData });
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Nama:
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
          value={formData.instagram}
          onChange={handleChange}
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
          value={formData.alamat}
          onChange={handleChange}
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
          value={formData.telepon}
          onChange={handleChange}
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
          value={formData.appointmentDate}
          onChange={handleChange}
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
          value={formData.serviceType}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Pesan Tambahan:
        </label>
        <textarea
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          name="message"
          value={formData.message}
          onChange={handleChange}
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
          onClick={handleCancel}
        >
          Batal
        </button>
      </div>
    </form>
  );
}

export default EditBookingForm;
