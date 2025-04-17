import React, { useEffect, useState, useRef } from 'react';
import { IoChevronForwardCircleOutline } from "react-icons/io5";

function Testimonials() {
  const [slideNumber, setSlideNumber] = useState(0);
  const startX = useRef(null);

  const slideArray = [
    {
      id: 1,
      content:
        "I am a writer but was struggling to write due to stress. After my recent divorce, I urgently needed to publish my book. That's when I discovered Convex Book Publisher. They perfectly translated my ideas into the exact words I envisioned.",
      name: "Ann Smith",
      role: "Writer",
    },
    {
      id: 2,
      content:
        "I am a writer but was finding it tough writing due to stress. I recently got divorced and needed my book published soon. This is when I came across Convex Book Publisher. They were able to help get my ideas into the exact words I was looking for.",
      name: "Ann Smith",
      role: "Writer",
    },
    {
      id: 3,
      content:
        "If you need a book cover design for your book, I will suggest Convex Book Publisher. I got the perfect book cover from them.",
      name: "Peter Black",
      role: "Author",
    },
    {
      id: 4,
      content:
        "It was tough figuring out the technical aspects of making an audiobook. This is when I found out about Convex Book Publisher. They helped make my book an audiobook.",
      name: "John Black",
      role: "Author",
    },
    {
      id: 5,
      content:
        "Convex Book Publisher Writers was recommended to me by my friend. He saw that I was finding it difficult to complete my work. I had the plot but was finding it stressful to make this into a readable book. They were able to help me out.",
      name: "Leena Travis",
      role: "Writer",
    },
  ];

  const goNext = () => {
    setSlideNumber((prev) => (prev + 2) % slideArray.length);
  };

  const goPrev = () => {
    setSlideNumber((prev) => (prev - 2 + slideArray.length) % slideArray.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [slideNumber]);

  const currentSlides = [
    slideArray[slideNumber],
    slideArray[(slideNumber + 1) % slideArray.length],
  ];

  // Drag Handlers
  const handleStart = (e) => {
    startX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = (e) => {
    if (startX.current === null) return;

    const endX = e.type === 'touchend'
      ? e.changedTouches[0].clientX
      : e.clientX;

    const diff = endX - startX.current;

    if (diff > 50) {
      goPrev();
    } else if (diff < -50) {
      goNext();
    }

    startX.current = null;
  };

  return (
    <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto flex items-center justify-center flex-col sm:py-5">
      <h2 className="text-black text-center lg:text-4xl md:text-3xl text-2xl font-bold">
        What Our Past Clients Have To Say
      </h2>
      <p className="text-black mt-3 md:w-[60%] w-full text-center">
        We have completed many book projects and have made clientele happy. Find out what they think of us.
      </p>

      {/* Slides Container */}
      <div
        className="w-full overflow-x-hidden mt-8 relative"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4 transition-all duration-500">
          {currentSlides.map((slide) => (
            <div
              key={slide.id}
              className="relative sm:w-[500px] sm:h-[360px] w-[280px] h-auto rounded-lg shadow-2xl overflow-hidden bg-white"
            >
              <div className="background-testimonial-card mt-3"></div>
              <div className="sm:px-10 sm:py-8 px-6 py-7 h-full flex flex-col gap-y-6 overflow-hidden bg-opacity-90">
                <div className="w-20 h-20 rounded-full flex justify-center items-center bg-red-400 mx-auto">
                  <p className="text-4xl text-blue-600 font-semibold">AS</p>
                </div>
                <div className="text-gray-700 text-[16px] text-center sm:overflow-y-auto h-auto sm:max-h-[200px]">
                  "{slide.content}"
                </div>
                <div className="text-center mt-auto">
                  <p className="font-semibold text-[#3524c4] text-[18px]">{slide.name}</p>
                  <p className="text-sm text-gray-500 text-[16px]">{slide.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex flex-row justify-center mt-5 gap-x-5">
          <div className="flex items-center justify-center transform rotate-180 cursor-pointer" onClick={goPrev}>
            <IoChevronForwardCircleOutline size={55} color="#3a45f6" />
          </div>
          <div className="flex items-center justify-center cursor-pointer" onClick={goNext}>
            <IoChevronForwardCircleOutline size={55} color="#3a45f6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
