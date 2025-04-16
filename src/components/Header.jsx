import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import HeaderButton from "./HeaderButton";
import BookCallContact from "./BookCallContact";
import GetAQuoteForm from "../components/GetQuoteForm"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false); 

  const navItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Contact" },
  ];

  const buttons = [
    { label: "1-800-123-4567", action: null },
    { label: "Book A Call", action: () => setIsBookCallOpen(true) },
    { label: "Get a Quote", action: () => setIsQuoteOpen(true) }, // 🆕 Button added
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md"> 
      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-0.5">
          <div className="w-full lg:w-auto flex justify-between items-center">
            <img src={Logo} alt="Logo" width="110px" />
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
                <HeaderButton
                  key={index}
                  btnText={btn.label}
                  onClick={btn.action}
                />
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
      </div>

      {/* Book A Call Modal */}
      {isBookCallOpen && (
        <BookCallContact
          onClose={() => setIsBookCallOpen(false)}
          onSubmit={(data) => {
            setIsBookCallOpen(false);
          }}
        />
      )}

     
      {isQuoteOpen && (
        <GetAQuoteForm
          onClose={() => setIsQuoteOpen(false)}
          onSubmit={(data) => {
            setIsQuoteOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default Header;
