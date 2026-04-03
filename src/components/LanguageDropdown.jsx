import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";
import LanguageMenu from "./LanguageMenu";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const currentLanguage = {
    code: i18n.language,
    flag: i18n.language === "en" ? "fi fi-us" : i18n.language === "ru" ? "fi fi-ru" : "fi fi-uz",
    label: i18n.language === "en" ? "English" : i18n.language === "ru" ? "Русский" : "O‘zbek",
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <LanguageButton current={currentLanguage} onClick={() => setOpen(!open)} />
      {open && <LanguageMenu onSelect={changeLanguage} />}
    </div>
  );
};

export default LanguageDropdown;