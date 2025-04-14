import React from 'react';

const steps = [
    {
      title: 'Submit Draft',
      description:
        'Our team will evaluate your draft when you submit it, and asks the clients for all relevant details, such a publishing as well as printing needs.',
    },
    {
      title: 'Final Editing Process',
      description:
        'The team then reviews your draft to check for final edits. Here they carry out analysis and proofreading.',
    },
    {
      title: 'Typesetting Plus Illustrations',
      description:
        'When the draft has been edited, the team chooses the font, layout, table of contents, spacing plus images and illustrations if needed.',
    },
    {
      title: 'Designing Phase',
      description:
        'The designing process then occurs where the front and back covers of the book get designed. This including the author bio.',
    },
    {
      title: 'Publication Plus Distribution',
      description:
        'When the edits and designs get approved, the manuscript will be submitted in the clients desired format for publication across various platforms.',
    },
  ];
  

const PublishingProcess = () => {
  return (
    <section className="px-4 py-8 text-black sm:py-10 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className=" md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Publication Process
        </h1>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full bg-blue-300 w-1" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12  order-1 md:order-none">
                    <div className="bg-white rounded-lg md:shadow-2xl shadow-lg p-6 h-full transition-transform duration-300 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-base md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="w-4/13 md:w-auto flex items-center justify-center order-2 md:order-none my-4 md:my-0">
                    <div className="relative flex items-center justify-center w-10 h-10 md:w-15 lg:w-20 lg:h-20 md:h-15">
                      <div className="absolute w-full h-full bg-white border-4 border-blue-400 rounded-full" />
                      <p className="text-2xl md:text-3xl font-bold text-blue-600 relative z-10">
                        0{index + 1}
                      </p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12 p-2 order-3" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishingProcess;