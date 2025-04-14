import Logo from "../assets/logo.png"
const Footer = () => {
    return (
      <footer className="bg-[#3C7BCB] pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center flex w-full justify-center">
                <img src={Logo} className="lg:w-[20%] md:w-[25%] sm:w-[40%] w-[50%]" alt="" />
          </div>
  
          {/* Description */}
          <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
            We are proud of the work put forward by our team of expert ghostwriters, and we strive to continually learn and unlearn skills like creative writing in order to provide our clients with the best service possible.
          </p>
  
          {/* Contact Info */}
          <div className="text-center mb-8 font-mono text-sm">
            <p>5731 Dormington Lane, Orlando,32821, Florida</p>
            <p>info@premiumbookpublishers.com</p>
            <p>+1 302-586-4405</p>
          </div>
  
          {/* Services Grid */}
          <div className="mb-8">
            <h3 className="text-center font-bold uppercase mb-4">SERVICES</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div className="space-y-1">
                <p>Ghost Writing</p>
                <p>Editing</p>
                <p>Publishing</p>
                <p>Proofreading</p>
                <p>Audio Book</p>
                <p>Blog Writing</p>
                <p>Website Content Writing</p>
              </div>
              
              <div className="space-y-1">
                <p>Book Cover</p>
                <p>Book Promotion</p>
                <p>Formatting</p>
                <p>e-Book Writing</p>
                <p>Book Video Trailer</p>
                <p>Author Website</p>
                <p>Article Writing</p>
              </div>
  
              <div className="space-y-1">
                <p>About Us</p>
                <p>Testimonials</p>
                <p>Contact Us</p>
                <p>FAQs</p>
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="border-t pt-6 pb-8 text-center text-sm">
            <p className="mb-2">© Convex Book Publishers 2005</p>
            <div className="flex justify-center space-x-4">
              <span>Terms of Services</span>
              <span>|</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;