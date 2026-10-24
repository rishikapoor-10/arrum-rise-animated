import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { ContactPage } from './pages/ContactPage';
import { LegalPages, NotFoundPage } from './pages/LegalPages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-[#1E242B]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/casa-bliss" element={<ProjectDetailPage slug="casa-bliss" />} />
            <Route path="/projects/casa-one" element={<ProjectDetailPage slug="casa-one" />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Legal routes */}
            <Route path="/privacy-policy" element={<LegalPages type="privacy" />} />
            <Route path="/terms-of-service" element={<LegalPages type="terms" />} />
            <Route path="/rera-disclaimer" element={<LegalPages type="rera" />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
