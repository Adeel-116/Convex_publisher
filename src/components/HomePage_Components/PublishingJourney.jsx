import Button from "../Button"
import PublishingSectionCard from "./PublishingSectionCard";
import ServiceImage from "../../assets/service.png"

const PublishingJourney = () => {
  return (
   
    <div className="2xl:w-[80%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] h-auto flex md:flex-nowrap py-10 flex-wrap gap-y-3">
            <div className="md:w-[55%] w-full  flex flex-col gap-y-2 justify-center">
              <PublishingSectionCard />
            </div>

            <div className="md:w-[45%]  w-full md:flex">
             
              <img
                src={ServiceImage}
                alt="Book Mobile"
                className="w-full h-auto drop-shadow-[10px_10px_15px_rgba(0,0,0,0.4)]"
              />

            </div>
          </div>
  );
};

export default PublishingJourney;
