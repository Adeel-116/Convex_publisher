import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Contact" },
  ];

  const buttons = ["1-800-123-4567", "Book A Call", "Get a Quote"];

  return (
    <div className="2xl:w-[80%] lg:w-[90%] w-[95%] mx-auto">
      {/* Main Header Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-3">
        {/* Logo and Mobile Menu Button */}
        <div className="w-full lg:w-auto flex justify-between items-center">
          <img src={Logo} alt="Logo" width="130px" />
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoMdClose className="text-2xl text-black" />
            ) : (
              <FiMenu className="text-xl text-black" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
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
            {buttons.map((label, index) => (
              <Button key={index} text={label} />
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Below Logo */}
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
    </div>
  );
}

export default Header;