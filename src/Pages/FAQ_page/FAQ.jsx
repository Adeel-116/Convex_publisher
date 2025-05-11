import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import WatsappCTA from "../../components/HomePage_Components/WatsappCTA";
import FloatingQuoteBox from "../../components/HomePage_Components/FloatingQuoteBox";

function FAQ() {

   const [showButtons, setShowButton] = useState(false);
      useEffect(() => {
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
