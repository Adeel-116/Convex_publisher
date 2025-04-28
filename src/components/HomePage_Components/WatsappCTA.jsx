import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

function WatsappCTA() {
  
  const phoneNumber = "919876543210"; 
  const message = "Hi, Convex Book Publisher. I need 50% discount.";

  return (
    <div className="fixed bottom-5 left-5 z-10">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="sm:px-4 sm:py-3 p-3 rounded-full bg-[#023838] gap-x-2 flex justify-center items-center
          transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
        >
          <div className="flex">
            <FaWhatsapp color="#20CC62" className="sm:text-[24px] text-[30px]" />
          </div>

          <p
            className="text-white font-semibold sm:block hidden"
          >
            Get Instant Quote
          </p>
        </div>
      </a>
    </div>
  );
}

export default WatsappCTA;
