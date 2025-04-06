import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EvolveSection from "./components/EvolveSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <EvolveSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
