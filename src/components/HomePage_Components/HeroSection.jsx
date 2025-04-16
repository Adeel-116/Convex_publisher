import React, { useState } from "react";
import Button from "../Button";
import Form from "./Form";
import GetAQuoteForm from "../GetQuoteForm";
import img3 from "../../assets/best-content-marketing.png";
import img4 from "../../assets/design-rush-badge.png";
import img5 from "../../assets/top-seo-badge-home.webp";
import img2 from "../../assets/top-markeintg-agencies.png";
import img1 from "../../assets/clutch.png";

function HeroSection() {
  const reviewImages = [img1, img2, img3, img4, img5];

  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] h-auto flex md:flex-nowrap flex-wrap gap-y-3">
        <div className="md:w-[60%] w-full flex flex-col gap-y-2 justify-center">
          <h6>Expert Book Publishing Services</h6>
          <h1 className=" w-full">
            Publishing Your Precious Work – Convex Book Publisher
          </h1>
          <p className=" w-full xl:w-[90%] xl:text-[16px] md:text-[16px] text-sm">
            If you are finding it tough to publish your work by yourself, or if
            you are not getting any approval from publishers, do not worry.
            Convex Book Publisher can help you with your publishing work. We
            work with main publishing houses so can get the right publishing
            strategy for new writers.
          </p>

          <div className="button flex space-x-2 mt-3 flex-wrap gap-y-3">
            <Button text="Live Chat" />
            <Button text="Get A Quote" onClick={() => setIsFormOpen(true)} />
            <Button text="+1302-518-4405" />
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
      </div>
      
    </>
  );
}

export default HeroSection;
