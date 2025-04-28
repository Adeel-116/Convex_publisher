import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import { FaCaretRight } from "react-icons/fa6";
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WatsappCTA from "../components/HomePage_Components/WatsappCTA";
import FloatingQuoteBox from "../components/HomePage_Components/FloatingQuoteBox";

function Privacy_Policy() {

   const [showButtons, setShowButton] = useState(false);
      useEffect(() => {
          const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            console.log(currentScrollPosition);
            setShowButton(currentScrollPosition > 500);
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);

  return (
    <>
      <header className="w-full bg-white pt-20">
        <Header onOpenQuote={() => setIsFormOpen(true)} />
      </header>
      <div className="2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] flex flex-col gap-y-1 w-[90%] mx-auto text-black py-10">
        <h1 className="w-full text-[#223235] text-[40px]">Privacy Policy</h1>
        <p className="w-full text-[#666666] text-[14px]">
          Privacy policy helps you and us both in keeping your information
          confidential. Our privacy policy will help in understanding the
          process we follow to maintain your privacy during and after the work
          process.
        </p>
        <h3 className="font-semibold text-[32px] text-[#333333] leading-none py-2">
          USER INFORMATION
        </h3>
        <p className="w-full text-[14px] text-[#666666]">
          We may collect the following information for your identification and
          serene collaboration.
        </p>

        <ul class="w-full py-1">
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Name, business name and job title.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Contact information including phone numbers, email address or
            website.
          </li>

          <p className="w-full text-[#666666] text-[14px] mb-[10px] pl-1">
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>

          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            We may use the information to improve our products and services.
          </li>

          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            We may also use your information to contact you to provide feedback
            on our services.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            We may use the information to customize the website according to
            your interests.
          </li>
        </ul>

        <h3 className="font-semibold text-[32px] text-[#333333] ">SECURITY</h3>
        <p className="w-full text-[14px] text-[#666666]">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable physical, electronic and managerial procedures to safeguard
          and secure the information we collect online.
        </p>

        <ul class="w-full py-1">
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Information of clients at Convex Book Publishers is kept extremely
            secure during transmission by the use of the Secure Sockets Layer
            (SSL) Software which encrypts information that client puts in.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Convex Book Publishers follows generally accepted industry
            standards to protect the personal information that is being
            submitted by the client during transmission and once we receive it.
            However, since no method of transmission over the Internet, or
            method of electronic storage, is 100% secure, we despite using
            commercially acceptable means to protect your personal information
            cannot guarantee its absolute security.
          </li>
        </ul>

        <h3 className="font-semibold text-[32px] text-[#333333] leading-none">
          3RD PARTY SHARING
        </h3>

        <ul class="w-full py-1">
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            We do not divulge any Personal information to the third parties.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            In no circumstances do we provide or sell personal information of
            our clients to the third parties
          </li>

          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Convex Book Publishers utilizes services of credit card processing
            companies to bill you for services. These companies never share,
            store, save or use exclusive information for any other purposes.
          </li>
        </ul>

        <h3 className="font-semibold text-[32px] text-[#333333] leading-none">
          COOKIES AND THEIR USE
        </h3>

        <ul class="w-full  py-1">
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Cookies, alphanumeric identifiers, facilitate our systems to
            recognize the clients' browsers and storage of items in their
            Shopping Carts during visits.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            To prevent the browser from accept new cookies, disable cookies and
            notify the user when a new cookie is received, Help portion of the
            toolbar on most browsers becomes most instrumental.
          </li>

          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Normally clients do not restrict cookies as they allow you to take
            full advantage of the top features at our site. Our study suggests
            that the clients leave cookies to be accepted.
          </li>

          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Convex Book Publishers keeps track of your IP address to help
            diagnose problems with our server and to administer our website.
            Your IP address is also used to gather broad demographic information
            about you, such as your location and your Internet service provider.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Client's collective information on how our users are utilizing the
            site may be gathered. This information might include details
            vis-à-vis traffic patterns through the site and search queries. No
            IP address/log file information is tied to Personally Identifiable
            Information (PII).
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            Information regarding browser types, access times, URLs through
            which people visit our site and URLs viewed by visitors while on our
            site is not accessible third parties, except in combined form.
          </li>
        </ul>
      </div>


        <Testimonials />
        <ContactForm />
        <Footer />

        <WatsappCTA />


            {showButtons && (
                <FloatingQuoteBox
                    show={showButtons}
                />
            )}
    </>
  );
}

export default Privacy_Policy;
