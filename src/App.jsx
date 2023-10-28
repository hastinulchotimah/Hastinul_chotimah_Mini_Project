import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./components/contactUs";
import AboutUs from "./components/aboutUs";
import MakeupBookingForm from "./pages/formBooking";
import FormLogin from "./admin/login";

import MakeupList from "./admin/makeuplist";
import FAQ from "./components/faq";
import Gallery from "./pages/galeri";
import Footer from "./components/copyright";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/booking" element={<MakeupBookingForm />} />
        <Route path="/admin" element={<MakeupBookingForm />} />
        <Route path="/copyright" element={<Footer />} />
        <Route path="/dasboard_admin" element={<MakeupList />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/galery" element={<Gallery />} />
        <Route path="/formlogin" element={<FormLogin />} />
      </Routes>
    </Router>
  );
}
export default App;
