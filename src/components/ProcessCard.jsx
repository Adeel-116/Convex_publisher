const ProcessGrid = () => {
  // Card content data
  const cards = [
    {
      title: "Creating The Outline",
      content: "We start by making an outline of your idea, then proceed towards creating a plot and proposing the end of the story."
    },
    {
      title: "Research & Development",
      content: "Deep dive into subject matter expertise and develop comprehensive content strategy."
    },
    {
      title: "Draft Composition",
      content: "Transform concepts into initial draft while maintaining author's unique voice."
    },
    {
      title: "Editorial Refinement",
      content: "Multi-stage editing process with structural and quality assurance checks."
    },
    {
      title: "Final Publication",
      content: "Formatting for various platforms and official release management."
    }
  ];

  return (
    <div className="h-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <ProcessCard 
            key={index}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
};

// Updated ProcessCard component
const ProcessCard = ({ title, content }) => {
  return (
    <div className="group relative h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <svg 
              className="w-8 h-8 text-blue-600"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-2xl text-left font-bold text-gray-800">{title}</h3>
        </div>

        {/* Content */}
        <p className="text-gray-600 text-left leading-relaxed pl-4 border-l-2 border-blue-100">
          {content}
        </p>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-50 rounded-2xl transition-all pointer-events-none"></div>
    </div>
  );
};

export default ProcessGrid;