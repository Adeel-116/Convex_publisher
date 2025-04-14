import React from 'react'
import Button from "../components/Button"

function CTA() {
  return (
    <div className="bg-white py-15 px-4 sm:px-6 lg:px-8">
    <div className="w-full mx-auto text-center flex flex-col justify-center items-center gap-y-3">
      <p className=" font-bold text-gray-900 leading-tight">
        Stopping The Stresses Of Book Publication
      </p>
      <h2 className="w-[60%] text-black">
        Take Advantage Of An Expert Plan For
        Publication With Premium Book Publishers
      </h2>

      <div className='flex flex-wrap gap-x-3'>
        <Button text="Get A Quote"/>
        <Button text="Live Chat"/>
        <Button text="+1 302-518-4405"/>
      </div>
    </div>
  </div>
  )
}

export default CTA
