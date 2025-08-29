import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import budgetHeroVideo from '../assets/Budget Management.mp4';
import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.jpeg';

// Translations for Budget Management Page
const translations = {
  en: {
    heroTitle: "Budget Management",
    heroDesc: "Take control of your finances with our comprehensive budget management services. Our experts help you create, monitor, and optimize budgets to achieve your financial goals and improve cash flow.",
    includesTitle: "What This Service Includes",
    features: [
      'Expense Tracking & Categorization',
      'Budget Planning & Forecasting',
      'Cash Flow Management',
      'Financial Goal Setting',
      'Spending Analysis & Reports',
      'Budget Optimization Strategies',
    ],
    forTitle: "Who It's For",
    forDesc1: "Our Budget Management service is designed for individuals and businesses who want to take control of their finances and achieve their financial goals. Whether you're a small business owner, startup founder, family, or individual, our solutions help you create sustainable budgets that work for your unique situation.",
    forDesc2: "We work closely with you to understand your financial objectives, develop realistic budgets, and provide ongoing support to ensure you stay on track and achieve your goals.",
    clients: [
      'Small Businesses',
      'Startups & Entrepreneurs',
      'Families & Individuals',
      'Nonprofits',
      'Financial Advisors',
      'Accounting Firms',
    ],
    benefitsTitle: "Benefits & Outcomes",
    benefits: [
      'Improved financial control',
      'Better cash flow visibility',
      'Reduced overspending',
      'Achieved financial goals',
      'Enhanced decision making',
      'Increased savings rates',
    ],
    faqsTitle: "FAQs About This Service",
    faqs: [
      {
        q: 'What is Budget Management?',
        a: 'Budget management is the process of creating, monitoring, and adjusting financial plans to control spending, optimize cash flow, and achieve financial goals.'
      },
      {
        q: 'How often should I review my budget?',
        a: 'We recommend monthly budget reviews for most clients, with quarterly deep-dive analysis to ensure your budget aligns with changing financial goals.'
      },
      {
        q: 'Can you work with my existing financial software?',
        a: 'Yes, we integrate with most major accounting and financial management platforms to provide seamless budget management solutions.'
      },
      {
        q: 'Is budget management suitable for small businesses?',
        a: 'Absolutely! Small businesses benefit greatly from proper budget management to control costs, improve profitability, and plan for growth.'
      },
    ],
    ctaTitle: "Ready to Take Control of Your Finances?",
    ctaDesc: "Book a free consultation and see how our budget management experts can help you achieve your financial goals.",
    ctaBtn: "Get Free Consultation"
  },
  ar: {
    heroTitle: "إدارة الميزانية",
    heroDesc: "تحكم في أموالك مع خدمات إدارة الميزانية الشاملة لدينا. يساعدك خبراؤنا في إنشاء ومراقبة وتحسين الميزانيات لتحقيق أهدافك المالية وتحسين التدفق النقدي.",
    includesTitle: "ما الذي تتضمنه الخدمة",
    features: [
      'تتبع وتصنيف النفقات',
      'تخطيط وتوقع الميزانية',
      'إدارة التدفق النقدي',
      'تحديد الأهداف المالية',
      'تحليل الإنفاق والتقارير',
      'استراتيجيات تحسين الميزانية',
    ],
    forTitle: "لمن هذه الخدمة",
    forDesc1: "خدمة إدارة الميزانية مصممة للأفراد والشركات الذين يريدون السيطرة على أموالهم وتحقيق أهدافهم المالية. سواء كنت صاحب عمل صغير أو مؤسس شركة ناشئة أو عائلة أو فرد، حلولنا تساعدك في إنشاء ميزانيات مستدامة تناسب وضعك الفريد.",
    forDesc2: "نعمل معك لفهم أهدافك المالية، وتطوير ميزانيات واقعية، وتقديم الدعم المستمر لضمان بقائك على المسار الصحيح وتحقيق أهدافك.",
    clients: [
      'الشركات الصغيرة',
      'الشركات الناشئة ورواد الأعمال',
      'العائلات والأفراد',
      'المنظمات غير الربحية',
      'المستشارون الماليون',
      'مكاتب المحاسبة',
    ],
    benefitsTitle: "الفوائد والنتائج",
    benefits: [
      'تحكم مالي أفضل',
      'رؤية أوضح للتدفق النقدي',
      'تقليل الإنفاق الزائد',
      'تحقيق الأهداف المالية',
      'اتخاذ قرارات محسنة',
      'زيادة معدلات الادخار',
    ],
    faqsTitle: "الأسئلة الشائعة حول الخدمة",
    faqs: [
      {
        q: 'ما هي إدارة الميزانية؟',
        a: 'إدارة الميزانية هي عملية إنشاء ومراقبة وتعديل الخطط المالية للسيطرة على الإنفاق وتحسين التدفق النقدي وتحقيق الأهداف المالية.'
      },
      {
        q: 'كم مرة يجب مراجعة الميزانية؟',
        a: 'نوصي بمراجعة الميزانية شهريًا لمعظم العملاء، مع تحليل معمق كل ربع سنة لضمان توافق الميزانية مع الأهداف المالية المتغيرة.'
      },
      {
        q: 'هل يمكنكم العمل مع برنامجي المالي الحالي؟',
        a: 'نعم، ندمج مع معظم منصات المحاسبة والإدارة المالية الرئيسية لتوفير حلول إدارة ميزانية سلسة.'
      },
      {
        q: 'هل إدارة الميزانية مناسبة للشركات الصغيرة؟',
        a: 'بالتأكيد! تستفيد الشركات الصغيرة بشكل كبير من إدارة الميزانية للتحكم في التكاليف وتحسين الربحية والتخطيط للنمو.'
      },
    ],
    ctaTitle: "جاهز للسيطرة على أموالك؟",
    ctaDesc: "احجز استشارة مجانية وشاهد كيف يمكن لخبرائنا مساعدتك في تحقيق أهدافك المالية.",
    ctaBtn: "احصل على استشارة مجانية"
  },
  he: {
    heroTitle: "ניהול תקציב",
    heroDesc: "קח שליטה על הכספים שלך עם שירותי ניהול התקציב המקיפים שלנו. המומחים שלנו יסייעו לך ליצור, לעקוב ולייעל תקציבים כדי להשיג מטרות פיננסיות ולשפר תזרים מזומנים.",
    includesTitle: "מה כוללת השירות",
    features: [
      'מעקב וסיווג הוצאות',
      'תכנון ותחזית תקציב',
      'ניהול תזרים מזומנים',
      'הגדרת מטרות פיננסיות',
      'ניתוח הוצאות ודוחות',
      'אסטרטגיות אופטימיזציה לתקציב',
    ],
    forTitle: "למי השירות מיועד",
    forDesc1: "שירות ניהול התקציב שלנו מיועד לאנשים ולעסקים שרוצים לשלוט בכספים ולהשיג מטרות פיננסיות. בין אם אתה בעל עסק קטן, יזם, משפחה או יחיד, הפתרונות שלנו עוזרים ליצור תקציבים ברי קיימא שמתאימים למצבך.",
    forDesc2: "אנו עובדים איתך להבין את המטרות הפיננסיות שלך, לפתח תקציבים ריאליים ולספק תמיכה שוטפת כדי להבטיח שתישאר במסלול ותשיג את היעדים.",
    clients: [
      'עסקים קטנים',
      'סטארטאפים ויזמים',
      'משפחות ויחידים',
      'עמותות',
      'יועצים פיננסיים',
      'משרדי הנהלת חשבונות',
    ],
    benefitsTitle: "יתרונות ותוצאות",
    benefits: [
      'שליטה פיננסית משופרת',
      'ראות טובה יותר לתזרים מזומנים',
      'הפחתת הוצאות יתר',
      'השגת מטרות פיננסיות',
      'קבלת החלטות משופרת',
      'הגדלת שיעורי החיסכון',
    ],
    faqsTitle: "שאלות נפוצות על השירות",
    faqs: [
      {
        q: 'מה זה ניהול תקציב?',
        a: 'ניהול תקציב הוא תהליך יצירת, מעקב והתאמת תוכניות פיננסיות לשליטה בהוצאות, אופטימיזציה לתזרים והשגת מטרות פיננסיות.'
      },
      {
        q: 'באיזו תדירות כדאי לבדוק את התקציב?',
        a: 'אנו ממליצים על בדיקות חודשיות לרוב הלקוחות, עם ניתוח מעמיק רבעוני כדי לוודא שהתקציב תואם למטרות המשתנות.'
      },
      {
        q: 'האם אתם עובדים עם התוכנה הפיננסית שלי?',
        a: 'כן, אנו משתלבים עם רוב הפלטפורמות המרכזיות לניהול פיננסי ומספקים פתרונות תקציב חלקים.'
      },
      {
        q: 'האם השירות מתאים לעסקים קטנים?',
        a: 'בהחלט! עסקים קטנים מרוויחים מאוד מניהול תקציב נכון לשליטה בעלויות, שיפור רווחיות ותכנון לצמיחה.'
      },
    ],
    ctaTitle: "מוכן לשלוט בכספים שלך?",
    ctaDesc: "קבע פגישת ייעוץ חינם וראה כיצד המומחים שלנו יכולים לעזור לך להשיג מטרות פיננסיות.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const BudgetManagement = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    const handleLangChange = () => setLanguage(localStorage.getItem('language') || 'en');
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

  return (
    <section className={theme === 'dark' ? 'w-full p-0 m-0 bg-[#1E2A38] text-white' : 'w-full p-0 m-0 bg-white text-black'} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 1. Hero + Brief Intro */}
      <div className="relative w-full h-screen mb-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={budgetHeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center text-center p-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-orange-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </div>

      {/* 2. What This Service Includes */}
      <section className={theme === 'dark' ? 'py-16 bg-[#141B25]' : 'py-16 bg-[#fdf9f4]'}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12"
          >
            {t.includesTitle}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              src={b1}
              alt="Budget Management Services"
              className="rounded-lg shadow-lg w-full max-h-80 object-cover"
            />
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 text-orange-500 text-lg"
            >
              {t.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* 3. Who It's For */}
      <section className={theme === 'dark' ? 'py-16 bg-[#1E2A38]' : 'py-16 bg-white'}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-blue-100' : 'text-orange-500'}`}
          >
            {t.forTitle}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className={theme === 'dark' ? 'text-lg text-blue-100 leading-relaxed' : 'text-lg text-orange-900 leading-relaxed'}>
                {t.forDesc1}
              </p>
              <p className={theme === 'dark' ? 'text-lg text-blue-100 leading-relaxed' : 'text-lg text-orange-900 leading-relaxed'}>
                {t.forDesc2}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-4 h-full"
            >
              {t.clients.map((c, i) => (
                <motion.div
                  key={i}
                  className={`rounded-xl px-6 py-6 shadow flex flex-col items-center justify-center text-center h-full min-h-[80px] transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-[#23344a] border border-blue-900' 
                      : 'bg-orange-100 border border-orange-300'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className={theme === 'dark' ? 'text-blue-100 font-semibold text-base' : 'text-orange-900 font-semibold text-base'}>
                    {c}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Benefits & Outcomes */}
      <div className="relative w-full h-[500px] md:h-screen mb-0 flex items-center justify-center">
        <motion.img 
          src={b2} 
          alt="Budget Benefits Illustration" 
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" 
          style={{filter: 'brightness(0.7)'}}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-200/60 to-orange-100/60 z-10"></div>
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center p-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.benefitsTitle}
          </motion.h2>
          <div className="w-full max-w-5xl grid grid-cols-3 md:grid-cols-3 gap-8">
            {t.benefits.slice(0,3).map((b, i) => (
              <motion.div 
                key={i} 
                className="bg-orange-100 backdrop-blur-md border border-orange-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-orange-500 font-semibold text-lg drop-shadow">{b}</span>
              </motion.div>
            ))}
          </div>
          <div className="w-full max-w-5xl grid grid-cols-3 md:grid-cols-3 gap-8 mt-8">
            {t.benefits.slice(3,6).map((b, i) => (
              <motion.div 
                key={i+3} 
                className="bg-orange-100 backdrop-blur-md border border-orange-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, delay: (i+3) * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-orange-500 font-semibold text-lg drop-shadow">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FAQs About This Service */}
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <motion.h2 
          className="text-2xl font-bold text-center mt-12 text-orange-500 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.faqsTitle}
        </motion.h2>
        <div className="grid grid-cols-1 mb-12 sm:grid-cols-2 gap-6">
          {t.faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="font-semibold text-orange-700 mb-2 text-lg flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full"></span>
                {faq.q}
              </div>
              <div className="text-orange-900 text-base">{faq.a}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. Get Started / Free Consultation CTA */}
      <div className="w-full py-10"
        style={{ backgroundColor: theme === 'dark' ? '#141B25' : '#FDF9F4' }}>
        <div className="container mx-auto px-4 flex flex-row md:flex-row items-center gap-10 max-w-6xl">
          <motion.div 
            className="flex-1 flex flex-col items-start justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl font-bold text-orange-500 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.ctaTitle}
            </motion.h2>
            <motion.p 
              className="mb-6 "
              style={{ color: theme === 'dark' ? '#fff' : '#000' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t.ctaDesc}
            </motion.p>
            <Link to="/contactus">
              <motion.button 
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.ctaBtn}
              </motion.button>
            </Link>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center mt-20 items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={b3} 
              alt="Take Control of Your Finances" 
              className="rounded-xl shadow-lg object-cover max-h-64 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetManagement;