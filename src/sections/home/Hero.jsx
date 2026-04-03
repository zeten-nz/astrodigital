import "./hero.css";
import heroBg from "../../assets/background/hero-bg.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero relative rounded-xl overflow-hidden mt-4 px-6 py-12">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="hero-bg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Unlock the <span className="text-blue-400">Cosmos</span> with AI
        </h2>

        <p className="text-gray-400 mb-6">
          Personalized astronomical journeys
          powered by artificial intelligence.
          Experience the universe through
          scientific precision and immersive
          learning.
        </p>

        {/* SEARCH */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search constellations..."
            className="w-full h-12 rounded-xl pl-4 pr-4 bg-[#232a3a] text-white outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;