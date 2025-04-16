import React, { useState } from "react";
import InputField from "../components/InputField";
import { IoIosSend } from "react-icons/io";

function BookCallContact({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/40 ">
      <div className="bg-white w-full max-w-xl mx-4 sm:px-15 px-5 py-8 sm:py-13 rounded-3xl relative shadow-2xl border-b-[7px] border-blue-600">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-black text-2xl font-semibold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="lg:text-[40px] md:text-3xl text-2xl font-bold text-center text-gray-800 mb-2 ">
          LEAVING SO SOON?
        </h2>
        <p className="text-center text-[15px] text-[#8b92af] font-medium mb-8">
          SIGN UP NOW TO ACTIVATE YOUR 50% OFF COUPON NOW!
        </p>

        {/* Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <InputField
            label="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            extraClases="px-4 py-3 rounded shadow-lg"
          />
          <InputField
            label="Enter email here"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            extraClases="px-4 py-3 rounded shadow-lg"
          />
          <InputField
            label="Enter phone here"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            extraClases="px-4 py-3 rounded shadow-lg"
          />
          <div className="relative">
            <textarea
              name="message"
              placeholder="Enter message here"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border-2 shadow-lg border-gray-300 hover:border-gray-400 focus:border-black focus:ring-black px-4 py-3 min-h-[90px] rounded text-sm text-black"
            ></textarea>

            {/* Submit Icon Button */}
            <div className="absolute -right-3 -bottom-1">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-blue-300 flex justify-center items-center text-white p-2 rounded-full"
              >
                <IoIosSend className="text-[30px] sm:text-[35px]" />
              </button>
            </div>
          </div>
        </form>

        {/* Footer Note */}
        <p className="text-center sm:text-sm text-[15px] text-black font-medium mt-6">
          Discuss With Our Content Strategist{" "}
          <span className="text-blue-600 font-semibold">+1 302-518-4405</span>
        </p>
      </div>
    </div>
  );
}

export default BookCallContact;
