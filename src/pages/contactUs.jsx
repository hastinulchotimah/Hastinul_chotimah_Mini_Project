import React, { Component } from 'react';
import Navbar from "./navbar";
import backgroundImage from "./booking.avif";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      helpRequest: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    alert('Form Submited')
  };

    render() {
      const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      };
      
    
    return (
      <div>
        <Navbar/>
      <div className=" flex justify-center items-center"style={backgroundStyle}>
        <div className="w-1/3 p-14" >
        <h1 className=" text-4xl font-bold mb-10 text-white">Contact Us</h1>
        <p>Need to geet in touch with Us? Either fill out the form with your inquiry or find the depertement email you'd like to contact bellow</p>
        </div>
        <form onSubmit={this.handleSubmit} className=" w-1/2 p-10">
          <div className="grid grid-cols-2 gap-4">
          <div className="col">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md "
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="helpRequest" className="block text-sm font-medium text-gray-700">
              What Can We Help You With:
            </label>
            <textarea
              id="helpRequest"
              name="helpRequest"
              value={this.state.helpRequest}
              onChange={this.handleChange}
              rows="2"
              required
              className="mt-1 p-2 block w-full border border-gray-200 rounded-md "
            ></textarea>
          </div>

          <div className="mt-4">
            <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default ContactUs;