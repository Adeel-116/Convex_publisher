import React, {useState} from 'react'
import Button from "../components/Button"
import Form from './HomePage_Components/Form';

function CTA({onOpenQuote}) {
    const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="bg-white py-15 px-4 sm:px-6 lg:px-8">
    <div className="w-full mx-auto text-center flex flex-col justify-center items-center sm:gap-y-5 gap-y-4" >
      <p className="font-medium text-gray-900 ">
        Stopping The Stresses Of Book Publication
      </p>
      <h2 className="lg:w-[70%] text-center sm:w-[80%] lg:text-4xl md:text-3xl text-2xl font-bold w-full text-black">
        Take Advantage Of An Expert Plan For
        Publication With Convex Book Publisher
      </h2>

      <div className='flex flex-wrap gap-3 justify-center'>
        <Button text="Get A Quote" onClick={onOpenQuote}/>
        <Button text="Live Chat"/>
        <Button text="+1 302-518-4405"/>
      </div>
    </div>



  </div>
  )
}

export default CTA
