import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import investmentHeroVideo from '../assets/Investment Advisory.mp4';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpeg';
import i3 from '../assets/i3.jpg';

// Translations for Investment Advisory Page
const translations = {
  en: {
    heroTitle: "Investment Advisory",
    heroDesc: "Maximize your wealth potential with our expert investment advisory services. Our certified advisors help you build and manage portfolios that align with your financial goals and risk tolerance.",
    includesTitle: "What This Service Includes",
    features: [
      'Portfolio Analysis & Optimization',
      'Investment Strategy Development',
      'Risk Assessment & Management',
      'Asset Allocation Planning',
      'Market Research & Analysis',
      'Retirement Planning',
    ],
    forTitle: "Who It's For",
    forDesc1: "Our Investment Advisory service is designed for individuals and institutions who want to make informed investment decisions and build wealth strategically. Whether you're a new investor, experienced professional, or institution, our solutions help you navigate complex markets with confidence.",
    forDesc2: "We work closely with you to understand your financial objectives, risk tolerance, and timeline, delivering personalized investment strategies that help you achieve your long-term financial goals.",
    clients: [
      'Individual Investors',
      'High Net Worth Individuals',
      'Retirement Planning',
      'Corporate Investors',
      'Institutional Clients',
      'Family Offices',
    ],
    benefitsTitle: "Benefits & Outcomes",
    benefits: [
      'Optimized portfolio returns',
      'Reduced investment risk',
      'Strategic asset allocation',
      'Achieved financial goals',
      'Enhanced wealth preservation',
      'Tax-efficient investing',
    ],
    faqsTitle: "FAQs About This Service",
    faqs: [
      {
        q: 'What is Investment Advisory?',
        a: 'Investment advisory services provide expert guidance on investment decisions, portfolio management, and financial planning to help clients achieve their long-term financial goals.'
      },
      {
        q: 'How do you assess my risk tolerance?',
        a: 'We conduct comprehensive risk assessments through detailed questionnaires and personal consultations to understand your financial goals, timeline, and comfort with market volatility.'
      },
      {
        q: 'What investment strategies do you offer?',
        a: 'We offer diverse strategies including growth, value, income, and balanced approaches, tailored to your specific goals and risk tolerance.'
      },
      {
        q: 'How often do you review portfolios?',
        a: 'We provide quarterly portfolio reviews with monthly monitoring, ensuring your investments stay aligned with your goals and market conditions.'
      },
    ],
    ctaTitle: "Ready to Build Your Investment Portfolio?",
    ctaDesc: "Book a free consultation and see how our investment advisors can help you achieve your financial goals.",
    ctaBtn: "Get Free Consultation"
  },
  ar: {
    heroTitle: "الاستشارات الاستثمارية",
    heroDesc: "حقق أقصى إمكانيات ثروتك مع خدمات الاستشارات الاستثمارية الاحترافية. يساعدك مستشارونا المعتمدون في بناء وإدارة المحافظ بما يتوافق مع أهدافك المالية وتحملك للمخاطر.",
    includesTitle: "ما الذي تتضمنه الخدمة",
    features: [
      'تحليل وتحسين المحفظة',
      'تطوير استراتيجية الاستثمار',
      'تقييم وإدارة المخاطر',
      'تخطيط توزيع الأصول',
      'تحليل وأبحاث السوق',
      'تخطيط التقاعد',
    ],
    forTitle: "لمن هذه الخدمة",
    forDesc1: "خدمة الاستشارات الاستثمارية مصممة للأفراد والمؤسسات الذين يرغبون في اتخاذ قرارات استثمارية مدروسة وبناء الثروة بشكل استراتيجي. سواء كنت مستثمرًا جديدًا أو محترفًا أو مؤسسة، حلولنا تساعدك على التنقل في الأسواق المعقدة بثقة.",
    forDesc2: "نعمل معك لفهم أهدافك المالية وتحملك للمخاطر والجدول الزمني، ونقدم استراتيجيات استثمار شخصية تساعدك على تحقيق أهدافك المالية طويلة الأجل.",
    clients: [
      'المستثمرون الأفراد',
      'الأفراد ذوو الثروة العالية',
      'تخطيط التقاعد',
      'المستثمرون المؤسسيون',
      'العملاء المؤسساتيون',
      'مكاتب العائلات',
    ],
    benefitsTitle: "الفوائد والنتائج",
    benefits: [
      'تحقيق عوائد مثلى للمحفظة',
      'تقليل مخاطر الاستثمار',
      'توزيع الأصول بشكل استراتيجي',
      'تحقيق الأهداف المالية',
      'تعزيز الحفاظ على الثروة',
      'استثمار فعال ضريبيًا',
    ],
    faqsTitle: "الأسئلة الشائعة حول الخدمة",
    faqs: [
      {
        q: 'ما هي الاستشارات الاستثمارية؟',
        a: 'تقدم خدمات الاستشارات الاستثمارية إرشادًا احترافيًا حول قرارات الاستثمار وإدارة المحافظ والتخطيط المالي لمساعدة العملاء على تحقيق أهدافهم المالية طويلة الأجل.'
      },
      {
        q: 'كيف يتم تقييم تحمل المخاطر؟',
        a: 'نجري تقييمات شاملة للمخاطر من خلال استبيانات مفصلة واستشارات شخصية لفهم أهدافك المالية والجدول الزمني ومدى تحملك لتقلبات السوق.'
      },
      {
        q: 'ما هي استراتيجيات الاستثمار التي تقدمونها؟',
        a: 'نقدم استراتيجيات متنوعة تشمل النمو والقيمة والدخل والتوازن، مصممة خصيصًا لأهدافك وتحملك للمخاطر.'
      },
      {
        q: 'كم مرة يتم مراجعة المحافظ؟',
        a: 'نقدم مراجعات ربع سنوية للمحفظة مع مراقبة شهرية لضمان توافق الاستثمارات مع أهدافك وظروف السوق.'
      },
    ],
    ctaTitle: "جاهز لبناء محفظتك الاستثمارية؟",
    ctaDesc: "احجز استشارة مجانية وشاهد كيف يمكن لمستشارينا مساعدتك في تحقيق أهدافك المالية.",
    ctaBtn: "احصل على استشارة مجانية"
  },
  he: {
    heroTitle: "ייעוץ השקעות",
    heroDesc: "מקסם את פוטנציאל העושר שלך עם שירותי ייעוץ השקעות מקצועיים. היועצים המוסמכים שלנו יסייעו לך לבנות ולנהל תיקי השקעות בהתאם למטרותיך ולרמת הסיכון שלך.",
    includesTitle: "מה כוללת השירות",
    features: [
      'ניתוח ואופטימיזציה לתיק השקעות',
      'פיתוח אסטרטגיית השקעה',
      'הערכת וניהול סיכונים',
      'תכנון הקצאת נכסים',
      'מחקר וניתוח שוק',
      'תכנון פרישה',
    ],
    forTitle: "למי השירות מיועד",
    forDesc1: "שירות ייעוץ השקעות שלנו מיועד לאנשים ולמוסדות שרוצים לקבל החלטות השקעה מושכלות ולבנות עושר בצורה אסטרטגית. בין אם אתה משקיע חדש, מקצוען מנוסה או מוסד, הפתרונות שלנו יעזרו לך לנווט בשווקים מורכבים בביטחון.",
    forDesc2: "אנו עובדים איתך להבין את המטרות, רמת הסיכון והטווח שלך, ומספקים אסטרטגיות השקעה מותאמות אישית שיעזרו לך להשיג מטרות פיננסיות ארוכות טווח.",
    clients: [
      'משקיעים פרטיים',
      'אנשים בעלי הון גבוה',
      'תכנון פרישה',
      'משקיעים תאגידיים',
      'לקוחות מוסדיים',
      'משרדי משפחה',
    ],
    benefitsTitle: "יתרונות ותוצאות",
    benefits: [
      'תשואות מיטביות לתיק השקעות',
      'הפחתת סיכון השקעה',
      'הקצאת נכסים אסטרטגית',
      'השגת מטרות פיננסיות',
      'שימור עושר משופר',
      'השקעה יעילה מבחינת מס',
    ],
    faqsTitle: "שאלות נפוצות על השירות",
    faqs: [
      {
        q: 'מה זה ייעוץ השקעות?',
        a: 'שירותי ייעוץ השקעות מספקים הדרכה מקצועית בהחלטות השקעה, ניהול תיקי השקעות ותכנון פיננסי כדי לעזור ללקוחות להשיג מטרות פיננסיות ארוכות טווח.'
      },
      {
        q: 'איך מעריכים את רמת הסיכון שלי?',
        a: 'אנו מבצעים הערכות סיכון מקיפות באמצעות שאלונים מפורטים וייעוץ אישי כדי להבין את המטרות, הטווח ורמת הנוחות שלך עם תנודתיות השוק.'
      },
      {
        q: 'אילו אסטרטגיות השקעה אתם מציעים?',
        a: 'אנו מציעים אסטרטגיות מגוונות כולל צמיחה, ערך, הכנסה וגישה מאוזנת, בהתאמה אישית למטרותיך ולרמת הסיכון שלך.'
      },
      {
        q: 'באיזו תדירות בודקים את התיק?',
        a: 'אנו מבצעים בדיקות רבעוניות לתיק עם מעקב חודשי, כדי להבטיח שההשקעות שלך תואמות למטרות ולמצב השוק.'
      },
    ],
    ctaTitle: "מוכן לבנות תיק השקעות?",
    ctaDesc: "קבע פגישת ייעוץ חינם וראה כיצד היועצים שלנו יכולים לעזור לך להשיג מטרות פיננסיות.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const InvestmentAdvisory = () => {
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
          src={investmentHeroVideo}
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
              src={i1}
              alt="Investment Advisory Services"
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
          src={i2} 
          alt="Investment Benefits Illustration" 
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
              src={i3} 
              alt="Build Your Investment Portfolio" 
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

export default InvestmentAdvisory;