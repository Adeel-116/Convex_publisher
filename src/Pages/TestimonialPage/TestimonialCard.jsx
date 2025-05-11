import React from "react";

const TestimonialCard = ({cardData}) => {

  return (
    <div
      className="2xl:w-[500px] lg:w-[460px] md:w-[660px] h-auto py-[40px] xl:px-6 lg:px-4 sm:px-9 px-3 bg-[#FFFFFF] rounded-lg flex transition duration-300 transform hover:-translate-y-2 hover:shadow-lg"
      style={{ boxShadow: "0px 0px 31px #0000001a" }}
    >
      <div className="flex">
        <div
          className="md:flex hidden mt-7 w-[132px] h-[132px] flex-shrink-0 rounded-full items-center justify-center text-white text-xl font-semibold xl:mr-3 mr-1"
          style={{
            backgroundImage: "linear-gradient(to bottom, #4d2ceb, #5620df)",
          }}
        >
          {cardData.shortName}
        </div>

        <div className="lg:px-1 px-7">
          <h2 className="text-[20px] font-semibold text-[#333333] mb-2">
          {cardData.headerText}
          </h2>
          <div className="scrollCustomization w-full lg:h-[155px] h-[140px] ">
            <p className="italic text-[#66666B] pr-1">
                {cardData.review}
            </p>
          </div>
          <p className="font-medium text-[14px] text-[#4d2ceb] sm:mt-2 mt-4">
            {cardData.clientName}
          </p>
          <div className="flex gap-x-0.5 mt-2 text-[#FF7E65]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
            {/* Half-filled star */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"
                stroke="#FF7E65"
                strokeWidth="1"
                fill="none"
              />
              <defs>
                <clipPath id="half-fill">
                  <rect x="0" y="0" width="50%" height="100%" />
                </clipPath>
              </defs>
              <path
                d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"
                clipPath="url(#half-fill)"
                fill="#FF7E65"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
