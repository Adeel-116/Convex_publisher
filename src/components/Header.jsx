import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import Form from "./HomePage_Components/Form"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // ✅ form modal toggle

  const navItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Contact" },
  ];

  const buttons = [
    { label: "1-800-123-4567", action: null },
    { label: "Book A Call", action: null },
    { label: "Get a Quote", action: () => setIsFormOpen(true) },
  ];

  return (
    <div className="2xl:w-[80%] lg:w-[90%] w-[95%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center py-3">
        <div className="w-full lg:w-auto flex justify-between items-center">
          <img src={Logo} alt="Logo" width="130px" />
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose className="text-2xl text-black" />
            ) : (
              <FiMenu className="text-xl text-black" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            {buttons.map((btn, index) => (
              <Button key={index} text={btn.label} onClick={btn.action} />
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="w-full lg:hidden mt-4">
            <ul className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="p-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">We Would Like To Hear From You</h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <Form text="Let’s Begin The Journey" children="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
