import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

// Translations for Admin Dashboard
const translations = {
  en: {
    title: "Admin Dashboard",
    recentSignups: "Recent Signups",
    financialSummary: [
      { label: "Total Balance", value: "$432,568", change: "↑ 2.47%", lastMonth: "$24,478" },
      { label: "Total Period Change", value: "$245,860", change: "↑ 2.47%", lastMonth: "$24,478" },
      { label: "Total Period Expenses", value: "$25.35", change: "↓ 2.47%", lastMonth: "$24,478" },
      { label: "Total Period Income", value: "$22.56", change: "↑ 2.47%", lastMonth: "$24,478" },
    ],
    balanceTrends: "Balance Trends",
    monthlyExpenses: "Monthly Expenses Breakdown",
    transactions: "Transactions activity",
    expenseMgmt: "Expense Management",
    export: "Export",
    clientOverview: "Client Accounts Overview",
    noSignups: "No signups yet.",
    signupTable: ["Name", "Email", "Phone", "Login Date/Time"],
    transactionTable: ["Account", "Date", "Status", "Recipient", "Category", "Amount"],
    expenseTable: ["Date", "Type", "Vendor", "Amount", "Status"],
    clientsTable: ["Name", "Contact", "Plan", "Status", "Services", "Payment"],
    legend: ["Salaries", "Software", "Rent", "Service", "Tools"]
  },
  ar: {
    title: "لوحة تحكم المدير",
    recentSignups: "التسجيلات الأخيرة",
    financialSummary: [
      { label: "إجمالي الرصيد", value: "$432,568", change: "↑ 2.47%", lastMonth: "$24,478" },
      { label: "إجمالي التغير الدوري", value: "$245,860", change: "↑ 2.47%", lastMonth: "$24,478" },
      { label: "إجمالي المصروفات الدورية", value: "$25.35", change: "↓ 2.47%", lastMonth: "$24,478" },
      { label: "إجمالي الدخل الدوري", value: "$22.56", change: "↑ 2.47%", lastMonth: "$24,478" },
    ],
    balanceTrends: "اتجاهات الرصيد",
    monthlyExpenses: "تفصيل المصروفات الشهرية",
    transactions: "نشاط المعاملات",
    expenseMgmt: "إدارة المصروفات",
    export: "تصدير",
    clientOverview: "نظرة عامة على حسابات العملاء",
    noSignups: "لا يوجد تسجيلات بعد.",
    signupTable: ["الاسم", "البريد الإلكتروني", "الهاتف", "تاريخ/وقت الدخول"],
    transactionTable: ["الحساب", "التاريخ", "الحالة", "المستلم", "الفئة", "المبلغ"],
    expenseTable: ["التاريخ", "النوع", "المورد", "المبلغ", "الحالة"],
    clientsTable: ["الاسم", "الاتصال", "الخطة", "الحالة", "الخدمات", "الدفع"],
    legend: ["الرواتب", "البرمجيات", "الإيجار", "الخدمة", "الأدوات"]
  },
  he: {
    title: "לוח מנהל",
    recentSignups: "הרשמות אחרונות",
    financialSummary: [
      { label: "יתרה כוללת", value: "$432,568", change: "↑ 2.47%", lastMonth: "$24,478" },
      { label: "שינוי תקופתי כולל", value: "$245,860", change: "↑ 2.47%", lastMonth: "$24,478" },
      { label: "הוצאות תקופתיות כוללות", value: "$25.35", change: "↓ 2.47%", lastMonth: "$24,478" },
      { label: "הכנסה תקופתית כוללת", value: "$22.56", change: "↑ 2.47%", lastMonth: "$24,478" },
    ],
    balanceTrends: "מגמות יתרה",
    monthlyExpenses: "פירוט הוצאות חודשיות",
    transactions: "פעילות עסקאות",
    expenseMgmt: "ניהול הוצאות",
    export: "ייצוא",
    clientOverview: "סקירת חשבונות לקוחות",
    noSignups: "אין הרשמות עדיין.",
    signupTable: ["שם", "אימייל", "טלפון", "תאריך/שעת כניסה"],
    transactionTable: ["חשבון", "תאריך", "סטטוס", "מקבל", "קטגוריה", "סכום"],
    expenseTable: ["תאריך", "סוג", "ספק", "סכום", "סטטוס"],
    clientsTable: ["שם", "איש קשר", "תוכנית", "סטטוס", "שירותים", "תשלום"],
    legend: ["משכורות", "תוכנה", "שכירות", "שירות", "כלים"]
  }
};

const AdminDashboard = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    const handleLangChange = () => setLanguage(localStorage.getItem('language') || 'en');
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

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const t = translations[language];
  const isRTL = language === 'ar' || language === 'he';

  const bg = theme === 'dark' ? 'bg-[#1E2A38] dark:bg-[#1E2A38]' : 'bg-gray-50 dark:bg-[#fff]';
  const textMain = theme === 'dark' ? 'text-white dark:text-white' : 'text-black dark:text-white';
  const cardBg = theme === 'dark' ? 'bg-[#141B25] border-[#223366] dark:bg-[#141B25] dark:border-[#223366]' : 'bg-white border-gray-200 dark:bg-[#fdf9f4] dark:border-[#223366] text-black';
  const cardText = theme === 'dark' ? 'text-white dark:text-white' : 'text-black dark:text-black';

  // Fetch signup details from localStorage and update on every render
  const [signupUsers, setSignupUsers] = React.useState([]);
  useEffect(() => {
    const fetchSignups = () => {
      const users = JSON.parse(localStorage.getItem('signupUsers') || '[]');
      setSignupUsers(users);
    };
    fetchSignups();
    const handleStorage = () => fetchSignups();
    window.addEventListener('storage', handleStorage);
    const interval = setInterval(fetchSignups, 1000);
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <h1 className={`text-3xl font-bold mb-8 text-orange-400 max-w-7xl mx-auto pt-24 px-4 ${textMain}`} style={{color:theme === 'dark' ? 'white' : 'black'}}>
        {t.title}
      </h1>

      <div className="max-w-7xl mx-auto pb-10 px-4">
        {/* Signup Users Section */}
        <div className={`${cardBg} rounded-xl shadow p-6 mb-10`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-orange-400">{t.recentSignups}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className={`min-w-[600px] w-full text-xs sm:text-sm ${textMain}`}>
              <thead>
                <tr className={`${theme === 'dark' ? 'bg-[#223366] text-white' : 'bg-gray-50 text-gray-500'}`}>
                  {t.signupTable.map((col, idx) => (
                    <th key={idx} className="p-2 text-left font-medium whitespace-nowrap">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={`${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-100'}`} style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                {signupUsers.length === 0 ? (
                  <tr><td colSpan={4} className="p-4 text-center text-gray-400">{t.noSignups}</td></tr>
                ) : (
                  signupUsers.map((user, idx) => (
                    <tr key={idx}>
                      <td className="p-2 whitespace-nowrap">{user.firstname} {user.lastname}</td>
                      <td className="p-2 whitespace-nowrap">{user.email}</td>
                      <td className="p-2 whitespace-nowrap">{user.phone}</td>
                      <td className="p-2 whitespace-nowrap">{user.loginDateTime}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Summary Widget */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {t.financialSummary.map((card, idx) => (
            <div key={idx} className={`${cardBg} rounded-xl shadow p-6 flex flex-col justify-between border`}>
              <div className={`font-bold text-base mb-2 ${cardText}`}>{card.label}</div>
              <div className={`text-3xl font-bold mb-2 ${cardText}`}>{card.value}</div>
              <div className="border-t border-orange-200 my-2"></div>
              <div className="flex items-center text-xs mt-2">
                <span className="text-orange-600 font-bold mr-1">{card.change}</span>
                <span className="text-orange-400 ml-1">{isRTL ? (language === 'ar' ? "الشهر الماضي" : "חודש שעבר") : "Last month"} <span className="font-semibold">{card.lastMonth}</span></span>
              </div>
            </div>
          ))}
        </div>

        {/* Balance Trends & Monthly Expenses Breakdown */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Balance Trends Card */}
          <div className={`${cardBg} rounded-xl shadow p-6 flex flex-col border`}>
            <div className="flex justify-between items-center mb-2">
              <div className={`font-bold text-lg ${cardText}`}>{t.balanceTrends}</div>
              <div className="text-xs text-orange-400">{isRTL ? (language === 'ar' ? "الشهر الماضي" : "חודש שעבר") : "Last Month"} <span className="text-orange-600 font-bold ml-1">↑ 12.25%</span></div>
            </div>
            <div className={`text-3xl font-bold mb-2 ${cardText}`}>$221,478</div>
            {/* Fake area chart */}
            <div className="w-full h-32 bg-gradient-to-t from-orange-200 to-orange-400 rounded-b-xl relative overflow-hidden flex items-end">
              <div className="absolute left-0 bottom-0 w-full h-full flex items-end">
                <div className="bg-orange-300" style={{height:'30%',width:'10%'}}></div>
                <div className="bg-orange-400" style={{height:'50%',width:'10%'}}></div>
                <div className="bg-orange-300" style={{height:'40%',width:'10%'}}></div>
                <div className="bg-orange-500" style={{height:'80%',width:'10%'}}></div>
                <div className="bg-orange-300" style={{height:'60%',width:'10%'}}></div>
                <div className="bg-orange-400" style={{height:'70%',width:'10%'}}></div>
                <div className="bg-orange-200" style={{height:'35%',width:'10%'}}></div>
                <div className="bg-orange-300" style={{height:'55%',width:'10%'}}></div>
                <div className="bg-orange-400" style={{height:'45%',width:'10%'}}></div>
                <div className="bg-orange-200" style={{height:'25%',width:'10%'}}></div>
              </div>
            </div>
          </div>
          {/* Monthly Expenses Breakdown Card */}
          <div className={`${cardBg} rounded-xl shadow p-6 flex flex-col border`}>
            <div className={`font-bold text-lg mb-4 ${cardText}`}>{t.monthlyExpenses}</div>
            <div className="flex flex-row items-center justify-between">
              {/* Donut Chart */}
              <div className="flex flex-col items-center justify-center w-1/2">
                <svg width="140" height="140" viewBox="0 0 42 42" className="mb-2">
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#fb923c" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="0" />
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#fdba74" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="-30" />
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#fbbf24" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="-50" />
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#f59e42" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="-65" />
                  <circle r="15.9155" cx="21" cy="21" fill="transparent" stroke="#fca5a5" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="-85" />
                  <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="8" fill="#ea580c" fontWeight="bold">₹1.2L</text>
                </svg>
                <div className="text-xs text-orange-400">Total</div>
              </div>
              {/* Legend */}
              <div className="flex flex-col gap-3 w-1/2 pl-4">
                {t.legend.map((item, idx) => (
                  <div key={idx} className={`flex items-center text-base font-semibold ${cardText}`}>
                    <span className={`w-4 h-4 rounded-full mr-3 ${["bg-orange-400","bg-orange-300","bg-yellow-400","bg-orange-500","bg-orange-200"][idx]}`}></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Activity Table */}
        <div className={`${cardBg} rounded-xl shadow p-6 mb-10`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-orange-400">{t.transactions}</h2>
          </div>
          <div className="-mx-4 sm:mx-0 overflow-x-auto">
            <table className={`min-w-[700px] w-full text-xs sm:text-sm ${textMain}`}>
              <thead>
                <tr className={`${theme === 'dark' ? 'bg-[#223366] text-white' : 'bg-gray-50 text-gray-500'}`}>
                  {t.transactionTable.map((col, idx) => (
                    <th key={idx} className="p-2 text-left font-medium whitespace-nowrap">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={`${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-100'}`} style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                {/* Example static rows for demo */}
                <tr>
                  <td className="p-2 flex items-center gap-2 whitespace-nowrap"><span className="w-8 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">VISA</span>•••• 6799</td>
                  <td className="p-2">Feb 17, 2025</td>
                  <td className="p-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">Pending</span></td>
                  <td className="p-2 flex items-center gap-2"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adam Barbara" className="w-6 h-6 rounded-full"/> Adam Barbara</td>
                  <td className="p-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Transfer</span></td>
                  <td className="p-2">USD 1,500</td>
                </tr>
                {/* ...other rows as in your original code... */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expense Management Table */}
        <div className={`${cardBg} rounded-xl shadow p-6 mb-10`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-orange-400">{t.expenseMgmt}</h2>
            <button className="bg-orange-500 text-white px-4 py-2 rounded font-semibold">{t.export}</button>
          </div>
          <div className="-mx-4 sm:mx-0 overflow-x-auto">
            <table className={`min-w-[600px] w-full text-xs sm:text-sm ${textMain}`}>
              <thead>
                <tr className={`${theme === 'dark' ? 'bg-[#223366] text-white' : 'bg-gray-50 text-gray-500'}`}>
                  {t.expenseTable.map((col, idx) => (
                    <th key={idx} className="p-2 text-left font-medium whitespace-nowrap">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={`${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-100'}`} style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                <tr>
                  <td className="p-2 whitespace-nowrap">2025-08-01</td>
                  <td className="p-2 whitespace-nowrap">{t.legend[0]}</td>
                  <td className="p-2 whitespace-nowrap">Payroll</td>
                  <td className="p-2 whitespace-nowrap">₹3,00,000</td>
                  <td className="p-2 whitespace-nowrap"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Paid</span></td>
                </tr>
                {/* ...other rows as in your original code... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;