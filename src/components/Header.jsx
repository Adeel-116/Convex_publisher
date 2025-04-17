import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import HeaderButton from "./HeaderButton";
import BookCallContact from "./BookCallContact";

function Header({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookFormOpen, setIsOpenBookForm] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-0.5">
          {/* Logo and Menu Button */}
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

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <HeaderButton btnText="Book A Call" onClick={()=> setIsOpenBookForm(true)} />
            <HeaderButton btnText="Get a Quote" onClick={onOpenQuote} />
          </div>

          {/* Mobile Menu (only buttons) */}
          {isOpen && (
            <div className="w-full lg:hidden mt-4 flex flex-col gap-3">
              <HeaderButton btnText="Book A Call" onClick={()=> setIsOpenBookForm(true)} />
              <HeaderButton btnText="Get a Quote" onClick={onOpenQuote} />
            </div>
          )}
        </div>
      </div>

{   
    isBookFormOpen ? <BookCallContact  onSubmit={()=> console.log(submit)} onClose={()=> setIsOpenBookForm(false)}  /> : ""

}

    </div>
  );
}

export default Header;
