import React, {useState} from 'react'
import Button from "../components/Button"
import Form from './HomePage_Components/Form';

function CTA() {
    const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="bg-white py-15 px-4 sm:px-6 lg:px-8">
    <div className="w-full mx-auto text-center flex flex-col justify-center items-center sm:gap-y-5 gap-y-4" >
      <p className="font-medium text-gray-900 ">
        Stopping The Stresses Of Book Publication
      </p>
      <h2 className="lg:w-[60%] text-center sm:w-[80%] w-full text-black">
        Take Advantage Of An Expert Plan For
        Publication With Premium Book Publishers
      </h2>

      <div className='flex flex-wrap gap-3 justify-center'>
        <Button text="Get A Quote" onClick={()=>setIsFormOpen(true)}/>
        <Button text="Live Chat"/>
        <Button text="+1 302-518-4405"/>
      </div>
    </div>


    {isFormOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <div className="bg-white p-6 rounded-lg max-w-md w-full">
      
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setIsFormOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

        <Form text="Let’s Begin The Journey"  children="w-full"/>

    </div>
  </div>
)}

  </div>
  )
}

export default CTA
