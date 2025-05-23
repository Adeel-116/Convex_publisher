import React, {useState} from 'react'
import Button from "../../components/Button"

function Case_studyCTA({onOpenQuote, obj}) {
  console.log(obj)
    const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8"
    style={{userSelect: 'none'}}>
    <div className="w-full mx-auto text-center flex flex-col justify-center items-center sm:gap-y-3 gap-y-4" >
      <p className="font-medium text-[#212529]">
        {obj.title}
      </p>
      <h2 className="lg:w-[90%] text-center sm:w-[80%] lg:text-[44px] md:text-3xl text-2xl font-bold w-full text-[#212529]">
        {obj.heading}
      </h2>

      <div className='flex flex-wrap gap-3 justify-center'>
        <Button text="Get A Quote" onClick={onOpenQuote}/>
        <Button text="Live Chat"/>
         <a href="tel:+13025184405">
         <Button text="+1302-518-4405" />
          </a>
      </div>
    </div>



  </div>
  )
}

export default Case_studyCTA
