import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#0066B2] text-white flex flex-col lg:flex-row items-center justify-center px-8 py-16 gap-12">
      <div className="w-full lg:w-1/2 max-w-md">
        <h2 className="text-4xl font-semibold mb-4">Get in touch</h2>
        <div className="w-10 h-[2px] bg-white mb-6" />
        <p className="text-lg mb-6">For general enquiries</p>

        <div className="text-sm space-y-4 leading-relaxed">
          <div>
            <span className="font-semibold">Address :</span><br />
            110, 16th Road, Chembur, Mumbai – 400071
          </div>
          <div>
            <span className="font-semibold">Phone :</span><br />
            +91 22 25208822
          </div>
          <div>
            <span className="font-semibold">Email :</span><br />
            info@supremegroup.co.in
          </div>
        </div>
      </div>

      <form className="w-full lg:w-1/2 max-w-md space-y-4 mt-12">
        <input
          type="text"
          placeholder="Full name"
          className="w-full bg-transparent border-b border-white placeholder-white focus:outline-none py-2"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full bg-transparent border-b border-white placeholder-white focus:outline-none py-2"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-transparent border-b border-white placeholder-white focus:outline-none py-2"
        />
        <textarea
          placeholder="Message"
          className="w-full bg-transparent border-b border-white placeholder-white focus:outline-none py-2 h-28 resize-none"
        />
        <button
          type="submit"
          className="bg-white text-[#0066B2] font-semibold px-6 py-2 rounded-full mt-4"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
