import { languages } from "./languages";

const LanguageMenu = ({ onSelect }) => {
  return (
    <div className="absolute right-0 mt-2 w-40 bg-[#141b2b] rounded-xl shadow-lg border border-white/10 overflow-hidden z-50 animate-fadeIn">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelect(lang.code)}
          className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-600 transition"
        >
          <span className={`${lang.flag} w-5 h-5 rounded-full`}></span>
          <span className="text-white text-sm">{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageMenu;