import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.webp";
import { FiMenu } from "react-icons/fi";
import { IoMdClose, IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import HeaderButton from "./HeaderButton";
import BookCallContact from "./BookCallContact";
import { NavLink } from "react-router-dom";

function Header({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookFormOpen, setIsOpenBookForm] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      dropdown: [
        { name: "Ghost Writing", path: "/ghost-book-writing-service" },
        { name: "Editing", path: "/editing-service" },
        { name: "Publishing", path: "/" },
        { name: "Proofreading", path: "/proofreading-service" },
        { name: "Audio Book", path: "/audio-book-service" },
        { name: "Blog Writing", path: "/blog-writing-service" },
        { name: "Website Content Writing", path: "/website-content-writing" },
        { name: "Book Cover", path: "/book-cover-design" },
        { name: "Book Promotion", path: "/book-promotion" },
        { name: "Formatting", path: "/book-formatting" },
        { name: "e-Book Writing", path: "/ebook-writing-service" },
        { name: "Book Video Trailer", path: "/book-video-trailer" },
        { name: "Author Website", path: "/book-author-website" },
        { name: "Article Writing", path: "/article-writing-service" },
      ],
    },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Faqs", path: "/faq" },
    { name: "Contact", path: "/contact-us" },
  ];

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10 transition-all duration-200">
      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-1">
          {/* Logo and Menu Toggle */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <NavLink to={"/"}>
              <img
                src={Logo}
                alt="Logo"
                width={isScrolled ? "100" : "120"}
                className="transition-all duration-300"
              />
            </NavLink>
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <IoMdClose className="text-2xl text-black" />
              ) : (
                <FiMenu className="text-2xl text-black" />
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center xl:text-[14px] lg:text-[13px] text-[14px] xl:space-x-6 space-x-3">
            {navItems.map((item, index) => (
              <li key={index} className="relative group cursor-pointer">
                <div className="flex items-center">
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className="text-gray-800 font-medium hover:text-blue-600 transition-all"
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                  )}
                  {item.dropdown && (
                    <IoMdArrowDropdown className="ml-1 text-black" />
                  )}
                </div>
                {item.dropdown && (
                  <ul className="absolute left-0 mt-1 hidden group-hover:block bg-white border rounded shadow-2xl z-10 custom-dropdown">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 nav-hover"
                      >
                        <NavLink to={subItem.path} className="block w-full">
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <HeaderButton
              btnText="Book A Call"
              onClick={() => setIsOpenBookForm(true)}
            />
            <HeaderButton btnText="Get a Quote" onClick={onOpenQuote} />
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full sm:w-[50%] w-full bg-white shadow-2xl z-50 py-3 px-5 transition-transform duration-300"
          >
            <div className="border-b flex justify-between items-center mb-4 pb-2">
              <img src={Logo} alt="Logo" className="w-24" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setActiveDropdown(null);
                }}
              >
                <IoMdClose className="text-2xl text-gray-600" />
              </button>
            </div>
            <ul className="overflow-y-auto h-[calc(100vh-100px)] pb-10">
              {navItems.map((item, index) => (
                <li key={index} className="text-black">
                  <div
                    className="flex justify-between items-center py-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() =>
                      item.dropdown
                        ? setActiveDropdown(
                            activeDropdown === index ? null : index
                          )
                        : setIsOpen(false)
                    }
                  >
                    {item.path ? (
                      <NavLink to={item.path} className="font-medium">
                        {item.name}
                      </NavLink>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}
                    {item.dropdown &&
                      (activeDropdown === index ? (
                        <IoMdArrowDropup />
                      ) : (
                        <IoMdArrowDropdown />
                      ))}
                  </div>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="ml-4 pl-2 border-l-2 border-black-200 custom-dropdown">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="p-1 text-sm text-gray-600 rounded nav-hover"
                        >
                          <NavLink to={subItem.path}>{subItem.name}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <div className="flex flex-col items-start gap-3">
                <HeaderButton
                  btnText="Book A Call"
                  onClick={() => setIsOpenBookForm(true)}
                />
                <HeaderButton btnText="Get a Quote" onClick={onOpenQuote} />
              </div>
            </ul>
          </div>
        )}
      </div>

    
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
