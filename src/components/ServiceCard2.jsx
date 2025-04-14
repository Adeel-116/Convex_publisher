import Button from "../components/Button"

const ServiceCard2 = () => {
  return (
    <div className="w-full mx-auto sm:p-8">
      {/* Main Content */}
      <div className="space-y-8">
        {/* Header Section */}
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Let’s Begin
          </h1>
          <p className="text-gray-600 mt-4">
          We are a ghostwriting and Publication company, providing a range of book services to help make the work of writers easier. Contact us today to find out more!
          </p>
        </div>

          <div className='flex flex-wrap gap-x-3'>
                <Button text="Get A Quote"/>
                <Button text="Live Chat"/>
                <Button text="+1 302-518-4405"/>
              </div>
       
      </div>
    </div>
  );
};

export default ServiceCard2;
