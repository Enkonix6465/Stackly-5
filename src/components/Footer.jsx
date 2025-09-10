import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const translations = {
  en: {
    company: "Finance & Accounting Solutions",
    description: "Leading the future with cutting-edge financial tools and accounting solutions for modern businesses.",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact us",
    ourServices: "Our Services",
    financialPlanning: "Financial Planning & Analysis",
    bookkeeping: "Bookkeeping & Accounting",
    taxPrep: "Tax Preparation & Filing",
    budget: "Budget Management",
    investment: "Investment Advisory",
    audit: "Audit & Compliance",
    getInTouch: "Get In Touch",
    phone: "+919390594407",
    email: "finance@stackly.in",
    location: "India",
    hours: "Mon - Fri: 9am - 6pm",
    cta: "Start Your Financial Journey",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy",
    copyright: "© 2025 Finance & Accounting Company. All rights reserved."
  },
  ar: {
    company: "حلول المالية والمحاسبة",
    description: "نقود المستقبل بأدوات مالية متطورة وحلول محاسبية للأعمال الحديثة.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    blog: "المدونة",
    contact: "اتصل بنا",
    ourServices: "خدماتنا",
    financialPlanning: "التخطيط والتحليل المالي",
    bookkeeping: "مسك الدفاتر والمحاسبة",
    taxPrep: "إعداد وتقديم الضرائب",
    budget: "إدارة الميزانية",
    investment: "استشارات الاستثمار",
    audit: "التدقيق والامتثال",
    getInTouch: "تواصل معنا",
    phone: "+919390594407",
    email: "finance@stackly.in",
    location: "الهند",
    hours: "الإثنين - الجمعة: 9 صباحًا - 6 مساءً",
    cta: "ابدأ رحلتك المالية",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    cookie: "سياسة الكوكيز",
    copyright: "© 2025 شركة المالية والمحاسبة. جميع الحقوق محفوظة."
  },
  he: {
    company: "פתרונות פיננסיים וחשבונאיים",
    description: "מובילים את העתיד עם כלים פיננסיים מתקדמים ופתרונות חשבונאות לעסקים מודרניים.",
    quickLinks: "קישורים מהירים",
    home: "בית",
    about: "אודות",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    ourServices: "השירותים שלנו",
    financialPlanning: "תכנון וניתוח פיננסי",
    bookkeeping: "ניהול חשבונות וחשבונאות",
    taxPrep: "הכנת והגשת מס",
    budget: "ניהול תקציב",
    investment: "ייעוץ השקעות",
    audit: "ביקורת וציות",
    getInTouch: "צור קשר",
    phone: "+919390594407",
    email: "finance@stackly.in",
    location: "הודו",
    hours: "ב׳-ו׳: 9:00-18:00",
    cta: "התחל את המסע הפיננסי שלך",
    privacy: "מדיניות פרטיות",
    terms: "תנאי שימוש",
    cookie: "מדיניות עוגיות",
    copyright: "© 2025 חברת פיננסים וחשבונאות. כל הזכויות שמורות."
  }
};

const Footer = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    const handleLangChange = () => setLanguage(localStorage.getItem('language') || 'en');
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    window.addEventListener('language-changed', handleLangChange);
    window.addEventListener('focus', handleLangChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
      window.removeEventListener('language-changed', handleLangChange);
      window.removeEventListener('focus', handleLangChange);
    };
  }, []);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
    window.dispatchEvent(new Event('language-changed'));
  };
  const t = translations[language];
  const isRTL = language === 'ar' || language === 'he';
  const bg = theme === 'dark' ? 'bg-[#1E2A38]' : 'bg-white';
  const textMain = theme === 'dark' ? 'text-white' : 'text-black';
  const textSub = theme === 'dark' ? 'text-gray-300' : 'text-black';
  const border = theme === 'dark' ? 'border-gray-700' : 'border-gray-800';
  return (
    <footer className={`${bg} ${textMain}`} dir={isRTL ? 'rtl' : 'ltr'}>
     
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 min-[768px]:grid-cols-4 gap-16 justify-between">
          {/* Column 1 - Company Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="STACKLY" className="h-8 w-auto" />
            </div>
            <h3 className="text-orange-500 font-semibold text-lg">
              {t.company}
            </h3>
            <p className={`${textSub} text-sm leading-relaxed`}>
              {t.description}
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-2">
              {/* ...same social icons as before... */}
              {/* You can keep your SVGs here */}
            </div>
          </div>
          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home1" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.about}
                </Link>
              </li>
              <li>
                <Link to="/service" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.services}
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link to="/contactus" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3 - Our Services */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">
              {t.ourServices}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/financial-planning-analysis" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.financialPlanning}
                </Link>
              </li>
              <li>
                <Link to="/bookkeeping-accounting" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.bookkeeping}
                </Link>
              </li>
              <li>
                <Link to="/tax-preparation-filing" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.taxPrep}
                </Link>
              </li>
              <li>
                <Link to="/budget-management" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.budget}
                </Link>
              </li>
              <li>
                <Link to="/investment-advisory" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.investment}
                </Link>
              </li>
              <li>
                <Link to="/audit-compliance" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                  {t.audit}
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 4 - Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">
              {t.getInTouch}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className={`${textSub}`}>{t.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className={`${textSub}`}>{t.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className={`${textSub}`}>{t.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`${textSub}`}>{t.hours}</span>
              </div>
            </div>
            <Link 
              to="/contactus" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-5 rounded-lg transition-colors text-[8px] duration-200 mt-4 whitespace-nowrap text-center block
                sm:w-auto sm:inline-block sm:mx-auto
                "
            >
              <span className="block sm:inline">{t.cta}</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Footer Bar - Legal Links */}
      <div className={`border-t ${border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`${textSub} text-sm`}>
              {t.copyright}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                {t.privacy}
              </a>
              <a href="#" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                {t.terms}
              </a>
              <a href="#" className={`${textSub} hover:text-orange-400 transition-colors duration-200`}>
                {t.cookie}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;