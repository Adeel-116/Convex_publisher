import { useState } from "react";
import Button from "../Button";
import BookImage  from "../../assets/books.webp"
import Form from "./Form";

const LetsBeginCard = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="w-full h-auto flex md:flex-nowrap flex-wrap gap-y-3">
      <div className="xl:w-[55%] md:w-[60%] w-full  flex flex-col gap-y-1 justify-center">
        <div className="w-full mx-auto">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Let’s Begin
              </h1>
              <p className="text-gray-600 mt-2">
                We are a ghostwriting and Publication company, providing a range
                of book services to help make the work of writers easier.
                Contact us today to find out more!
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button text="Get A Quote"  onClick={()=> setIsFormOpen(true)}/>
              <Button text="Live Chat" />
              <Button text="+1 302-518-4405" />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-[45%] md:w-[45%] w-full md:flex lg:justify-end">
        <img
          src={BookImage}
          alt="Book Mobile"
          className="w-full h-auto"
        />
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
};

export default LetsBeginCard;
