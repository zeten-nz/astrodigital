const recommendation = {
  title: "The Anatomy of Black Holes",
  subtitle: "AI Selected",
  description:
    "Dive deep into event horizons and singularity. This course uses simulated data from the Event Horizon Telescope to provide an unprecedented view.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBhGTN1eBmcrAN2cs9AwUNiU0NtpFOqos4UlCx6XS7B0kh8GqCJ7BLkx748oOUz61LdMzo5KxroF5Pp6W7P2qtVRfMr5RoNK_zPoeacdngE1kBNIkYiAQ3VDo2sGWmV4wDRCjXhSgFcSn-SF2KiQjYqV9nPkKZojG66fgFdSlfV591FYqEspxJloqsnu1Ciy-qI57lmYW220uWHfbl5G6XXs3AZp73TRNRxfseH4YPc5FK3AO7EBaHTHUsPerEQpQWv8VRBsBjca64",
};

const Recommendation = () => {
  return (
    <section className="mt-10 px-6 md:px-0 max-w-5xl mx-auto">
      <h3 className="text-xl font-semibold text-white mb-6">
        Today’s Recommendation
      </h3>

      <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-[#141b2b] border border-white/10 flex flex-col md:flex-row gap-6 p-6 md:p-8 hover:shadow-2xl transition-shadow">
        {/* IMAGE */}
        <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden relative flex-shrink-0">
          <img
            src={recommendation.image}
            alt={recommendation.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent mix-blend-overlay"></div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
            <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
            {recommendation.subtitle}
          </div>

          <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {recommendation.title}
          </h4>

          <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
            {recommendation.description}
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2 w-max transition">
            Start Learning
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* GLOW EFFECT */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 blur-[60px] rounded-full pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Recommendation;