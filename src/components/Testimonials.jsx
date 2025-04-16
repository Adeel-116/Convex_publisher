import React, { useEffect, useState } from 'react';
import quote from '../assets/quote.png';
import { IoChevronForwardCircleOutline } from "react-icons/io5";

function Testimonials() {
  const [slideNumber, setSlideNumber] = useState(0);

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
    setSlideNumber((prev) => (prev === slideArray.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setSlideNumber((prev) => (prev === 0 ? slideArray.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 5000); // Adjust timing if needed

    return () => clearInterval(interval);
  }, [slideNumber]);

  return (
    <div className='w-full flex items-center justify-center flex-col sm:p-5'>
      <h2 className='text-black text-center lg:text-4xl md:text-3xl text-2xl font-bold'>What Our Past Clients Have To Say</h2>
      <p className='text-black mt-3 md:w-[60%] w-full text-center'>
        We have completed many book projects and have made clientele happy. Find out what they think of us.
      </p>

      {/* Slides Container */}
      <div className='md:w-[60%] w-[90%] overflow-hidden relative'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
          {slideArray.map((slide, index) => (
            <div
              key={slide.id}
              className='w-full flex-shrink-0 flex flex-col items-center sm:gap-y-10 gap-y-7'
            >
              <div className='image sm:w-[90px] w-[60px] mt-3'>
                <img src={quote} alt="Quote" />
              </div>

              <div>
                <p className='sm:text-[20px] text-[16px] italic sm:leading-[1.6] text-black text-center'>
                  {slide.content}
                </p>
              </div>

              <div className='text-center flex flex-col'>
                <span className='text-blue-300 font-bold'>{slide.name}</span>
                <span className='text-black'>{slide.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='flex flex-row mt-5 gap-x-5'>
        <div className='flex items-center justify-center transform rotate-180 cursor-pointer' onClick={goPrev}>
          <IoChevronForwardCircleOutline size={55} color='#386AFB' />
        </div>
        <div className='flex items-center justify-center cursor-pointer' onClick={goNext}>
          <IoChevronForwardCircleOutline size={55} color='#386AFB' />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
