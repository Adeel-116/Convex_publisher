import React, {useState} from "react";
import Button from "../Button"
import ratingImage from "../../assets/toprating.png"
import Form from "./Form";
function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="2xl:w-[80%] lg:w-[90%] md:w-[95%] w-[90%] h-auto flex md:flex-nowrap flex-wrap gap-y-3">
      <div className="md:w-1/2 w-full flex flex-col gap-y-2 justify-center">
        <h6>Get your story written</h6>
        <h1 className="xl:w-[90%] w-full">
          Become a popular author with Premium Book Publishers!
        </h1>
        <p className="xl:w-[80%] w-full">
          It is our aim to make your stories become a reality on paper allowing
          them to attract many readers. Our professionals follow a proper
          approach and are creative following what is trending in the writing
          industry. Simply tell us what your plot is and we will do the rest.
        </p>

        <div className="button flex space-x-2 mt-3 flex-wrap gap-y-3">
          <Button text="Live Chat" />
          <Button text="Get A Quote" onClick={() => setIsFormOpen(true) }  />
          <Button text="+1302-518-4405" />
        </div>

        <div className="flex h-auto space-x-2 md:flex-row">
          <img
            src={ratingImage}
            alt="review-images"
            className="lg:w-[130px] md:w-[120px] w-[80px]"
          />
          <img
            src={ratingImage}
            alt="review-images"
            className="lg:w-[130px] md:w-[120px] w-[80px]"
          />
          <img
            src={ratingImage}
            alt="review-images"
            className="lg:w-[130px] md:w-[120px] w-[80px]"
          />
        </div>

        <div className="text-wite flex items-center gap-1">
          <span>
            Rated 9 out of 10 ⭐⭐⭐⭐⭐ based on 3,543 satisfied customers
          </span>
        </div>
      </div>

        <div className="md:w-1/2 w-full flex md:justify-end">
         <div className="xl:w-[60%] lg:w-[75%] md:w-[85%] w-full">
          <Form text="UP TO 50% DISCOUNT" parapgraph={""} children="bg-gray-100 w-full"/>
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
