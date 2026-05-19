import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDownOutline } from "react-icons/io5";

const languages = [
  { code: "en", label: "English" },
  { code: "uz", label: "O'zbekcha" },
  { code: "ru", label: "Русский" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Hozirgi tilni topish (agar topilmasa, default ingliz tili)
  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Tashqariga bosganda yopilishi uchun
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="lang-selector" ref={dropdownRef}>
      <button
        className="lang-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {currentLang.label}
        <IoChevronDownOutline className={`lang-icon ${isOpen ? "open" : ""}`} />
      </button>

      <div className={`lang-dropdown ${isOpen ? "show" : ""}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`lang-item ${currentLang.code === lang.code ? "active" : ""}`}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
