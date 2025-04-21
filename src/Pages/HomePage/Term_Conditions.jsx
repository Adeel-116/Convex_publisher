import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import { FaCaretRight } from "react-icons/fa6";
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import WatsappCTA from '../../components/HomePage_Components/WatsappCTA';
import FloatingQuoteBox from '../../components/HomePage_Components/FloatingQuoteBox';

function Term_Conditions() {
   const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            service: "",
            budget: "",
            comments: "",
        });
  
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
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
  };


  return (
    <>
      <header className="w-full bg-white pt-20">
        <Header onOpenQuote={() => setIsFormOpen(true)} />
      </header>
      <div className='2xl:w-[65%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[80%] flex flex-col gap-y-1 w-[90%] mx-auto text-black py-10'>
        <h1 className='w-full text-[#223235] text-[40px]'>Terms & Conditions</h1>
        <p className='w-full text-[#666666]'>The following terms and conditions apply to projects undertaken by www.premiumbookpublishers.com</p>
        <h3 className='font-semibold text-[32px] text-[#333333]'>COPYRIGHT</h3>
        <p className='w-full text-[14px] text-[#666666]'>You will hold full copyright to the content that we will develop for you and deliver as per the agreed terms. We will hold no copyright whatsoever on the content and you are free to publish and use it as per your wish.</p>
        <h3 className='font-semibold text-[32px] text-[#333333]'>PAYMENT</h3>
        <p className='w-full text-[14px] text-[#666666]'>We charge 100% advance payment for all services mentioned on the website. All transaction charges and tax (as applicable) are to be borne by the client.</p>
        <h3 className='font-semibold text-[32px] text-[#333333]'>REVISIONS</h3>
        <p className='w-full text-[14px] text-[#666666] mb-[14px]'>We offer unlimited number of revisions on delivered work, as long as the requests are made within 7 days of delivering the work, and in special cases, as long as the requests are made within 14 days of delivering of work. All revision requests pertaining to customers order will be completed as per the urgency of the order with 24 hours as standard minimum turnaround time.
          <br />
          <br />
          Revision turnaround time as per urgency is as follows:
        </p>

        <ul class="w-full">
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
          <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            For orders up to 24 hours of urgency; Revision turnaround time would be 24 hours.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
          <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            For orders between 24-48 hours of urgency; Revision turnaround time would be 48 hours.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
          <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            For orders of 48 hours and above; Revision turnaround time would be 72 hours.
          </li>
        </ul>

        <h3 className='font-semibold text-[32px] leading-none text-[#333333]'>PROJECT REQUIREMENTS</h3>
        <p className='w-full text-[14px] text-[#666666]'>Any project requirements will be discussed with the clients before the start of a project. Service level disputes will be addressed based on the agreed terms and requirements at the beginning of a project, these terms and conditions, as well as reasonable business practices.</p>

        <h3 className='font-semibold text-[32px] text-[#333333]'>REFUND POLICY</h3>
        <p className='w-full text-[14px] text-[#666666]'>You may claim a full refund of your amount before we have started working on your project. However, once the work has started on a project the refund will be processed after deducting any applicable transaction charges from the amount.

          <br /><br /> A refund request can be submitted if you are not satisfied with any product or service provided by premiumbookpublishers within 5 days of your order completion. Certain percentage based refund would be granted if we are unable to provide required service through our unlimited revision policy. If no refund request is received within five days after your order has been delivered, your satisfaction over the delivered order shall be assumed by both the parties.

          <br /><br />On the off chance that you have a special complaint scenario and request a full amount refund, then, at that point, your case will be sent to the evaluation team. On the off chance that after every one of the revisions you actually don't feel happy with the work and request a full refund, don't stress we won't disappoint you. The evaluation team will evaluate the content in contrast to your request details. They will take an unbiased decision dependent on realities and proof. In case if there is any missing or weakness in the content you will get a full refund. Premium Book Publishers will not refund any amount on change of mind before or after the project has started.</p>


        <h3 className='font-semibold text-[32px] leading-none py-2  text-[#333333]'>TERM OF USE OF THIS WEBSITE</h3>

        <ul class="list  mb-[15px] w-full">
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
          <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            The information provided on www.premiumbookpublishers.com includes, but is not limited to, the services provided by the company and does not render any advice, certifications, guarantees or warranties.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
          <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            The company or any of its affiliates or associates or employees shall not be in any way responsible for any loss or damage that may arise to any person from any inadvertent error in the information contained in this website.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
          <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
          The company and its affiliates and associates shall not be liable, at any time, for any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communications line failure, theft or destruction or unauthorized access to, alteration of, or use of information contained on the website.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
          <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
          You agree to defend, indemnify, and hold the company and its subsidiaries, affiliates, officers, agents, and employees, harmless from and against any claims, liabilities, damages, losses, and expenses, arising out of or in any way connected with (i) your access to or use of the website and the services therein; (ii) your violation of these Terms of Use; (iii) your violation of any third party right, including without limitation any intellectual property right, publicity, confidentiality, property or privacy right.
          </li>
          <li className="text-[#666666] pb-[10px] leading-[20px] text-[14px] font-normal relative flex items-start gap-2">
            <FaCaretRight className="text-[#1f295d] text-[13px] mt-[2px] min-w-[13px]" />
            This Agreement or your use of this Site does not constitute any joint venture, partnership, employment or agency relationship between you and the company.</li>
        </ul>
      </div>

        <Testimonials />
        <ContactForm />
        <Footer />
        <WatsappCTA />


            {showButtons && (
                <FloatingQuoteBox
                    show={showButtons}
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            )}

    </>

  )
}

export default Term_Conditions
