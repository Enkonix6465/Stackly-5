import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import bookkeepingHeroVideo from '../assets/Bookkeeping & Accounting.mp4';
import book1 from '../assets/book.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';

// Translations for Bookkeeping & Accounting Page
const translations = {
  en: {
    heroTitle: "Bookkeeping & Accounting",
    heroDesc: "Stay organized and compliant with our expert bookkeeping and accounting services. We handle your daily transactions, reconciliations, and reporting so you can focus on growing your business with confidence.",
    includesTitle: "What This Service Includes",
    features: [
      'Daily Transaction Recording',
      'Bank & Account Reconciliation',
      'Accounts Payable & Receivable Management',
      'Payroll Processing',
      'Financial Statement Preparation',
      'Expense Tracking & Categorization',
    ],
    forTitle: "Who It's For",
    forDesc1: "Our Bookkeeping & Accounting service is designed for businesses and professionals who want to ensure their finances are always accurate and up-to-date. Whether you're a small business owner, freelancer, or nonprofit, our solutions are tailored to your needs.",
    forDesc2: "We work closely with you to understand your unique requirements, providing reliable support and clear financial records that empower you to make informed decisions.",
    clients: [
      'Small Businesses',
      'Entrepreneurs',
      'Freelancers',
      'Nonprofits',
      'Corporates',
      'Accounting Firms',
    ],
    benefitsTitle: "Benefits & Outcomes",
    benefits: [
      'Accurate and up-to-date records',
      'Stress-free tax season',
      'Improved cash flow management',
      'Time savings for business owners',
      'Better financial decision making',
      'Audit-ready documentation',
    ],
    faqsTitle: "FAQs About This Service",
    faqs: [
      {
        q: 'What does bookkeeping include?',
        a: 'Bookkeeping includes recording daily transactions, reconciling accounts, managing invoices, and preparing financial statements.'
      },
      {
        q: 'How often do you update the books?',
        a: 'We update your books regularly—daily, weekly, or monthly—based on your business needs.'
      },
      {
        q: 'Can you work with my current accounting software?',
        a: 'Yes, we work with all major accounting platforms and can adapt to your preferred tools.'
      },
      {
        q: 'Is this service suitable for small businesses?',
        a: 'Absolutely! Our services are tailored for businesses of all sizes, including startups and small businesses.'
      },
    ],
    ctaTitle: "Ready to Transform Your Finances?",
    ctaDesc: "Book a free consultation and see how our bookkeeping and accounting experts can help you keep your finances accurate and compliant.",
    ctaBtn: "Get Free Consultation"
  },
  ar: {
    heroTitle: "مسك الدفاتر والمحاسبة",
    heroDesc: "ابق منظمًا ومتوافقًا مع خدماتنا الاحترافية في مسك الدفاتر والمحاسبة. نحن نتولى المعاملات اليومية والمطابقة والتقارير حتى تتمكن من التركيز على نمو عملك بثقة.",
    includesTitle: "ما الذي تتضمنه الخدمة",
    features: [
      'تسجيل المعاملات اليومية',
      'مطابقة الحسابات والبنوك',
      'إدارة الحسابات الدائنة والمدينة',
      'معالجة الرواتب',
      'إعداد البيانات المالية',
      'تتبع وتصنيف النفقات',
    ],
    forTitle: "لمن هذه الخدمة",
    forDesc1: "خدمة مسك الدفاتر والمحاسبة مصممة للشركات والمهنيين الذين يريدون ضمان دقة وحداثة بياناتهم المالية دائمًا. سواء كنت صاحب عمل صغير أو مستقل أو منظمة غير ربحية، حلولنا مصممة لاحتياجاتك.",
    forDesc2: "نعمل معك لفهم متطلباتك الفريدة، ونوفر دعمًا موثوقًا وسجلات مالية واضحة تمكنك من اتخاذ قرارات مستنيرة.",
    clients: [
      'الشركات الصغيرة',
      'رواد الأعمال',
      'المستقلون',
      'المنظمات غير الربحية',
      'الشركات الكبرى',
      'مكاتب المحاسبة',
    ],
    benefitsTitle: "الفوائد والنتائج",
    benefits: [
      'سجلات دقيقة ومحدثة',
      'موسم ضرائب خالٍ من التوتر',
      'تحسين إدارة التدفق النقدي',
      'توفير الوقت لأصحاب الأعمال',
      'اتخاذ قرارات مالية أفضل',
      'وثائق جاهزة للتدقيق',
    ],
    faqsTitle: "الأسئلة الشائعة حول الخدمة",
    faqs: [
      {
        q: 'ما الذي يشمله مسك الدفاتر؟',
        a: 'يشمل تسجيل المعاملات اليومية، مطابقة الحسابات، إدارة الفواتير، وإعداد البيانات المالية.'
      },
      {
        q: 'كم مرة يتم تحديث الدفاتر؟',
        a: 'نقوم بتحديث دفاترك بانتظام—يوميًا أو أسبوعيًا أو شهريًا—حسب احتياجات عملك.'
      },
      {
        q: 'هل يمكنكم العمل مع برنامج المحاسبة الحالي الخاص بي؟',
        a: 'نعم، نعمل مع جميع منصات المحاسبة الرئيسية ويمكننا التكيف مع الأدوات المفضلة لديك.'
      },
      {
        q: 'هل هذه الخدمة مناسبة للشركات الصغيرة؟',
        a: 'بالتأكيد! خدماتنا مصممة لجميع أحجام الأعمال بما في ذلك الشركات الناشئة والصغيرة.'
      },
    ],
    ctaTitle: "جاهز لتحويل ماليتك؟",
    ctaDesc: "احجز استشارة مجانية وشاهد كيف يمكن لخبرائنا مساعدتك في الحفاظ على دقة وامتثال بياناتك المالية.",
    ctaBtn: "احصل على استشارة مجانية"
  },
  he: {
    heroTitle: "ניהול ספרים וחשבונאות",
    heroDesc: "הישאר מאורגן ותואם עם שירותי ניהול הספרים והחשבונאות המקצועיים שלנו. אנו מטפלים בעסקאות היומיות, התאמות ודיווחים כדי שתוכל להתמקד בצמיחת העסק שלך בביטחון.",
    includesTitle: "מה כוללת השירות",
    features: [
      'רישום עסקאות יומי',
      'התאמת בנקים וחשבונות',
      'ניהול חשבונות לתשלום ולקבלה',
      'עיבוד שכר',
      'הכנת דוחות כספיים',
      'מעקב וסיווג הוצאות',
    ],
    forTitle: "למי השירות מיועד",
    forDesc1: "שירות ניהול הספרים והחשבונאות שלנו מיועד לעסקים ואנשי מקצוע שרוצים לוודא שהפיננסים שלהם תמיד מדויקים ועדכניים. בין אם אתה בעל עסק קטן, עצמאי או עמותה, הפתרונות שלנו מותאמים לצרכים שלך.",
    forDesc2: "אנו עובדים איתך להבין את הדרישות הייחודיות שלך, מספקים תמיכה אמינה ורישומים פיננסיים ברורים שמעצימים אותך לקבל החלטות נכונות.",
    clients: [
      'עסקים קטנים',
      'יזמים',
      'עצמאים',
      'עמותות',
      'תאגידים',
      'משרדי הנהלת חשבונות',
    ],
    benefitsTitle: "יתרונות ותוצאות",
    benefits: [
      'רישומים מדויקים ועדכניים',
      'עונת מס ללא לחץ',
      'ניהול תזרים מזומנים משופר',
      'חיסכון בזמן לבעלי עסקים',
      'קבלת החלטות פיננסיות טובה יותר',
      'תיעוד מוכן לביקורת',
    ],
    faqsTitle: "שאלות נפוצות על השירות",
    faqs: [
      {
        q: 'מה כולל ניהול ספרים?',
        a: 'ניהול ספרים כולל רישום עסקאות יומי, התאמת חשבונות, ניהול חשבוניות והכנת דוחות כספיים.'
      },
      {
        q: 'באיזו תדירות מעדכנים את הספרים?',
        a: 'אנו מעדכנים את הספרים שלך באופן קבוע—יומי, שבועי או חודשי—בהתאם לצרכי העסק שלך.'
      },
      {
        q: 'האם אתם עובדים עם תוכנת החשבונאות שלי?',
        a: 'כן, אנו עובדים עם כל הפלטפורמות המרכזיות ויכולים להתאים לכלים המועדפים עליך.'
      },
      {
        q: 'האם השירות מתאים לעסקים קטנים?',
        a: 'בהחלט! השירותים שלנו מותאמים לכל סוגי העסקים, כולל סטארטאפים ועסקים קטנים.'
      },
    ],
    ctaTitle: "מוכן לשדרג את הפיננסים שלך?",
    ctaDesc: "קבע פגישת ייעוץ חינם וראה כיצד המומחים שלנו יכולים לשמור על דיוק וציות פיננסי.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const BookkeepingAccounting = () => {
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
    <section className={theme === 'dark' ? 'w-full p-0 m-0 bg-[#141B25] text-orange-100' : 'w-full p-0 m-0 bg-[#fdf9f4] text-orange-900'} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 1. Hero with Video Background */}
      <div className="relative w-full h-screen mb-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={bookkeepingHeroVideo}
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
            transition={{ duration: 0.8 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            className={`text-xl md:text-2xl max-w-3xl mx-auto text-orange-500`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </div>

      {/* 2. What This Service Includes */}
      <section className={`py-16`} style={{ backgroundColor: theme === 'dark' ? '#141B25' : '#fdf9f4' }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t.includesTitle}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src={book1}
              alt="Bookkeeping Services"
              className="rounded-lg shadow-lg w-full max-h-80 object-cover"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.ul
              className="space-y-4 text-orange-500 text-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
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
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-blue-100' : 'text-orange-500'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t.forTitle}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className={theme === 'dark' ? 'text-lg text-blue-100 leading-relaxed' : 'text-lg text-orange-900 leading-relaxed'}>
                {t.forDesc1}
              </p>
              <p className={theme === 'dark' ? 'text-lg text-blue-100 leading-relaxed' : 'text-lg text-orange-900 leading-relaxed'}>
                {t.forDesc2}
              </p>
            </motion.div>
            <motion.div
              className="grid lg:grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  className={`rounded-xl px-6 py-6 shadow flex flex-col items-center justify-center text-center h-full min-h-[80px] transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-[#23344a] border border-blue-900'
                      : 'bg-orange-100 border border-orange-300'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <span className={theme === 'dark' ? 'text-blue-100 font-semibold text-base' : 'text-orange-900 font-semibold text-base'}>
                    {client}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Benefits & Outcomes */}
      <section
        className="relative w-full h-[500px] md:h-screen flex items-center justify-center"
        style={{ backgroundColor: theme === 'dark' ? '#141B25' : '#fdf9f4' }}
      >
        <motion.img
          src={book2}
          alt="Benefits Illustration"
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.7)' }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-200/60 to-orange-100/60 z-10"></div>
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center p-8">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t.benefitsTitle}
          </motion.h2>
          <div className="w-full max-w-5xl grid grid-cols-3 gap-8">
            {t.benefits.slice(0, 3).map((benefit, idx) => (
              <motion.div
                key={idx}
                className={`backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center text-center border transition duration-300
                  ${theme === 'dark'
                    ? 'bg-[#1F2A38] border-orange-500'
                    : 'bg-orange-100 border-orange-300'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <span className={`font-semibold text-lg drop-shadow ${theme === 'dark' ? 'text-orange-100' : 'text-orange-500'}`}>
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="w-full max-w-5xl grid grid-cols-3 gap-8 mt-8">
            {t.benefits.slice(3, 6).map((benefit, idx) => (
              <motion.div
                key={idx + 3}
                className={`backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center text-center border transition duration-300
                  ${theme === 'dark'
                    ? 'bg-[#1F2A38] border-orange-500'
                    : 'bg-orange-100 border-orange-300'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx + 3) * 0.2 }}
              >
                <span className={`font-semibold text-lg drop-shadow ${theme === 'dark' ? 'text-orange-100' : 'text-orange-500'}`}>
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
      <div className="w-full py-10" style={{ backgroundColor: theme === 'dark' ? '#1E2A38' : '#FDF9F4' }}>
        <div className="container mx-auto px-4 flex flex-row md:flex-row items-center gap-10 max-w-6xl">
          <motion.div
            className="flex-1 flex flex-col items-start justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl font-bold text-orange-500 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.ctaTitle}
            </motion.h2>
            <motion.p
              className={`mb-6 ${theme === 'dark' ? 'text-orange-200' : 'text-orange-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
            className="flex-1 flex justify-center mt-10 md:mt-0 items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={book3}
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

export default BookkeepingAccounting;