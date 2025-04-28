import React from 'react';


function ServiceCard({obj}) {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center py-10">
      <p className="font-medium text-gray-900">
         Our Process
      </p>
      <h2 className=" text-center lg:w-[95%] lg:text-[40px] md:text-3xl text-2xl font-bold w-full text-black">
       {obj.heading}
      </h2>

      <div className="w-full h-auto flex flex-wrap justify-center gap-7 py-10">
        {obj.Data.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg py-8 px-7 min-w-[360px] max-w-[360px] hover:shadow-lg transition-all flex flex-col items-center text-center">
            <img src={card.image} alt="" className="mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-black text-[22px]">{card.title}</h2>
            <p className="text-gray-600 mb-4 text-[14px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
