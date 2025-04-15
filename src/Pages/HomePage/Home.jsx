import React from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import HeroSection from "../../components/HomePage_Components/HeroSection";
import PublishingJourney from "../../components/HomePage_Components/PublishingJourney";
import CTA from "../../components/CTA"
import PublishingProcess from "../../components/HomePage_Components/PublishingProcess";
import LetsBeginCard from "../../components/HomePage_Components/LetsBeginCard";
import Testimonials from "../../components/Testimonials";
import Form from "../../components/HomePage_Components/Form";
import Footer from "../../components/Footer"


function HomePage() {
  return (
    <>
      <div className="w-full h-auto flex flex-col">
        <header className="w-full bg-white">
          <Header />
        </header>

        <section className="hero-Section w-full relative py-15 bg-gray-900 flex justify-center items-center">
         <HeroSection />
        </section>

        <div className="w-full">
          <Slider />
        </div>
       
       <section className="w-full h-auto flex justify-center">
          <PublishingJourney />
        </section>

        <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <CTA />
        </section>

      <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <PublishingProcess />
        </section> 

       <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <LetsBeginCard />
        </section>

      <div className="bg-[#f9fafb]">
        <section className="bg-[#F9FAFB] 2xl:w-[80%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto py-10">
            <Testimonials />
        </section>
        </div>


       {/* <section className="py-10">
             <Form text="Let’s Begin The Journey"  parapgraph="Call us +1 302-518-4405 or use the form below to start a conversation and show you how we can help!" />
        </section> */}


        {/*   <section className="">
             <Footer />
        </section>
       */}

        


      </div>






    </>
  );
}

export default HomePage;
