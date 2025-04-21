import React, { useState } from 'react';
import InputField from '../components/InputField';
import SelectBox from '../components/SelectBox';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from "../assets/logo.png";
import Button from "../components/Button";

const GetAQuoteForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prev) => ({ ...prev, phone: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="fixed inset-0 z-30 bg-[#f6f9fc] flex flex-col items-center">

            {/* Header with Logo and Close Button */}
            <div className="w-[90%] max-w-5xl flex items-center justify-between py-5">
                <img src={Logo} alt="Logo" className="w-24 sm:w-28 object-contain" />
                <button
                    onClick={onClose}
                    className="text-gray-600 hover:text-black"
                >
                    <AiOutlineClose size={22} />
                </button>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto max-h-[100vh] scroll-auto"
            >
                <h2 className="col-span-1 md:col-span-2 text-2xl sm:text-3xl font-semibold text-gray-800">
                    We Would Like To Hear From You
                </h2>

                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        extraClases="py-2 px-3 bg-white"
                    />
                </div>

                {/* Phone Input */}
                <div className="col-span-1 md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <PhoneInput
                        country={'us'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputStyle={{
                            width: '100%',
                            height: '40px',
                            fontSize: '14px',
                            color: 'black',
                            backgroundColor: 'white',
                            borderColor: '#ccc',
                        }}
                        buttonStyle={{ borderRight: '1px solid #ccc', color: 'black' }}
                        specialLabel=""
                    />
                </div>

                {/* Service */}
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Your Service
                    </label>
                    <SelectBox
                        label="Select Your Service"
                        name="service"
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
                        value={formData.service}
                        onChange={handleChange}
                        extraClases="py-2 px-3 bg-white"
                    />
                </div>

                {/* Budget */}
                <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Your Budget
                    </label>
                    <SelectBox
                        label="Select Your Budget"
                        name="budget"
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
                        value={formData.budget}
                        onChange={handleChange}
                        extraClases="py-2 px-3 bg-white"
                    />
                </div>

                {/* Comments */}
                <div className="col-span-1 md:col-span-2">
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Comments
                    </label>
                    <textarea
                        id="comments"
                        name="comments"
                        placeholder="Enter message here"
                        required
                        value={formData.comments}
                        onChange={handleChange}
                        className="text-sm font-medium w-full py-2 px-3 border-2 text-black border-gray-300 hover:border-gray-400 focus:border-black focus:ring-black transition-colors duration-200"
                        rows={5}
                    />
                </div>

                {/* Submit */}
                <div className="col-span-1 md:col-span-2 flex justify-start">
                    <Button text="Submit" extraClass='w-[130px]' />
                </div>
            </form>
        </div>
    );
};

export default GetAQuoteForm;
