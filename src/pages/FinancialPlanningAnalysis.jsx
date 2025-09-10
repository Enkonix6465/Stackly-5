import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import fpVideo from '../assets/Financial Planning & Analysis.mp4';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';

// Translations for Financial Planning & Analysis Page
const translations = {
  en: {
    heroTitle: "Financial Planning & Analysis",
    heroDesc: "Unlock the power of data-driven financial strategies. Our FP&A service delivers expert forecasting, scenario planning, and actionable insights to help you make smarter business decisions and achieve sustainable growth.",
    includesTitle: "What This Service Includes",
    features: [
      'Budgeting & Forecasting',
      'Financial Modeling',
      'Variance Analysis',
      'KPI Tracking & Reporting',
      'Scenario Planning',
      'Cash Flow Management',
    ],
    forTitle: "Who It's For",
    forDesc1: "Our Financial Planning & Analysis service is designed for a wide range of organizations and leaders who want to make smarter, data-driven decisions. Whether you're a startup founder, a growing business, a nonprofit, or an established enterprise, our solutions are tailored to help you gain clarity, control, and confidence in your financial future.",
    forDesc2: "We partner closely with your team to understand your unique goals and challenges, delivering actionable insights and robust financial models that empower you to plan for growth.",
    clients: [
      'Startups & Founders',
      'Small & Medium Businesses',
      'Enterprises',
      'Nonprofits',
      'Finance Teams',
      'Consultants & Advisors',
    ],
    benefitsTitle: "Benefits & Outcomes",
    benefits: [
      'Data-driven decision making',
      'Improved cash flow visibility',
      'Strategic resource allocation',
      'Early risk identification',
      'Peace of mind for leadership',
      'Enhanced forecasting accuracy',
    ],
    faqsTitle: "FAQs About This Service",
    faqs: [
      {
        q: 'What is Financial Planning & Analysis (FP&A)?',
        a: 'FP&A is a set of activities that support budgeting, forecasting, and analysis to help organizations make informed financial decisions.'
      },
      {
        q: 'How often should we update our financial plan?',
        a: 'Best practice is to review and update your plan quarterly, but it can be tailored to your business needs.'
      },
      {
        q: 'Can you work with our existing accounting software?',
        a: 'Yes, we integrate with most major accounting and ERP platforms.'
      },
      {
        q: 'Is this service suitable for startups?',
        a: 'Absolutely! Startups benefit from early financial discipline and scenario planning.'
      },
    ],
    ctaTitle: "Ready to Transform Your Finances?",
    ctaDesc: "Book a free consultation and see how our FP&A experts can help you plan, analyze, and grow.",
    ctaBtn: "Get Free Consultation"
  },
  ar: {
    heroTitle: "التخطيط والتحليل المالي",
    heroDesc: "اكتشف قوة الاستراتيجيات المالية المعتمدة على البيانات. نقدم خدمات FP&A تشمل التنبؤات، تخطيط السيناريوهات، والرؤى العملية لمساعدتك في اتخاذ قرارات أعمال أكثر ذكاءً وتحقيق نمو مستدام.",
    includesTitle: "ما الذي تتضمنه الخدمة",
    features: [
      'إعداد الميزانية والتوقعات',
      'النمذجة المالية',
      'تحليل الفروقات',
      'تتبع ورفع تقارير مؤشرات الأداء',
      'تخطيط السيناريوهات',
      'إدارة التدفق النقدي',
    ],
    forTitle: "لمن هذه الخدمة",
    forDesc1: "خدمة التخطيط والتحليل المالي مصممة لمجموعة واسعة من المؤسسات والقادة الذين يرغبون في اتخاذ قرارات أكثر ذكاءً بناءً على البيانات. سواء كنت مؤسس شركة ناشئة أو مؤسسة متنامية أو منظمة غير ربحية أو مؤسسة راسخة، حلولنا تساعدك على تحقيق الوضوح والسيطرة والثقة في مستقبلك المالي.",
    forDesc2: "نتعاون مع فريقك لفهم أهدافك وتحدياتك الفريدة، ونقدم رؤى عملية ونماذج مالية قوية تمكنك من التخطيط للنمو.",
    clients: [
      'الشركات الناشئة والمؤسسون',
      'الشركات الصغيرة والمتوسطة',
      'المؤسسات الكبرى',
      'المنظمات غير الربحية',
      'فرق المالية',
      'المستشارون والخبراء',
    ],
    benefitsTitle: "الفوائد والنتائج",
    benefits: [
      'اتخاذ قرارات معتمدة على البيانات',
      'رؤية أفضل للتدفق النقدي',
      'تخصيص الموارد بشكل استراتيجي',
      'تحديد المخاطر مبكرًا',
      'راحة البال للإدارة',
      'دقة أعلى في التوقعات',
    ],
    faqsTitle: "الأسئلة الشائعة حول الخدمة",
    faqs: [
      {
        q: 'ما هو التخطيط والتحليل المالي (FP&A)؟',
        a: 'FP&A هو مجموعة من الأنشطة التي تدعم إعداد الميزانية والتوقعات والتحليل لمساعدة المؤسسات في اتخاذ قرارات مالية مستنيرة.'
      },
      {
        q: 'كم مرة يجب تحديث الخطة المالية؟',
        a: 'أفضل ممارسة هي مراجعة وتحديث الخطة كل ربع سنة، ويمكن تخصيصها حسب احتياجات عملك.'
      },
      {
        q: 'هل يمكنكم العمل مع برنامج المحاسبة الحالي لدينا؟',
        a: 'نعم، ندمج مع معظم منصات المحاسبة وERP الرئيسية.'
      },
      {
        q: 'هل هذه الخدمة مناسبة للشركات الناشئة؟',
        a: 'بالتأكيد! تستفيد الشركات الناشئة من الانضباط المالي المبكر وتخطيط السيناريوهات.'
      },
    ],
    ctaTitle: "جاهز لتحويل ماليتك؟",
    ctaDesc: "احجز استشارة مجانية وشاهد كيف يمكن لخبرائنا مساعدتك في التخطيط والتحليل والنمو.",
    ctaBtn: "احصل على استشارة مجانية"
  },
  he: {
    heroTitle: "תכנון וניתוח פיננסי",
    heroDesc: "גלה את כוח האסטרטגיות הפיננסיות מבוססות נתונים. שירות FP&A שלנו מספק תחזיות, תכנון תרחישים ותובנות מעשיות כדי לעזור לך לקבל החלטות עסקיות חכמות ולהשיג צמיחה בת קיימא.",
    includesTitle: "מה כוללת השירות",
    features: [
      'תכנון תקציב ותחזיות',
      'מודלים פיננסיים',
      'ניתוח סטיות',
      'מעקב ודיווח KPI',
      'תכנון תרחישים',
      'ניהול תזרים מזומנים',
    ],
    forTitle: "למי השירות מיועד",
    forDesc1: "שירות תכנון וניתוח פיננסי שלנו מיועד למגוון רחב של ארגונים ומנהיגים שרוצים לקבל החלטות חכמות ומבוססות נתונים. בין אם אתה יזם סטארטאפ, עסק מתפתח, עמותה או ארגון ותיק, הפתרונות שלנו מותאמים לעזור לך להשיג בהירות, שליטה וביטחון בעתיד הפיננסי שלך.",
    forDesc2: "אנו משתפים פעולה עם הצוות שלך כדי להבין את המטרות והאתגרים הייחודיים שלך, ומספקים תובנות מעשיות ומודלים פיננסיים חזקים שמעצימים אותך לתכנן צמיחה.",
    clients: [
      'סטארטאפים ויזמים',
      'עסקים קטנים ובינוניים',
      'ארגונים גדולים',
      'עמותות',
      'צוותי כספים',
      'יועצים ומומחים',
    ],
    benefitsTitle: "יתרונות ותוצאות",
    benefits: [
      'קבלת החלטות מבוססות נתונים',
      'ראות טובה יותר לתזרים מזומנים',
      'הקצאת משאבים אסטרטגית',
      'זיהוי סיכונים מוקדם',
      'שקט נפשי להנהלה',
      'דיוק גבוה יותר בתחזיות',
    ],
    faqsTitle: "שאלות נפוצות על השירות",
    faqs: [
      {
        q: 'מה זה תכנון וניתוח פיננסי (FP&A)?',
        a: 'FP&A הוא מערך פעילויות התומך בתכנון תקציב, תחזיות וניתוח כדי לסייע לארגונים לקבל החלטות פיננסיות מושכלות.'
      },
      {
        q: 'באיזו תדירות לעדכן את התוכנית הפיננסית?',
        a: 'ההמלצה היא לבדוק ולעדכן את התוכנית מדי רבעון, אך ניתן להתאים לפי צרכי העסק.'
      },
      {
        q: 'האם אתם עובדים עם תוכנת הנהלת החשבונות שלנו?',
        a: 'כן, אנו משתלבים עם רוב מערכות הנהלת החשבונות ו-ERP המרכזיות.'
      },
      {
        q: 'האם השירות מתאים לסטארטאפים?',
        a: 'בהחלט! סטארטאפים נהנים ממשמעת פיננסית מוקדמת ותכנון תרחישים.'
      },
    ],
    ctaTitle: "מוכן לשדרג את הפיננסים שלך?",
    ctaDesc: "קבע פגישת ייעוץ חינם וראה כיצד המומחים שלנו יכולים לעזור לך לתכנן, לנתח ולצמוח.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const FinancialPlanningAnalysis = () => {
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
      <div className="relative w-full h-[90vh] mb-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={fpVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for better content visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center text-center p-8 z-20">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white max-w-2xl mx-auto"
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
              src={f1}
              alt="Financial Planning Illustration"
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
          src={f2} 
          alt="Benefits Illustration" 
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
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-12 gap-6">
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
              src={f3} 
              alt="Transform Your Finances" 
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

export default FinancialPlanningAnalysis;