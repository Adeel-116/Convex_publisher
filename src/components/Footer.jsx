import Logo from "../assets/logo.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaPinterest, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import seal_footer from "../assets/seals-footer.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" h-auto"
      style={{ background: 'linear-gradient(90deg, #3524c4, #3d17b3, #2834d6)' }}
    >
      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
        <div className=" flex flex-col gap-y-4 lg:px-0 px-5">
          <div className="text-center flex w-full">
            <img
              src={Logo}
              className="lg:w-[45%] sm:w-[40%] w-[40%] filter brightness-0 invert"
              alt=""
            />
          </div>

          <div className="text-white">
            <p className="text-[14px] xl:w-[90%] w-full">
              We are proud of the work put forward by our team of expert
              ghostwriters, and we strive to continually learn and unlearn
              skills like creative writing in order to provide our clients with
              the best service possible.
            </p>
          </div>

          <div className="space-y-1 text-white text-[14px]">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" />
              5731 Dormington Lane, Orlando, 32821, Florida
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              info@premiumbookpublishers.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              +1 302-586-4405
            </p>
          </div>

          <div className="flex items-center py-0.5 space-x-4 text-white">
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="text-white hover:text-gray-300 transition" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-white hover:text-gray-300 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-gray-300 transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white hover:text-gray-300 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-gray-300 transition" />
            </a>
          </div>

          <div className="w-full justify-end lg:flex hidden">
            <img src={seal_footer} alt="seal_footer_image" />
          </div>
        </div>

        <div className="p-4 flex flex-col lg:flex-row gap-8">
          {/* Services Section */}
          <div className="flex-1">
            <h6 className="font-bold uppercase mb-4 text-white">Services</h6>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2 text-white text-[14px]">
                <p>Ghost Writing</p>
                <p>Editing</p>
                <p>Publishing</p>
                <p>Proofreading</p>
                <p>Audio Book</p>
                <p>Blog Writing</p>
                <p>Website Content Writing</p>
              </div>
              <div className="space-y-2 text-white text-[14px] ">
                <p>Book Cover</p>
                <p>Book Promotion</p>
                <p>Formatting</p>
                <p>e-Book Writing</p>
                <p>Book Video Trailer</p>
                <p>Author Website</p>
                <p>Article Writing</p>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-white">
            <h6 className="font-bold uppercase mb-4">Company</h6>
            <div className="space-y-2 text-[14px]">
              <p>About Us</p>
              <p>Testimonials</p>
              <NavLink to="/contact-us" className="hover:underline"><p>Contact Us</p></NavLink>
              <p className="mt-2">FAQs</p>
            </div>
          </div>
        </div>

      </div>

      <div className=" py-[10px] border-t border-black"
        style={{ background: 'linear-gradient(270deg, #2834d6, #3d17b3, #3524c4)' }}
      >
        <div className="container 2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] lg:px-0 px-5 w-[90%] mx-auto py-2 justify-center flex-col flex sm:flex-row items-center text-white">
          <p className="text-[12px] sm:w-[35%] md:w-full flex">
            © Convex Book Publishers 2025 <span className="md:flex hidden">&nbsp; All rights reserved</span>
          </p>

          <div className="w-full flex md:flex-row sm:flex-col py-2 sm:py-0 md:justify-end sm:items-end items-center justify-center space-x-2 text-[13px]">
            <NavLink to="/terms-conditions" className="hover:underline">
              Terms of Services
            </NavLink>
            <div className="border-white h-auto border-l-[1px] pl-2 md:mr-0 mr-5">
              <NavLink to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black flex flex-col">
        <div className="container xl:w-[65%] lg:w-[90%] md:w-[95%] sm:w-[80%] lg:px-0 px-5 w-[90%] mx-auto py-4 flex flex-col text-white">
          <p className="text-[13.5px] md:text-start text-center font-medium text-[#5025e6]">Disclaimer:</p>
          <p className="text-[11px] md:text-start text-center">
            Once delivered, the services offered by Convex Book Publisher
            become the clients' property. Once your work is accepted by a
            publishing house, Convex Book Publisher will not retain any
            ownership rights.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
