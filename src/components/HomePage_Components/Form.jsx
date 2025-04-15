import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import InputField from "../InputField";
import SelectBox from "../SelectBox";
import PopUp from "../PopUp";

function Form({ text, parapgraph, children, selectbox }) {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState(""); 
  const [isSending, setIsSending] = useState(false); 

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); 

    emailjs
      .sendForm(
        "service_fzmgsy8",
        "template_0gw3qwc",
        formRef.current,
        "4oe_HnQK8v-wi_H9m"
      )
      .then(
        (result) => {
          console.log(result.text);
          setPopupMessage("Thank you! We'll get back to you soon.");
          setPopupType("success");
          setShowPopup(true);
          setSubmitted(true);
          setIsSending(false);

          formRef.current.reset();
          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            service: "",
            budget: "",
            message: "",
          });

          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setPopupMessage("Something went wrong. Please try again.");
          setPopupType("error");
          setShowPopup(true);
          setIsSending(false);

          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        }
      );
  };

  return (
    <div className={`${children} w-auto rounded-lg p-7 md:px-7 sm:px-10`}>
      <h3 className="font-bold text-gray-600 text-center">{text}</h3>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-6 mt-3">
        <div className="grid grid-cols-1 gap-6">
          <InputField
            label="Enter Your Name *"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Enter Email Here *"
            name="user_email"
            type="email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Phone Number *"
            name="user_phone"
            type="tel"
            value={formData.user_phone}
            onChange={handleChange}
            required
          />

        {
          selectbox ? <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectBox
              label="Select a Service"
              name="service"
              value={formData.service}
              onChange={handleChange}
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
              value={formData.budget}
              onChange={handleChange}
              options={[
                "$500 - $1000",
                "$1000 - $5000",
                "$5000 - $10000",
                "Custom Budget",
              ]}
            />
          </div> : ""
        }

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Enter a brief description"
              className="block w-full rounded-md border text-black border-gray-300 shadow-sm focus:border-[#00c0ff] focus:ring-[#00c0ff] px-3 py-2 text-sm"
            ></textarea>
          </div>
        </div>

        <div className="w-full">
          <Button
            text={isSending ? "Sending..." : "Submit"}
            extraClass={`w-full text-center ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
            type="submit"
            disabled={isSending}
          />
        </div>
      </form>

      {/* ✅ PopUp rendered only when needed */}
      {showPopup && (
        <PopUp
          message={popupMessage}
          type={popupType}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Form;
