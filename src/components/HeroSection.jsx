import React from "react";

const HeroSection = () => {
  return (
    <section className="h-screen bg-[rgba(0,0,0,0.6)] text-white flex items-center justify-center text-center px-4 flex-col">
      <p className="text-sm mb-2">Performance in motion</p>
      <h1 className="text-3xl sm:text-5xl font-semibold mb-2">
        Soft Trims and NVH Solutions
      </h1>
      <h2 className="text-2xl sm:text-3xl font-light text-[#D1D5DB]">
        for seamless rides
      </h2>
    </section>
  );
};

export default HeroSection;
