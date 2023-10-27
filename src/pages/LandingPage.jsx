
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./copyright";
import Navbar from "./navbar";
import backgroundImage from "./booking.avif";

export default function LandingPage() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
        <div className="bg-pink-800 text-white flex-grow p-40 text-center flex flex-col items-center sm:flex-row sm:justify-between" style={backgroundStyle}>
        <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-4">
            Welcome To our  <br /> MakeUp Artist Website
          </h1>
          <p>where beauty meets you. Discover the secrets to looking stunning with us.</p>
         <br />
         <div className="space-y-1 flex">
            <Link to="/booking" className="rounded-full bg-white px-4 py-2 text-center font-bold text-black hover:bg-pink-600">
              Book Now
            </Link>  
            <Link to="/galery" className="rounded-full border border-pink-200 px-4 py-2 text-center font-bold text-white hover:bg-pink-900">
            Gallery
          </Link>
          </div>
        </div>
            <img
              src="page.avif"
              alt="gambar"
              width="500"
              height="400"
              className="mt-8  border border-gray-900 rounded-md "
            />
          </div>
          <Footer/>
    </div>
   
  );
}
