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
    setFormData({
      name: '',
      instagram: '',
      alamat: '',
      telepon: '',
      appointmentDate: '',
      serviceType: '',
      message: '',
    });
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <form className="mx-auto p-9 bg-gray-300 rounded-lg shadow-md">
     <div className='text-center'> 
      <strong>Form Edit Admin</strong> 
     </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Nama:</label>
        <input
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Nama Instagram:</label>
        <input
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
          type="text"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Alamat:</label>
        <input
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">No. Telepon:</label>
        <input
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
          type="text"
          name="telepon"
          value={formData.telepon}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Tanggal Appointment:</label>
        <input
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
          type="text"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Jenis Layanan:</label>
        <input
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
          type="text"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Pesan Tambahan:</label>
        <textarea
          className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
          type="submit"
        >
          Simpan
        </button>
        <button
          className="ml-2 px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-700 focus:outline-none"
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
