import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function WatsappCTA() {
  return (
    <div className='sm:px-4 sm:py-3 p-3 rounded-full bg-[#023838] gap-x-2 flex justify-center items-center 
      transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg cursor-pointer'>
      
      <div className='flex'>
        <FaWhatsapp color='#20CC62' className='sm:text-[24px] text-[30px]' />
      </div>

      <p className='text-white font-semibold sm:block hidden'>
        Get Instant Quote
      </p>

    </div>
  )
}

export default WatsappCTA
