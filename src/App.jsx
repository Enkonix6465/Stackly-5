
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Welcome from './pages/welcome';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import Blog from './pages/blog';
import BlogDetail from './pages/BlogDetail';
import Service from './pages/service';
import FinancialPlanningAnalysis from './pages/FinancialPlanningAnalysis';
import TaxPreparationFiling from './pages/TaxPreparationFiling';
import BudgetManagement from './pages/BudgetManagement';
import InvestmentAdvisory from './pages/InvestmentAdvisory';
import AuditCompliance from './pages/AuditCompliance';
import BookkeepingAccounting from './pages/BookkeepingAccounting';
import AdminDashboard from './pages/admindashboard';
import NotFound from './pages/NotFound';

function Layout({ children }) {
  const location = useLocation();
  const isWelcome = location.pathname === '/';
  return (
    <div className="App">
      {!isWelcome && <Header />}
      <div className={!isWelcome ? 'pt-16' : ''}>
        {children}
      </div>
      {!isWelcome && <Footer />}
    </div>
  );
}


import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="home1" element={<Home1 />} />
                <Route path="home2" element={<Home2 />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="service" element={<Service />} />
                <Route path="financial-planning-analysis" element={<FinancialPlanningAnalysis />} />
                <Route path="tax-preparation-filing" element={<TaxPreparationFiling />} />
                <Route path="budget-management" element={<BudgetManagement />} />
                <Route path="investment-advisory" element={<InvestmentAdvisory />} />
                <Route path="audit-compliance" element={<AuditCompliance />} />
                <Route path="bookkeeping-accounting" element={<BookkeepingAccounting />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;