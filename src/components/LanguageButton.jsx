import 'flag-icons/css/flag-icons.min.css';
const LanguageButton = ({ current, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition shadow-md"
    >
      <span className="material-symbols-outlined">language</span>
      <span className={`${current.flag} w-5 h-5 rounded-full`}></span>
    </button>
  );
};

export default LanguageButton;