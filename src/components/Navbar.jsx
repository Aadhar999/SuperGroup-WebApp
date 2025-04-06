import React from "react";
import logo from "../assets/Supreme_logo.svg";
import translate from "../assets/translate.svg";

const Navbar = () => {
  return (
    <nav className="h-[72px] flex items-center justify-between px-8 bg-[#F4F7FB]">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex items-center space-x-6 text-[#0D1C2E] font-medium text-sm">
        <button className="bg-[#29C5F6] text-black px-5 py-2 rounded-full">
          Contact Us
        </button>
        <span>in</span>
        <span className="flex items-center">
          <img src={translate} alt="Translate" className="w-[22px] h-[22px] mr-2" />
          ENG
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
