import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import home1hero from '../assets/home1hero.mp4';
import heroAboutUs from '../assets/hero about us.jpg';
import service1 from '../assets/1.png';
import service2 from '../assets/2.png';
import service3 from '../assets/3.png';

// Language translations
const translations = {
  en: {
    heroTitle: "Finance & Accounting Made Simple",
    heroDesc: "Empowering your business with modern financial tools and expert support. From bookkeeping to strategic planning, we provide comprehensive solutions that drive growth and ensure compliance. Trust our experienced team to handle your finances while you focus on what matters most.",
    heroBtn: "Get Started",
    impactTitle: "Our Impact in Numbers",
    impactDesc: "Delivering measurable results that drive business growth and financial success",
    assets: "Assets Under",
    management: "Management",
    accuracy: "Accuracy",
    rate: "Rate",
    avgCost: "Average Cost",
    savings: "Savings",
    satisfied: "Satisfied",
    clients: "Clients",
    whyTitle: "Why Choose Us for Your Financial Needs?",
    whyDesc: "With over 15 years of experience in finance and accounting, we provide comprehensive solutions that drive growth and ensure compliance. Our team of certified professionals uses cutting-edge technology to deliver accurate, timely, and strategic financial services tailored to your business needs.",
    whyPoints: [
      "Certified accountants and financial advisors",
      "Modern cloud-based financial solutions",
      "Proven track record with 2,500+ satisfied clients",
      "24/7 customer support and consultation"
    ],
    servicesTitle: "Our Core Services",
    servicesDesc: "We offer a comprehensive suite of financial services designed to help you and your business thrive. Explore our core offerings below:",
    serviceCards: [
      {
        img: service1,
        alt: "Business Accounting",
        title: "Business Accounting",
        desc: "Comprehensive bookkeeping, payroll, and tax services for businesses of all sizes. Stay compliant and make informed decisions with accurate financial records."
      },
      {
        img: service2,
        alt: "Personal Tax Preparation",
        title: "Personal Tax Preparation",
        desc: "Expert tax planning and filing for individuals. Maximize your returns and minimize liabilities with our personalized approach and up-to-date knowledge of tax laws."
      },
      {
        img: service3,
        alt: "Financial Consulting",
        title: "Financial Consulting",
        desc: "Strategic financial advice for growth, investments, and risk management. Our consultants help you plan for the future and achieve your financial goals."
      }
    ],
    reviewsTitle: "What Our Clients Say",
    reviewsDesc: "Real stories from satisfied clients who trust us with their financial success",
    reviews: [
      {
        quote: "Professional service that saved us $50,000 in taxes!",
        name: "John Smith",
        role: "CEO, TechStart Inc.",
        initials: "JS"
      },
      {
        quote: "Outstanding service! Their financial insights helped us optimize our cash flow and improve profit margins by 35%. The team is knowledgeable, responsive, and truly cares about our success.",
        name: "Lisa Rodriguez",
        role: "CFO, GrowthCorp",
        initials: "LR"
      },
      {
        quote: "Best financial partner we've ever worked with!",
        name: "Michael Lee",
        role: "Founder, InnovateLab",
        initials: "ML"
      },
      {
        quote: "Reduced our accounting workload by 60%!",
        name: "Sarah Kim",
        role: "Operations Director, RetailPlus",
        initials: "SK"
      },
      {
        quote: "Their investment advisory services have been phenomenal. Portfolio performance improved by 42% under their guidance. Professional, trustworthy, and results-driven team.",
        name: "David Wilson",
        role: "Investment Manager, WealthGroup",
        initials: "DW"
      },
      {
        quote: "Exceptional compliance expertise and support!",
        name: "Emma Thompson",
        role: "Finance Director, BuildCorp",
        initials: "ET"
      }
    ],
    ctaTitle: "Ready to Transform Your Finances?",
    ctaDesc: "Partner with us for expert financial guidance, innovative solutions, and a team that cares about your success. Take the next step toward financial clarity and growth today.",
    ctaBtn: "Get Your Free Consultation"
  },
  ar: {
    heroTitle: "المحاسبة والمالية ببساطة",
    heroDesc: "نمكن عملك بأدوات مالية حديثة ودعم خبراء. من مسك الدفاتر إلى التخطيط الاستراتيجي، نقدم حلولاً شاملة تدفع النمو وتضمن الامتثال. ثق بفريقنا ذو الخبرة لإدارة مالياتك بينما تركز على ما يهمك.",
    heroBtn: "ابدأ الآن",
    impactTitle: "أثرنا بالأرقام",
    impactDesc: "نحقق نتائج قابلة للقياس تدفع نمو الأعمال والنجاح المالي",
    assets: "الأصول تحت",
    management: "الإدارة",
    accuracy: "الدقة",
    rate: "النسبة",
    avgCost: "متوسط التوفير",
    savings: "التوفير",
    satisfied: "عملاء",
    clients: "راضون",
    whyTitle: "لماذا تختارنا لاحتياجاتك المالية؟",
    whyDesc: "مع أكثر من 15 عامًا من الخبرة في المالية والمحاسبة، نقدم حلولاً شاملة تدفع النمو وتضمن الامتثال. يستخدم فريقنا من المحترفين المعتمدين أحدث التقنيات لتقديم خدمات مالية دقيقة وفي الوقت المناسب واستراتيجية مصممة لاحتياجات عملك.",
    whyPoints: [
      "محاسبون ومستشارون ماليون معتمدون",
      "حلول مالية سحابية حديثة",
      "سجل حافل مع أكثر من 2500 عميل راضٍ",
      "دعم واستشارة على مدار الساعة"
    ],
    servicesTitle: "خدماتنا الأساسية",
    servicesDesc: "نقدم مجموعة شاملة من الخدمات المالية لمساعدتك أنت وعملك على النجاح. استكشف عروضنا الأساسية أدناه:",
    serviceCards: [
      {
        img: service1,
        alt: "المحاسبة التجارية",
        title: "المحاسبة التجارية",
        desc: "مسك دفاتر شامل، رواتب، وخدمات ضريبية لجميع أنواع الأعمال. ابقَ ملتزمًا واتخذ قرارات مستنيرة بسجلات مالية دقيقة."
      },
      {
        img: service2,
        alt: "إعداد الضرائب الشخصية",
        title: "إعداد الضرائب الشخصية",
        desc: "تخطيط ضريبي وخدمات تقديم للأفراد. عزز عوائدك وقلل الالتزامات مع نهجنا الشخصي ومعرفتنا المحدثة بالقوانين الضريبية."
      },
      {
        img: service3,
        alt: "الاستشارات المالية",
        title: "الاستشارات المالية",
        desc: "نصائح مالية استراتيجية للنمو والاستثمار وإدارة المخاطر. يساعدك مستشارونا في التخطيط للمستقبل وتحقيق أهدافك المالية."
      }
    ],
    reviewsTitle: "ماذا يقول عملاؤنا",
    reviewsDesc: "قصص حقيقية من عملاء راضين يثقون بنا في نجاحهم المالي",
    reviews: [
      {
        quote: "خدمة احترافية وفرت لنا 50,000 دولار في الضرائب!",
        name: "جون سميث",
        role: "الرئيس التنفيذي، تك ستارت",
        initials: "جس"
      },
      {
        quote: "خدمة رائعة! ساعدتنا رؤاهم المالية في تحسين التدفق النقدي وزيادة هامش الربح بنسبة 35%. الفريق ذو معرفة واستجابة ويهتم فعلاً بنجاحنا.",
        name: "ليزا رودريغيز",
        role: "المدير المالي، جروث كورب",
        initials: "لر"
      },
      {
        quote: "أفضل شريك مالي عملنا معه!",
        name: "مايكل لي",
        role: "مؤسس، إنوفيت لاب",
        initials: "مل"
      },
      {
        quote: "قللوا عبء المحاسبة لدينا بنسبة 60%! ",
        name: "سارة كيم",
        role: "مديرة العمليات، ريتيل بلس",
        initials: "سك"
      },
      {
        quote: "خدماتهم الاستشارية الاستثمارية كانت رائعة. أداء المحفظة تحسن بنسبة 42%. فريق محترف وجدير بالثقة ويركز على النتائج.",
        name: "ديفيد ويلسون",
        role: "مدير الاستثمار، ويلث جروب",
        initials: "دو"
      },
      {
        quote: "خبرة ودعم استثنائي في الامتثال!",
        name: "إيما طومسون",
        role: "مديرة المالية، بيلد كورب",
        initials: "إط"
      }
    ],
    ctaTitle: "جاهز لتحويل مالياتك؟",
    ctaDesc: "تعاون معنا للحصول على إرشاد مالي خبير وحلول مبتكرة وفريق يهتم بنجاحك. اتخذ الخطوة التالية نحو وضوح ونمو مالي اليوم.",
    ctaBtn: "احصل على استشارتك المجانية"
  },
  he: {
    heroTitle: "פיננסים וחשבונאות בפשטות",
    heroDesc: "מעצימים את העסק שלך עם כלים פיננסיים מודרניים ותמיכה מקצועית. מהנהלת חשבונות ועד תכנון אסטרטגי, אנו מספקים פתרונות מקיפים שמקדמים צמיחה ומבטיחים עמידה בדרישות. סמוך על הצוות המנוסה שלנו שיטפל בפיננסים שלך בזמן שאתה מתמקד בעיקר.",
    heroBtn: "התחל עכשיו",
    impactTitle: "ההשפעה שלנו במספרים",
    impactDesc: "מספקים תוצאות מדידות שמקדמות צמיחה עסקית והצלחה פיננסית",
    assets: "נכסים תחת",
    management: "ניהול",
    accuracy: "דיוק",
    rate: "שיעור",
    avgCost: "חיסכון ממוצע",
    savings: "חיסכון",
    satisfied: "לקוחות",
    clients: "מרוצים",
    whyTitle: "למה לבחור בנו לצרכים הפיננסיים שלך?",
    whyDesc: "עם ניסיון של מעל 15 שנה בפיננסים וחשבונאות, אנו מספקים פתרונות מקיפים שמקדמים צמיחה ומבטיחים עמידה בדרישות. הצוות המקצועי שלנו משתמש בטכנולוגיה מתקדמת כדי לספק שירותים פיננסיים מדויקים, בזמן ובאופן אסטרטגי המותאמים לצרכי העסק שלך.",
    whyPoints: [
      "רואי חשבון ויועצים פיננסיים מוסמכים",
      "פתרונות פיננסיים בענן מודרני",
      "היסטוריה מוכחת עם מעל 2,500 לקוחות מרוצים",
      "תמיכה וייעוץ 24/7"
    ],
    servicesTitle: "שירותי הליבה שלנו",
    servicesDesc: "אנו מציעים מערך שירותים פיננסיים מקיף שיעזור לך ולעסק שלך להצליח. גלה את השירותים המרכזיים שלנו:",
    serviceCards: [
      {
        img: service1,
        alt: "חשבונאות עסקית",
        title: "חשבונאות עסקית",
        desc: "ניהול ספרים, שכר ושירותי מס לעסקים בכל הגדלים. עמוד בדרישות וקבל החלטות מושכלות עם רישומים פיננסיים מדויקים."
      },
      {
        img: service2,
        alt: "הכנת מס אישית",
        title: "הכנת מס אישית",
        desc: "תכנון מס מקצועי והגשה ליחידים. מקסם החזרי מס והפחת התחייבויות עם גישה אישית וידע עדכני בחוקי המס."
      },
      {
        img: service3,
        alt: "ייעוץ פיננסי",
        title: "ייעוץ פיננסי",
        desc: "ייעוץ פיננסי אסטרטגי לצמיחה, השקעות וניהול סיכונים. היועצים שלנו יעזרו לך לתכנן קדימה ולהשיג מטרות פיננסיות."
      }
    ],
    reviewsTitle: "מה הלקוחות שלנו אומרים",
    reviewsDesc: "סיפורים אמיתיים מלקוחות מרוצים שסומכים עלינו להצלחתם הפיננסית",
    reviews: [
      {
        quote: "שירות מקצועי שחסך לנו 50,000$ במסים!",
        name: "ג'ון סמית",
        role: "מנכ\"ל, טקסטארט",
        initials: "גס"
      },
      {
        quote: "שירות יוצא דופן! התובנות הפיננסיות שלהם עזרו לנו לשפר את תזרים המזומנים ולהגדיל את הרווחים ב-35%. הצוות מקצועי, מגיב ודואג באמת להצלחה שלנו.",
        name: "ליסה רודריגז",
        role: "סמנכ\"לית כספים, גרות'קורפ",
        initials: "לר"
      },
      {
        quote: "השותף הפיננסי הטוב ביותר שעבדנו איתו!",
        name: "מייקל לי",
        role: "מייסד, אינובייטלאב",
        initials: "מל"
      },
      {
        quote: "הפחיתו את עומס החשבונאות שלנו ב-60%! ",
        name: "שרה קים",
        role: "מנהלת תפעול, ריטיילפלוס",
        initials: "סק"
      },
      {
        quote: "שירותי הייעוץ להשקעות שלהם היו מצוינים. ביצועי התיק השתפרו ב-42%. צוות מקצועי, אמין וממוקד תוצאות.",
        name: "דיויד וילסון",
        role: "מנהל השקעות, וולת'גרופ",
        initials: "דו"
      },
      {
        quote: "מומחיות ותמיכה יוצאת דופן בציות!",
        name: "אמה תומפסון",
        role: "מנהלת כספים, בילדקורפ",
        initials: "את"
      }
    ],
    ctaTitle: "מוכן לשדרג את הפיננסים שלך?",
    ctaDesc: "הצטרף אלינו להכוונה פיננסית מקצועית, פתרונות חדשניים וצוות שאכפת לו מההצלחה שלך. עשה את הצעד הבא לעבר בהירות וצמיחה פיננסית היום.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

// Impact Metrics Component
const ImpactMetrics = ({ theme, t }) => {
  const { ref } = useInView({ threshold: 0.3, triggerOnce: false });
  const sectionBg = theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black';

  return (
    <section className={`${sectionBg} py-20`} data-aos="fade-up" data-aos-duration="1200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            {t.impactTitle}
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto" 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            {t.impactDesc}
          </motion.p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-4 gap-8 text-center">
          {/* Assets Under Management */}
          <motion.div 
            data-aos="fade-up" data-aos-delay="600" whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-3">
              $<CountUp start={0} end={2.5} duration={4} decimals={1} decimal="." redraw={true} />B+
            </div>
            <div className="font-medium text-lg">{t.assets}</div>
            <div className="font-medium text-lg">{t.management}</div>
          </motion.div>

          {/* Accuracy Rate */}
          <motion.div 
            data-aos="fade-up" data-aos-delay="700" whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-3">
              <CountUp start={0} end={98.7} duration={4} decimals={1} decimal="." redraw={true} />%
            </div>
            <div className="font-medium text-lg">{t.accuracy}</div>
            <div className="font-medium text-lg">{t.rate}</div>
          </motion.div>

          {/* Average Cost Savings */}
          <motion.div 
            data-aos="fade-up" data-aos-delay="800" whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-3">
              <CountUp start={0} end={45} duration={4} redraw={true} />%
            </div>
            <div className="font-medium text-lg">{t.avgCost}</div>
            <div className="font-medium text-lg">{t.savings}</div>
          </motion.div>

          {/* Satisfied Clients */}
          <motion.div 
            data-aos="fade-up" data-aos-delay="900" whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-3">
              <CountUp start={0} end={2500} duration={4} separator="," redraw={true} />+
            </div>
            <div className="font-medium text-lg">{t.satisfied}</div>
            <div className="font-medium text-lg">{t.clients}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Client Reviews Component
const ClientReviews = ({ theme, t }) => {
  const sectionBg = theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-700';
  const secondaryText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`${sectionBg} py-20`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.reviewsTitle}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${secondaryText}`}>
            {t.reviewsDesc}
          </p>
        </div>
        {/* First Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12 items-start">
          {[t.reviews[0], t.reviews[1], t.reviews[2]].map((review, idx) => (
            <div key={idx} className="text-center flex flex-col justify-between h-full" data-aos={idx === 1 ? "slide-up" : idx === 0 ? "fade-right" : "fade-left"} data-aos-delay={400 + idx * 200} data-aos-once="true">
              <div className="flex-1 flex flex-col justify-center">
                <p className={`${textColor} text-lg italic mb-6`}>
                  {review.quote}
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-${idx === 1 ? '6' : '5'} h-${idx === 1 ? '6' : '5'} mx-0.5 drop-shadow-sm`} viewBox="0 0 20 20" fill="#ea580c">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold" style={{ color: '#000' }}>{review.name}</div>
                <div className={`${secondaryText} text-sm`}>{review.role}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Second Row */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {[t.reviews[3], t.reviews[4], t.reviews[5]].map((review, idx) => (
            <div key={idx} className="text-center flex flex-col justify-between h-full" data-aos={idx === 1 ? "slide-up" : idx === 0 ? "fade-right" : "fade-left"} data-aos-delay={900 + idx * 100} data-aos-once="true">
              <div className="flex-1 flex flex-col justify-center">
                <p className={`${textColor} text-lg italic mb-6`}>
                  {review.quote}
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-${idx === 1 ? '6' : '5'} h-${idx === 1 ? '6' : '5'} mx-0.5 drop-shadow-sm`} viewBox="0 0 20 20" fill="#ea580c">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold" style={{ color: '#000' }}>{review.name}</div>
                <div className={`${secondaryText} text-sm`}>{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home1 = () => {
  // Read theme and language from localStorage (Header controls both)
  const getTheme = () => localStorage.getItem('theme') || 'light';
  const getLanguage = () => localStorage.getItem('language') || 'en';
  const [theme, setTheme] = useState(getTheme());
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const syncTheme = () => setTheme(getTheme());
    const syncLang = () => setLanguage(getLanguage());

    window.addEventListener('storage', syncTheme);
    window.addEventListener('focus', syncTheme);
    window.addEventListener('theme-changed', syncTheme);
    window.addEventListener('language-changed', syncLang);

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: true,
      offset: 100,
    });

    return () => {
      window.removeEventListener('storage', syncTheme);
      window.removeEventListener('focus', syncTheme);
      window.removeEventListener('theme-changed', syncTheme);
      window.removeEventListener('language-changed', syncLang);
    };
  }, []);

  const t = translations[language];
  const isRTL = language === 'ar' || language === 'he';
  const sectionWhite = theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-white text-black';

  return (
    <div
      className={theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black'}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ overflowX: 'hidden' }}
    >
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden w-full sm:w-screen">
        {/* Hero section */}
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={home1hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-2 sm:px-4">
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 whitespace-normal"
            data-aos="fade-up" data-aos-delay="300"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            className="text-base xs:text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up" data-aos-delay="500"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.heroDesc}
          </motion.p>
          <motion.button 
            onClick={() => window.location.href = '#get-started'}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-base sm:text-lg transition-colors duration-200 shadow-lg"
            data-aos="fade-up" data-aos-delay="700"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            {t.heroBtn}
          </motion.button>
        </div>
      </section>

      {/* Anchor for Get Started scroll */}
      <div id="get-started"></div>

      {/* Why Choose Us Section */}
      <section className={sectionWhite + " py-10 sm:py-16"} data-aos="fade-up" data-aos-duration="1200" id="why-choose-us">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image */}
            <motion.div 
              className={isRTL ? "order-1 lg:order-2" : "order-2 lg:order-1"}
              data-aos={isRTL ? "slide-right" : "slide-left"} data-aos-delay="200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={heroAboutUs}
                alt={t.whyTitle}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            {/* Text Content */}
            <div className={isRTL ? "order-2 lg:order-1" : "order-1 lg:order-2"} data-aos={isRTL ? "slide-left" : "slide-right"} data-aos-delay="400">
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" 
                data-aos="fade-up" data-aos-delay="600"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t.whyTitle}
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg mb-6 sm:mb-8 text-justify leading-relaxed opacity-90"
                style={{ color: theme === 'dark' ? '#ddd' : '#4B5563' }}
                data-aos="fade-up" data-aos-delay="500"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {t.whyDesc}
              </motion.p>
              <div className="space-y-3 sm:space-y-4">
                {t.whyPoints.map((text, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-start"
                    data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-delay={800 + i * 100}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p style={{ color: theme === 'dark' ? '#ddd' : '#4B5563' }}>{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Impact Metrics */}
      <ImpactMetrics theme={theme} t={t} />
      {/* Our Services Section */}
      <section className={sectionWhite + " py-10 sm:py-16"} data-aos="fade-up" data-aos-duration="1200">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.servicesTitle}</h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: theme === 'dark' ? '#ccc' : '#4B5563' }}>
              {t.servicesDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.serviceCards.map(({img, alt, title, desc}, idx) => (
              <div key={idx} className={`relative rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center overflow-hidden transition-shadow duration-300 hover:shadow-2xl group`}
                style={{backgroundColor: theme==='dark' ? '#1E2A38' : 'white', color: theme==='dark' ? 'white' : 'black'}}>
                <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-[#1E2A38] to-transparent transition-all duration-500 z-0"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <img src={img} alt={alt} className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
                  <p className="mb-2 sm:mb-4 group-hover:text-white text-black transition-colors duration-300" style={{color: theme==='dark' ? '#ccc' : '#ccc'}}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Reviews */}
      <ClientReviews theme={theme} t={t} />
      {/* CTA Section */}
      <section 
        className="relative py-10 sm:py-16 flex items-center justify-center overflow-hidden"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #1E2A38 60%, #ea580c 100%)'
            : 'linear-gradient(135deg, #FDF9F4 60%, #ea580c 100%)'
        }}
      >
        <div 
          className="relative z-10 max-w-3xl mx-auto text-center px-3 sm:px-6"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-once="false"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4`} style={{color: theme === 'dark' ? 'white' : '#1F2937'}}>
            {t.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8" style={{color: theme === 'dark' ? '#fff' : '#000'}}>
            {t.ctaDesc}
          </p>
          <Link 
            to="/contactus" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-base sm:text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home1;