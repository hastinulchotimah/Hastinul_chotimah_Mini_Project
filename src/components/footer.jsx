import React from "react";
import backgroundImage from "./booking.avif";

export default function Footer() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  
  return (
    <div className="flex flex-col h-screen" >
    <footer className="bg-white p-6 rounded-lg shadow-lg text-center py-3"  >
      <div className="container mx-auto flex flex-col items-center sm:flex-row justify-between">
        <div className="mb-2">
          <img
            src="logomakeup.jpg"
            alt="gambar"
            width="200"
            height="1"
          />
        </div>
        <div className="bg-white-600 flex flex-col sm:flex-row ">
          <div className="rounded-social-buttons flex flex-col space-y-1 mx-auto text-center">
            <p className="font-bold text-black">Sosial Media</p>
            <a className="social-button" href="https://instagram.com/hastinul_chotimah?igshid=YTQwZjQ0NmI0OA==" target="_blank">
              <img src="instagram.jpeg" width="30" height="60" alt="Instagram" />
            </a> 
            <a className="social-button" href="https://www.facebook.com/hastinulchotimah.hastinulchotimah?mibextid=LQQJ4d" target="_blank">
              <img src="facebook.png" width="30" height="60" alt="Facebook" />
            </a>
            <a className="social-button" href="http://wa.me/6289530254431" target="_blank">
              <img src="whatsapp.jpeg" width="30" height="60" alt="WhatsApp" />
            </a>
            <a className="social-button" href="https://www.youtube.com/@hastinulchotimah3012" target="_blank">
              <img src="images.png" width="30" height="80" alt="YouTube" />
            </a>
          </div>
          <div className="rounded-social-buttons flex flex-col space-y-2">
            <p className="font-bold text-black">Address</p>
            <p className="text-black">Padang, Sumatra Barat</p>
            <p className="text-black">Jalan koto lalang,</p>
            <p className="text-black">RT.2/RW.7.Lubuk Kilangan</p>
            <p className="text-black">ID : 25231</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="copy bg-pink-800 text-black text-center py-3" style={backgroundStyle}>
    Copyright <strong>AciMakeUpArt</strong>. All Rights Reserved
    <br />
    <p>designed by Tailwind CSS</p>
  </div>
</div>
  );
}
