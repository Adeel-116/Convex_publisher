import React, { useState } from "react";
import InputField from "./InputField";
import SelectBox from "./SelectBox";
import Button from "../components/Button";

function ContactForm() {
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
    console.log("Form Submitted:", formData);
    // You can also do something else here (like sending data to an API)
  };

  return (
    <div className="w-full relative h-auto">
      <div className="absolute top-[50%] left-0 bottom-0 bg-image lg:flex hidden"></div>
      <div className="absolute top-[50%] right-0 bottom-0 bg-image2 lg:flex hidden"></div>

      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] mx-auto sm:px-20 md:py-10 py-5 md:w-[95%] sm:w-[80%] w-[90%]">
        <div className="md:px-30 px-5">
          <h2 className="text-center text-black 2xl:text-[40px] sm:text-[25px] font-bold text-2xl">
            Let’s Begin The Journey
          </h2>
          <p className="text-center text-[#666666] mt-3 md:text-[16px] text-[14px]">
            Call us <span className="text-[#53b3eb]">+1 302-518-4405 </span>or use the form below to start a
            conversation and show you how we can help!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 w-full flex-col mx-auto md:py-8 py-5">
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="basis-full md:basis-1/2">
                <InputField
                  label="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="basis-full md:basis-1/2">
                <InputField
                  label="Enter email here"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="basis-full md:basis-1/2">
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
                />
              </div>

              <div className="basis-full md:basis-1/2">
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
                />
              </div>
            </div>

            <div>
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-3 px-3.5 text-[13px] border font-medium text-black border-gray-300 rounded-[3px]"
                rows="5"
                placeholder="Enter message here"
              />
            </div>

            <div>
              <Button
                text="Submit"
                extraClass="lg:w-[20%] sm:w-[35%] w-[50%]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
