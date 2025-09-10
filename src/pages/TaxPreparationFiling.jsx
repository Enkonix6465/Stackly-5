import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import taxHeroVideo from '../assets/Tax Preparation & Filing hero.mp4';
import t1 from '../assets/t1.webp';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpeg';

// Translations for Tax Preparation & Filing Page
const translations = {
  en: {
    heroTitle: "Tax Preparation & Filing",
    heroDesc: "Maximize your tax savings and ensure compliance with our comprehensive tax preparation and filing services. Our certified tax professionals help individuals and businesses navigate complex tax regulations with confidence.",
    includesTitle: "What This Service Includes",
    features: [
      'Individual Tax Preparation',
      'Business Tax Filing',
      'Tax Planning & Strategy',
      'Tax Audit Support',
      'Quarterly Tax Estimates',
      'Tax Compliance Services',
    ],
    forTitle: "Who It's For",
    forDesc1: "Our Tax Preparation & Filing service is designed for individuals and businesses who want to maximize their tax savings while ensuring full compliance. Whether you're a working professional, business owner, freelancer, or corporation, our solutions are tailored to help you navigate complex tax regulations with confidence.",
    forDesc2: "We partner closely with you to understand your unique tax situation, delivering expert preparation and strategic planning that helps you keep more of your hard-earned money while staying compliant with all regulations.",
    clients: [
      'Individuals & Families',
      'Small Businesses',
      'Corporations',
      'Partnerships',
      'Self-Employed',
      'Nonprofits',
    ],
    benefitsTitle: "Benefits & Outcomes",
    benefits: [
      'Maximized tax savings',
      'Reduced audit risk',
      'Timely filing compliance',
      'Expert tax guidance',
      'Peace of mind',
      'Year-round support',
    ],
    faqsTitle: "FAQs About This Service",
    faqs: [
      {
        q: 'What tax services do you offer?',
        a: 'We provide comprehensive tax preparation for individuals and businesses, including planning, filing, audit support, and compliance services.'
      },
      {
        q: 'How much can you save me on taxes?',
        a: 'Our tax experts typically save clients 15-30% more than they would save on their own, depending on their situation.'
      },
      {
        q: 'Do you handle business and personal taxes?',
        a: 'Yes, we specialize in both individual and business tax preparation, ensuring comprehensive coverage for all your tax needs.'
      },
      {
        q: 'What if I get audited?',
        a: 'We provide full audit support and representation, ensuring you have expert guidance throughout the entire process.'
      },
    ],
    ctaTitle: "Ready to Maximize Your Tax Savings?",
    ctaDesc: "Book a free consultation and see how our tax experts can help you save money and ensure compliance.",
    ctaBtn: "Get Free Consultation"
  },
  ar: {
    heroTitle: "إعداد وتقديم الضرائب",
    heroDesc: "حقق أقصى توفير ضريبي وامتثل للقوانين مع خدماتنا الشاملة لإعداد وتقديم الضرائب. يساعدك خبراؤنا المعتمدون في التنقل بثقة في الأنظمة الضريبية المعقدة للأفراد والشركات.",
    includesTitle: "ما الذي تتضمنه الخدمة",
    features: [
      'إعداد ضرائب الأفراد',
      'تقديم ضرائب الشركات',
      'تخطيط واستراتيجيات الضرائب',
      'دعم تدقيق الضرائب',
      'تقديرات الضرائب الفصلية',
      'خدمات الامتثال الضريبي',
    ],
    forTitle: "لمن هذه الخدمة",
    forDesc1: "خدمة إعداد وتقديم الضرائب مصممة للأفراد والشركات الذين يرغبون في تحقيق أقصى توفير ضريبي مع الامتثال الكامل. سواء كنت محترفًا أو صاحب عمل أو مستقلًا أو شركة، حلولنا تساعدك على التنقل في الأنظمة الضريبية المعقدة بثقة.",
    forDesc2: "نعمل معك لفهم وضعك الضريبي الفريد، ونقدم إعدادًا احترافيًا وتخطيطًا استراتيجيًا يساعدك على الاحتفاظ بمزيد من أموالك مع الامتثال لجميع اللوائح.",
    clients: [
      'الأفراد والعائلات',
      'الشركات الصغيرة',
      'الشركات الكبرى',
      'الشراكات',
      'المستقلون',
      'المنظمات غير الربحية',
    ],
    benefitsTitle: "الفوائد والنتائج",
    benefits: [
      'زيادة التوفير الضريبي',
      'تقليل مخاطر التدقيق',
      'الامتثال في الوقت المناسب',
      'إرشاد ضريبي احترافي',
      'راحة البال',
      'دعم على مدار السنة',
    ],
    faqsTitle: "الأسئلة الشائعة حول الخدمة",
    faqs: [
      {
        q: 'ما هي الخدمات الضريبية التي تقدمونها؟',
        a: 'نقدم إعداد ضرائب شامل للأفراد والشركات، بما في ذلك التخطيط والتقديم ودعم التدقيق وخدمات الامتثال.'
      },
      {
        q: 'كم يمكنكم توفيره لي في الضرائب؟',
        a: 'عادةً ما يوفر خبراؤنا للعملاء 15-30٪ أكثر مما يوفرونه بأنفسهم، حسب الحالة.'
      },
      {
        q: 'هل تتعاملون مع ضرائب الأعمال والأفراد؟',
        a: 'نعم، نحن متخصصون في إعداد ضرائب الأفراد والشركات لضمان تغطية شاملة لجميع احتياجاتك الضريبية.'
      },
      {
        q: 'ماذا لو تم تدقيقي؟',
        a: 'نقدم دعمًا وتمثيلًا كاملاً في التدقيق، ونضمن حصولك على إرشاد احترافي طوال العملية.'
      },
    ],
    ctaTitle: "جاهز لتعظيم توفيرك الضريبي؟",
    ctaDesc: "احجز استشارة مجانية وشاهد كيف يمكن لخبرائنا مساعدتك في توفير المال والامتثال.",
    ctaBtn: "احصل على استشارة مجانية"
  },
  he: {
    heroTitle: "הכנה והגשת מס",
    heroDesc: "מקסם את החיסכון במס ועמוד בדרישות החוק עם שירותי הכנה והגשת מס מקיפים. רואי החשבון המוסמכים שלנו מסייעים ליחידים ולעסקים לנווט בתקנות המס המורכבות בביטחון.",
    includesTitle: "מה כוללת השירות",
    features: [
      'הכנת מס ליחידים',
      'הגשת מס לעסקים',
      'תכנון ואסטרטגיית מס',
      'תמיכה בביקורת מס',
      'הערכות מס רבעוניות',
      'שירותי ציות למס',
    ],
    forTitle: "למי השירות מיועד",
    forDesc1: "שירות הכנה והגשת מס שלנו מיועד ליחידים ולעסקים שרוצים למקסם את החיסכון במס תוך עמידה מלאה בדרישות החוק. בין אם אתה עובד, בעל עסק, עצמאי או חברה, הפתרונות שלנו מותאמים לעזור לך לנווט בתקנות המס המורכבות בביטחון.",
    forDesc2: "אנו עובדים איתך להבין את מצבך הייחודי, ומספקים הכנה מקצועית ותכנון אסטרטגי שיעזור לך לשמור יותר מהכסף שלך תוך עמידה בכל התקנות.",
    clients: [
      'יחידים ומשפחות',
      'עסקים קטנים',
      'תאגידים',
      'שותפויות',
      'עצמאים',
      'עמותות',
    ],
    benefitsTitle: "יתרונות ותוצאות",
    benefits: [
      'חיסכון מס מרבי',
      'הפחתת סיכון ביקורת',
      'עמידה בזמנים',
      'הכוונה מקצועית',
      'שקט נפשי',
      'תמיכה לאורך כל השנה',
    ],
    faqsTitle: "שאלות נפוצות על השירות",
    faqs: [
      {
        q: 'אילו שירותי מס אתם מציעים?',
        a: 'אנו מספקים הכנה מקיפה ליחידים ולעסקים, כולל תכנון, הגשה, תמיכה בביקורת ושירותי ציות למס.'
      },
      {
        q: 'כמה תוכלו לחסוך לי במס?',
        a: 'המומחים שלנו חוסכים ללקוחות בדרך כלל 15-30% יותר מאשר היו חוסכים בעצמם, תלוי במצב.'
      },
      {
        q: 'האם אתם מטפלים במס אישי ועסקי?',
        a: 'כן, אנו מתמחים בהכנה ליחידים ולעסקים, ומבטיחים כיסוי מלא לכל צרכי המס שלך.'
      },
      {
        q: 'מה אם אקבל ביקורת?',
        a: 'אנו מספקים תמיכה וייצוג מלאים בביקורת, ומבטיחים הכוונה מקצועית לאורך כל התהליך.'
      },
    ],
    ctaTitle: "מוכן למקסם את החיסכון במס?",
    ctaDesc: "קבע פגישת ייעוץ חינם וראה כיצד המומחים שלנו יכולים לעזור לך לחסוך כסף ולעמוד בדרישות החוק.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const TaxPreparationFiling = () => {
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
          src={taxHeroVideo}
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
              src={t1}
              alt="Tax Preparation Services"
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
          src={t2} 
          alt="Tax Benefits Illustration" 
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
              src={t3} 
              alt="Maximize Tax Savings" 
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

export default TaxPreparationFiling;