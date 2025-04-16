import React, { useEffect, useRef } from "react";

// Sample image array – replace with your actual image imports/paths
import img1 from "../assets/amazon.svg";
import img2 from "../assets/barnes.png";
import img3 from "../assets/esquire.svg";
import img4 from "../assets/forbes.svg";
import img5 from "../assets/google-book.svg";
import img6 from "../assets/ingram.svg";
import img7 from "../assets/random-house.svg";


const images = [img1, img2, img3, img4, img5, img6, img7]; // Add more as needed

function Slider() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        container.scrollLeft += scrollSpeed;

        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="w-full bg-[#3C7BCB] py-6 flex justify-center items-center">
      <div
        ref={scrollRef}
        className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] flex md:px-10 md:gap-x-30 gap-x-15 scroll-smooth no-scrollbar overflow-hidden"
      >
        {/* Repeat images twice for a smoother infinite loop */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={image}
              alt={`Brand ${index + 1}`}
              className="md:w-40 w-20 object-contain transition-all duration-300 filter brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
