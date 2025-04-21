import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.webp";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import HeaderButton from "./HeaderButton";
import BookCallContact from "./BookCallContact";
import { NavLink } from "react-router-dom";

function Header({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookFormOpen, setIsOpenBookForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10 transition-all duration-200">
      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-0.5">
         
          <div className="w-full lg:w-auto flex justify-between items-center transition-all duration-300">
            <NavLink to={"/"}>
            <img
              src={Logo}
              alt="Logo"
              width={isScrolled ? "100" : "120"} // Shrinks when scrolled
              className="transition-all duration-300 cursor-pointer"
            />
            </NavLink>
            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoMdClose className="text-2xl text-black" />
              ) : (
                <FiMenu className="text-2xl text-black" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <HeaderButton
              btnText="Book A Call"
              onClick={() => setIsOpenBookForm(true)}
              bgColor="#007bff"
            />

            <HeaderButton
              btnText="Get a Quote"
              onClick={onOpenQuote}
              bgColor=""
            />
          </div>

          {/* Mobile Menu (only buttons) */}
          {isOpen && (
            <div className="w-full lg:hidden mt-4 flex flex-col gap-3 mb-5">
              <HeaderButton btnText="Book A Call" onClick={() => setIsOpenBookForm(true)} />
              <HeaderButton btnText="Get a Quote" onClick={onOpenQuote} />
            </div>
          )}
        </div>
      </div>

      {/* Book Call Form */}
      {isBookFormOpen && (
        <BookCallContact
          onSubmit={() => console.log("submit")}
          onClose={() => setIsOpenBookForm(false)}
        />
      )}
    </div>
  );
}

export default Header;
