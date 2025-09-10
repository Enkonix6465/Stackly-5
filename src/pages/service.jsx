import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import servicevideo from '../assets/servicehero.mp4';
import fpImg from '../assets/Financial Planning & Analysis.jpg';
import bookImg from '../assets/Bookkeeping & Accounting.jpg';
import taxImg from '../assets/Tax Preparation & Filing.jpg';
import budgetImg from '../assets/budget.jpg';
import investImg from '../assets/Investment Advisory.jpg';
import auditImg from '../assets/Audit & Compliance.jpg';

// Translations for Service Page
const translations = {
  en: {
    heroTitle: "Expert Financial Services",
    heroDesc: "Unlock growth, efficiency, and peace of mind with our tailored financial solutions for businesses of all sizes. From strategic consulting and hands-on analysis to ongoing support, our team empowers you to make smarter decisions, streamline operations.",
    servicesTitle: "Our Services",
    services: [
      {
        img: fpImg,
        link: "/financial-planning-analysis",
        title: "Financial Planning & Analysis",
        desc1: "Strategic budgeting, forecasting, and scenario analysis to help you make informed decisions and drive business growth. Our FP&A experts provide actionable insights, monitor KPIs, and ensure your financial plans align with your long-term goals.",
        desc2: "We work closely with your leadership team to develop robust financial models, identify growth opportunities, and mitigate risks before they impact your bottom line. Our approach combines advanced analytics with real-world business experience, giving you a clear roadmap for sustainable success."
      },
      {
        img: bookImg,
        link: "/bookkeeping-accounting",
        title: "Bookkeeping & Accounting",
        desc1: "Accurate, timely bookkeeping and accounting services to keep your records organized and compliant. We handle everything from daily transactions to monthly reconciliations, so you can focus on running your business with confidence.",
        desc2: "Our team leverages the latest accounting software and best practices to ensure your financial data is always up-to-date and audit-ready. We provide detailed financial statements, manage accounts payable/receivable, and offer ongoing support for all your accounting needs."
      },
      {
        img: taxImg,
        link: "/tax-preparation-filing",
        title: "Tax Preparation & Filing",
        desc1: "Comprehensive tax planning, preparation, and filing for businesses and individuals. We maximize deductions, ensure compliance, and minimize your tax liability, keeping you up-to-date with the latest regulations.",
        desc2: "Our tax experts stay current with changing tax laws and leverage technology to streamline the filing process. We handle federal, state, and local taxes, and provide proactive advice to help you plan for future obligations and avoid costly penalties."
      },
      {
        img: budgetImg,
        link: "/budget-management",
        title: "Budget Management",
        desc1: "Effective budget creation, monitoring, and adjustment to help you control costs and achieve your financial targets. Our team works with you to set realistic budgets and track performance throughout the year.",
        desc2: "We analyze historical data, forecast future trends, and provide actionable recommendations to optimize your spending. Our approach ensures you have the financial discipline and flexibility to adapt to changing business conditions."
      },
      {
        img: investImg,
        link: "/investment-advisory",
        title: "Investment Advisory",
        desc1: "Personalized investment strategies and portfolio management to grow and protect your wealth. We help you navigate market opportunities, assess risk, and make informed investment decisions for the future.",
        desc2: "Our advisors work with you to define your financial goals, risk tolerance, and time horizon, building a diversified portfolio that aligns with your objectives. We monitor market trends, rebalance portfolios, and provide regular performance updates."
      },
      {
        img: auditImg,
        link: "/audit-compliance",
        title: "Audit & Compliance",
        desc1: "Thorough audit and compliance services to ensure your business meets regulatory standards and industry best practices. We identify risks, recommend improvements, and help you maintain transparency and trust.",
        desc2: "Our experienced auditors conduct detailed reviews of your financial records, internal controls, and operational processes. We help you prepare for external audits, address compliance gaps, and implement best practices for ongoing risk management."
      }
    ],
    comparisonTitle: "Feature Comparison",
    comparisonRows: [
      ['Personalized Advice', 'Yes', 'Limited'],
      ['24/7 Support', 'Yes', 'No'],
      ['Transparent Fees', 'Yes', 'No'],
      ['Certified Experts', 'Yes', 'Sometimes'],
      ['Comprehensive Reports', 'Yes', 'No'],
    ],
    challengesTitle: "Top Challenges We Solve",
    challengesDesc: "We help you overcome the most common and complex financial obstacles faced by businesses and individuals. Our team brings deep industry knowledge and a proactive approach to every engagement, ensuring you receive practical solutions that deliver measurable results. Whether you are struggling with regulatory compliance, seeking to optimize your financial planning, or need guidance on investment strategies, we tailor our services to your unique needs. By partnering with us, you gain access to expert advice, innovative tools, and ongoing support that empower you to make confident decisions, streamline operations, and achieve your long-term goals. Let us help you turn financial challenges into opportunities for growth and success.",
    challenges: [
      'Confusing financial regulations and compliance requirements',
      'Lack of personalized financial planning',
      'Unclear investment strategies and risk management',
      'Difficulty tracking expenses and budgeting',
      'Limited access to expert advice and support',
    ],
    workflowTitle: "How It Works",
    workflowSteps: [
      { title: 'Contact Us', desc: 'Reach out via our website or phone to discuss your needs.' },
      { title: 'Initial Consultation', desc: 'We assess your situation and goals in a free session.' },
      { title: 'Proposal & Agreement', desc: 'Receive a tailored plan and transparent pricing.' },
      { title: 'Implementation', desc: 'Our experts execute the plan, keeping you informed at every step.' },
      { title: 'Ongoing Support', desc: 'We provide continuous monitoring, updates, and support.' },
    ],
    ctaTitle: "Ready to Transform Your Finances?",
    ctaDesc: "Partner with us for expert financial guidance, innovative solutions, and a team that cares about your success. Take the next step toward financial clarity and growth today.",
    ctaBtn: "Get Your Free Consultation"
  },
  ar: {
    heroTitle: "خدمات مالية احترافية",
    heroDesc: "حقق النمو والكفاءة وراحة البال مع حلولنا المالية المصممة لجميع أنواع الأعمال. من الاستشارات الاستراتيجية والتحليل العملي إلى الدعم المستمر، نمكنك من اتخاذ قرارات أكثر ذكاءً وتبسيط العمليات والبقاء في المقدمة في عالم مالي سريع التغير. جرب الفرق مع الإرشاد الخبير والعمليات الشفافة والشراكة طويلة الأمد.",
    servicesTitle: "خدماتنا",
    services: [
      {
        img: fpImg,
        link: "/financial-planning-analysis",
        title: "التخطيط والتحليل المالي",
        desc1: "إعداد الميزانية الاستراتيجية والتوقعات وتحليل السيناريوهات لمساعدتك في اتخاذ قرارات مدروسة ودفع نمو الأعمال.",
        desc2: "نعمل مع فريق القيادة لديك لتطوير نماذج مالية قوية وتحديد فرص النمو وتقليل المخاطر قبل أن تؤثر على النتائج."
      },
      {
        img: bookImg,
        link: "/bookkeeping-accounting",
        title: "مسك الدفاتر والمحاسبة",
        desc1: "خدمات مسك الدفاتر والمحاسبة الدقيقة وفي الوقت المناسب للحفاظ على تنظيم السجلات والامتثال.",
        desc2: "نستخدم أحدث برامج المحاسبة وأفضل الممارسات لضمان تحديث بياناتك المالية وجاهزيتها للتدقيق."
      },
      {
        img: taxImg,
        link: "/tax-preparation-filing",
        title: "إعداد وتقديم الضرائب",
        desc1: "تخطيط وإعداد وتقديم الضرائب الشامل للأعمال والأفراد. نزيد الخصومات ونضمن الامتثال ونقلل من الالتزامات الضريبية.",
        desc2: "يبقى خبراؤنا على اطلاع بأحدث القوانين الضريبية ويستخدمون التكنولوجيا لتسهيل عملية التقديم."
      },
      {
        img: budgetImg,
        link: "/budget-management",
        title: "إدارة الميزانية",
        desc1: "إنشاء ومراقبة وتعديل الميزانية بشكل فعال لمساعدتك في التحكم في التكاليف وتحقيق الأهداف المالية.",
        desc2: "نحلل البيانات التاريخية ونتوقع الاتجاهات المستقبلية ونقدم توصيات عملية لتحسين الإنفاق."
      },
      {
        img: investImg,
        link: "/investment-advisory",
        title: "الاستشارات الاستثمارية",
        desc1: "استراتيجيات استثمار شخصية وإدارة المحافظ لتنمية وحماية ثروتك.",
        desc2: "نعمل معك لتحديد الأهداف المالية وتحمل المخاطر وبناء محفظة متنوعة."
      },
      {
        img: auditImg,
        link: "/audit-compliance",
        title: "التدقيق والامتثال",
        desc1: "خدمات تدقيق وامتثال شاملة لضمان التوافق مع المعايير التنظيمية وأفضل الممارسات.",
        desc2: "نجري مراجعات تفصيلية للسجلات المالية والضوابط الداخلية والعمليات التشغيلية."
      }
    ],
    comparisonTitle: "مقارنة الميزات",
    comparisonRows: [
      ['نصيحة شخصية', 'نعم', 'محدودة'],
      ['دعم 24/7', 'نعم', 'لا'],
      ['رسوم شفافة', 'نعم', 'لا'],
      ['خبراء معتمدون', 'نعم', 'أحياناً'],
      ['تقارير شاملة', 'نعم', 'لا'],
    ],
    challengesTitle: "أهم التحديات التي نحلها",
    challengesDesc: "نساعدك في التغلب على أكثر العقبات المالية شيوعًا وتعقيدًا للأعمال والأفراد. نقدم حلولًا عملية تحقق نتائج ملموسة، سواء كنت تواجه صعوبات في الامتثال أو تحتاج إلى تحسين التخطيط المالي أو استشارات استثمارية.",
    challenges: [
      'تعقيد اللوائح المالية ومتطلبات الامتثال',
      'غياب التخطيط المالي الشخصي',
      'استراتيجيات الاستثمار غير واضحة وإدارة المخاطر',
      'صعوبة تتبع النفقات وإعداد الميزانية',
      'الوصول المحدود إلى الخبراء والدعم',
    ],
    workflowTitle: "كيف تعمل الخدمة",
    workflowSteps: [
      { title: 'اتصل بنا', desc: 'تواصل عبر الموقع أو الهاتف لمناقشة احتياجاتك.' },
      { title: 'استشارة أولية', desc: 'نقيم وضعك وأهدافك في جلسة مجانية.' },
      { title: 'عرض واتفاقية', desc: 'تحصل على خطة مخصصة وتسعير شفاف.' },
      { title: 'التنفيذ', desc: 'ينفذ خبراؤنا الخطة مع إبقائك على اطلاع.' },
      { title: 'الدعم المستمر', desc: 'نوفر مراقبة وتحديثات ودعم دائم.' },
    ],
    ctaTitle: "جاهز لتحويل مالياتك؟",
    ctaDesc: "تعاون معنا للحصول على إرشاد مالي خبير وحلول مبتكرة وفريق يهتم بنجاحك. اتخذ الخطوة التالية نحو وضوح ونمو مالي اليوم.",
    ctaBtn: "احصل على استشارتك المجانية"
  },
  he: {
    heroTitle: "שירותים פיננסיים מקצועיים",
    heroDesc: "השג צמיחה, יעילות ושקט נפשי עם פתרונות פיננסיים מותאמים לכל סוגי העסקים. מהייעוץ האסטרטגי והניתוח המעשי ועד תמיכה מתמשכת, אנו מאפשרים לך לקבל החלטות חכמות, לייעל תהליכים ולהישאר מוביל בעולם פיננסי משתנה. חווה את ההבדל עם ליווי מקצועי, תהליכים שקופים ושותפות לטווח ארוך.",
    servicesTitle: "השירותים שלנו",
    services: [
      {
        img: fpImg,
        link: "/financial-planning-analysis",
        title: "תכנון וניתוח פיננסי",
        desc1: "תקצוב אסטרטגי, תחזיות וניתוח תרחישים לקבלת החלטות מושכלות וצמיחה עסקית.",
        desc2: "עובדים עם צוות ההנהלה שלך לפיתוח מודלים פיננסיים, זיהוי הזדמנויות וצמצום סיכונים."
      },
      {
        img: bookImg,
        link: "/bookkeeping-accounting",
        title: "הנהלת חשבונות וחשבונאות",
        desc1: "שירותי הנהלת חשבונות מדויקים ועדכניים לשמירה על סדר ועמידה בתקנות.",
        desc2: "משתמשים בתוכנה מתקדמת ובשיטות עבודה מומלצות לעדכון נתונים פיננסיים."
      },
      {
        img: taxImg,
        link: "/tax-preparation-filing",
        title: "הכנת והגשת מס",
        desc1: "תכנון, הכנה והגשת מס מקיפה לעסקים ויחידים. ממקסמים ניכויים ומפחיתים התחייבות.",
        desc2: "המומחים שלנו מעודכנים בחוקי המס ומשתמשים בטכנולוגיה להקלת התהליך."
      },
      {
        img: budgetImg,
        link: "/budget-management",
        title: "ניהול תקציב",
        desc1: "יצירה, מעקב והתאמת תקציב יעילה לשליטה בעלויות והשגת מטרות פיננסיות.",
        desc2: "ניתוח נתונים היסטוריים, חיזוי מגמות ומתן המלצות לשיפור ההוצאות."
      },
      {
        img: investImg,
        link: "/investment-advisory",
        title: "ייעוץ השקעות",
        desc1: "אסטרטגיות השקעה אישיות וניהול תיקי השקעות לצמיחה והגנה על ההון.",
        desc2: "עובדים איתך להגדיר מטרות, סיכון ולבנות תיק מגוון."
      },
      {
        img: auditImg,
        link: "/audit-compliance",
        title: "ביקורת וציות",
        desc1: "שירותי ביקורת וציות מקיפים להבטחת עמידה בתקנות וסטנדרטים.",
        desc2: "ביצוע סקירות מפורטות של רשומות פיננסיות, בקרות ונהלים."
      }
    ],
    comparisonTitle: "השוואת תכונות",
    comparisonRows: [
      ['ייעוץ אישי', 'כן', 'מוגבל'],
      ['תמיכה 24/7', 'כן', 'לא'],
      ['עמלות שקופות', 'כן', 'לא'],
      ['מומחים מוסמכים', 'כן', 'לפעמים'],
      ['דוחות מקיפים', 'כן', 'לא'],
    ],
    challengesTitle: "האתגרים המרכזיים שאנו פותרים",
    challengesDesc: "אנו עוזרים לך להתגבר על המכשולים הפיננסיים הנפוצים והמורכבים ביותר לעסקים ויחידים. אנו מספקים פתרונות מעשיים שמביאים תוצאות, בין אם מדובר בציות, תכנון פיננסי או ייעוץ השקעות.",
    challenges: [
      'רגולציות פיננסיות מסובכות ודרישות ציות',
      'חוסר תכנון פיננסי אישי',
      'אסטרטגיות השקעה לא ברורות וניהול סיכונים',
      'קושי במעקב אחר הוצאות ותקצוב',
      'גישה מוגבלת למומחים ולתמיכה',
    ],
    workflowTitle: "איך זה עובד",
    workflowSteps: [
      { title: 'צור קשר', desc: 'פנה דרך האתר או הטלפון לדון בצרכים שלך.' },
      { title: 'פגישת ייעוץ ראשונית', desc: 'נבחן את מצבך ומטרותיך בפגישה חינם.' },
      { title: 'הצעה והסכם', desc: 'תקבל תוכנית מותאמת ותמחור שקוף.' },
      { title: 'יישום', desc: 'המומחים שלנו יבצעו את התוכנית ויעדכנו אותך.' },
      { title: 'תמיכה מתמשכת', desc: 'נעניק מעקב, עדכונים ותמיכה שוטפת.' },
    ],
    ctaTitle: "מוכן לשדרג את הפיננסים שלך?",
    ctaDesc: "הצטרף אלינו להכוונה פיננסית מקצועית, פתרונות חדשניים וצוות שאכפת לו מההצלחה שלך. עשה את הצעד הבא לעבר בהירות וצמיחה פיננסית היום.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const Service = () => {
  // Theme & language sync
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
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
    });
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

  return (
    <section className={`w-full p-0 m-0 overflow-x-hidden ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 1. Hero + Brief Intro */}
      <div
        className="relative w-screen max-w-full h-[90vh] mb-0 overflow-hidden"
        data-aos="fade-in"
        data-aos-duration="1500"
        style={{ left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={servicevideo}
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

      {/* Our Services Section - Alternating Image/Content */}
      <div 
        className={`w-full py-16 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 
            className="text-3xl font-bold text-center text-orange-500 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.servicesTitle}
          </motion.h2>
          {t.services.map((service, idx) => (
            <motion.div 
              key={idx}
              className={`grid lg:grid-cols-2 gap-10 items-center mb-16`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {(idx % 2 === 0) ? (
                <>
                  <motion.img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full max-h-74 rounded-xl shadow-lg object-cover"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className=""
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">
                      <Link to={service.link} className="hover:underline">{service.title}</Link>
                    </h3>
                    <p className="text-lg mb-2" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{service.desc1}</p>
                    <p className="text-lg mb-2" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{service.desc2}</p>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to={service.link} className="mt-2 px-4 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition inline-block">
                        {isRTL ? (language === 'ar' ? "اقرأ المزيد" : "קרא עוד") : "Read More"}
                      </Link>
                    </motion.button>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">
                      <Link to={service.link} className="hover:underline">{service.title}</Link>
                    </h3>
                    <p className="text-lg mb-2" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{service.desc1}</p>
                    <p className="text-lg mb-2" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{service.desc2}</p>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to={service.link} className="mt-2 px-4 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition inline-block">
                        {isRTL ? (language === 'ar' ? "اقرأ المزيد" : "קרא עוד") : "Read More"}
                      </Link>
                    </motion.button>
                  </motion.div>
                  <motion.img
                    className="order-1 md:order-2 w-full max-h-74 rounded-xl shadow-lg object-cover"
                    src={service.img}
                    alt={service.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Comparison Grid (Features Only) */}
      <div 
        className={`w-full mt-10  ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container py-8 mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-orange-500 mt-10 mb-6" data-aos="fade-up" data-aos-delay="200">{t.comparisonTitle}</h2>
          <div className="overflow-x-auto">
            <motion.table 
              className={`w-full rounded-xl shadow-lg ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-white text-black'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <thead className={theme === 'dark' ? 'bg-[#23344a]' : 'bg-orange-100'}>
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">{isRTL ? (language === 'ar' ? "الميزة" : "תכונה") : "Feature"}</th>
                  <th className="px-4 py-3 text-left font-semibold">{isRTL ? (language === 'ar' ? "خدمتنا" : "השירות שלנו") : "Our Service"}</th>
                  <th className="px-4 py-3 text-left font-semibold">{isRTL ? (language === 'ar' ? "الآخرون" : "אחרים") : "Others"}</th>
                </tr>
              </thead>
              <tbody>
                {t.comparisonRows.map((row, i) => (
                  <motion.tr 
                    key={i} 
                    className={`border-b last:border-b-0 ${theme === 'dark' ? 'border-[#23344a]' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  >
                    <td className={`px-4 py-3 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{row[0]}</td>
                    <td className={`px-4 py-3 font-semibold ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>{row[1]}</td>
                    <td className={`px-4 py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{row[2]}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </div>
      <div 
        className={`w-full mt-20 py-10 ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Side: Heading and Description */}
            <div className="mb-6 md:mb-0" data-aos="slide-right" data-aos-delay="300">
              <h2 className="text-2xl font-bold  text-orange-500 mb-4">{t.challengesTitle}</h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>{t.challengesDesc}</p>
            </div>
            {/* Right Side: Cards */}
            <div className=" grid grid-cols-1 gap-4" data-aos="slide-left" data-aos-delay="400">
              {t.challenges.map((c, i) => (
                <motion.div 
                  key={i} 
                  className={`rounded-xl shadow-md p-5 border-l-4 border-orange-400 flex items-start ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-orange-500 text-xl mr-3 mt-1">•</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Workflow Process (Step-by-step as Cards) */}
      <div 
        className={`w-full  ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mb-10 py-10 mx-auto px-4 w-full">
          <h2 className="text-2xl font-bold text-center text-orange-500 mt-20 mb-8" data-aos="fade-up" data-aos-delay="200">{t.workflowTitle}</h2>
          <div className="grid lg:grid-2 mb-12 gap-8">
            {t.workflowSteps.map((step, i) => (
              <motion.div 
                key={i} 
                className={`rounded-xl shadow-md p-6 flex flex-col items-start border-t-4 border-orange-400 relative ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
                data-aos="fade-up" 
                data-aos-delay={300 + (i * 100)}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -top-5 left-5 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">{i+1}</div>
                <h3 className={`text-xl font-semibold mb-2 mt-6 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}>{step.title}</h3>
                <p className={`text-base ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Start Free Evaluation CTA (Styled like Home1) */}
      <section 
        className="relative py-16 flex items-center justify-center overflow-hidden"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #1E2A38 60%, #ea580c 100%)'
            : 'linear-gradient(135deg, #FDF9F4 60%, #ea580c 100%)'
        }}
      >
        <div 
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-once="false"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4`} style={{color: theme === 'dark' ? 'white' : '#1F2937'}}>
            {t.ctaTitle}
          </h2>
          <p className="text-lg mb-8" style={{color: theme === 'dark' ? '#fff' : '#000'}}>
            {t.ctaDesc}
          </p>
          <Link 
            to="/contactus" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Service;