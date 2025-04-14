import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import InputField from "./InputField";
import SelectBox from "./SelectBox";

function Form() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fzmgsy8",
        "template_4aqg6kk",
        formRef.current,
        "4oe_HnQK8v-wi_H9m"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setShowPopup(true);

          // Hide popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);

          // Optional: Reset form
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full h-auto bg-gray-100 rounded-4xl relative">
      {/* Custom Popup */}
      {showPopup && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-md transition-opacity duration-300">
          Your form has been submitted successfully!
        </div>
      )}

      <div className="w-auto bg-gray-50 rounded-xl shadow-md py-4 px-5 max-w-3xl mx-auto">
        <h2 className="font-bold text-gray-600 text-center mb-8 text-xl">
          UP TO 50% DISCOUNT
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center font-semibold">
            Thank you! We’ll contact you soon.
          </p>
        ) : (
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <InputField label="Enter Your Name *" name="user_name" required />
              <InputField
                label="Enter Email Here *"
                name="user_email"
                type="email"
                required
              />
              <InputField
                label="Phone Number *"
                name="user_phone"
                type="tel"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectBox
                  label="Select a Service"
                  name="service"
                  options={[
                    "Web Development",
                    "App Development",
                    "Graphic Design",
                    "Digital Marketing",
                  ]}
                />
                <SelectBox
                  label="Select Your Budget"
                  name="budget"
                  options={[
                    "$500 - $1000",
                    "$1000 - $5000",
                    "$5000 - $10000",
                    "Custom Budget",
                  ]}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter a brief description"
                  className="block w-full rounded-md border text-black border-gray-300 shadow-sm focus:border-[#00c0ff] focus:ring-[#00c0ff] px-3 py-2 text-sm"
                ></textarea>
              </div>
            </div>

            <div className="w-full">
              <Button text="Contact With US" children="w-full text-center" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
