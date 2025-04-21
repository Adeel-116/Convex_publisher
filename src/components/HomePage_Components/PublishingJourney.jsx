
import PublishingSectionCard from "./PublishingSectionCard";
import ServiceImage from "../../assets/service.webp"

const PublishingJourney = () => {
  return (
   
    <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] h-auto flex md:flex-nowrap py-10 flex-wrap gap-y-3">
            <div className="lg:w-[50%] md:w-[55%] w-full  flex flex-col gap-y-2 justify-center">
              <PublishingSectionCard />
            </div>

            <div className="lg:w-[50%] md:w-[45%] w-full md:flex">
             
              <img
                src={ServiceImage}
                alt="Book Mobile"
                className="w-full h-auto"
              />

            </div>
          </div>
  );
};

export default PublishingJourney;
