import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImage from '../assets/welcome image.webp';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// Translations for Welcome Page
const translations = {
  en: {
    welcomeTitle: "Welcome to user",
    welcomeDesc: "Your trusted partner for comprehensive financial services. From personal tax preparation to business accounting, we help you achieve your financial goals with expert guidance and professional solutions.",
    loginTitle: "Access Your Account",
    registerTitle: "Create Account",
    emailLabel: "Business Email",
    emailPlaceholder: "Enter your business email",
    passwordLabel: "Secure Password",
    passwordPlaceholder: "Enter your secure password",
    loginBtn: "Login",
    registerBtn: "Create Account",
    noAccount: "Don't have an account?",
    registerNow: "Register now",
    alreadyAccount: "Already have an account?",
    signUp: "Sign up",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "First name",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Last name",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    regPasswordLabel: "Password",
    regPasswordPlaceholder: "Create a secure password",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
    agreeTerms: "I agree to the Terms of Service and Privacy Policy",
    loginError: "Invalid email or password. Please try again.",
    userExists: "User with this email already exists. Please login instead."
  },
  ar: {
    welcomeTitle: "مرحبًا بك",
    welcomeDesc: "شريكك الموثوق للخدمات المالية الشاملة. من إعداد الضرائب الشخصية إلى المحاسبة التجارية، نساعدك على تحقيق أهدافك المالية بإرشاد وخدمات احترافية.",
    loginTitle: "الوصول إلى حسابك",
    registerTitle: "إنشاء حساب",
    emailLabel: "البريد الإلكتروني للأعمال",
    emailPlaceholder: "أدخل بريدك الإلكتروني للأعمال",
    passwordLabel: "كلمة المرور الآمنة",
    passwordPlaceholder: "أدخل كلمة المرور الآمنة",
    loginBtn: "تسجيل الدخول",
    registerBtn: "إنشاء حساب",
    noAccount: "ليس لديك حساب؟",
    registerNow: "سجل الآن",
    alreadyAccount: "لديك حساب بالفعل؟",
    signUp: "تسجيل الدخول",
    firstNameLabel: "الاسم الأول",
    firstNamePlaceholder: "الاسم الأول",
    lastNameLabel: "اسم العائلة",
    lastNamePlaceholder: "اسم العائلة",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "أدخل رقم هاتفك",
    regPasswordLabel: "كلمة المرور",
    regPasswordPlaceholder: "أنشئ كلمة مرور آمنة",
    confirmPasswordLabel: "تأكيد كلمة المرور",
    confirmPasswordPlaceholder: "أكد كلمة المرور",
    agreeTerms: "أوافق على شروط الخدمة وسياسة الخصوصية",
    loginError: "البريد الإلكتروني أو كلمة المرور غير صحيحة. حاول مرة أخرى.",
    userExists: "يوجد مستخدم بهذا البريد الإلكتروني. يرجى تسجيل الدخول."
  },
  he: {
    welcomeTitle: "ברוך הבא",
    welcomeDesc: "השותף האמין שלך לשירותים פיננסיים מקיפים. מהכנת מס אישית ועד הנהלת חשבונות לעסקים, אנו עוזרים לך להשיג מטרות פיננסיות עם ייעוץ מקצועי ופתרונות מותאמים.",
    loginTitle: "היכנס לחשבון שלך",
    registerTitle: "צור חשבון",
    emailLabel: "אימייל עסקי",
    emailPlaceholder: "הזן את האימייל העסקי שלך",
    passwordLabel: "סיסמה מאובטחת",
    passwordPlaceholder: "הזן סיסמה מאובטחת",
    loginBtn: "התחבר",
    registerBtn: "צור חשבון",
    noAccount: "אין לך חשבון?",
    registerNow: "הירשם עכשיו",
    alreadyAccount: "כבר יש לך חשבון?",
    signUp: "התחבר",
    firstNameLabel: "שם פרטי",
    firstNamePlaceholder: "שם פרטי",
    lastNameLabel: "שם משפחה",
    lastNamePlaceholder: "שם משפחה",
    phoneLabel: "מספר טלפון",
    phonePlaceholder: "הזן את מספר הטלפון שלך",
    regPasswordLabel: "סיסמה",
    regPasswordPlaceholder: "צור סיסמה מאובטחת",
    confirmPasswordLabel: "אישור סיסמה",
    confirmPasswordPlaceholder: "אשר את הסיסמה",
    agreeTerms: "אני מסכים לתנאי השירות ומדיניות הפרטיות",
    loginError: "אימייל או סיסמה שגויים. נסה שוב.",
    userExists: "משתמש עם אימייל זה כבר קיים. אנא התחבר."
  }
};

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
  { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
];

const Welcome = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  const t = translations[language];
  const isRTL = language === 'ar' || language === 'he';

  // Registration form state
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  // Default demo accounts
  const defaultUsers = [
    {
      email: 'admin@stackly.com',
      password: 'admin123',
      firstName: 'Admin',
      lastName: 'User'
    },
    {
      email: 'user@stackly.com',
      password: 'user123',
      firstName: 'Demo',
      lastName: 'User'
    },
    {
      email: 'demo@stackly.com',
      password: 'demo123',
      firstName: 'Demo',
      lastName: 'Account'
    }
  ];

  // Load registered users from localStorage or use default
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedUsers = localStorage.getItem('registeredUsers');
    return savedUsers ? JSON.parse(savedUsers) : defaultUsers;
  });

  // Save registered users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  useEffect(() => {
    const handleLangChange = () => setLanguage(localStorage.getItem('language') || 'en');
    window.addEventListener('language-changed', handleLangChange);
    window.addEventListener('focus', handleLangChange);
    return () => {
      window.removeEventListener('language-changed', handleLangChange);
      window.removeEventListener('focus', handleLangChange);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showRegister) {
      // Check if user already exists
      const userExists = registeredUsers.some(user => user.email === regData.businessEmail);
      if (userExists) {
        setLoginError(t.userExists);
        setShowRegister(false);
        setEmail(regData.businessEmail);
        return;
      }
      // Add new user to registered users
      const newUser = {
        email: regData.businessEmail,
        password: regData.password,
        firstName: regData.firstName,
        lastName: regData.lastName
      };
      setRegisteredUsers(prev => [...prev, newUser]);
      localStorage.setItem('firstname', regData.firstName);
      localStorage.setItem('lastname', regData.lastName);

      // Add signup details to signupUsers in localStorage for admin dashboard
      const signupUser = {
        firstname: regData.firstName,
        lastname: regData.lastName,
        email: regData.businessEmail,
        phone: regData.phone,
        loginDateTime: new Date().toLocaleString()
      };
      const prevSignups = JSON.parse(localStorage.getItem('signupUsers') || '[]');
      localStorage.setItem('signupUsers', JSON.stringify([...prevSignups, signupUser]));

      setShowRegister(false);
      setEmail(regData.businessEmail);
      setRegData({
        firstName: '',
        lastName: '',
        businessEmail: '',
        phone: '',
        company: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      });
    } else {
      // Admin login check
      if (email === 'admin@enkonix.in' && password === 'admin123') {
        setLoginError('');
        localStorage.setItem('firstname', 'Admin');
        localStorage.setItem('lastname', 'User');
        localStorage.setItem('avatar', 'AU');
        navigate('/admindashboard');
        return;
      }
      // Check if credentials match any registered user
      const matchedUser = registeredUsers.find(
        user => user.email === email && user.password === password
      );

      if (matchedUser) {
        const first = matchedUser.firstName ? matchedUser.firstName.charAt(0).toUpperCase() : '';
        const last = matchedUser.lastName ? matchedUser.lastName.charAt(0).toUpperCase() : '';
        localStorage.setItem('avatar', `${first}${last}`);
        localStorage.setItem('firstname', matchedUser.firstName || '');
        localStorage.setItem('lastname', matchedUser.lastName || '');
        setLoginError('');
        navigate('/home1');
      } else {
        setLoginError(t.loginError);
      }
    }
  };

  const handleRegChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginChange = (field, value) => {
    if (field === 'email') setEmail(value);
    if (field === 'password') setPassword(value);
    if (field === 'rememberMe') setRememberMe(value);
    if (loginError) setLoginError('');
  };

  // Language change handler
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
    window.dispatchEvent(new Event('language-changed'));
  };

  return (
    <div
      className="min-h-screen grid lg:grid-cols-2 relative"
      style={{
        backgroundImage: `url(${welcomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Overlay for better text visibility */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, rgba(30,42,56,0.95) 60%, rgba(30,42,56,0.85) 100%)'
        }}
      ></div>

      {/* Language Button */}
      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 100 }}>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="px-3 py-2 rounded border border-gray-300 bg-white text-black"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="he">עברית</option>
        </select>
      </div>

      {/* Left Section - Welcome Information */}
      <div className="relative z-10 flex items-center justify-center px-4 py-8 md:px-8 md:py-0">
        <div className="text-white w-full max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.welcomeTitle}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {t.welcomeDesc}
          </p>
          <div className="flex gap-6 ">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Login/Register Form */}
      <div className="relative z-10 flex items-center justify-center px-4 py-8 md:px-8 md:py-0">
        <div className="w-full max-w-md bg-white/10 md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 shadow-none md:shadow-none">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {showRegister ? t.registerTitle : t.loginTitle}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {!showRegister ? (
              <>
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => handleLoginChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder={t.emailPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                    {t.passwordLabel}
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => handleLoginChange('password', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder={t.passwordPlaceholder}
                    required
                  />
                </div>
                {loginError && (
                  <div className="bg-red-900 bg-opacity-30 rounded-lg p-3 border border-red-400 border-opacity-30">
                    <p className="text-red-300 text-sm">{loginError}</p>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 focus:outline-none transition-all duration-200 transform hover:scale-105 border-0 shadow-none"
                >
                  {t.loginBtn}
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowRegister(true)}
                    className="text-white text-sm"
                  >
                    {t.noAccount} <span className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer">{t.registerNow}</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">
                      {t.firstNameLabel}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={regData.firstName}
                      onChange={handleRegChange}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t.firstNamePlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white text-sm font-medium mb-2">
                      {t.lastNameLabel}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={regData.lastName}
                      onChange={handleRegChange}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t.lastNamePlaceholder}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="businessEmail" className="block text-white text-sm font-medium mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={regData.businessEmail}
                    onChange={handleRegChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.emailPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={regData.phone}
                    onChange={handleRegChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.phonePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="regPassword" className="block text-white text-sm font-medium mb-2">
                    {t.regPasswordLabel}
                  </label>
                  <input
                    type="password"
                    id="regPassword"
                    name="password"
                    value={regData.password}
                    onChange={handleRegChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.regPasswordPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-2">
                    {t.confirmPasswordLabel}
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={regData.confirmPassword}
                    onChange={handleRegChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.confirmPasswordPlaceholder}
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={regData.agreeTerms}
                    onChange={handleRegChange}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    required
                  />
                  <label htmlFor="agreeTerms" className="ml-2 text-white text-sm">
                    {t.agreeTerms}
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 focus:outline-none transition-all duration-200 transform hover:scale-105 border-0 shadow-none"
                >
                  {t.registerBtn}
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowRegister(false)}
                    className="text-white text-sm"
                  >
                    {t.alreadyAccount} <span className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer">{t.signUp}</span>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;