import React, { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import HeroSection from "../../components/HomePage_Components/HeroSection";
import PublishingJourney from "../../components/HomePage_Components/PublishingJourney";
import CTA from "../../components/HomePage_Components/CTA";
import LetsBeginCard from "../../components/HomePage_Components/LetsBeginCard";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import GetAQuoteForm from "../../components/GetQuoteForm";
import WatsappCTA from "../../components/HomePage_Components/WatsappCTA";
import FloatingQuoteBox from "../../components/HomePage_Components/FloatingQuoteBox";
import { GlobalContext } from "../../context/ContextCreate";
import ServiceCard from "../../components/ServiceCard";

function ArticleWriting() {
   const { articleWritingContent } = useContext(GlobalContext)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showButtons, setShowButton] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    phone: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setShowButton(currentScrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-auto flex flex-col">
        <header className="w-full bg-white pt-20">
          <Header onOpenQuote={() => setIsFormOpen(true)} />
        </header>

        <section className="hero-Section bg-image3 w-full relative py-15 bg-gray-900 flex justify-center items-center">
          <HeroSection onOpenQuote={() => setIsFormOpen(true)} obj = {articleWritingContent.heroSection}  />
        </section>

        <div className="w-full">
          <Slider />
        </div>

        <section className="w-full h-auto flex justify-center">
          <PublishingJourney obj= {articleWritingContent.publishingJourney} />
        </section>

        <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <CTA onOpenQuote={() => setIsFormOpen(true)}  obj = {articleWritingContent.CTA}/>
        </section>

        <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <ServiceCard  obj= {articleWritingContent.ourApproach}/>
        </section>

        <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <LetsBeginCard onBookQuote={() => setIsFormOpen(true)} obj = {articleWritingContent.letBeginsCTA} />
        </section>

        <div className="bg-[#FAFBFD]">
          <section className="py-10">
            <Testimonials />
          </section>
        </div>

        <section className="py-10">
          <ContactForm />
        </section>

        <section>
          <Footer />
        </section>
      </div>

      <WatsappCTA />
 
      {showButtons && (
        <FloatingQuoteBox
          show={showButtons}
        />
      )}
      {isFormOpen && <GetAQuoteForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
}

export default ArticleWriting;
