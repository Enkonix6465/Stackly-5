import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import contact1 from '../assets/contact1.jpg';
import contact2 from '../assets/contact2.jpg';
import contact3 from '../assets/contact3.jpg';
import contactusHeroVideo from '../assets/contactushero.mp4';
import faqImage from '../assets/faq.png';

// Translations for Contact Us Page
const translations = {
  en: {
    heroTitle: "Expert Financial Guidance",
    heroDesc: "Connect with our certified accounting professionals for personalized financial solutions, tax planning, and business advisory services tailored to your success.",
    teamTitle: "Meet Our Support Team",
    location: "Hyderabad, Telangana, India",
    mail: "stackly.in",
    phone: "+91 93905 94407",
    getInTouch: "GET IN TOUCH",
    contactHeading: "Together, we make it happen",
    sendBtn: "Send Message",
    successMsg: "Form submitted successfully. Thank you!",
    locationTitle: "LOCATION",
    locationHeading: "How To Reach Our Location",
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    faqHeading: "Got Questions? We've Got Answers",
    faqs: [
      {
        question: "How do I get started with your accounting services?",
        answer: "Getting started is simple! Contact us for a free consultation where we'll assess your financial needs and recommend the best service package for your business or personal requirements.",
      },
      {
        question: "What types of businesses do you work with?",
        answer: "We serve businesses of all sizes, from startups and small businesses to large corporations. Our expertise spans various industries including retail, manufacturing, technology, healthcare, and professional services.",
      },
      {
        question: "Do you provide tax planning and preparation services?",
        answer: "Yes! We offer comprehensive tax services including strategic tax planning, preparation of business and personal tax returns, tax compliance, and representation during audits.",
      },
      {
        question: "How quickly can you respond to urgent financial matters?",
        answer: "We understand that financial matters can be time-sensitive. Our team typically responds to urgent inquiries within 2-4 hours during business hours, and we offer priority support for critical issues.",
      },
      {
        question: "What makes your accounting firm different?",
        answer: "Our personalized approach, cutting-edge technology, and deep industry expertise set us apart. We don't just manage your books – we provide strategic insights to help your business grow and succeed.",
      },
    ],
    newsletterTitle: "Subscribe to Our Newsletter",
    newsletterDesc: "Stay updated with the latest financial insights, expert tips, and exclusive offers.",
    newsletterBtn: "Subscribe",
    newsletterSuccess: "Subscribed!",
    formFields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Write A Message"
    }
  },
  ar: {
    heroTitle: "إرشاد مالي احترافي",
    heroDesc: "تواصل مع خبرائنا المعتمدين للحصول على حلول مالية شخصية، تخطيط الضرائب، وخدمات استشارية للأعمال مصممة لنجاحك.",
    teamTitle: "تعرف على فريق الدعم",
    location: "حيدر آباد، تيلانجانا، الهند",
    mail: "stackly.in",
    phone: "+91 93905 94407",
    getInTouch: "تواصل معنا",
    contactHeading: "تحتاج مساعدة؟ تواصل معنا",
    sendBtn: "إرسال الرسالة",
    successMsg: "تم إرسال النموذج بنجاح. شكراً لك!",
    locationTitle: "الموقع",
    locationHeading: "كيف تصل إلى موقعنا",
    faqTitle: "الأسئلة الشائعة",
    faqHeading: "لديك أسئلة؟ لدينا الإجابات",
    faqs: [
      {
        question: "كيف أبدأ مع خدمات المحاسبة الخاصة بكم؟",
        answer: "البدء سهل! تواصل معنا لاستشارة مجانية حيث نقيم احتياجاتك المالية ونوصي بأفضل باقة خدمات.",
      },
      {
        question: "ما أنواع الأعمال التي تعملون معها؟",
        answer: "نخدم جميع أنواع الأعمال من الشركات الناشئة والصغيرة إلى الشركات الكبرى، ونغطي قطاعات متعددة.",
      },
      {
        question: "هل تقدمون خدمات تخطيط وإعداد الضرائب؟",
        answer: "نعم! نقدم خدمات ضريبية شاملة تشمل التخطيط الاستراتيجي وإعداد الإقرارات والامتثال والتمثيل أثناء التدقيق.",
      },
      {
        question: "كم تستغرقون للرد على الأمور المالية العاجلة؟",
        answer: "نرد عادةً خلال 2-4 ساعات في أوقات العمل ونوفر دعمًا أولوياً للحالات الحرجة.",
      },
      {
        question: "ما الذي يميز شركتكم المحاسبية؟",
        answer: "نهجنا الشخصي والتقنيات الحديثة وخبرتنا العميقة تميزنا. نقدم رؤى استراتيجية لنمو أعمالك.",
      },
    ],
    newsletterTitle: "اشترك في نشرتنا البريدية",
    newsletterDesc: "ابقَ على اطلاع بأحدث الرؤى المالية والنصائح والعروض الحصرية.",
    newsletterBtn: "اشترك",
    newsletterSuccess: "تم الاشتراك!",
    formFields: {
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      message: "اكتب رسالة"
    }
  },
  he: {
    heroTitle: "ייעוץ פיננסי מקצועי",
    heroDesc: "התחבר עם רואי החשבון המוסמכים שלנו לפתרונות פיננסיים אישיים, תכנון מס וייעוץ עסקי מותאם להצלחה שלך.",
    teamTitle: "הכירו את צוות התמיכה",
    location: "היידראבאד, טלנגנה, הודו",
    mail: "stackly.in",
    phone: "+91 93905 94407",
    getInTouch: "צור קשר",
    contactHeading: "צריך עזרה? צור קשר",
    sendBtn: "שלח הודעה",
    successMsg: "הטופס נשלח בהצלחה. תודה!",
    locationTitle: "מיקום",
    locationHeading: "איך להגיע אלינו",
    faqTitle: "שאלות נפוצות",
    faqHeading: "יש לך שאלות? יש לנו תשובות",
    faqs: [
      {
        question: "איך מתחילים עם שירותי הנהלת החשבונות שלכם?",
        answer: "פשוט! פנה אלינו לייעוץ חינם בו נבחן את הצרכים שלך ונמליץ על חבילת השירות המתאימה.",
      },
      {
        question: "עם אילו סוגי עסקים אתם עובדים?",
        answer: "אנו עובדים עם עסקים בכל הגדלים, מענפים שונים כולל קמעונאות, ייצור, טכנולוגיה, בריאות ושירותים מקצועיים.",
      },
      {
        question: "האם אתם מספקים שירותי תכנון והגשת מס?",
        answer: "כן! אנו מציעים שירותי מס מקיפים כולל תכנון אסטרטגי, הכנת דוחות, עמידה בתקנות וייצוג בביקורות.",
      },
      {
        question: "תוך כמה זמן מגיבים לפניות דחופות?",
        answer: "אנו מגיבים בדרך כלל תוך 2-4 שעות בשעות הפעילות ומספקים תמיכה עדיפות למקרים קריטיים.",
      },
      {
        question: "מה מייחד את משרד הנהלת החשבונות שלכם?",
        answer: "הגישה האישית, הטכנולוגיה המתקדמת והניסיון העמוק שלנו. אנו מספקים תובנות אסטרטגיות לצמיחת העסק שלך.",
      },
    ],
    newsletterTitle: "הירשם לניוזלטר שלנו",
    newsletterDesc: "קבל עדכונים על תובנות פיננסיות, טיפים מקצועיים ומבצעים בלעדיים.",
    newsletterBtn: "הירשם",
    newsletterSuccess: "נרשמת!",
    formFields: {
      firstName: "שם פרטי",
      lastName: "שם משפחה",
      email: "אימייל",
      phone: "טלפון",
      message: "כתוב הודעה"
    }
  }
};

const ContactUs = () => {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Theme and language sync
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

  const t = translations[language];
  const isRTL = language === 'ar' || language === 'he';

  // Color helpers for Home1 dark theme
  const bgMain = theme === 'dark' ? 'bg-[#1E2A38]' : 'bg-gray-50';
  const bgSection = theme === 'dark' ? 'bg-[#1E2A38]' : 'bg-[#f9f9f4]';
  const bgSectionAlt = theme === 'dark' ? 'bg-[#141B25]' : 'bg-[#fdf9f4]';
  const bgCard = theme === 'dark' ? 'bg-[#1E2A38]' : 'bg-white';
  const textMain = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSub = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const textAccent = 'text-orange-500';

  return (
    <div className={`min-h-[90vh] ${bgMain} transition-colors duration-300`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className={`relative mb-0 h-screen md:h-screen md:py-20 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden`}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={contactusHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black bg-opacity-30"></div>
        <div className="relative z-20 text-center px-2 sm:px-4 flex flex-col items-center justify-center w-full h-full">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            {t.heroTitle}
          </motion.h1>
          <motion.p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Meet Our Support Team */}
      <section className={`w-full ${bgSection} py-8 transition-colors duration-300`}
      style={{ backgroundColor: theme === 'dark' ? '#141B25' : '#fdf9f4' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className={`font-bold ${textAccent} mb-8 text-center`}
            style={{ fontSize: '48px', lineHeight: '1.1' }} // Force 48px for consistency
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            {t.teamTitle}
          </motion.h2>
          <div className="grid lg:grid-cols-3  gap-8 w-full">
            {/* Card 1: Location */}
            <motion.div
              className={`${bgCard} rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}>
              <motion.img
                src={contact1}
                alt="Contact Location"
                className="w-full h-56 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className={`font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'} text-lg`}>{isRTL ? (language === 'ar' ? "موقعنا" : "המיקום שלנו") : "Our Location"}</div>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>{t.location}</div>
            </motion.div>
            {/* Card 2: Mail */}
            <motion.div
              className={`${bgCard} rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <motion.img
                src={contact2}
                alt="Contact Mail"
                className="w-full h-56 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className={`font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'} text-lg`}>{isRTL ? (language === 'ar' ? "راسلنا" : "שלח לנו מייל") : "Mail Us"}</div>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>{t.mail}</div>
            </motion.div>
            {/* Card 3: Phone */}
            <motion.div
              className={`${bgCard} rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}>
              <motion.img
                src={contact3}
                alt="Contact Phone"
                className="w-full h-56 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className={`font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'} text-lg`}>{isRTL ? (language === 'ar' ? "اتصل بنا" : "התקשר אלינו") : "Call Us"}</div>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>{t.phone}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section
        className={`py-10 md:py-20 ${bgMain} transition-colors duration-300`}
        style={{ backgroundColor: theme === 'dark' ? '#1E2A38' : '#fff' }}
      >
        <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
          <div className="flex flex-col gap-8 md:gap-16 items-start">
            {/* Left Side */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-orange-500 font-bold text-4xl lg:text-5xl uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t.getInTouch}
              </motion.div>
              <motion.h2
                className={`text-4xl lg:text-5xl font-bold leading-tight ${textMain}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t.contactHeading}
              </motion.h2>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              className={`${bgCard} rounded-2xl shadow-xl p-8 transition-colors duration-300 w-full`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSuccess(true);
                }}
              >
                {/* First Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label
                    className={`block mb-2 font-semibold text-lg ${
                      theme === 'dark' ? 'text-orange-500' : 'text-black'
                    }`}
                    htmlFor="firstName"
                  >
                    {t.formFields.firstName}
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder={t.formFields.firstName}
                    className={`w-full px-4 py-4 border ${
                      theme === 'dark'
                        ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300'
                        : 'border-gray-200 text-gray-700 placeholder-gray-400'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                  />
                </motion.div>
                {/* Last Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    className={`block mb-2 font-semibold text-lg ${
                      theme === 'dark' ? 'text-orange-500' : 'text-black'
                    }`}
                    htmlFor="lastName"
                  >
                    {t.formFields.lastName}
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder={t.formFields.lastName}
                    className={`w-full px-4 py-4 border ${
                      theme === 'dark'
                        ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300'
                        : 'border-gray-200 text-gray-700 placeholder-gray-400'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                  />
                </motion.div>
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label
                    className={`block mb-2 font-semibold text-lg ${
                      theme === 'dark' ? 'text-orange-500' : 'text-black'
                    }`}
                    htmlFor="email"
                  >
                    {t.formFields.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t.formFields.email}
                    className={`w-full px-4 py-4 border ${
                      theme === 'dark'
                        ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300'
                        : 'border-gray-200 text-gray-700 placeholder-gray-400'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                  />
                </motion.div>
                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label
                    className={`block mb-2 font-semibold text-lg ${
                      theme === 'dark' ? 'text-orange-500' : 'text-black'
                    }`}
                    htmlFor="phone"
                  >
                    {t.formFields.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={t.formFields.phone}
                    className={`w-full px-4 py-4 border ${
                      theme === 'dark'
                        ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300'
                        : 'border-gray-200 text-gray-700 placeholder-gray-400'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                  />
                </motion.div>
                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label
                    className={`block mb-2 font-semibold text-lg ${
                      theme === 'dark' ? 'text-orange-500' : 'text-black'
                    }`}
                    htmlFor="message"
                  >
                    {t.formFields.message}
                  </label>
                  <textarea
                    id="message"
                    placeholder={t.formFields.message}
                    rows="6"
                    className={`w-full px-4 py-4 border ${
                      theme === 'dark'
                        ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300'
                        : 'border-gray-200 text-gray-700 placeholder-gray-400'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none`}
                  ></textarea>
                </motion.div>
                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.sendBtn}
                  </motion.button>
                </motion.div>
                {contactSuccess && (
                  <div className="mt-6 text-green-600 font-semibold text-center animate-fade-in">
                    {t.successMsg}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Maps */}
      <section
        className={`w-full ${bgSectionAlt} mb-12 md:mb-0 px-0 py-6 md:py-8 transition-colors duration-300`}
      >
        <div className="container mx-auto w-full px-2 sm:px-4 flex flex-col gap-6 md:gap-8">
          <motion.div
            className="text-orange-500 font-semibold text-sm tracking-wider uppercase text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.locationTitle}
          </motion.div>
          <motion.h2
            className={`text-4xl lg:text-5xl font-bold leading-tight text-left ${textMain}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.locationHeading}
          </motion.h2>
          <motion.div
            className={`${bgCard} rounded-2xl shadow-lg p-4 flex flex-col items-center transition-colors duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <iframe
              title="SF Map"
              src="https://www.google.com/maps?q=456+Market+St,+San+Francisco,+CA+94111&output=embed"
              className="w-full h-56 rounded-lg border-none"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`w-full pb-20 pt-20 mt-0 ${theme === "dark" ? "bg-[#1E2A38] text-white" : "bg-white text-black"}`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid  lg:grid-cols-2 gap-16 items-start">
            {/* Left section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.div
                  className={`${textAccent} font-semibold text-sm tracking-wider uppercase`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t.faqTitle}
                </motion.div>
                <motion.h2
                  className={`text-4xl lg:text-5xl font-bold leading-tight mt-2 ${textMain}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t.faqHeading}
                </motion.h2>
              </div>
              <motion.img
                src={faqImage}
                alt="FAQ Support"
                className="w-full h-auto rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>
            {/* Right section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.faqs.map((faq, idx) => (
                <motion.details
                  key={idx}
                  className={`group rounded-lg p-6 transition-colors duration-200 ${
                    theme === "dark"
                      ? "bg-[#1E2A38] hover:bg-[#223366]"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <summary
                    className={`font-semibold cursor-pointer flex justify-between items-center text-lg ${textMain}`}
                  >
                    {faq.question}
                    <span className="text-orange-500 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className={`mt-4 leading-relaxed ${textSub}`}>
                    {faq.answer}
                  </p>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-8 md:py-12 ${bgSectionAlt} transition-colors duration-300`}>
        <div className="container mx-auto px-2 sm:px-4 max-w-3xl text-center">
          <motion.h2
            className={`text-3xl font-semibold mb-4 ${textMain}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            {t.newsletterTitle}
          </motion.h2>
          <motion.p
            className={`mb-6 ${textSub}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            {t.newsletterDesc}
          </motion.p>
          <motion.form
            className="flex flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={e => {
              e.preventDefault();
              setNewsletterSubscribed(true);
            }}>
            <motion.input
              type="email"
              placeholder={t.formFields.email}
              className={`flex-1 min-w-0 px-4 py-3 rounded-lg border ${theme === 'dark' ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300' : 'border-gray-300 text-gray-700 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {t.newsletterBtn}
            </motion.button>
          </motion.form>
          {newsletterSubscribed && (
            <div className="mt-4 text-green-600 font-semibold text-center animate-fade-in">
              {t.newsletterSuccess}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;