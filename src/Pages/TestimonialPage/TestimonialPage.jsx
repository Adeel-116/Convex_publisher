import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import WatsappCTA from "../../components/HomePage_Components/WatsappCTA";
import FloatingQuoteBox from "../../components/HomePage_Components/FloatingQuoteBox";
import TestimonialCard from "./TestimonialCard";
import CTA from "../../components/HomePage_Components/CTA";

function TestimonialPage() {
  const ref = useRef(null);

  const cta_content ={
      title: "Finding It Tough To Sell Books?",
      heading: "Choose To Hire An Expert Book Marketing Professional To Do This",
    }

  const data = [
    {
      shortName: "KS",
      headerText: "Excellent Job!",
      review:
        "I am a new writer and needed help for my book. I did not know which words to use. This is when I came across Convex Book Publishers. They were able to change my ideas into words.",
      clientName: "Katelin Smith - Author",
    },
    {
      shortName: "KS",
      headerText: "Pleased With The Work",
      review:
        "Convex Book Publishers have been helpful in writing articles for my blog. I have a blog but do not have much time to update it. They have good writers.",
      clientName: "Ken Smith - CEO",
    },
    {
      shortName: "PB",
      headerText: "Well Done!",
      review:
        "I am glad I came across Convex Book Publishers. They helped make my book into a book video trailer. They have the staff who know how to do this.",
      clientName: "Peter Black - Author",
    },
    {
      shortName: "RP",
      headerText: "Good Company",
      review:
        "I was looking for a company to help edit my book for me. I am happy with Convex Book Publishers as they were able to give the work on time and found many edits.",
      clientName: "Ron Potter - Author",
    },
    {
      shortName: "KB",
      headerText: "Effective Service",
      review:
        "I needed a good company to help me transform my book into an eBook. Convex Book Publishers can do this. They worked with me and send the work on time.",
      clientName: "Kate Black - Author",
    },
    {
      shortName: "AK",
      headerText: "Timely Service",
      review:
        "If you are an author you know the importance of submitting work on time. Convex Book Publishers keep time in mind when it comes to anything that they deliver.",
      clientName: "Ali Khan - Author",
    },
  ];

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
      <div className="bg-[#FFFFFF]">
        <header className="w-full bg-white pt-20">
          <Header onOpenQuote={() => setIsFormOpen(true)} />
        </header>
        <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] flex flex-col gap-y-1 w-[90%] mx-auto text-black py-10">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-black sm:w-1/2 w-[80%]  text-center lg:text-[40px] md:text-3xl text-2xl font-bold">
              Find Out What Our Clients Say
            </h2>
            <p className="text-[#666666] mt-5 md:w-[60%] w-full text-center">
            We are proud to have provided excellent services to many clients. Find out what some of them have to say about our services.
            </p>
          </div>

          <div className="w-full h-auto py-10">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 justify-items-center ">
              {data.map((items, index) => (
                <TestimonialCard key={index} cardData={items} />
              ))}
            </div>
          </div>

          <CTA onOpenQuote={() => setIsFormOpen(true)}  obj = {cta_content}/>

        </div>
  
        <Testimonials />
        <ContactForm />
        <Footer />
        <WatsappCTA />

        {showButtons && <FloatingQuoteBox show={showButtons} />}
      </div>
    </>
  );
}

export default TestimonialPage;
