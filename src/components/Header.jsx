import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

// Language translations
const translations = {
  en: {
    home: 'Home',
    home1: 'Home 1',
    home2: 'Home 2',
    about: 'About Us',
    services: 'Services',
    allServices: 'All Services',
    financial: 'Financial Planning & Analysis',
    tax: 'Tax Preparation & Filing',
    budget: 'Budget Management',
    investment: 'Investment Advisory',
    audit: 'Audit & Compliance',
    bookkeeping: 'Bookkeeping & Accounting',
    blog: 'Blog',
    contact: 'Contact Us',
    logout: 'Logout',
    language: 'Language',
    english: 'English',
    arabic: 'Arabic',
    hebrew: 'Hebrew',
  },
  ar: {
    home: 'الرئيسية',
    home1: 'الرئيسية 1',
    home2: 'الرئيسية 2',
    about: 'معلومات عنا',
    services: 'الخدمات',
    allServices: 'كل الخدمات',
    financial: 'التخطيط المالي والتحليل',
    tax: 'إعداد وتقديم الضرائب',
    budget: 'إدارة الميزانية',
    investment: 'استشارات الاستثمار',
    audit: 'التدقيق والامتثال',
    bookkeeping: 'المحاسبة ومسك الدفاتر',
    blog: 'مدونة',
    contact: 'اتصل بنا',
    logout: 'تسجيل خروج',
    language: 'اللغة',
    english: 'الإنجليزية',
    arabic: 'العربية',
    hebrew: 'العبرية',
  },
  he: {
    home: 'בית',
    home1: 'בית 1',
    home2: 'בית 2',
    about: 'אודות',
    services: 'שירותים',
    allServices: 'כל השירותים',
    financial: 'תכנון פיננסי וניתוח',
    tax: 'הכנת והגשת מס',
    budget: 'ניהול תקציב',
    investment: 'ייעוץ השקעות',
    audit: 'ביקורת וציות',
    bookkeeping: 'הנהלת חשבונות',
    blog: 'בלוג',
    contact: 'צור קשר',
    logout: 'התנתק',
    language: 'שפה',
    english: 'אנגלית',
    arabic: 'ערבית',
    hebrew: 'עברית',
  },
};

const Header = () => {
  const navigate = useNavigate();
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const storedLang = localStorage.getItem('language') || 'en';
      setLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      window.dispatchEvent(new Event('language-changed'));
    }
  }, [language]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      const handleLangChange = () => {
        const newLang = localStorage.getItem('language') || 'en';
        setLanguage(newLang);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      window.addEventListener('language-changed', handleLangChange);
      window.addEventListener('storage', handleLangChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
        window.removeEventListener('language-changed', handleLangChange);
        window.removeEventListener('storage', handleLangChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const t = translations[language];

  // For RTL languages
  const isRTL = language === 'ar' || language === 'he';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#1E2A38] border-b border-[#141B25]' : 'bg-white border-b border-gray-200'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-4 sm:pl-6 lg:pl-14 items-center">
            <button onClick={() => navigate('/home1')} className="focus:outline-none">
              <img src={logo} alt="STACKLY" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>

          {/* Right side - Navigation and Icons */}
          <div className="hidden min-[480px]:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/home1');
                  toggleHomeDropdown();
                }}
                onMouseEnter={toggleHomeDropdown}
                onFocus={toggleHomeDropdown}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-orange-400 transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isHomeDropdownOpen}
              >
                {t.home}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isHomeDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`} onMouseLeave={toggleHomeDropdown}>
                  <Link to="/home1" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{t.home1}</Link>
                  <Link to="/home2" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{t.home2}</Link>
                </div>
              )}
            </div>

            <Link
              to="/aboutus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-orange-400 transition-colors duration-200`}
            >
              {t.about}
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/service');
                  toggleServicesDropdown();
                }}
                onMouseEnter={toggleServicesDropdown}
                onFocus={toggleServicesDropdown}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-orange-400 transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                {t.services}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`} onMouseLeave={toggleServicesDropdown}>
                  <Link to="/service" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.allServices}</Link>
                  <Link to="/financial-planning-analysis" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.financial}</Link>
                  <Link to="/tax-preparation-filing" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.tax}</Link>
                  <Link to="/budget-management" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.budget}</Link>
                  <Link to="/investment-advisory" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.investment}</Link>
                  <Link to="/audit-compliance" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.audit}</Link>
                  <Link to="/bookkeeping-accounting" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.bookkeeping}</Link>
                </div>
              )}
            </div>
            
            <Link
              to="/blog"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-orange-400 transition-colors duration-200`}
            >
              {t.blog}
            </Link>

            <Link
              to="/contactus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-orange-400 transition-colors duration-200`}
            >
              {t.contact}
            </Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center px-3 py-2 rounded-md border ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700' : 'bg-orange-100 text-black border-orange-300 hover:bg-orange-200'}`}
                onClick={toggleLangDropdown}
                aria-haspopup="true"
                aria-expanded={isLangDropdownOpen}
              >
                <span className="mr-1">{t.language}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-32 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-orange-100'}`} onClick={() => handleLanguageChange('en')}>{t.english}</button>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-orange-100'}`} onClick={() => handleLanguageChange('ar')}>{t.arabic}</button>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-orange-100'}`} onClick={() => handleLanguageChange('he')}>{t.hebrew}</button>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-orange-100 border-orange-300 hover:bg-orange-200'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown */}
            <div className="relative">
              {(() => {
                const firstname = (localStorage.getItem('firstname') || '').trim();
                const lastname = (localStorage.getItem('lastname') || '').trim();
                let initials = '';
                if (firstname.length > 0) {
                  initials += firstname[0].toUpperCase();
                }
                if (lastname.length > 0) {
                  initials += lastname[0].toUpperCase();
                }
                return (
                  <>
                    <button
                      className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold focus:outline-none"
                      onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className={`absolute right-0 mt-2 w-32 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                        <button
                          className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-orange-100'}`}
                          onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                        >
                          {t.logout}
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>

          {/* Mobile icons - Only visible on very small screens */}
          <div className="flex items-center space-x-4 min-[480px]:hidden">
            {/* Language Dropdown (Mobile) */}
            <div className="relative">
              <button
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : 'bg-orange-100 border-orange-300 text-black hover:bg-orange-200'}`}
                onClick={toggleLangDropdown}
                aria-label="Toggle language"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
              {isLangDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-32 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-orange-100'}`} onClick={() => handleLanguageChange('en')}>{t.english}</button>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-orange-100'}`} onClick={() => handleLanguageChange('ar')}>{t.arabic}</button>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-orange-100'}`} onClick={() => handleLanguageChange('he')}>{t.hebrew}</button>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle (Mobile) */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-orange-100 border-orange-300 hover:bg-orange-200'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown (Mobile) */}
            <div className="relative">
              {(() => {
                const firstname = (localStorage.getItem('firstname') || '').trim();
                const lastname = (localStorage.getItem('lastname') || '').trim();
                let initials = '';
                if (firstname.length > 0) {
                  initials += firstname[0].toUpperCase();
                }
                if (lastname.length > 0) {
                  initials += lastname[0].toUpperCase();
                }
                return (
                  <>
                    <button
                      className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold focus:outline-none"
                      onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className={`absolute right-0 mt-2 w-32 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25] text-white' : 'bg-white border-gray-200 text-gray-800'} rounded-md shadow-lg border py-2 z-50`}>
                        <button
                          className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'hover:bg-[#22304a]' : 'hover:bg-orange-100'}`}
                          onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                        >
                          {t.logout}
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Only visible on very small screens */}
        {isMobileMenuOpen && (
          <div className={`min-[480px]:hidden border-t ${theme === 'dark' ? 'border-[#141B25] bg-[#1E2A38]' : 'border-gray-200 bg-white'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Home Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleHomeDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{t.home}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <a href="/home1" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.home1}</a>
                    <a href="/home2" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.home2}</a>
                  </div>
                )}
              </div>

              <Link to="/aboutus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.about}
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{t.services}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/service" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.allServices}</Link>
                    <Link to="/financial-planning-analysis" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.financial}</Link>
                    <Link to="/tax-preparation-filing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.tax}</Link>
                    <Link to="/budget-management" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.budget}</Link>
                    <Link to="/investment-advisory" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.investment}</Link>
                    <Link to="/audit-compliance" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.audit}</Link>
                    <Link to="/bookkeeping-accounting" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.bookkeeping}</Link>
                  </div>
                )}
              </div>

              <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.blog}
              </Link>

              <Link to="/contactus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;