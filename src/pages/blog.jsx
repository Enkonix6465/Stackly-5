import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogHeroVideo from '../assets/bloghero.mp4';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.webp';
import blog3 from '../assets/blog3.webp';
import exp3 from '../assets/exp3.jpg';
import exp4 from '../assets/exp4.jpg';
import exp5 from '../assets/exp5.jpg';
import exp6 from '../assets/exp6.jpg';
import quizblog from '../assets/blogquiz.webp';

// Translations for Blog Page
const translations = {
  en: {
    heroTitle: "Financial Wisdom for a Brighter Future",
    heroDesc: "Explore expert articles, practical tips, and the latest trends to help you make confident financial decisions and achieve your goals.",
    featuredTitle: "Featured Articles",
    featuredArticles: [
      {
        id: 1,
        title: '5 Smart Ways to Save for Retirement',
        summary: 'Discover actionable strategies to boost your retirement savings and secure your future.',
        image: blog1,
      },
      {
        id: 2,
        title: 'Understanding Credit Scores',
        summary: 'Learn how credit scores work and how to improve yours for better financial opportunities.',
        image: blog2,
      },
      {
        id: 3,
        title: 'Top 10 Investment Myths Busted',
        summary: 'Separate fact from fiction and make smarter investment decisions.',
        image: blog3,
      },
    ],
    categoriesTitle: "Categories",
    categoriesDesc: "Explore a wide range of financial topics. Whether you're looking to invest, plan for retirement, or manage your business finances, our categories help you find the right advice and insights for your journey.",
    categories: [
      'Personal Finance',
      'Investing',
      'Tax Planning',
      'Retirement',
      'Insurance',
      'Business Finance',
    ],
    mythsTitle: "Myths & Facts",
    mythsAndFacts: [
      {
        myth: 'You need a lot of money to start investing.',
        fact: 'You can start investing with small amounts thanks to fractional shares and micro-investing apps.'
      },
      {
        myth: 'Checking your credit score hurts it.',
        fact: 'Checking your own credit score is a soft inquiry and does not affect your score.'
      },
      {
        myth: 'All debt is bad.',
        fact: 'Some debt, like mortgages or student loans, can be considered good if managed responsibly.'
      },
      {
        myth: 'Investing is the same as gambling.',
        fact: 'Investing is based on research and long-term growth, while gambling is based on chance.'
      },
      {
        myth: 'You should always avoid credit cards.',
        fact: 'Credit cards can be useful tools if used responsibly and paid off monthly.'
      },
      {
        myth: 'Renting is throwing money away.',
        fact: 'Renting can be a smart financial choice depending on your situation and goals.'
      },
    ],
    comparisonTitle: "Comparison",
    comparisonData: [
      { label: 'Traditional Savings', risk: 'Low', liquidity: 'High', return: '1-2% annual', minInvestment: '$1', taxBenefit: 'No' },
      { label: 'Stock Market', risk: 'High', liquidity: 'Medium', return: '7-10% annual', minInvestment: '$10', taxBenefit: 'No' },
      { label: 'Real Estate', risk: 'Medium', liquidity: 'Low', return: '4-8% annual', minInvestment: '$5,000', taxBenefit: 'Yes' },
      { label: 'Fixed Deposits', risk: 'Low', liquidity: 'Low', return: '5-7% annual', minInvestment: '$100', taxBenefit: 'Yes' },
      { label: 'Mutual Funds', risk: 'Medium', liquidity: 'Medium', return: '6-12% annual', minInvestment: '$50', taxBenefit: 'Sometimes' },
      { label: 'Gold', risk: 'Medium', liquidity: 'Medium', return: '4-7% annual', minInvestment: '$10', taxBenefit: 'No' },
    ],
    quizTitle: "Finance Quiz",
    quizQuestions: [
      {
        question: 'What is a good credit score?',
        options: ['300-500', '600-750', '800-850'],
        answer: 1,
      },
      {
        question: 'Which investment is typically considered the riskiest?',
        options: ['Savings Account', 'Stocks', 'Bonds'],
        answer: 1,
      },
      {
        question: 'What does ROI stand for?',
        options: ['Rate of Interest', 'Return on Investment', 'Revenue on Income'],
        answer: 1,
      },
      {
        question: 'Which is NOT a type of insurance?',
        options: ['Health', 'Travel', 'Shopping'],
        answer: 2,
      },
      {
        question: 'What is diversification in investing?',
        options: ['Putting all money in one stock', 'Spreading investments across assets', 'Investing only in real estate'],
        answer: 1,
      },
      {
        question: 'Which is a tax-advantaged retirement account?',
        options: ['401(k)', 'Savings Account', 'Checking Account'],
        answer: 0,
      },
      {
        question: 'What is a budget?',
        options: ['A type of loan', 'A spending plan', 'A credit score'],
        answer: 1,
      },
      {
        question: 'Which is a fixed expense?',
        options: ['Rent', 'Groceries', 'Entertainment'],
        answer: 0,
      },
      {
        question: 'What is compound interest?',
        options: ['Interest on principal only', 'Interest on principal and previous interest', 'Interest on taxes'],
        answer: 1,
      },
      {
        question: 'Which is a liquid asset?',
        options: ['Real Estate', 'Stocks', 'Savings Account'],
        answer: 2,
      },
    ]
  },
  ar: {
    heroTitle: "حكمة مالية لمستقبل أكثر إشراقًا",
    heroDesc: "استكشف مقالات الخبراء والنصائح العملية وآخر الاتجاهات لمساعدتك على اتخاذ قرارات مالية واثقة وتحقيق أهدافك.",
    featuredTitle: "مقالات مميزة",
    featuredArticles: [
      {
        id: 1,
        title: '5 طرق ذكية للادخار للتقاعد',
        summary: 'اكتشف استراتيجيات عملية لتعزيز مدخرات التقاعد وتأمين مستقبلك.',
        image: blog1,
      },
      {
        id: 2,
        title: 'فهم درجات الائتمان',
        summary: 'تعرف على كيفية عمل درجات الائتمان وكيفية تحسينها لفرص مالية أفضل.',
        image: blog2,
      },
      {
        id: 3,
        title: 'أفضل 10 خرافات استثمارية',
        summary: 'افصل بين الحقيقة والخيال واتخذ قرارات استثمارية أكثر ذكاءً.',
        image: blog3,
      },
    ],
    categoriesTitle: "الفئات",
    categoriesDesc: "استكشف مجموعة واسعة من المواضيع المالية. سواء كنت ترغب في الاستثمار أو التخطيط للتقاعد أو إدارة ماليات عملك، تساعدك الفئات في العثور على النصائح والرؤى المناسبة.",
    categories: [
      'المال الشخصي',
      'الاستثمار',
      'تخطيط الضرائب',
      'التقاعد',
      'التأمين',
      'مالية الأعمال',
    ],
    mythsTitle: "الخرافات والحقائق",
    mythsAndFacts: [
      {
        myth: 'تحتاج إلى الكثير من المال للبدء في الاستثمار.',
        fact: 'يمكنك البدء بمبالغ صغيرة بفضل الأسهم الجزئية وتطبيقات الاستثمار المصغر.'
      },
      {
        myth: 'فحص درجة الائتمان يؤثر عليها سلبًا.',
        fact: 'فحصك لدرجتك بنفسك لا يؤثر عليها لأنه استعلام غير رسمي.'
      },
      {
        myth: 'كل الديون سيئة.',
        fact: 'بعض الديون مثل الرهن العقاري أو قروض التعليم جيدة إذا أُديرت بشكل مسؤول.'
      },
      {
        myth: 'الاستثمار مثل القمار.',
        fact: 'الاستثمار يعتمد على البحث والنمو طويل الأمد، بينما القمار يعتمد على الحظ.'
      },
      {
        myth: 'يجب دائمًا تجنب بطاقات الائتمان.',
        fact: 'بطاقات الائتمان مفيدة إذا استخدمت بمسؤولية وتم سدادها شهريًا.'
      },
      {
        myth: 'الإيجار إهدار للمال.',
        fact: 'الإيجار قد يكون خيارًا ماليًا ذكيًا حسب وضعك وأهدافك.'
      },
    ],
    comparisonTitle: "المقارنة",
    comparisonData: [
      { label: 'الادخار التقليدي', risk: 'منخفض', liquidity: 'عالي', return: '1-2% سنويًا', minInvestment: '$1', taxBenefit: 'لا' },
      { label: 'سوق الأسهم', risk: 'مرتفع', liquidity: 'متوسط', return: '7-10% سنويًا', minInvestment: '$10', taxBenefit: 'لا' },
      { label: 'العقارات', risk: 'متوسط', liquidity: 'منخفض', return: '4-8% سنويًا', minInvestment: '$5,000', taxBenefit: 'نعم' },
      { label: 'الودائع الثابتة', risk: 'منخفض', liquidity: 'منخفض', return: '5-7% سنويًا', minInvestment: '$100', taxBenefit: 'نعم' },
      { label: 'الصناديق المشتركة', risk: 'متوسط', liquidity: 'متوسط', return: '6-12% سنويًا', minInvestment: '$50', taxBenefit: 'أحيانًا' },
      { label: 'الذهب', risk: 'متوسط', liquidity: 'متوسط', return: '4-7% سنويًا', minInvestment: '$10', taxBenefit: 'لا' },
    ],
    quizTitle: "اختبار مالي",
    quizQuestions: [
      {
        question: 'ما هي درجة الائتمان الجيدة؟',
        options: ['300-500', '600-750', '800-850'],
        answer: 1,
      },
      {
        question: 'أي استثمار يعتبر الأكثر خطورة عادة؟',
        options: ['حساب توفير', 'الأسهم', 'السندات'],
        answer: 1,
      },
      {
        question: 'ماذا تعني ROI؟',
        options: ['معدل الفائدة', 'العائد على الاستثمار', 'الإيرادات على الدخل'],
        answer: 1,
      },
      {
        question: 'أي مما يلي ليس نوعًا من التأمين؟',
        options: ['الصحة', 'السفر', 'التسوق'],
        answer: 2,
      },
      {
        question: 'ما هو التنويع في الاستثمار؟',
        options: ['وضع كل المال في سهم واحد', 'توزيع الاستثمارات عبر الأصول', 'الاستثمار فقط في العقارات'],
        answer: 1,
      },
      {
        question: 'أي حساب تقاعد يتمتع بميزة ضريبية؟',
        options: ['401(k)', 'حساب توفير', 'حساب جاري'],
        answer: 0,
      },
      {
        question: 'ما هو الميزانية؟',
        options: ['نوع من القروض', 'خطة إنفاق', 'درجة ائتمان'],
        answer: 1,
      },
      {
        question: 'أي من النفقات ثابتة؟',
        options: ['الإيجار', 'البقالة', 'الترفيه'],
        answer: 0,
      },
      {
        question: 'ما هو الفائدة المركبة؟',
        options: ['فائدة على الأصل فقط', 'فائدة على الأصل والفائدة السابقة', 'فائدة على الضرائب'],
        answer: 1,
      },
      {
        question: 'أي أصل يعتبر سائلًا؟',
        options: ['العقارات', 'الأسهم', 'حساب توفير'],
        answer: 2,
      },
    ]
  },
  he: {
    heroTitle: "חוכמה פיננסית לעתיד מזהיר",
    heroDesc: "גלה מאמרים מקצועיים, טיפים מעשיים ומגמות עדכניות שיעזרו לך לקבל החלטות פיננסיות בביטחון ולהשיג מטרות.",
    featuredTitle: "מאמרים נבחרים",
    featuredArticles: [
      {
        id: 1,
        title: '5 דרכים חכמות לחסוך לפנסיה',
        summary: 'גלה אסטרטגיות מעשיות להגדלת החיסכון לפנסיה ולהבטחת העתיד.',
        image: blog1,
      },
      {
        id: 2,
        title: 'הבנת דירוגי אשראי',
        summary: 'למד כיצד דירוגי אשראי עובדים וכיצד לשפר אותם להזדמנויות פיננסיות טובות יותר.',
        image: blog2,
      },
      {
        id: 3,
        title: '10 מיתוסים השקעה נפוצים',
        summary: 'הפרד בין עובדה לדמיון וקבל החלטות השקעה חכמות יותר.',
        image: blog3,
      },
    ],
    categoriesTitle: "קטגוריות",
    categoriesDesc: "גלה מגוון רחב של נושאים פיננסיים. בין אם אתה רוצה להשקיע, לתכנן לפרישה או לנהל את כספי העסק, הקטגוריות עוזרות לך למצוא את העצה והידע המתאימים.",
    categories: [
      'פיננסים אישיים',
      'השקעות',
      'תכנון מס',
      'פרישה',
      'ביטוח',
      'פיננסים עסקיים',
    ],
    mythsTitle: "מיתוסים ועובדות",
    mythsAndFacts: [
      {
        myth: 'צריך הרבה כסף כדי להתחיל להשקיע.',
        fact: 'אפשר להתחיל להשקיע בסכומים קטנים בזכות מניות חלקיות ואפליקציות השקעה.'
      },
      {
        myth: 'בדיקת דירוג אשראי פוגעת בו.',
        fact: 'בדיקה עצמית היא בדיקה רכה ולא משפיעה על הדירוג.'
      },
      {
        myth: 'כל החוב רע.',
        fact: 'חוב כמו משכנתא או הלוואות לימודים יכול להיות טוב אם מנוהל נכון.'
      },
      {
        myth: 'השקעה היא כמו הימורים.',
        fact: 'השקעה מבוססת מחקר וצמיחה ארוכת טווח, הימורים מבוססים מזל.'
      },
      {
        myth: 'תמיד צריך להימנע מכרטיסי אשראי.',
        fact: 'כרטיסי אשראי יכולים להיות כלי טוב אם משתמשים בהם נכון ומשלמים בזמן.'
      },
      {
        myth: 'שכירות היא בזבוז כסף.',
        fact: 'שכירות יכולה להיות בחירה פיננסית חכמה בהתאם למצב ולמטרות שלך.'
      },
    ],
    comparisonTitle: "השוואה",
    comparisonData: [
      { label: 'חיסכון מסורתי', risk: 'נמוך', liquidity: 'גבוה', return: '1-2% שנתי', minInvestment: '$1', taxBenefit: 'לא' },
      { label: 'שוק המניות', risk: 'גבוה', liquidity: 'בינוני', return: '7-10% שנתי', minInvestment: '$10', taxBenefit: 'לא' },
      { label: 'נדל"ן', risk: 'בינוני', liquidity: 'נמוך', return: '4-8% שנתי', minInvestment: '$5,000', taxBenefit: 'כן' },
      { label: 'פיקדונות', risk: 'נמוך', liquidity: 'נמוך', return: '5-7% שנתי', minInvestment: '$100', taxBenefit: 'כן' },
      { label: 'קרנות נאמנות', risk: 'בינוני', liquidity: 'בינוני', return: '6-12% שנתי', minInvestment: '$50', taxBenefit: 'לפעמים' },
      { label: 'זהב', risk: 'בינוני', liquidity: 'בינוני', return: '4-7% שנתי', minInvestment: '$10', taxBenefit: 'לא' },
    ],
    quizTitle: "חידון פיננסי",
    quizQuestions: [
      {
        question: 'מהו דירוג אשראי טוב?',
        options: ['300-500', '600-750', '800-850'],
        answer: 1,
      },
      {
        question: 'איזו השקעה נחשבת למסוכנת ביותר?',
        options: ['חשבון חיסכון', 'מניות', 'אג"ח'],
        answer: 1,
      },
      {
        question: 'מה משמעות ROI?',
        options: ['שיעור ריבית', 'תשואה על השקעה', 'הכנסה על הכנסה'],
        answer: 1,
      },
      {
        question: 'איזה אינו סוג ביטוח?',
        options: ['בריאות', 'נסיעות', 'קניות'],
        answer: 2,
      },
      {
        question: 'מהו גיוון בהשקעות?',
        options: ['השקעה במניה אחת', 'פיזור השקעות', 'השקעה רק בנדל"ן'],
        answer: 1,
      },
      {
        question: 'איזה חשבון פרישה נהנה מהטבת מס?',
        options: ['401(k)', 'חשבון חיסכון', 'חשבון עו"ש'],
        answer: 0,
      },
      {
        question: 'מהי תקציב?',
        options: ['סוג הלוואה', 'תוכנית הוצאות', 'דירוג אשראי'],
        answer: 1,
      },
      {
        question: 'איזו הוצאה קבועה?',
        options: ['שכירות', 'מכולת', 'בילויים'],
        answer: 0,
      },
      {
        question: 'מהי ריבית דריבית?',
        options: ['ריבית על הקרן בלבד', 'ריבית על הקרן והריבית הקודמת', 'ריבית על מסים'],
        answer: 1,
      },
      {
        question: 'איזו נכס נחשב לנזיל?',
        options: ['נדל"ן', 'מניות', 'חשבון חיסכון'],
        answer: 2,
      },
    ]
  }
};

const Blog = () => {
  // Theme & language sync
  const getTheme = () => localStorage.getItem('theme') || 'light';
  const getLanguage = () => localStorage.getItem('language') || 'en';
  const [theme, setTheme] = useState(getTheme());
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const syncTheme = () => setTheme(getTheme());
    const syncLang = () => setLanguage(getLanguage());
    window.addEventListener('theme-changed', syncTheme);
    window.addEventListener('storage', syncTheme);
    window.addEventListener('language-changed', syncLang);
    window.addEventListener('focus', syncLang);
    return () => {
      window.removeEventListener('theme-changed', syncTheme);
      window.removeEventListener('storage', syncTheme);
      window.removeEventListener('language-changed', syncLang);
      window.removeEventListener('focus', syncLang);
    };
  }, []);

  const t = translations[language];
  const isRTL = language === 'ar' || language === 'he';

  // HERO SECTION
  const HeroSection = () => (
    <section className={`relative min-h-screen mb-20 h-screen w-full flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'text-white' : ''}`}>
      <div className="absolute inset-0 z-0">
        <video
          src={blogHeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center w-full px-2 sm:px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}
        >
          {t.heroTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-100'}`}
        >
          {t.heroDesc}
        </motion.p>
      </div>
    </section>
  );

  // FEATURED ARTICLES
  const FeaturedArticles = () => (
    <section className="container mx-auto px-4 mb-32 py-16">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">{t.featuredTitle}</h2>
      <div className="grid md:grid-cols-3 mt-8 gap-8">
        {t.featuredArticles.map((art, i) => (
          <motion.div key={art.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.6 }} className={`${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'} rounded-xl shadow-lg overflow-hidden flex flex-col`}>
            <img src={art.image} alt={art.title} className="h-48 w-full object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}>{art.title}</h3>
              <p className={`mb-4 flex-1 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-600'}`}>{art.summary}</p>
              <Link to={`/blog/${art.id}`} className="text-orange-500 font-semibold hover:underline mt-auto">{isRTL ? (language === 'ar' ? "اقرأ المزيد" : "קרא עוד") : "Read More →"}</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  // CATEGORIES
  const Categories = () => (
    <section className={`w-full mt-5 pb-5 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#fdf9f4] text-black'}`}>
      <div className="container mx-auto px-4 grid grid-row-1 md:grid-cols-2 md:gap-x-20 gap-y-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className={`text-3xl font-bold mb-6 md:mb-8 text-left ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.categoriesTitle}
          </motion.h2>
          <motion.p 
            className={`text-lg max-w-md mb-4 md:mb-0 text-left ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t.categoriesDesc}
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-2 mt-20 gap-4 md:gap-6">
          {t.categories.map((cat, i) => (
            <motion.div 
              key={i} 
              className={`px-6 py-6 rounded-xl font-semibold text-lg shadow-sm cursor-pointer transition text-center ${theme === 'dark' ? 'bg-[#23344a] text-orange-200 hover:bg-[#1E2A38]' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {cat}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // MYTHS & FACTS
  const MythsAndFacts = () => {
    const mythsFactsGrid = t.mythsAndFacts.length >= 6
      ? t.mythsAndFacts.slice(0, 6)
      : [
          ...t.mythsAndFacts,
          ...Array(6 - t.mythsAndFacts.length).fill({ myth: '', fact: '' })
        ];
    return (
      <section className={`w-full px-0 py-1 ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#fff] text-black'}`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className={`text-3xl mx-auto font-bold mb-8 mt-20 text-center ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.mythsTitle}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-9 gap-y-10 max-w-7xl mx-auto">
            {mythsFactsGrid.map((item, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col pb-6 md:pb-0 md:pr-8 h-full min-h-[120px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-2">
                  <span className="font-bold text-orange-500 min-w-[50px]">{isRTL ? (language === 'ar' ? "الخرافة:" : "מיתוס:") : "Myth:"}</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{item.myth}</span>
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <span className={`font-bold min-w-[50px] ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}>{isRTL ? (language === 'ar' ? "الحقيقة:" : "עובדה:") : "Fact:"}</span>
                  <span className={theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}>{item.fact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // COMPARISON
  const Comparison = () => (
    <section className={`w-full px-0 pt-5 pb-5 mt-0 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#fdf9f4] text-black'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-3xl font-bold mt-20 mb-8 text-center ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.comparisonTitle}
        </motion.h2>
        <div className="overflow-x-auto">
          <motion.table 
            className={`w-full max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <thead className={theme === 'dark' ? 'bg-[#23344a]' : 'bg-blue-900'}>
              <tr>
                <th className="text-white px-6 py-4 text-left font-semibold text-lg">{isRTL ? (language === 'ar' ? "النوع" : "סוג") : "Type"}</th>
                <th className="text-white px-6 py-4 text-left font-semibold text-lg">{isRTL ? (language === 'ar' ? "مستوى المخاطرة" : "רמת סיכון") : "Risk Level"}</th>
                <th className="text-white px-6 py-4 text-left font-semibold text-lg">{isRTL ? (language === 'ar' ? "السيولة" : "נזילות") : "Liquidity"}</th>
                <th className="text-white px-6 py-4 text-left font-semibold text-lg">{isRTL ? (language === 'ar' ? "العائد المتوسط" : "תשואה ממוצעת") : "Average Return"}</th>
                <th className="text-white px-6 py-4 text-left font-semibold text-lg">{isRTL ? (language === 'ar' ? "الحد الأدنى للاستثمار" : "השקעה מינימלית") : "Min. Investment"}</th>
                <th className="text-white px-6 py-4 text-left font-semibold text-lg">{isRTL ? (language === 'ar' ? "ميزة ضريبية" : "הטבת מס") : "Tax Benefit"}</th>
              </tr>
            </thead>
            <tbody>
              {t.comparisonData.map((item, i) => (
                <motion.tr 
                  key={i} 
                  className={`border-b last:border-b-0 ${theme === 'dark' ? 'border-[#23344a]' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ backgroundColor: theme === 'dark' ? '#1E2A38' : '#fef3c7' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}>{item.label}</td>
                  <td className={`px-6 py-4 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>{item.risk}</td>
                  <td className={`px-6 py-4 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>{item.liquidity}</td>
                  <td className={`px-6 py-4 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>{item.return}</td>
                  <td className={`px-6 py-4 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>{item.minInvestment}</td>
                  <td className={`px-6 py-4 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>{item.taxBenefit}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );

  // QUIZ
  const Quiz = () => {
    const [quizIndex, setQuizIndex] = React.useState(0);
    const [selected, setSelected] = React.useState(null);
    const [showResult, setShowResult] = React.useState(false);
    const currentQ = t.quizQuestions[quizIndex];

    const handleQuiz = (idx) => {
      setSelected(idx);
      setShowResult(true);
      setTimeout(() => {
        setShowResult(false);
        setSelected(null);
      }, 1200);
    };

    const handlePrev = () => {
      setShowResult(false);
      setSelected(null);
      setQuizIndex((prev) => (prev - 1 + t.quizQuestions.length) % t.quizQuestions.length);
    };

    const handleNext = () => {
      setShowResult(false);
      setSelected(null);
      setQuizIndex((prev) => (prev + 1) % t.quizQuestions.length);
    };

    return (
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className={`text-3xl font-bold mb-8 mt-20 text-center ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.quizTitle}
        </motion.h2>
        <div className="flex flex-row md:flex-row items-center gap-12 max-w-full mx-auto min-h-[420px] md:min-h-[500px] lg:min-h-[600px]">
          {/* Left: Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={quizblog} 
              alt="Quiz Visual" 
              className="w-full max-w-md h-[320px] md:h-[400px] object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          {/* Right: Quiz */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between w-full mb-4">
              <motion.button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-200 hover:bg-orange-200 text-2xl font-bold mr-2"
                aria-label="Previous Question"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &#8592;
              </motion.button>
              <motion.span 
                className="font-semibold text-lg flex-1 text-center"
                key={quizIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentQ.question}
              </motion.span>
              <motion.button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-200 hover:bg-orange-200 text-2xl font-bold ml-2"
                aria-label="Next Question"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &#8594;
              </motion.button>
            </div>
            <div className="flex flex-col gap-4 w-full">
              {currentQ.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleQuiz(idx)}
                  disabled={showResult}
                  className={`px-6 py-3 rounded-lg border text-left font-medium transition-all duration-200 w-full
                    ${selected === idx
                      ? (idx === currentQ.answer
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : 'bg-red-100 border-red-500 text-red-700')
                      : `${theme === 'dark' ? 'bg-gray-50 border-gray-200 text-black hover:bg-orange-100' : 'bg-gray-50 border-gray-200 hover:bg-orange-100'}`
                    }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {opt}
                </motion.button>
              ))}
            </div>
            {showResult && (
              <motion.div 
                className={`mt-4 font-bold ${selected === currentQ.answer ? 'text-green-600' : 'text-red-600'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {selected === currentQ.answer ? (isRTL ? (language === 'ar' ? "صحيح!" : "נכון!") : "Correct!") : (isRTL ? (language === 'ar' ? "خطأ" : "לא נכון") : "Incorrect")}
              </motion.div>
            )}
            <motion.div 
              className="mt-6 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {isRTL ? (language === 'ar' ? "السؤال" : "שאלה") : "Question"} {quizIndex + 1} {isRTL ? (language === 'ar' ? "من" : "מתוך") : "of"} {t.quizQuestions.length}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className={theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-gray-50 text-black'} dir={isRTL ? 'rtl' : 'ltr'}>
      <HeroSection />
      <FeaturedArticles />
      <Categories />
      <MythsAndFacts />
      <Comparison />
      <Quiz />
    </div>
  );
};

export default Blog;