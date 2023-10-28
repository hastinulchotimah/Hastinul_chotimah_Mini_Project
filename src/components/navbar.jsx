import React from 'react';
import { Link } from 'react-router-dom'; 
import backgroundImage from "./booking.avif";

class Navbar extends React.Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  
    return (
        <nav className="bg-white-600"  style={backgroundStyle}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="logomakeup.jpg"
              alt="gambar"
              width="50"
              height="50"
              className="mx-auto flex justify-between items-center"
            />
          </div>
          <ul className="space-x-6">
            <li className="inline-block">
              <Link to="/" className="text-white hover:text-pink-800">Home</Link>
            </li>
            <li className="inline-block">
              <Link to="/about" className="text-white hover:text-pink-800">About</Link>
            </li>
            <li className="inline-block">
              <Link to="/contactUs" className="text-white hover:text-pink-800">Contact US</Link>
            </li>
            <li className="inline-block">
              <Link to="/faq" className="text-white hover:text-pink-800">Faq</Link>
            </li>
            <li className="inline-block">
            <Link to="/formlogin" className="text-white hover:text-red-900">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700">Login</button>
            </Link>
          </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
