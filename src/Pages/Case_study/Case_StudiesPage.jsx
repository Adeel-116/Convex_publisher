import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import WatsappCTA from "../../components/HomePage_Components/WatsappCTA";
import FloatingQuoteBox from "../../components/HomePage_Components/FloatingQuoteBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import Case_studyCTA from "./Case_studyCTA";


import Book_image1 from "../../assets/book-cover-1.webp";
import Book_image2 from "../../assets/book-cover-2.webp";
import Book_image3 from "../../assets/book-cover-3.webp";
import Book_image4 from "../../assets/book-cover-4.webp";
import Book_image5 from "../../assets/book-cover-5.webp";
import Book_image6 from "../../assets/book-cover-6.webp";
import Book_image7 from "../../assets/book-cover-7.webp";
import Book_image8 from "../../assets/book-cover-8.webp";


function Case_StudiesPage() {

  const bookImageArray = [Book_image1, Book_image2, Book_image3, Book_image4, Book_image5, Book_image6, Book_image7, Book_image8]

  const data1 ={
    title: "Thinking About Joining Us?",
    heading: "Check Out Our Portfolio To Find Out More!",
  }
    const [showButtons, setShowButton] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedImage, setSelectedImage] = useState(null); 
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);

   
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

  
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <header className="w-full bg-white pt-20">
                <Header onOpenQuote={() => setShowButton(true)} />
            </header>

            <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto text-black py-10">
                <div className="flex justify-center items-center flex-col">
                    <h2 className="text-center text-2xl md:text-3xl lg:text-[40px] font-bold text-black">
                        Top Pieces That We Have Done
                    </h2>
                    <p className="text-[#666666] mt-5 md:w-[60%] text-center">
                        Browse through some of our top literature!
                    </p>
                </div>

                <div className="relative w-full py-6">
                    {swiperReady && (
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            spaceBetween={16}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                                1280: { slidesPerView: 5 },
                            }}
                            className="w-full px-4"
                        >
                            {bookImageArray.map((_, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={bookImageArray[i]}
                                        className="rounded object-cover w-full max-w-[300px] mx-auto cursor-pointer"
                                        alt={`Book ${i + 1}`}
                                        onClick={() => openModal(bookImageArray[i])}  
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}

                    <div className="absolute md:-left-10  -left-0 top-1/2 transform -translate-y-1/2 z-10">
                        <div
                            ref={prevRef}
                            className="flex items-center justify-center transform rotate-180 cursor-pointer"
                        >
                            <IoChevronForwardCircleOutline size={40} color="#3524c4" />
                        </div>
                    </div>
                    <div className="absolute md:-right-10 -right-0 top-1/2 transform -translate-y-1/2 z-10">
                        <div
                            ref={nextRef}
                            className="flex items-center justify-center cursor-pointer"
                        >
                            <IoChevronForwardCircleOutline size={40} color="#3524c4" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full h-auto py-4 mb-4"
           style={{
            backgroundImage: "linear-gradient(to left, #6d4ef2, #7451e6)"
          }}
            >

             <Case_studyCTA onOpenQuote={() => setIsFormOpen(true)}  obj = {data1}/>

            </div>

            <Testimonials />
            <ContactForm />
            <Footer />
            <WatsappCTA />
            {showButtons && <FloatingQuoteBox show={showButtons} />}

           {/* Modal with Blur Background */}
            {isModalOpen && (
                <div 
                    className="fixed top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center z-50 cursor-pointer"
                    onClick={closeModal} // Close modal when clicking on the background
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}> {/* Prevents closing when clicking inside the image */}
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-full object-contain transform scale-110 transition-transform duration-300" // Added scaling effect here
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Case_StudiesPage;
