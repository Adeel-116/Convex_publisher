import React, { useContext, useState } from "react";
import Button from "../Button";
import Form from "./Form";
import GetAQuoteForm from "../GetQuoteForm";
import img3 from "../../assets/best-content-marketing.png";
import img4 from "../../assets/design-rush-badge.png";
import img5 from "../../assets/top-seo-badge-home.webp";
import img2 from "../../assets/top-markeintg-agencies.png";
import img1 from "../../assets/clutch.png";

function HeroSection({ onOpenQuote, obj}) {
  const reviewImages = [img1, img2, img3, img4, img5];

  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] relative  h-auto flex md:flex-nowrap flex-wrap gap-y-3">
        <div className="md:w-[60%] w-full flex flex-col gap-y-2 justify-center">
          <h6>{obj.herotitle}</h6>
          <h1 className="2xl:w-[90%]">
              {obj.heroHeading}
          </h1>
          <p className=" w-full xl:w-[90%] xl:text-[16px] md:text-[16px] text-sm">
              {obj.heroParagraph}
          </p>

          <div className="button flex space-x-4 mt-3 flex-wrap gap-y-3">
            <Button text="Live Chat" />
            <Button text="Get A Quote" onClick={onOpenQuote} />

            <a href="tel:+13025184405">
              <Button text="+1302-518-4405" />
            </a>

          </div>

          <div className="flex h-auto gap-3 flex-row flex-wrap  mt-1">
            {reviewImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`review-image-${index + 1}`}
                className="lg:w-[65px] md:w-[60px]"
              />
            ))}
          </div>

          <div className="text-wite flex items-center gap-1">
            <span>
              Rated 9 out of 10 ⭐⭐⭐⭐⭐ based on 3,543 satisfied customers.
            </span>
          </div>
        </div>

        <div className="md:w-[40%] w-full flex md:justify-end items-center">
          <div className="2xl:w-[85%] xl:[82%] lg:w-[85%] md:w-[100%] w-full">
            <Form
              text="UP TO 50% DISCOUNT"
              parapgraph={""}
              children="bg-white w-full"
              selectbox={false}
            />
          </div>
        </div>


        {isFormOpen && (
          <GetAQuoteForm
            onClose={() => setIsFormOpen(false)}
            onSubmit={(data) => {
              setIsFormOpen(false);
            }}
          />
        )}
      </div>



    </>
  );
}

export default HeroSection;
