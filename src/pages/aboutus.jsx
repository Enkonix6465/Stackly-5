import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './aboutus.css';
import aboutushero from '../assets/aboutshero.mp4';
import exp1 from '../assets/exp1.jpg';
import exp2 from '../assets/exp2.jpg';
import exp3 from '../assets/exp3.jpg';
import exp4 from '../assets/exp4.jpg';
import exp5 from '../assets/exp5.jpg';
import exp6 from '../assets/exp6.jpg';
import mission from '../assets/mission.webp';
import aboutlast from '../assets/aboutlast.jpg';
// Translations for AboutUs
const translations = {
  en: {
    heroTitle: "Empowering Your Financial Future",
    heroDesc: "Unlock your path to prosperity with our innovative financial solutions, expert guidance, and personalized support. Whether you're an individual, entrepreneur, or enterprise, we help you achieve your goals with clarity, confidence, and trust. Join thousands who have transformed their financial journey with us.",
    journeyTitle: "Our Journey Through the Years",
    timeline: [
      { year: "2018", title: "Company Founded", desc: "Started with a team of 5 passionate individuals and a vision to revolutionize financial services." },
      { year: "2019", title: "First 100 Clients", desc: "Reached our first milestone of serving 100 satisfied clients with personalized financial solutions." },
      { year: "2020", title: "Digital Transformation", desc: "Launched our comprehensive digital platform, making financial services more accessible than ever." },
      { year: "2021", title: "Series A Funding", desc: "Secured $10M in Series A funding to expand our services and reach more clients globally." },
      { year: "2022", title: "International Expansion", desc: "Expanded operations to 5 countries, serving over 10,000 clients worldwide." },
      { year: "2023", title: "AI Integration", desc: "Integrated advanced AI technology to provide smarter, more personalized financial insights." },
      { year: "2024", title: "50,000+ Clients", desc: "Reached the milestone of serving over 50,000 clients with our innovative financial solutions." }
    ],
    vision: "To become the leading financial solutions provider by emphasizing innovation and trust, establishing ourselves as a globally recognized company through the highest standard of services and solutions.",
    mission: "To provide customer-centric, innovative, and result-oriented financial solutions that empower our clients worldwide, focusing on excellence, transparency, and long-term value.",
    awardsTitle: "Awards & Certifications",
    awards: [
      "Fintech Innovation Award 2023: Recognized for outstanding innovation in financial technology solutions",
      "Best Customer Service 2023: Awarded by Financial Services Excellence Council for superior client satisfaction",
      "ISO 27001 Certified: International standard for information security management systems",
      "SOC 2 Type II Compliant: Demonstrates our commitment to security, availability, and confidentiality",
      "Sustainable Finance Leader: Recognized for promoting sustainable and responsible financial practices",
      "Fast Company Most Innovative 2024: Listed among the most innovative companies in financial services"
    ],
    teamTitle: "Meet Our Leadership Team",
    team: [
      {
        img: exp1,
        name: "Priya Sharma",
        title: "Chief Executive Officer",
        bio: "Priya brings 18 years of leadership in digital finance, driving our mission to empower clients with innovative solutions. She is passionate about financial inclusion and has led multiple award-winning fintech initiatives."
      },
      {
        img: exp2,
        name: "Arjun Patel",
        title: "Chief Technology Officer",
        bio: "Arjun is a technology strategist with expertise in AI and cloud platforms. He leads our product innovation, ensuring secure and scalable solutions for all clients."
      },
      {
        img: exp3,
        name: "Meera Desai",
        title: "Chief Financial Officer",
        bio: "Meera oversees our financial strategy and growth, with a focus on transparency and value creation. She has a track record of guiding startups to sustainable success."
      },
      {
        img: exp4,
        name: "Rohan Gupta",
        title: "Chief Operating Officer",
        bio: "Rohan ensures operational excellence and client satisfaction. With 14 years in financial operations, he is dedicated to delivering seamless experiences."
      },
      {
        img: exp5,
        name: "Ananya Rao",
        title: "Chief Marketing Officer",
        bio: "Ananya leads our brand and outreach, building trust and engagement with clients. She specializes in digital marketing and financial education campaigns."
      },
      {
        img: exp6,
        name: "Vikram Singh",
        title: "Head of Client Success",
        bio: "Vikram champions our client-first approach, ensuring every client receives personalized support and guidance throughout their financial journey."
      }
    ],
    csrTitle: "Community Impact & Social Responsibility",
    csr: [
      {
        title: "Financial Literacy Program",
        desc: "We've educated over 25,000 individuals through our free financial literacy workshops and online resources, helping people make informed financial decisions.",
        stat: "25,000+ People Educated"
      },
      {
        title: "Environmental Suability",
        desc: "Committed to carbon neutrality by 2025. We've reduced our carbon footprint by 40% through digital-first operations and renewable energy initiatives.",
        stat: "40% Carbon Reduction"
      },
      {
        title: "Community Investment",
        desc: "We donate 1% of our annual profits to local charities and have provided $500K+ in microloans to small businesses in underserved communities.",
        stat: "$500K+ in Microloans"
      },
      {
        title: "Diversity & Inclusion",
        desc: "Our workforce is 45% women and 60% from diverse backgrounds. We're committed to creating an inclusive workplace where everyone can thrive.",
        stat: "60% Diverse Workforce"
      },
      {
        title: "Employee Volunteerism",
        desc: "Our employees have volunteered over 10,000 hours in community service, supporting education, health, and local development projects.",
        stat: "10,000+ Volunteer Hours"
      },
      {
        title: "Tech for Good",
        desc: "Leveraging technology to bridge financial gaps, we've launched digital tools for underserved populations to access essential financial services.",
        stat: "5+ Digital Initiatives"
      }
    ]
  },
  ar: {
    heroTitle: "تمكين مستقبلك المالي",
    heroDesc: "افتح طريقك للازدهار مع حلولنا المالية المبتكرة، والإرشاد الخبير، والدعم الشخصي. سواء كنت فردًا أو رائد أعمال أو مؤسسة، نساعدك على تحقيق أهدافك بالوضوح والثقة. انضم إلى الآلاف الذين غيروا رحلتهم المالية معنا.",
    journeyTitle: "رحلتنا عبر السنوات",
    timeline: [
      { year: "2018", title: "تأسيس الشركة", desc: "بدأنا بفريق من 5 أفراد متحمسين ورؤية لتغيير الخدمات المالية." },
      { year: "2019", title: "أول 100 عميل", desc: "حققنا أول إنجاز بخدمة 100 عميل راضٍ بحلول مالية شخصية." },
      { year: "2020", title: "التحول الرقمي", desc: "أطلقنا منصتنا الرقمية الشاملة لجعل الخدمات المالية أكثر سهولة." },
      { year: "2021", title: "تمويل السلسلة A", desc: "حصلنا على تمويل بقيمة 10 ملايين دولار لتوسيع خدماتنا عالمياً." },
      { year: "2022", title: "التوسع الدولي", desc: "وسعنا عملياتنا إلى 5 دول، نخدم أكثر من 10,000 عميل حول العالم." },
      { year: "2023", title: "دمج الذكاء الاصطناعي", desc: "دمجنا تقنيات الذكاء الاصطناعي لتقديم رؤى مالية أكثر ذكاءً وشخصية." },
      { year: "2024", title: "50,000+ عميل", desc: "وصلنا لخدمة أكثر من 50,000 عميل بحلولنا المالية المبتكرة." }
    ],
    vision: "أن نصبح المزود الرائد للحلول المالية من خلال الابتكار والثقة، وأن نثبت أنفسنا كشركة عالمية مع أعلى معايير الخدمات والحلول.",
    mission: "تقديم حلول مالية مبتكرة ومركزة على العميل ونتائج ملموسة تمكن عملائنا حول العالم، مع التركيز على التميز والشفافية والقيمة طويلة الأمد.",
    awardsTitle: "الجوائز والشهادات",
    awards: [
      "جائزة الابتكار المالي 2023: تقدير للابتكار المتميز في حلول التكنولوجيا المالية",
      "أفضل خدمة عملاء 2023: من مجلس التميز في الخدمات المالية لرضا العملاء",
      "شهادة ISO 27001: معيار دولي لإدارة أمن المعلومات",
      "الامتثال SOC 2 Type II: يثبت التزامنا بالأمان والتوافر والسرية",
      "قائد التمويل المستدام: تقدير لتعزيز الممارسات المالية المسؤولة",
      "شركة الأكثر ابتكارًا 2024: ضمن الشركات الأكثر ابتكارًا في الخدمات المالية"
    ],
    teamTitle: "تعرف على فريق القيادة",
    team: [
      {
        img: exp1,
        name: "بريا شارما",
        title: "الرئيس التنفيذي",
        bio: "بريا لديها 18 عامًا من القيادة في التمويل الرقمي، تقود مهمتنا لتمكين العملاء بحلول مبتكرة. شغوفة بالشمول المالي وقادت العديد من المبادرات الفائزة."
      },
      {
        img: exp2,
        name: "أرجون باتيل",
        title: "مدير التكنولوجيا",
        bio: "أرجون خبير استراتيجيات التكنولوجيا والذكاء الاصطناعي والسحابة. يقود الابتكار لضمان حلول آمنة وقابلة للتوسع."
      },
      {
        img: exp3,
        name: "ميرا ديساي",
        title: "مدير المالية",
        bio: "ميرا تشرف على الاستراتيجية المالية والنمو مع التركيز على الشفافية والقيمة. لديها سجل في توجيه الشركات الناشئة للنجاح المستدام."
      },
      {
        img: exp4,
        name: "روهان جوبتا",
        title: "مدير العمليات",
        bio: "روهان يضمن التميز التشغيلي ورضا العملاء. لديه 14 عامًا في العمليات المالية ويكرس جهوده لتقديم تجارب سلسة."
      },
      {
        img: exp5,
        name: "أنانيا راو",
        title: "مدير التسويق",
        bio: "أنانيا تقود العلامة التجارية والتواصل، تبني الثقة مع العملاء. متخصصة في التسويق الرقمي وحملات التوعية المالية."
      },
      {
        img: exp6,
        name: "فيكرام سينغ",
        title: "رئيس نجاح العملاء",
        bio: "فيكرام يقود نهجنا الذي يركز على العميل، لضمان حصول كل عميل على دعم وإرشاد شخصي."
      }
    ],
    csrTitle: "الأثر المجتمعي والمسؤولية الاجتماعية",
    csr: [
      {
        title: "برنامج التثقيف المالي",
        desc: "قمنا بتعليم أكثر من 25,000 فرد من خلال ورش العمل المجانية والموارد الإلكترونية، لمساعدة الناس على اتخاذ قرارات مالية واعية.",
        stat: "25,000+ شخص متعلم"
      },
      {
        title: "الاستدامة البيئية",
        desc: "ملتزمون بالحياد الكربوني بحلول 2025. قللنا بصمتنا الكربونية بنسبة 40% عبر العمليات الرقمية والطاقة المتجددة.",
        stat: "40% تقليل الكربون"
      },
      {
        title: "الاستثمار المجتمعي",
        desc: "نتبرع بـ1% من أرباحنا السنوية للجمعيات الخيرية وقدمنا أكثر من 500 ألف دولار قروض صغيرة للأعمال المجتمعية.",
        stat: "500 ألف دولار قروض صغيرة"
      },
      {
        title: "التنوع والشمول",
        desc: "45% من القوى العاملة نساء و60% من خلفيات متنوعة. ملتزمون ببيئة عمل شاملة للجميع.",
        stat: "60% تنوع وظيفي"
      },
      {
        title: "تطوع الموظفين",
        desc: "تطوع موظفونا بأكثر من 10,000 ساعة في خدمة المجتمع، دعم التعليم والصحة والمشاريع المحلية.",
        stat: "10,000+ ساعة تطوع"
      },
      {
        title: "التقنية للخير",
        desc: "نستخدم التقنية لسد الفجوات المالية، أطلقنا أدوات رقمية للفئات الأقل حظًا للوصول للخدمات المالية."
      }
    ]
  },
  he: {
    heroTitle: "מעצימים את העתיד הפיננסי שלך",
    heroDesc: "פתח את הדרך לשגשוג עם פתרונות פיננסיים חדשניים, ייעוץ מקצועי ותמיכה אישית. בין אם אתה יחיד, יזם או ארגון, אנו עוזרים לך להשיג מטרות בביטחון ובאמון. הצטרף לאלפים ששינו את מסע הפיננסי שלהם איתנו.",
    journeyTitle: "המסע שלנו לאורך השנים",
    timeline: [
      { year: "2018", title: "הקמת החברה", desc: "התחלנו עם צוות של 5 אנשים נלהבים וחזון לשנות את השירותים הפיננסיים." },
      { year: "2019", title: "100 לקוחות ראשונים", desc: "הגענו לאבן דרך ראשונה עם 100 לקוחות מרוצים ופתרונות פיננסיים מותאמים." },
      { year: "2020", title: "טרנספורמציה דיגיטלית", desc: "השקנו פלטפורמה דיגיטלית מקיפה להנגשת שירותים פיננסיים." },
      { year: "2021", title: "גיוס סדרה A", desc: "גייסנו 10 מיליון דולר להרחבת השירותים והגעה ללקוחות גלובליים." },
      { year: "2022", title: "התרחבות בינלאומית", desc: "התרחבנו ל-5 מדינות, משרתים מעל 10,000 לקוחות ברחבי העולם." },
      { year: "2023", title: "שילוב בינה מלאכותית", desc: "שילבנו טכנולוגיות AI למתן תובנות פיננסיות חכמות ומותאמות אישית." },
      { year: "2024", title: "50,000+ לקוחות", desc: "הגענו ל-50,000 לקוחות עם פתרונות פיננסיים חדשניים." }
    ],
    vision: "להיות ספק הפתרונות הפיננסיים המוביל, תוך דגש על חדשנות ואמון, ולהפוך לחברה גלובלית עם סטנדרט שירותים גבוה.",
    mission: "להעניק פתרונות פיננסיים חדשניים וממוקדי לקוח שמעצימים לקוחות ברחבי העולם, תוך דגש על מצוינות, שקיפות וערך ארוך טווח.",
    awardsTitle: "פרסים והסמכות",
    awards: [
      "פרס החדשנות הפיננסית 2023: הכרה בחדשנות יוצאת דופן בטכנולוגיה פיננסית",
      "שירות לקוחות מצטיין 2023: מוענק על ידי מועצת השירותים הפיננסיים למצוינות",
      "ISO 27001 מוסמך: תקן בינלאומי לניהול אבטחת מידע",
      "SOC 2 Type II: מחויבות לאבטחה, זמינות וסודיות",
      "מנהיג פיננסים ברי קיימא: קידום פרקטיקות פיננסיות אחראיות",
      "החברה החדשנית ביותר 2024: בין החברות החדשניות בשירותים פיננסיים"
    ],
    teamTitle: "הכירו את צוות ההנהלה",
    team: [
      {
        img: exp1,
        name: "פריה שארמה",
        title: "מנכ\"לית",
        bio: "18 שנות מנהיגות בפיננסים דיגיטליים, מובילה את המשימה להעצים לקוחות בפתרונות חדשניים. מובילה יוזמות פינטק זוכות פרסים."
      },
      {
        img: exp2,
        name: "ארג'ון פאטל",
        title: "מנהל טכנולוגיה ראשי",
        bio: "אסטרטג טכנולוגיה עם התמחות ב-AI ובענן. מוביל חדשנות מוצר לפתרונות מאובטחים ומדרגיים."
      },
      {
        img: exp3,
        name: "מירה דסאי",
        title: "מנהלת כספים ראשית",
        bio: "אחראית על אסטרטגיה וצמיחה פיננסית, עם דגש על שקיפות ויצירת ערך. ניסיון בהובלת סטארטאפים להצלחה."
      },
      {
        img: exp4,
        name: "רוהאן גופטה",
        title: "מנהל תפעול ראשי",
        bio: "מבטיח מצוינות תפעולית ושביעות רצון לקוחות. 14 שנות ניסיון בתפעול פיננסי."
      },
      {
        img: exp5,
        name: "אנניה ראו",
        title: "מנהלת שיווק ראשית",
        bio: "מובילה את המותג והקשר עם לקוחות. מתמחה בשיווק דיגיטלי וקמפיינים לחינוך פיננסי."
      },
      {
        img: exp6,
        name: "ויקראם סינג",
        title: "ראש הצלחת לקוחות",
        bio: "מוביל גישה ממוקדת לקוח, מבטיח תמיכה והכוונה אישית לכל לקוח."
      }
    ],
    csrTitle: "השפעה קהילתית ואחריות חברתית",
    csr: [
      {
        title: "תוכנית אוריינות פיננסית",
        desc: "חינכנו מעל 25,000 אנשים בסדנאות חינם ומשאבים דיגיטליים, לסייע בקבלת החלטות פיננסיות.",
        stat: "25,000+ אנשים חונכו"
      },
      {
        title: "קיימות סביבתית",
        desc: "מחויבים לניטרול פחמן עד 2025. הפחתנו את טביעת הרגל הפחמנית ב-40% באמצעות דיגיטציה ואנרגיה מתחדשת.",
        stat: "40% הפחתת פחמן"
      },
      {
        title: "השקעה בקהילה",
        desc: "תורמים 1% מהרווחים השנתיים לצדקה ומעניקים מעל 500,000$ הלוואות קטנות לעסקים קהילתיים.",
        stat: "500,000$ הלוואות קטנות"
      },
      {
        title: "גיוון והכלה",
        desc: "45% מהעובדים נשים ו-60% מרקע מגוון. מחויבים לסביבת עבודה מכלילה.",
        stat: "60% גיוון תעסוקתי"
      },
      {
        title: "התנדבות עובדים",
        desc: "עובדינו התנדבו מעל 10,000 שעות בקהילה, תמיכה בחינוך, בריאות ופיתוח מקומי.",
        stat: "10,000+ שעות התנדבות"
      },
      {
        title: "טכנולוגיה לטובת הכלל",
        desc: "מנצלים טכנולוגיה לצמצום פערים פיננסיים, השקת כלים דיגיטליים לאוכלוסיות מוחלשות."
      }
    ]
  }
};

const AboutUs = () => {
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
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false, mirror: true, offset: 100 });
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
    <div className={`about-us-container ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section 
        className={`hero-section h-[90vh] ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        style={{position: 'relative', overflow: 'hidden', backgroundColor: bgColors[sectionIndex++ % 2]}}
        data-aos="fade-in" data-aos-duration="1500"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="aboutus-hero-bg-video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={aboutushero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }} />
        <div className="hero-content" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
        }}>
          <h1 className="aboutus-hero-title text-white">{t.heroTitle}</h1>
          <p className="aboutus-hero-subtitle text-white" style={{maxWidth: 900, margin: '0 auto', fontSize: '1.25rem'}}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section 
        className={`timeline-section w-full py-16 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mx-auto px-4">
          <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{t.journeyTitle}</h2>
          <div className="timeline">
            {t.timeline.map((item, idx) => (
              <div className="timeline-item" data-aos="fade-up" data-aos-delay={100 + idx * 100} key={idx}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section 
        className={`mission-vision-section ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mission-vision-flex">
          <div className="mv-card mv-vision" data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-delay="200">
            <div className="mv-icon-bg">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#ff8800"/>
                <path d="M24 16C18 16 13.09 19.64 11 24C13.09 28.36 18 32 24 32C30 32 34.91 28.36 37 24C34.91 19.64 30 16 24 16ZM24 29C21.24 29 19 26.76 19 24C19 21.24 21.24 19 24 19C26.76 19 29 21.24 29 24C29 26.76 26.76 29 24 29ZM24 21C22.34 21 21 22.34 21 24C21 25.66 22.34 27 24 27C25.66 27 27 25.66 27 24C27 22.34 25.66 21 24 21Z" fill="#fff"/>
              </svg>
            </div>
            <h2 className="mv-title">{isRTL ? (language === 'ar' ? "الرؤية" : "חזון") : "Vision"}</h2>
            <p className="mv-desc">{t.vision}</p>
          </div>
          <div className="mv-image-center" data-aos="zoom-in" data-aos-delay="400">
            <img src={mission} alt="Team" className="mv-center-img" />
          </div>
          <div className="mv-card mv-mission" data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-delay="600">
            <div className="mv-icon-bg">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#ff8800"/>
                <path d="M32 18L22 28L16 22" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="mv-title">{isRTL ? (language === 'ar' ? "المهمة" : "משימה") : "Mission"}</h2>
            <p className="mv-desc">{t.mission}</p>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section 
        className={`awards-section ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container">
          <div className="awards-flex">
            <div className="awards-left" data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-delay="200">
              <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{t.awardsTitle}</h2>
              <ul className="awards-list">
                {t.awards.map((award, idx) => (
                  <li key={idx}>{award}</li>
                ))}
              </ul>
            </div>
            <div className="awards-right" data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-delay="400">
              <img src={aboutlast} alt="Awards" className="awards-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section 
        className={`team-section w-full py-16 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mx-auto px-4">
          <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{t.teamTitle}</h2>
          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {t.team.map((member, idx) => (
              <div className="team-member team-hover-animate" data-aos="fade-up" data-aos-delay={100 + idx * 100} key={idx}>
                <div className="team-hover-bg" />
                <img src={member.img} alt={member.name} className="team-photo orange-ring" />
                <h3>{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR / Community Impact */}
      <section 
        className={`csr-section ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2], paddingBottom: '4rem' }} // Added paddingBottom here
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container">
          <h2 className="csr-heading pt-10">{t.csrTitle}</h2>
          <div className="csr-cards-grid">
            {t.csr.map((item, idx) => (
              <div className="csr-item" data-aos="fade-up" data-aos-delay={100 + idx * 100} key={idx}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.stat && <div className="csr-stats"><span>{item.stat}</span></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;