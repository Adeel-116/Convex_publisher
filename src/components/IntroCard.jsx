import ProcessGrid from "./ProcessCard";

const IntrCard = () => {
    return (
      <div className="w-full py-10 ">
        {/* Main Content */}
        <div className="space-y-12 text-center">
          {/* Header Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              What We Can Do?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Premium Book Publishers can let you ignore your problems like uncompleted drafts as we have creative professionals who have experience in making ideas become a popular story. Our team consists of vetted writers, who are perfect in their genres. They can help with writing, analyzing, editing, and suggesting fresh ideas. We have helped ghost writer for different authors, and have marketed their work so that people can know about it.
            </p>
          </div>


            <div className="w-full h-auto">
                        <ProcessGrid />
            </div>

        </div>
      </div>
    );
  };
  
  export default IntrCard;