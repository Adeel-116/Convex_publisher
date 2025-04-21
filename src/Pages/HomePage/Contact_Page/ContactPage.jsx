import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import BookCallContact from "../../../components/BookCallContact";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import Testimonials from "../../../components/Testimonials";
import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer";
import WatsappCTA from "../../../components/HomePage_Components/WatsappCTA";
import FloatingQuoteBox from "../../../components/HomePage_Components/FloatingQuoteBox"

function ContactPage() {
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


    const Data =
        [
            {
                serviceName: "Ghost Writing",
                Content: "Our team includes creative professionals who can help you become the popular author that you want to be."
            },
            {
                serviceName: "Editing",
                Content: "It is possible for top authors to even miss out on small edits. This is why an editorial process is needed to fix the corrections and mistakes."
            },
            {
                serviceName: "Proof reading",
                Content: "Our creative professionals check your writing with a new perspective so that an accurate review can occur to fix any mistakes."
            },
            {
                serviceName: "Formatting",
                Content: "Premium Book Publishers knows that following international standards is important and it can be tough following these as they interfere"
            },
            {
                serviceName: "Book covers",
                Content: "Premium Book Publishers gives you excellent books covers for your book. Our professional team of experienced designers can make amazing graphics."
            },
            {
                serviceName: "Publishing",
                Content: "If you are finding it tough to publish your work by yourself, or if you are not getting any approval from publishers, do not worry."
            },
            {
                serviceName: "Book Marketing",
                Content: "It is tough to get known as an author that writes good books. This is where Premium Book Publishers comes in."

            },
            {
                serviceName: "Audio-Book(s)",
                Content: "Premium Book Publishers can help make your books reach book readers clubs’, by creating top class audiobooks."

            }

        ]

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        comments: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <header className="w-full bg-white pt-20">
                <Header onOpenQuote={() => setIsFormOpen(true)} />
            </header>

            <section className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] py-15 sm:w-[80%] w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-auto gap-x-7">
                    <div className="">
                        <h1 className="w-full text-[#223235] text-[40px]">Contact Us</h1>
                        <p className="w-full text-[#666666] mt-3 text-[15px] mb-2">
                            Feel free to give us a call, write to us, or complete the contact
                            form at the bottom of this page. Call Us: +1 302-518-4405 Email:
                            info@premiumbookpublishers.com
                        </p>

                        <div className="w-full h-auto rounded-xl bg-[#F7F9FC] sm:py-20 py-10 px-5">

                            <form action="" onSubmit={handleSubmit} className="w-full flex flex-col gap-y-5">

                                <h2 className="text-[#323637] font-light text-[30px]">
                                    We Want To Hear From you
                                </h2>

                                <div className="w-full flex sm:flex-row flex-col gap-y-5 gap-x-8">
                                    <div className="flex-1">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Full Name
                                        </label>
                                        <InputField
                                            label="Full Name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            extraClases="py-2 px-3 bg-white"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Email
                                        </label>
                                        <InputField
                                            label="Email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            extraClases="py-2 px-3 bg-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Phone Number
                                    </label>
                                    <InputField
                                        label="Phone Number"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        extraClases={"py-2 px-3 bg-white"}
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <label
                                        htmlFor="comments"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Additional Comments
                                    </label>
                                    <textarea
                                        id="comments"
                                        name="comments"
                                        placeholder="Enter message here"
                                        required
                                        value={formData.comments}
                                        onChange={handleChange}
                                        className="text-sm font-medium w-full py-2 px-3 border-2 bg-white text-black border-gray-300 hover:border-gray-400 focus:border-black focus:ring-black transition-colors duration-200"
                                        rows={5}
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2 flex justify-start">
                                    <Button text="submit" extraClass="px-12 py-4" />
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="min-w-80">

                        <div className="bg-[#F7F9FC] sm:rounded-tl-3xl sm:rounded-tr-3xl md:mt-0 mt-3 overflow-hidden">


                            <div className="w-full bg-[#D0D6E0] p-4 ">
                                <p className="text-black">What We Offer</p>
                            </div>

                            {Data.map((currentValue, index) => {
                                return (
                                    <>
                                        <div key={index} className="w-full border-b-[1px] px-4 py-5 border-[#dbdbdb]">
                                            <div
                                                className="flex items-center justify-between cursor-pointer"
                                                onClick={() => handleToggle(index)}
                                            >
                                                <p className="text-[#1e1e1e] text-[14px]">{currentValue.serviceName}</p>
                                                <div>
                                                    {activeIndex === index ? (
                                                        <CiCircleMinus fill="#000000" size={"16px"} />
                                                    ) : (
                                                        <IoIosAddCircleOutline color="#000000" size={"16px"} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="md:w-80 w-full  p-5 bg-[#FFFFFF]">
                                                <p className="text-black text-[13px]">{currentValue.Content}</p>
                                                <p className="text-[#4E58F7] mt-1 text-[14px]">Read more...</p>
                                            </div>
                                        )}

                                    </>
                                );

                            })}
                        </div>
                    </div>
                </div>
            </section>


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

export default ContactPage;
