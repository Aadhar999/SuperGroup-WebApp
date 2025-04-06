import React from "react";
import logo from "../assets/Supreme_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-12 ml-20 p-10 box-border">
        <div className="flex justify-start">
          <img src={logo} alt="Supreme Group Logo" className="h-12" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-4">APPLICATIONS</h4>
            <ul className="space-y-2">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">MORE</h4>
            <ul className="space-y-2">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">FOLLOW US</h4>
            <ul className="space-y-2">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Medium</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-xs text-center sm:text-left gap-2">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
