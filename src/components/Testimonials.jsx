import React, { useEffect } from 'react';
import quote from '../assets/quote.png';
import testimonialPicture from '../assets/man.png';
import { IoChevronForwardCircleOutline } from "react-icons/io5";


function Testimonials() {
  const [slideNumber, setSlideNumber] = React.useState(0);

  const slideArray = [
    { id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 3, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ];

  const goNext = () => {
    const slideLength = slideArray.length;
    setSlideNumber((prevSlide) => (prevSlide === slideLength - 1 ? 0 : prevSlide + 1));
  };

  const goPrev = () => {
    const slideLength = slideArray.length;
    setSlideNumber((prevSlide) => (prevSlide === 0 ? slideLength - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 3000); 

    return () => clearInterval(interval);
  }, [slideNumber]); 

  return (
    <div className='w-full flex items-center justify-center flex-col sm:p-5'>
        <h1 className='text-black text-center'>What Our Past Clients Have To Say</h1>
        <p className='text-black mt-3 md:w-[60%] w-full text-center'>We have completed many book projects and have made clientele happy. Find out what they think of us.</p>

      {/* Slides Container */}
      <div className='md:w-[60%] w-[90%] overflow-hidden relative'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
          {slideArray.map((slide, index) => (
            <div
              key={index}
              className='w-full  flex-shrink-0 flex flex-col items-center sm:gap-y-10 gap-y-7'
            >
              <div className='image sm:w-[90px] w-[60px] mt-3'>
                <img src={quote} alt="Quote" />
              </div>

              <div>
                <p className='sm:text-[30px] text-[16px] italic sm:leading-[1.6] text-black text-center'>{slide.content}</p>
              </div>

              <div className='sm:w-[85%] w-[90%]  h-auto flex flex-row justify-center items-center'>
                <div className="sm:w-[60px] sm:h-[60px] w-[70px] h-[70px] bg-center rounded-full">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={testimonialPicture}
                    alt="Testimonial"
                  />
                </div>
                <div className='sm:py-1 sm:px-2'>
                  <p className='font-semibold text-black text-left'>Jenny Wilson</p>
                  <span className='text-left  font-medium text-black sm:flex hidden'>Founder & CEO of TechyZone</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className=' flex flex-row mt-5 gap-x-5'>
        <div className='flex items-center justify-center transform rotate-180 '
          onClick={goPrev}>
          < IoChevronForwardCircleOutline size={65} color='#386AFB'/>
          </div>

          <div className='flex items-center justify-center'
          onClick={goNext}>
          < IoChevronForwardCircleOutline size={65} color='#386AFB'/>
          </div>

          
      </div>
    </div>
  );
}

export default Testimonials;