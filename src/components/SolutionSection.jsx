const SolutionSection = () => {
    return (
      <div className="min-h-screen 2xl:w-[80%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] py-16 sm:px-4 mx-auto">
        <div className="w-auto mx-auto">
          {/* Header Section */}
          <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services Are Not Only Concerned With Writing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              We lead the publishing industry with comprehensive services across all genres including fiction, non-fiction, sci-fi, educational, biographies, and children's books.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
            {/* Row 1 */}
            <ServiceCard title="Writing eBooks" />
            <ServiceCard title="Developmental Editing" />
            <ServiceCard title="Proofreading Expertise" />
  
            {/* Row 2 */}
            <ServiceCard title="Reviewing Editorials" />
            <ServiceCard title="Designing Book Covers" />
            <ServiceCard title="Unique Book Illustrations" />
  
            {/* Row 3 */}
            <ServiceCard title="Publishing" />
            <ServiceCard title="Marketing" />
            <ServiceCard title="Making Website For Author" />
  
            {/* Row 4 */}
            <ServiceCard title="Audiobooks" />
            <ServiceCard title="Trailers For Book Videos" />
            <ServiceCard title="Writing Articles" />
          </div>
  
          {/* CTA Section */}
          <div className="text-center bg-blue-600 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Do You Want To Get Industry Specific Content Services?
            </h2>
            <span 
            
              className="inline-block bg-white text-blue-600 sm:px-8 sm:py-3 p-4 rounded-full 
                        hover:bg-blue-50 hover:scale-105 transition-all font-semibold"
            >
              Call Now: +1 302-518-4405
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  const ServiceCard = ({ title }) => (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 
                  hover:shadow-lg transition-all duration-300 group">
      <div className="flex  items-center gap-3">
        <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:animate-pulse"></div>
        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
          {title}
        </h4>
      </div>
    </div>
  );
  
  export default SolutionSection;