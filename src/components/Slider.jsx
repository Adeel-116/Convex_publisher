import React, { useEffect, useRef, useState } from "react";
import brandImage from "../assets/brand.webp";

function Slider() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // NEW

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
    <div className="w-full bg-[#3C7BCB] py-5.5 flex justify-center items-center">
      <div
        ref={scrollRef}
        className="w-[80%] flex md:px-10 md:gap-x-30 gap-x-15 scroll-smooth no-scrollbar overflow-hidden"
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 group"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(i)} 
            onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 500)} 
          >
            <img
              src={brandImage}
              alt={`Partner ${i + 1}`}
              className={`
              md:w-40 w-20 object-contain transition-all duration-300
               filter brightness-0 invert
  `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
