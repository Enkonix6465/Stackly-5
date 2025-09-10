import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import auditHeroVideo from '../assets/Audit & Compliance.mp4';
import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.webp';
import a3 from '../assets/a3.jpeg';

// Translations for Audit & Compliance Page
const translations = {
  en: {
    heroTitle: "Audit & Compliance",
    heroDesc: "Ensure your organization's integrity and compliance with our comprehensive audit and compliance services. Our expert auditors help you maintain transparency, meet regulatory requirements, and build stakeholder confidence.",
    includesTitle: "What This Service Includes",
    features: [
      'Financial Statement Audits',
      'Internal Control Reviews',
      'Compliance Assessments',
      'Risk Management Audits',
      'Regulatory Compliance',
      'Process Optimization',
    ],
    forTitle: "Who It's For",
    forDesc1: "Our Audit & Compliance service is designed for organizations that need to ensure regulatory compliance, maintain financial transparency, and build stakeholder trust. Whether you're a public company, private corporation, or nonprofit, our solutions help you navigate complex regulatory requirements.",
    forDesc2: "We work closely with you to understand your industry requirements, assess compliance gaps, and implement robust audit procedures that ensure your organization operates with integrity and meets all regulatory standards.",
    clients: [
      'Public Companies',
      'Private Corporations',
      'Nonprofit Organizations',
      'Government Entities',
      'Financial Institutions',
      'Healthcare Providers',
    ],
    benefitsTitle: "Benefits & Outcomes",
    benefits: [
      'Enhanced financial transparency',
      'Improved internal controls',
      'Regulatory compliance assurance',
      'Risk mitigation strategies',
      'Operational efficiency gains',
      'Stakeholder confidence building',
    ],
    faqsTitle: "FAQs About This Service",
    faqs: [
      {
        q: 'What is Audit & Compliance?',
        a: 'Audit & Compliance services ensure your organization meets regulatory requirements, maintains accurate financial records, and operates with proper internal controls to minimize risks and ensure transparency.'
      },
      {
        q: 'How often should audits be conducted?',
        a: 'Annual audits are typically required for most organizations, with quarterly reviews recommended for high-risk areas. We customize audit frequency based on your industry and regulatory requirements.'
      },
      {
        q: 'What types of compliance do you cover?',
        a: 'We cover financial reporting compliance, industry-specific regulations, internal control frameworks, and risk management standards to ensure comprehensive compliance coverage.'
      },
      {
        q: 'How do you ensure audit independence?',
        a: 'We maintain strict independence standards, follow professional audit guidelines, and provide objective assessments while maintaining confidentiality and professional ethics.'
      },
    ],
    ctaTitle: "Ready to Ensure Your Compliance?",
    ctaDesc: "Book a free consultation and see how our audit and compliance experts can help you maintain regulatory standards and build stakeholder confidence.",
    ctaBtn: "Get Free Consultation"
  },
  ar: {
    heroTitle: "التدقيق والامتثال",
    heroDesc: "ضمن نزاهة وامتثال مؤسستك مع خدمات التدقيق والامتثال الشاملة. يساعدك خبراؤنا في الحفاظ على الشفافية والامتثال للمتطلبات التنظيمية وبناء ثقة أصحاب المصلحة.",
    includesTitle: "ما الذي تتضمنه الخدمة",
    features: [
      'تدقيق البيانات المالية',
      'مراجعة الضوابط الداخلية',
      'تقييمات الامتثال',
      'تدقيق إدارة المخاطر',
      'الامتثال التنظيمي',
      'تحسين العمليات',
    ],
    forTitle: "لمن هذه الخدمة",
    forDesc1: "خدمة التدقيق والامتثال مصممة للمنظمات التي تحتاج لضمان الامتثال التنظيمي والحفاظ على الشفافية المالية وبناء الثقة. سواء كنت شركة عامة أو خاصة أو غير ربحية، نساعدك في تجاوز المتطلبات التنظيمية المعقدة.",
    forDesc2: "نعمل معك لفهم متطلبات الصناعة، وتقييم فجوات الامتثال، وتنفيذ إجراءات تدقيق قوية لضمان النزاهة والامتثال.",
    clients: [
      'الشركات العامة',
      'الشركات الخاصة',
      'المنظمات غير الربحية',
      'الجهات الحكومية',
      'المؤسسات المالية',
      'مقدمو الرعاية الصحية',
    ],
    benefitsTitle: "الفوائد والنتائج",
    benefits: [
      'شفافية مالية محسنة',
      'تحسين الضوابط الداخلية',
      'ضمان الامتثال التنظيمي',
      'استراتيجيات تقليل المخاطر',
      'كفاءة تشغيلية أعلى',
      'بناء ثقة أصحاب المصلحة',
    ],
    faqsTitle: "الأسئلة الشائعة حول الخدمة",
    faqs: [
      {
        q: 'ما هو التدقيق والامتثال؟',
        a: 'تضمن خدمات التدقيق والامتثال التوافق مع المتطلبات التنظيمية والحفاظ على سجلات مالية دقيقة وضوابط داخلية قوية لتقليل المخاطر وضمان الشفافية.'
      },
      {
        q: 'كم مرة يجب إجراء التدقيق؟',
        a: 'عادةً ما يُطلب التدقيق السنوي، مع مراجعات ربع سنوية للمناطق عالية المخاطر. نخصص التكرار حسب الصناعة والمتطلبات التنظيمية.'
      },
      {
        q: 'ما أنواع الامتثال التي تغطونها؟',
        a: 'نغطي الامتثال المالي، اللوائح الخاصة بالصناعة، أطر الضوابط الداخلية، ومعايير إدارة المخاطر لضمان تغطية شاملة.'
      },
      {
        q: 'كيف تضمنون استقلالية التدقيق؟',
        a: 'نحافظ على معايير استقلالية صارمة ونتبع إرشادات مهنية ونقدم تقييمات موضوعية مع الحفاظ على السرية والأخلاقيات المهنية.'
      },
    ],
    ctaTitle: "جاهز لضمان الامتثال؟",
    ctaDesc: "احجز استشارة مجانية وشاهد كيف يمكن لخبرائنا مساعدتك في الحفاظ على المعايير التنظيمية وبناء الثقة.",
    ctaBtn: "احصل على استشارة مجانية"
  },
  he: {
    heroTitle: "ביקורת וציות",
    heroDesc: "הבטח את תקינות וציות הארגון שלך עם שירותי ביקורת וציות מקיפים. המומחים שלנו יסייעו לך לשמור על שקיפות, לעמוד בדרישות רגולציה ולבנות אמון בעלי עניין.",
    includesTitle: "מה כוללת השירות",
    features: [
      'ביקורת דוחות כספיים',
      'סקירת בקרות פנימיות',
      'הערכות ציות',
      'ביקורת ניהול סיכונים',
      'ציות רגולטורי',
      'ייעול תהליכים',
    ],
    forTitle: "למי השירות מיועד",
    forDesc1: "שירות ביקורת וציות מיועד לארגונים שצריכים להבטיח עמידה ברגולציה, שקיפות פיננסית ובניית אמון. בין אם אתה חברה ציבורית, פרטית או עמותה, אנו מסייעים לך לעמוד בדרישות מורכבות.",
    forDesc2: "אנו עובדים איתך להבין את דרישות הענף, לזהות פערי ציות וליישם נהלי ביקורת חזקים להבטחת תקינות ועמידה בתקנות.",
    clients: [
      'חברות ציבוריות',
      'חברות פרטיות',
      'ארגונים ללא מטרות רווח',
      'גופים ממשלתיים',
      'מוסדות פיננסיים',
      'ספקי בריאות',
    ],
    benefitsTitle: "יתרונות ותוצאות",
    benefits: [
      'שקיפות פיננסית מוגברת',
      'שיפור בקרות פנימיות',
      'הבטחת עמידה ברגולציה',
      'אסטרטגיות הפחתת סיכונים',
      'יעילות תפעולית גבוהה יותר',
      'בניית אמון בעלי עניין',
    ],
    faqsTitle: "שאלות נפוצות על השירות",
    faqs: [
      {
        q: 'מה זה ביקורת וציות?',
        a: 'שירותי ביקורת וציות מבטיחים עמידה בדרישות רגולציה, שמירה על רישומים מדויקים ובקרות פנימיות להפחתת סיכונים ושקיפות.'
      },
      {
        q: 'באיזו תדירות יש לבצע ביקורת?',
        a: 'בדרך כלל נדרשת ביקורת שנתית, עם סקירות רבעוניות לאזורים בסיכון גבוה. אנו מתאימים את התדירות לפי הענף והרגולציה.'
      },
      {
        q: 'אילו סוגי ציות אתם מכסים?',
        a: 'אנו מכסים ציות לדיווח פיננסי, רגולציה ענפית, בקרות פנימיות וסטנדרטים לניהול סיכונים לציות מקיף.'
      },
      {
        q: 'איך אתם מבטיחים עצמאות ביקורת?',
        a: 'אנו שומרים על סטנדרטים מחמירים, פועלים לפי הנחיות מקצועיות ומספקים הערכות אובייקטיביות תוך שמירה על סודיות ואתיקה.'
      },
    ],
    ctaTitle: "מוכן להבטיח ציות?",
    ctaDesc: "קבע פגישת ייעוץ חינם וראה כיצד המומחים שלנו יכולים לסייע לך לעמוד בתקנות ולבנות אמון.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const AuditCompliance = () => {
  const getTheme = () => localStorage.getItem('theme') || 'light';
  const getLanguage = () => localStorage.getItem('language') || 'en';
  const [theme, setTheme] = useState(getTheme());
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
    });
    const handleThemeChange = () => setTheme(getTheme());
    const handleLangChange = () => setLanguage(getLanguage());
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

  return (
    <section className={theme === 'dark' ? 'w-full p-0 m-0 bg-[#1E2A38] text-white' : 'w-full p-0 m-0 bg-white text-black'} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 1. Hero + Brief Intro */}
      <div className="relative w-full h-[90vh] mb-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={auditHeroVideo}
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
              src={a1}
              alt="Audit & Compliance Services"
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
            {/* Left content */}
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
            
            {/* Right cards grid */}
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
        {/* Background Image */}
        <motion.img 
          src={a2} 
          alt="Audit Benefits Illustration" 
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" 
          style={{filter: 'brightness(0.7)'}}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        {/* Orange overlay for cards */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-200/60 to-orange-100/60 z-10"></div>
        {/* Content */}
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
          {/* Left: Content */}
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
          {/* Right: Image */}
          <motion.div 
            className="flex-1 flex justify-center mt-20 items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={a3} 
              alt="Ensure Your Compliance" 
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

export default AuditCompliance;