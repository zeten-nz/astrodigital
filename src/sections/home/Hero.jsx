const Hero = () => {
  return (
    <section className="px-4 mt-4">
      <div className="bg-[#111827] rounded-2xl p-5 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="max-w-[60%]">
          <h2 className="text-lg font-semibold leading-snug">
            Introduction to Programming
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Learn the basics of programming using Python
          </p>

          <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm">
            Get Started
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-20 h-20 bg-gray-600 rounded-xl flex items-center justify-center">
          🎯
        </div>

      </div>
    </section>
  );
};

export default Hero;