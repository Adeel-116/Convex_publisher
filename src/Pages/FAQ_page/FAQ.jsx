import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import WatsappCTA from "../../components/HomePage_Components/WatsappCTA";
import FloatingQuoteBox from "../../components/HomePage_Components/FloatingQuoteBox";
import { MdAddCircleOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);
    const [changeColor, setChangeColor] = useState(false)
    const handleToggle = (index) => {
  
        setActiveIndex(activeIndex === index ? null : index);
    };


    const Data =
        [
            {
                question: "WHAT SERVICES DO YOU GUYS OFFER?",
                Answer: "Bonafide Writing is a one-stop ghostwriting solution that offers ghostwriting, editing, proofreading, formatting, book cover designs, publishing, marketing, audiobooks, and author’s website services."
            },
            {
                question: "IS GHOSTWRITING LEGAL?",
                Answer: "Yes, it is legal. Our website has been providing its services for many years ago. We just do the writing, you will be the one with the ideas."
            },
            {
                question: "I HAVE AN IDEA FOR A BOOK BUT I DON’T KNOW HOW TO WRITE, CAN YOU HELP?",
                Answer: "This is exactly what we are here to help you with. Our professional ghostwriters help you bring your story into the light for readers to enjoy."
            },
            {
                question: "HOW LONG WOULD IT TAKE TO COMPLETE MY BOOK?",
                Answer: "That depends on the book’s pages. Usually, we offer a 3 to 5 month bracket for all ghostwriting orders regardless of the word count."
            },
            {
                question: "HOW MUCH WOULD I BE INVOLVED IN THE WRITING PROCESS?",
                Answer: "At Bonafide Writing, we work on a chapter to chapter basis. Your involvement will be throughout the writing process. We don’t move forward without your approval."
            },
            {
                question: "WHAT IF I JUST NEED EDITING OR PROOFREADING?",
                Answer: "That’s fine with us. We are here to help with whatever you need, be it ghostwriting or editing. We have professional editors who will review your manuscript and edit or proofread it according to your needs."
            },
            {
                question: "CAN I CLAIM FULL OWNERSHIP EVENT THOUGH I DIDN'T WRITE THE BOOK?",
                Answer: "Yes, that is why it’s called ghost writing. You will have 100% ownership rights for your book that you get with Bonafide Writing."
            },
            {
                question: "CAN YOU HELP ME WITH PUBLISHING AND MARKETING?",
                Answer: "Of course. We have a professional teams of publication and marketing who will address your book’s marketing and publishing needs."
            },
            {
                question: "HOW DO I PLACE MY ORDER?",
                Answer: "You just have to fill out the registration form with proper detail then our expert will contact you. He asks you some questions related to your requirement and offer you the solutions. In the last, you select your service, and he will active your desired service."
            },
            {
                question: "DO YOU OFFER ANY DISCOUNTS?",
                Answer: "Yes, we do. If you are a returning customer, we offer you a 30% discount on all orders. At Bonafide Writing, we also give a welcoming discount of 15% for our newcomers."
            }


        ]

    const [showButtons, setShowButton] = useState(false);
    useEffect(() => {
        setChangeColor(false)
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            console.log(currentScrollPosition);
            setShowButton(currentScrollPosition > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="w-full bg-white pt-20">
                <Header onOpenQuote={() => setIsFormOpen(true)} />
            </header>
            <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] flex flex-col gap-y-1 w-[90%] mx-auto text-black py-10">

                <div className="w-full h-auto flex justify-center items-center">
                    <h2 className="text-black sm:w-1/2 w-[80%]  text-center lg:text-[40px] md:text-3xl text-2xl font-bold">
                        Frequently Asked Questions
                    </h2>
                </div>



                <div className="bg-[#F7F9FC] mt-10">
                    {Data.map((currentValue, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <>
                                <div key={index} className="w-full border-b-[1px] px-4 py-5 border-[#dbdbdb]">
                                    <div
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <p className={`md:text-[16px] text-[14px] font-medium transition-colors  ${isActive ? 'text-blue-600' : 'text-[#223235]'} hover:text-blue-600`}>{currentValue.question}</p>
                                        <div>
                                            {activeIndex === index ? (
                                                <FiMinusCircle color="#000000" size="23px" />
                                            ) : (
                                                <MdAddCircleOutline color="#000000" size="23px" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {activeIndex === index && (
                                    <div className=" w-full  p-5 bg-[#FFFFFF]">
                                        <p className="text-[#363636] font-medium md:text-[15px] text-[13px]">{currentValue.Answer}</p>
                                    </div>
                                )}

                            </>
                        );

                    })}
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

export default FAQ;
