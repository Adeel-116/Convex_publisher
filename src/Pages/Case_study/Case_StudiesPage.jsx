import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import WatsappCTA from "../../components/HomePage_Components/WatsappCTA";
import FloatingQuoteBox from "../../components/HomePage_Components/FloatingQuoteBox";
import Book_image from "../../assets/book-cover-6.webp"
import { IoChevronForwardCircleOutline } from "react-icons/io5";
function Case_StudiesPage() {
    const sliderRef = useRef(null)
   const [showButtons, setShowButton] = useState(false);
   
   console.log(sliderRef)
    useEffect(()=>{}, [])
    const goNext = ()=>{

    }
    const goPrev = ()=>{

    }

    return (
        <>
            <header className="w-full bg-white pt-20">
                <Header onOpenQuote={() => setIsFormOpen(true)} />
            </header>
            <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] flex flex-col gap-y-1 w-[90%] mx-auto text-black py-10">

                <div className="flex justify-center items-center flex-col">
                    <h2 className="text-black text-center lg:text-[40px] md:text-3xl text-2xl font-bold">
                        Top Pieces That We Have Done
                    </h2>
                    <p className="text-[#666666] mt-5 md:w-[60%] w-full text-center">
                        Browse through some of our top literature!
                    </p>
                </div>


                <div className=" relative w-full h-auto flex justify-start items-center py-4 bg-amber-600">

                    <div className="w-full overflow-x-auto scroll-smooth" ref={sliderRef}>
                        <div className="flex gap-x-10.5  py-4 w-max">
                            <div className="flex-shrink-0 p-1">
                                <img src={Book_image} width="210px" alt="" />
                            </div>
                            <div className="flex-shrink-0  p-1">
                                <img src={Book_image} width="210px" alt="" />
                            </div>
                            <div className="flex-shrink-0  p-1">
                                <img src={Book_image} width="210px" alt="" />
                            </div>
                            <div className="flex-shrink-0  p-1">
                                <img src={Book_image} width="210px" alt="" />
                            </div>
                            <div className="flex-shrink-0  p-1">
                                <img src={Book_image} width="210px" alt="" />
                            </div>
                            <div className="flex-shrink-0  p-1">
                                <img src={Book_image} width="210px" alt="" />
                            </div>
                            <div className="flex-shrink-0  p-1">
                                <img src={Book_image} width="210px" alt="" />
                            </div>
                            <div className="flex-shrink-0  p-1">
                                <img src={Book_image} width="210px" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                        <div className="hidden md:flex flex-row justify-center mt-5 gap-x-5">
                          <div className="flex items-center justify-center transform rotate-180 cursor-pointer" onClick={goPrev}>
                            <IoChevronForwardCircleOutline size={55} color="#3524c4" />
                          </div>
                          <div className="flex items-center justify-center cursor-pointer" onClick={goNext}>
                            <IoChevronForwardCircleOutline size={55} color="#3524c4" />
                          </div>
                        </div>


            </div>


            <Testimonials />
            <ContactForm />
            <Footer />
            <WatsappCTA />
            {showButtons && (
                <FloatingQuoteBox
                    show={showButtons}
                />
            )}
        </>
    );
}

export default Case_StudiesPage;
