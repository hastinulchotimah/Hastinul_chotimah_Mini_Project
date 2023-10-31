import React from "react";
import Navbar from "./navbar";
import backgroundImage from "./booking.avif";

export default function AboutUs() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Navbar />
      <div
        className="bg-pink-800 p-6 rounded-lg shadow-lg text-center py-3"
        style={backgroundStyle}
      >
        <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
        <div className="flex justify-center items-center">
          <img
            src="about.avif"
            alt="About Us"
            className="rounded-lg shadow-md w-25 h-45"
          />
        </div>

        <div className="about-us-text mt-4 text-white text-left">
          <p className="mb-4 text-sm text-center">
            <strong>Selamat datang di AciMakeUpArt</strong>
          </p>
          <p className="mb-4 text-sm">
            Kami adalah tim profesional yang berdedikasi untuk membuat Anda
            merasa dan terlihat lebih indah pada setiap momen istimewa dalam hidup
            Anda. Dengan pengalaman bertahun-tahun dalam industri kecantikan,
            kami telah melayani berbagai klien dengan cinta dan hasrat dalam seni
            riasan.
          </p>
          <p className="mb-4 text-sm">
            Dengan pengalaman kami dalam merias berbagai jenis kulit, warna, dan
            gaya, kami yakin dapat membantu Anda mencapai tampilan yang Anda
            impikan. Kami sangat bersemangat untuk bekerja dengan Anda dalam
            merencanakan penampilan yang sempurna untuk acara istimewa Anda.
          </p>
          <p className="text-sm">
            Terima kasih telah mempercayakan kami untuk menjadi bagian dari
            momen-momen berharga Anda. Jangan ragu untuk menghubungi kami untuk
            konsultasi atau janji temu. Kami tidak sabar untuk berkolaborasi
            dengan Anda!
          </p>
        </div>
      </div>
    </div>
  );
}
