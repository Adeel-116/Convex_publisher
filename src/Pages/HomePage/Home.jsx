import React, { useState } from "react";
import Header from "../../components/Header"
import Slider from "../../components/Slider";
import HeroSection from "../../components/HomePage_Components/HeroSection";
import PublishingJourney from "../../components/HomePage_Components/PublishingJourney";
import CTA from "../../components/CTA"
import PublishingProcess from "../../components/HomePage_Components/PublishingProcess";
import LetsBeginCard from "../../components/HomePage_Components/LetsBeginCard";
import Testimonials from "../../components/Testimonials";
import Form from "../../components/HomePage_Components/Form";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import GetAQuoteForm from "../../components/GetQuoteForm";

function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="w-full h-auto flex flex-col">
        <header className="w-full bg-white pt-20">
          <Header onOpenQuote={() => setIsFormOpen(true)} />
        </header>

        <section className="hero-Section bg-image3 w-full relative py-15 bg-gray-900 flex justify-center items-center">
          <HeroSection onOpenQuote={() => setIsFormOpen(true)} />
        </section>

        <div className="w-full">
          <Slider />
        </div>

        <section className="w-full h-auto flex justify-center">
          <PublishingJourney />
        </section>

        <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <CTA  onOpenQuote={() => setIsFormOpen(true)}/>
        </section>

        <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <PublishingProcess />
        </section> 

        <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <LetsBeginCard  onBookQuote={() => setIsFormOpen(true)}/>
        </section>

        <div className="bg-[#FAFBFD]">
          <section className="py-10">
            <Testimonials />
          </section>
        </div>

        <section className="py-10">
          <ContactForm />
        </section>

        <section className="">
          <Footer />
        </section>
      </div>

      {/* Global Quote Form Overlay */}
      {isFormOpen && (
        <GetAQuoteForm onClose={() => setIsFormOpen(false)} />
      )}
    </>
  );
}

export default HomePage;
