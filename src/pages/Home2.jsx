import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import home2hero from '../assets/home2hero.mp4';
import logo11 from '../assets/11.png';
import logo12 from '../assets/12.png';
import logo13 from '../assets/13.png';
import logo14 from '../assets/14.png';
import logo15 from '../assets/15.png';
import logo16 from '../assets/16.png';
import logo17 from '../assets/17.png';
import logo18 from '../assets/18.png';
import ceoImg from '../assets/ceo.jpg';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

const partnerLogos = [logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18];

// Translations for Home2
const translations = {
  en: {
    heroTitle: "Finance & Accounting Solutions for Growth",
    heroDesc: "Unlock the full potential of your business with expert accounting, tax planning, and financial consulting. We deliver clarity, compliance, and growth for individuals and organizations alike.",
    heroBtn: "Get Started",
    toolsTitle: "Explore Our Financial Tools & Calculators",
    toolCards: [
      {
        img: img4,
        alt: "EMI Calculator",
        title: "EMI Calculator",
        desc: "Quickly estimate your monthly loan payments and plan your finances with ease.",
        btn: "Try Now"
      },
      {
        img: img5,
        alt: "Tax Calculator",
        title: "Tax Calculator",
        desc: "Calculate your tax liability and optimize your tax planning for the year.",
        btn: "Try Now"
      },
      {
        img: img6,
        alt: "Retirement Planner",
        title: "Retirement Planner",
        desc: "Plan your retirement savings and visualize your future financial security.",
        btn: "Try Now"
      }
    ],
    ceoTitle: "A Message from Our CEO",
    ceoQuote: `"At our core, we believe that financial success should be accessible to everyone. Our mission is to empower individuals and businesses with the tools, insights, and expertise they need to achieve their financial goals. With over a decade of experience in the industry, we're committed to delivering personalized solutions that drive real results."`,
    ceoName: "John Smith",
    ceoRole: "Chief Executive Officer",
    partnersTitle: "Trusted by Leading Businesses & Financial Partners",
    industriesTitle: "Industries We Serve",
    industriesDesc: "We are proud to be driving a digital revolution across various industry verticals.",
    industries: [
      "Logistics", "Social Networking", "Healthcare", "Restaurant", "Wellness & Fitness",
      "Sports", "Ecommerce", "Real Estate", "Education", "Travel"
    ],
    insightsTitle: "Insights",
    insightsDesc: "In today’s rapidly changing financial landscape, staying informed is the key to long-term success. Our insights go beyond surface-level tips — we provide in-depth guidance on tax strategies, compliance updates, and smart money management tailored to businesses of all sizes. Our expert team delivers practical advice.",
    insightsBtn: "Read More Insights",
    insightCards: [
      {
        title: "Tax Planning Tips",
        desc: "Discover effective strategies to minimize your tax liability and maximize savings."
      },
      {
        title: "SME Growth Hacks",
        desc: "Unlock growth opportunities for small and medium enterprises with proven tactics."
      },
      {
        title: "Compliance Essentials",
        desc: "Stay compliant with the latest regulations and avoid costly penalties for your business."
      },
      {
        title: "Personal Finance 101",
        desc: "Master the basics of budgeting, saving, and investing for a secure financial future."
      }
    ]
  },
  ar: {
    heroTitle: "حلول المحاسبة والمالية للنمو",
    heroDesc: "اكتشف إمكانيات عملك الكاملة مع المحاسبة، تخطيط الضرائب، والاستشارات المالية من الخبراء. نقدم الوضوح والامتثال والنمو للأفراد والمنظمات.",
    heroBtn: "ابدأ الآن",
    toolsTitle: "استكشف أدواتنا المالية والحاسبات",
    toolCards: [
      {
        img: img4,
        alt: "حاسبة القسط الشهري",
        title: "حاسبة القسط الشهري",
        desc: "احسب مدفوعات القرض الشهرية وخطط مالياتك بسهولة.",
        btn: "جرب الآن"
      },
      {
        img: img5,
        alt: "حاسبة الضرائب",
        title: "حاسبة الضرائب",
        desc: "احسب التزاماتك الضريبية وخطط للضرائب بشكل أفضل.",
        btn: "جرب الآن"
      },
      {
        img: img6,
        alt: "مخطط التقاعد",
        title: "مخطط التقاعد",
        desc: "خطط لمدخرات التقاعد وتصور أمنك المالي المستقبلي.",
        btn: "جرب الآن"
      }
    ],
    ceoTitle: "رسالة من المدير التنفيذي",
    ceoQuote: `"في جوهرنا، نؤمن أن النجاح المالي يجب أن يكون متاحًا للجميع. مهمتنا هي تمكين الأفراد والشركات بالأدوات والرؤى والخبرة لتحقيق أهدافهم المالية. مع أكثر من عقد من الخبرة، نحن ملتزمون بتقديم حلول شخصية تحقق نتائج حقيقية."`,
    ceoName: "جون سميث",
    ceoRole: "المدير التنفيذي",
    partnersTitle: "موثوق من قبل الشركات والشركاء الماليين الرائدين",
    industriesTitle: "القطاعات التي نخدمها",
    industriesDesc: "نفخر بقيادة الثورة الرقمية عبر مختلف القطاعات.",
    industries: [
      "الخدمات اللوجستية", "الشبكات الاجتماعية", "الرعاية الصحية", "المطاعم", "الصحة واللياقة",
      "الرياضة", "التجارة الإلكترونية", "العقارات", "التعليم", "السفر"
    ],
    insightsTitle: "رؤى",
    insightsDesc: "في عالم المال المتغير بسرعة اليوم، البقاء على اطلاع هو مفتاح النجاح الطويل. نقدم رؤى متعمقة حول استراتيجيات الضرائب، تحديثات الامتثال، وإدارة الأموال الذكية المصممة لجميع الأعمال.",
    insightsBtn: "اقرأ المزيد من الرؤى",
    insightCards: [
      {
        title: "نصائح تخطيط الضرائب",
        desc: "اكتشف استراتيجيات فعالة لتقليل الضرائب وزيادة المدخرات."
      },
      {
        title: "حيل نمو الشركات الصغيرة",
        desc: "افتح فرص النمو للمؤسسات الصغيرة والمتوسطة مع تكتيكات مثبتة."
      },
      {
        title: "أساسيات الامتثال",
        desc: "ابقَ ملتزمًا بأحدث اللوائح وتجنب الغرامات المكلفة."
      },
      {
        title: "أساسيات المال الشخصي",
        desc: "أتقن أساسيات الميزانية والادخار والاستثمار لمستقبل مالي آمن."
      }
    ]
  },
  he: {
    heroTitle: "פתרונות פיננסיים וחשבונאות לצמיחה",
    heroDesc: "ממש את הפוטנציאל המלא של העסק שלך עם הנהלת חשבונות, תכנון מס וייעוץ פיננסי מקצועי. אנו מספקים בהירות, עמידה בתקנות וצמיחה ליחידים וארגונים.",
    heroBtn: "התחל עכשיו",
    toolsTitle: "גלה את הכלים והחישובים הפיננסיים שלנו",
    toolCards: [
      {
        img: img4,
        alt: "מחשבון הלוואה",
        title: "מחשבון הלוואה",
        desc: "חשב בקלות את תשלומי ההלוואה החודשיים ותכנן את הכספים שלך.",
        btn: "נסה עכשיו"
      },
      {
        img: img5,
        alt: "מחשבון מס",
        title: "מחשבון מס",
        desc: "חשב את חבות המס שלך ותכנן את המס לשנה.",
        btn: "נסה עכשיו"
      },
      {
        img: img6,
        alt: "מתכנן פרישה",
        title: "מתכנן פרישה",
        desc: "תכנן את החסכונות לפרישה ודמיין את הביטחון הכלכלי העתידי שלך.",
        btn: "נסה עכשיו"
      }
    ],
    ceoTitle: "מסר מהמנכ\"ל",
    ceoQuote: `"בלב החברה שלנו, אנו מאמינים שהצלחה פיננסית צריכה להיות נגישה לכולם. המשימה שלנו היא להעצים אנשים ועסקים עם כלים, תובנות ומומחיות להשגת מטרות פיננסיות. עם ניסיון של מעל עשור, אנו מחויבים לפתרונות אישיים שמביאים תוצאות אמיתיות."`,
    ceoName: "ג'ון סמית",
    ceoRole: "מנכ\"ל",
    partnersTitle: "נבחר על ידי עסקים מובילים ושותפים פיננסיים",
    industriesTitle: "ענפים בהם אנו פועלים",
    industriesDesc: "אנו גאים להוביל מהפכה דיגיטלית במגוון ענפי תעשייה.",
    industries: [
      "לוגיסטיקה", "רשתות חברתיות", "בריאות", "מסעדות", "בריאות וכושר",
      "ספורט", "מסחר אלקטרוני", "נדל\"ן", "חינוך", "נסיעות"
    ],
    insightsTitle: "תובנות",
    insightsDesc: "בעולם הפיננסי המשתנה במהירות, מידע הוא המפתח להצלחה ארוכת טווח. אנו מספקים תובנות מעמיקות על אסטרטגיות מס, עדכוני רגולציה וניהול כספים חכם לכל סוגי העסקים.",
    insightsBtn: "קרא עוד תובנות",
    insightCards: [
      {
        title: "טיפים לתכנון מס",
        desc: "גלה אסטרטגיות יעילות להקטנת מס והגדלת חיסכון."
      },
      {
        title: "טיפים לצמיחת עסקים קטנים",
        desc: "פתח הזדמנויות צמיחה לעסקים קטנים ובינוניים עם טקטיקות מוכחות."
      },
      {
        title: "יסודות הציות",
        desc: "הישאר מעודכן בתקנות האחרונות והימנע מקנסות יקרים."
      },
      {
        title: "יסודות פיננסים אישיים",
        desc: "למד את הבסיס של תקצוב, חיסכון והשקעה לעתיד בטוח."
      }
    ]
  }
};

const Home2 = () => {
  // Theme and language sync
  const getTheme = () => localStorage.getItem('theme') || 'light';
  const getLanguage = () => localStorage.getItem('language') || 'en';
  const [theme, setTheme] = useState(getTheme());
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const handleThemeChange = () => setTheme(getTheme());
    const handleLangChange = () => setLanguage(getLanguage());
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    window.addEventListener('language-changed', handleLangChange);
    window.addEventListener('focus', handleLangChange);
    AOS.init({ once: true, duration: 1000, offset: 80 });
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
      window.removeEventListener('language-changed', handleLangChange);
      window.removeEventListener('focus', handleLangChange);
    };
  }, []);

  const t = translations[language];
  const isRTL = language === 'ar' || language === 'he';
  const bgColors = theme === 'dark' ? ['#1E2A38', '#141B25'] : ['#ffffff', '#FDF9F4'];
  let sectionIndex = 0;

  const [openModal, setOpenModal] = useState(null);

  // Calculators (same as before)
  const [emiPrincipal, setEmiPrincipal] = useState('');
  const [emiRate, setEmiRate] = useState('');
  const [emiTenure, setEmiTenure] = useState('');
  const [emiResult, setEmiResult] = useState(null);
  const calculateEMI = () => {
    const P = parseFloat(emiPrincipal);
    const r = parseFloat(emiRate) / 12 / 100;
    const n = parseFloat(emiTenure) * 12;
    if (!P || !r || !n) return setEmiResult(isRTL ? 'يرجى ملء جميع الحقول' : language === 'he' ? 'נא למלא את כל השדות' : 'Please fill all fields');
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiResult(`${isRTL ? 'القسط الشهري:' : language === 'he' ? 'החזר חודשי:' : 'Monthly EMI:'} ₹${emi.toFixed(2)}`);
  };

  const [taxIncome, setTaxIncome] = useState('');
  const [taxResult, setTaxResult] = useState(null);
  const calculateTax = () => {
    const income = parseFloat(taxIncome);
    if (!income) return setTaxResult(isRTL ? 'يرجى إدخال الدخل' : language === 'he' ? 'נא להזין הכנסה' : 'Please enter income');
    let tax = 0;
    if (income <= 250000) tax = 0;
    else if (income <= 500000) tax = (income - 250000) * 0.05;
    else if (income <= 1000000) tax = 12500 + (income - 500000) * 0.2;
    else tax = 112500 + (income - 1000000) * 0.3;
    setTaxResult(`${isRTL ? 'الضريبة المقدرة:' : language === 'he' ? 'מס משוער:' : 'Estimated Tax:'} ₹${tax.toFixed(2)}`);
  };

  const [retireAge, setRetireAge] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const [monthlySave, setMonthlySave] = useState('');
  const [retireResult, setRetireResult] = useState(null);
  const calculateRetirement = () => {
    const ca = parseInt(currentAge);
    const ra = parseInt(retireAge);
    const ms = parseFloat(monthlySave);
    if (!ca || !ra || !ms || ra <= ca) return setRetireResult(isRTL ? 'يرجى ملء جميع الحقول بشكل صحيح' : language === 'he' ? 'נא למלא את כל השדות נכון' : 'Please fill all fields correctly');
    const months = (ra - ca) * 12;
    const total = ms * months;
    setRetireResult(`${isRTL ? 'إجمالي المدخرات عند التقاعد:' : language === 'he' ? 'סך החיסכון בפרישה:' : 'Total Savings by Retirement:'} ₹${total.toLocaleString()}`);
  };

  const resetCalculators = () => {
    setEmiPrincipal('');
    setEmiRate('');
    setEmiTenure('');
    setEmiResult(null);
    setTaxIncome('');
    setTaxResult(null);
    setCurrentAge('');
    setRetireAge('');
    setMonthlySave('');
    setRetireResult(null);
  };

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('tools-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section 
        className={`relative h-screen flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-gray-900 text-white'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up"
      >
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={home2hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center text-white max-w-3xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.heroDesc}
          </motion.p>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            onClick={handleScrollToNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.heroBtn}
          </motion.button>
        </div>
      </section>

      {/* Tool/Calculator Preview Section */}
      <section 
        id="tools-section"
        className={`py-16 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-gradient-to-r from-blue-50 to-purple-100 text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold text-center mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.toolsTitle}
          </motion.h2>
          <div className="grid  lg:grid-cols-3 gap-8 w-full max-w-full">
            {t.toolCards.map((card, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition min-w-[280px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-orange-100 rounded-full p-4 mb-4 flex items-center justify-center">
                  <img src={card.img} alt={card.alt} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{card.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{card.desc}</p>
                <motion.button 
                  onClick={() => { resetCalculators(); setOpenModal(idx === 0 ? 'emi' : idx === 1 ? 'tax' : 'retirement'); }} 
                  className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {card.btn}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section 
        className={`relative py-20 overflow-hidden ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : ''}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="200"
      >
        <div 
          className="absolute inset-0 bg-cover h-[750px] bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ceoImg})`,
            filter: 'brightness(1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-orange bg-opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div 
            className="max-w-2xl bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-black-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t.ceoTitle}
            </motion.h2>
            <motion.blockquote 
              className="text-lg md:text-xl text-black-400  leading-relaxed mb-6 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t.ceoQuote}
            </motion.blockquote>
            <motion.div 
              className="text-black-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-lg font-semibold">{t.ceoName}</p>
              <p className="text-black-400">{t.ceoRole}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Slider */}
      <section 
        className={`py-10 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="300"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className={`text-2xl md:text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.partnersTitle}
          </motion.h2>
          <div className="overflow-hidden">
            <div className="flex items-center animate-scroll-x space-x-12">
              {partnerLogos.map((logo, idx) => (
                <motion.img
                  key={idx}
                  src={logo}
                  alt={`Partner ${idx + 11}`}
                  className="h-40 w-auto object-contain  hover:scale-110 transition duration-200"
                  style={{ minWidth: '200px' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 20s linear infinite;
            width: max-content;
          }
        `}</style>
      </section>

      {/* Industries We Serve Section */}
      <section 
        className={`py-16 ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="400"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2"
            style={{ color: theme === 'dark' ? '#fff' : '#000' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.industriesTitle}
          </motion.h2>
          <motion.p 
            className="text-center text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.industriesDesc}
          </motion.p>
          <div className="grid grid-rows-2 grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {t.industries.map((industry, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                  {/* You can add SVG icons for each industry if needed */}
                  <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
                </span>
                <div className="font-semibold text-center">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Modals */}
      {openModal === 'emi' && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-orange-50 rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button 
              onClick={() => setOpenModal(null)} 
              className="absolute top-3 right-3 text-orange-400 hover:text-red-500 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>
            <h3 className="text-2xl font-bold mb-4 text-orange-600">{t.toolCards[0].title}</h3>
            <div className="space-y-3">
              <input type="number" placeholder={isRTL ? "المبلغ الأساسي (₹)" : language === 'he' ? "קרן (₹)" : "Principal (₹)"} value={emiPrincipal} onChange={e => setEmiPrincipal(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <input type="number" placeholder={isRTL ? "معدل الفائدة السنوي (%)" : language === 'he' ? "ריבית שנתית (%)" : "Annual Interest Rate (%)"} value={emiRate} onChange={e => setEmiRate(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <input type="number" placeholder={isRTL ? "مدة القرض (سنوات)" : language === 'he' ? "תקופת הלוואה (שנים)" : "Tenure (years)"} value={emiTenure} onChange={e => setEmiTenure(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <motion.button 
                onClick={calculateEMI} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isRTL ? "احسب" : language === 'he' ? "חשב" : "Calculate"}
              </motion.button>
              {emiResult && <div className="text-center text-lg font-semibold text-orange-700 mt-2">{emiResult}</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
      {openModal === 'tax' && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-orange-50 rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button 
              onClick={() => setOpenModal(null)} 
              className="absolute top-3 right-3 text-orange-400 hover:text-red-500 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>
            <h3 className="text-2xl font-bold mb-4 text-orange-600">{t.toolCards[1].title}</h3>
            <div className="space-y-3">
              <input type="number" placeholder={isRTL ? "الدخل السنوي (₹)" : language === 'he' ? "הכנסה שנתית (₹)" : "Annual Income (₹)"} value={taxIncome} onChange={e => setTaxIncome(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <button onClick={calculateTax} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">{isRTL ? "احسب" : language === 'he' ? "חשב" : "Calculate"}</button>
              {taxResult && <div className="text-center text-lg font-semibold text-orange-700 mt-2">{taxResult}</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
      {openModal === 'retirement' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-orange-50 rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button onClick={() => setOpenModal(null)} className="absolute top-3 right-3 text-orange-400 hover:text-red-500 text-2xl">&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-orange-600">{t.toolCards[2].title}</h3>
            <div className="space-y-3">
              <input type="number" placeholder={isRTL ? "العمر الحالي" : language === 'he' ? "גיל נוכחי" : "Current Age"} value={currentAge} onChange={e => setCurrentAge(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <input type="number" placeholder={isRTL ? "عمر التقاعد" : language === 'he' ? "גיל פרישה" : "Retirement Age"} value={retireAge} onChange={e => setRetireAge(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <input type="number" placeholder={isRTL ? "الادخار الشهري (₹)" : language === 'he' ? "חיסכון חודשי (₹)" : "Monthly Savings (₹)"} value={monthlySave} onChange={e => setMonthlySave(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <button onClick={calculateRetirement} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">{isRTL ? "احسب" : language === 'he' ? "חשב" : "Calculate"}</button>
              {retireResult && (
                <div className="text-center text-lg font-semibold text-orange-700 mt-2">{retireResult}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Insights Section */}
      <section 
        className={`py-16 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="500"
      >
        <div className="max-w-6xl mx-auto px-4 grid  lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: theme === 'dark' ? '#fff' : '#000' }}
            >
              {t.insightsTitle}
            </h2>
            <p
              className="text-justify mb-6"
              style={{ color: theme === 'dark' ? '#fff' : '#000' }}
            >
              {t.insightsDesc}
            </p>
            <Link
              to="/blog"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow"
            >
              {t.insightsBtn}
            </Link>
          </div>
          {/* Right 2x2 Cards */}
          <div className="grid  lg:grid-cols-2 gap-4 h-full">
            {t.insightCards.map((card, idx) => (
              <div key={idx} className="bg-orange-50 rounded-2xl shadow p-6 flex items-center min-h-[140px]">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;