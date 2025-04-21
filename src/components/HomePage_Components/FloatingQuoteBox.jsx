import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import InputField from "../InputField";
import SelectBox from "../SelectBox";
import Button from "../Button";

const FloatingQuoteBox = ({ show, formData, handleChange, handleSubmit }) => {

    if (!show) return null;

    return (
        <div className="w-[420px] fixed top-[16%] right-[-370px] z-10 group sm:flex hidden">

            <div
                className="w-[280px] p-4 absolute right-[140px] top-[70px] cursor-pointer flex items-center 
                bg-gradient-to-br from-[#4E58F7] to-[#53b3eb87] 
                  transition-all duration-300 ease-in-out hover:right-[300px]"
            >
                <FaPhoneAlt size={20} />
                <a
                    href="tel:+13025184405"
                    className="px-3 font-semibold text-white no-underline"
                >
                    +1 302-518-4405
                </a>
            </div>

            {/* Floating Quote Form */}
            <div
                className="bg-gradient-to-br from-[#4E58F7] to-[#53b3eb87] 
        w-[350px] h-[200px] 
        z-[999] 
        top-[135px]
        cursor-pointer
        inline-block 
        pt-0 
        relative
        transition-transform duration-300 ease-in-out hover:translate-x-[-350px]"
            >
                <p
                    className="absolute 
          rotate-[-90deg] 
          transition-all duration-400 
          left-[-48px] 
          bottom-[87px] 
          whitespace-pre 
          align-top 
          mt-[125px] 
          text-white 
          text-[18px] 
          font-semibold"
                >
                    Let's Get Started
                </p>

                <div className="bg-white shadow-2xl absolute top-[-60%] left-[50px] py-7 px-7 w-[350px] h-auto">
                    <h3 className="text-[27px] text-black font-semibold">Sign Up Now &</h3>
                    <p className="font-medium text-black text-[25px]">Let's Get Started</p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 w-full flex-col mx-auto md:py-4 py-3"
                    >
                        <InputField
                            label="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            extraClases={"md:py-3.5 py-[9px] px-3.5"}
                        />

                        <InputField
                            label="Enter email here"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            extraClases={"md:py-3.5 py-[9px] px-3.5"}
                        />

                        <SelectBox
                            label="Select Your Services"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            options={[
                                "Ghost Writing",
                                "Editing",
                                "Publishing",
                                "Proofreading",
                                "Audio Book",
                                "Blog Writing",
                                "Website Content Writing",
                                "Book Cover",
                                "Book Promotion",
                                "Formatting",
                                "e-Book Writing",
                                "Book Video Trailer",
                                "Author Website",
                                "Article Writing",
                            ]}
                            extraClases={"md:py-3.5 py-[9px] px-3.5"}
                        />

                        <SelectBox
                            label="Select Your Budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            options={[
                                "Below 2000",
                                "Up to 3000",
                                "Up to 4000",
                                "Up to 5000",
                                "Up to 6000",
                                "Up to 7000",
                                "Up to 8000",
                                "Up to 9000",
                                "Above 10000",
                            ]}
                            extraClases={"md:py-3.5 py-[9px] px-3.5"}
                        />

                        <InputField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            extraClases={"md:py-3.5 py-[9px] px-3.5"}
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full py-3 px-3.5 text-[13px] border-2 font-medium text-black border-gray-300 hover:border-gray-400 rounded-[3px]"
                            rows="3"
                            placeholder="Enter message here"
                        />

                        <div>
                            <Button text="Submit" extraClass="w-[100%]" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FloatingQuoteBox;
