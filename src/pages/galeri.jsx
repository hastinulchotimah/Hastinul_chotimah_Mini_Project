import React from 'react';
import Navbar from '../components/navbar';
import backgroundImage from "./booking.avif";

const Gallery = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };
  return (
 
    <div className="mx-auto" style={backgroundStyle}>
        <Navbar/>
      <h1 className="text-3xl font-bold mb-4 text-center text-white p-7">Brushstrokes of Beauty: My Makeup Odyssey</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4">
      <div className="p-4">
        <img
          src="amel.jpg"
          alt="Amel"
          className= "w-200 h-76 rounded-md"
        />
         <p className="text-white text-center mt-2">MakeUp Wisuda</p>
      </div>
      <div className="p-4">
        <img
          src="azi.jpg"
          alt="Azi"
          className="w-200 h-65 rounded-md"
        />
        <p className="text-white text-center mt-2">MakeUp Wedding</p>
      </div>
      
      <div className="p-4">
        <img
          src="azi3.jpg"
          alt="Azi 3"
          className="w-200 h-76 rounded-md"
        />
        <p className="text-white text-center mt-2">MakeUp Akad</p>
      </div>
      
      <div className="p-4">
        <img
          src="mufi.jpg"
          alt="Mufi"
          className="w-200 h-76 rounded-md"
        />
        <p className="text-white text-center mt-2">MakeUp Akad Flawless</p>
      </div>
      <div className="p-4">
        <img
          src="salma.jpg"
          alt="Salma"
          className="w-full h-auto rounded-md"
        />
        <p className="text-white text-center mt-2">MakeUp Akad</p>
      </div>
      <div className="p-4">
        <img
          src="zura2.jpg"
          alt="Zura 2"
          className="w-200 h-76 rounded-md"
        />
        <p className="text-white text-center mt-2">MakeUp Wedding</p>
      </div>
      <div className="p-4">
        <img
          src="zura3.jpg"
          alt="Zura 3"
          className="w-200 h-76 rounded-md"
        />
        <p className="text-white text-center mt-2">MakeUp Akad</p>
      </div>
    </div>
   </div>
   
  );
};

export default Gallery;
