
const PublishingJourney = ({obj}) => {
  console.log("Publishing Journey Data", obj)
  return (

    <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] h-auto flex md:flex-nowrap py-10 flex-wrap gap-y-3">
      <div className="lg:w-[50%] md:w-[55%] w-full  flex flex-col gap-y-2 justify-center">
       
          {/* Main Content */}
          <div className="space-y-8">
            <div className="">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                {obj.heading}
              </h2>
              <p className="text-gray-600 mt-1">
                {obj.paragraph}
              </p>
            </div>
          </div>

      </div>

      <div className="lg:w-[50%] md:w-[45%] w-full md:flex">

        <img
          src={obj.image}
          alt="Book Mobile"
          className="w-full h-auto"
        />

      </div>
    </div>
  );
};

export default PublishingJourney;
