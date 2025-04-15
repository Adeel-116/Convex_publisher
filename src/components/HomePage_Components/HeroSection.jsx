import React, {useState} from "react";
import Button from "../Button"
import clutch from "../../assets/clutch.png"
import Form from "./Form";
function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] h-auto flex md:flex-nowrap flex-wrap gap-y-3">
      <div className="md:w-[60%] w-full flex flex-col gap-y-2 justify-center">
        <h6>Expert Book Publishing Services</h6>
        <h1 className=" w-full">
        Publishing Your Precious Work – Premium Book Publishers
        </h1>
        <p className=" w-full">
        If you are finding it tough to publish your work by yourself, or if you are not getting any approval from publishers, do not worry. Premium Book Publishers can help you with your publishing work. We work with main publishing houses so can get the right publishing strategy for new writers.
        </p>

        <div className="button flex space-x-2 mt-3 flex-wrap gap-y-3">
          <Button text="Live Chat" />
          <Button text="Get A Quote" onClick={() => setIsFormOpen(true) }  />
          <Button text="+1302-518-4405" />
        </div>

        <div className="flex h-auto space-x-3 md:flex-row mt-1">
          <img
            src={clutch}
            alt="review-images"
            className="lg:w-[65px] md:w-[60px]"
          />
          <img
            src={clutch}
            alt="review-images"
            className="lg:w-[65px] md:w-[60px]"
          />
          <img
            src={clutch}
            alt="review-images"
            className="lg:w-[65px] md:w-[60px]"
          />
        </div>

        <div className="text-wite flex items-center gap-1">
          <span>
            Rated 9 out of 10 ⭐⭐⭐⭐⭐ based on 3,543 satisfied customers.
          </span>
        </div>
      </div>

        <div className="md:w-[40%] w-full flex md:justify-end items-center">
         <div className="2xl:w-[85%] xl:[82%] lg:w-[85%] md:w-[100%] w-full">
          <Form text="UP TO 50% DISCOUNT" parapgraph={""} children="bg-white w-full" selectbox={false}/>
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
  );
}

export default HeroSection;
