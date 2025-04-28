
import Button from "../Button";
import BookImage  from "../../assets/books.webp"


const LetsBeginCard = ({onBookQuote, obj}) => {

  return (
    <div className="w-full h-auto flex md:flex-nowrap flex-wrap gap-y-3 pb-10">
      <div className="xl:w-[55%] md:w-[60%] w-full  flex flex-col gap-y-1 justify-center">
        <div className="w-full mx-auto">
          
          <div className="space-y-6">
           
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                {obj.heading}
              </h1>
              <p className="text-gray-600 mt-2 lg:text-[16px] text-[15px]">
                {obj.paragraph}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button text="Get A Quote"  onClick={onBookQuote}/>
              <Button text="Live Chat" />
               <a href="tel:+13025184405">
                  <Button text="+1302-518-4405" />
                </a>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-[45%] md:w-[45%] w-full md:flex lg:justify-end">
        <img
          src={BookImage}
          alt="BookImage"
          className="w-full sm:h-auto h-[230px]"
        />
      </div>


    </div>
  );
};

export default LetsBeginCard;
