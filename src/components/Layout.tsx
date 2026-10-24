import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'CASA BLISS', path: '/projects/casa-bliss' },
    { name: 'CASA ONE', path: '/projects/casa-one' },
    { name: 'Insights / Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0E2A22]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#C9A050]/20' : 'bg-[#0E2A22] py-4 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center space-x-3 group text-left">
            <div className="w-10 h-10 rounded-full border border-[#C9A050] flex items-center justify-center bg-[#071914] text-[#C9A050] group-hover:scale-105 transition-transform">
              <span className="font-serif-luxury text-xl font-bold tracking-widest">AR</span>
            </div>
            <div>
              <span className="block text-lg font-serif-luxury font-bold tracking-[0.2em] text-[#FAF9F5] group-hover:text-[#DFBA73] transition-colors uppercase">
                Aurrum Rise
              </span>
              <span className="block text-[9px] tracking-[0.3em] text-[#C9A050] uppercase font-sans font-medium">
                Lifespace • Dronagiri
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-[#DFBA73] border-b-2 border-[#C9A050]'
                      : 'text-gray-200 hover:text-[#DFBA73]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Phone Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:9867343005"
              className="text-xs text-gray-300 hover:text-white flex items-center space-x-1.5 transition-colors"
              title="Verified Project Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A050]" />
              <span>+91 98673 43005</span>
            </a>
            <Link
              to="/contact"
              className="bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded transition-all shadow hover:shadow-md flex items-center space-x-1.5"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link
              to="/contact"
              className="bg-[#C9A050] text-[#071914] text-[11px] font-semibold px-3 py-1.5 rounded uppercase tracking-wider"
            >
              Enquire
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-200 hover:text-[#C9A050] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#071914] border-t border-[#C9A050]/20 px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm rounded transition-colors ${
                    isActive
                      ? 'bg-[#163B31] text-[#DFBA73] font-semibold'
                      : 'text-gray-300 hover:bg-[#0E2A22] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3 text-xs text-gray-300">
            <a href="tel:9867343005" className="flex items-center space-x-2 text-[#DFBA73]">
              <Phone className="w-4 h-4" />
              <span>Call Sales: +91 98673 43005</span>
            </a>
            <p className="text-[11px] text-gray-400">
              Sector 55 & 53, Dronagiri, Navi Mumbai
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071914] text-gray-300 border-t border-[#C9A050]/20 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full border border-[#C9A050] flex items-center justify-center text-[#C9A050]">
                <span className="font-serif-luxury font-bold">AR</span>
              </div>
              <span className="text-xl font-serif-luxury font-bold tracking-widest text-[#FAF9F5] uppercase">
                Aurrum Rise
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Curated boutique residential development in Dronagiri, Navi Mumbai. Elevated living, thoughtful planning, and enduring value created in collaborative synergy.
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#DFBA73]">
              <ShieldCheck className="w-4 h-4 text-[#C9A050]" />
              <span>Transparent MahaRERA Compliant Development</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-[#DFBA73] tracking-[0.2em] uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Aurrum Rise</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Featured Developments</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Educational Guides & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Enquiries</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-semibold text-[#DFBA73] tracking-[0.2em] uppercase mb-4">
              Featured Projects
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/projects/casa-bliss" className="group block">
                  <span className="font-medium text-white group-hover:text-[#DFBA73] transition-colors">CASA BLISS</span>
                  <p className="text-[11px] text-gray-400">Plot 74A, Sector 55, Dronagiri (24 Boutique Homes + Retail)</p>
                </Link>
              </li>
              <li>
                <Link to="/projects/casa-one" className="group block">
                  <span className="font-medium text-white group-hover:text-[#DFBA73] transition-colors">CASA ONE</span>
                  <p className="text-[11px] text-gray-400">Plot 129, Sector 53, Dronagiri (7-Storeyed Serenity)</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div>
            <h3 className="text-xs font-semibold text-[#DFBA73] tracking-[0.2em] uppercase mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C9A050] shrink-0 mt-0.5" />
                <span>Plot 74A, Sec 55 & Plot 129, Sec 53, Dronagiri, Navi Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C9A050] shrink-0" />
                <a href="tel:9867343005" className="hover:text-[#DFBA73] transition-colors">+91 98673 43005</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C9A050] shrink-0" />
                <a href="mailto:contact@aurrumrise.com" className="hover:text-[#DFBA73] transition-colors">contact@aurrumrise.com</a>
              </div>
              <p className="text-[10px] text-gray-500 pt-2 border-t border-white/5">
                Development & Legal Entities: Falcon Realty, Aurrum Rise Lifespace, Aaum Constructions.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Aurrum Rise. All rights reserved. Content based on verified project brochures and architectural documentation.
          </p>
          <div className="flex space-x-6 text-[11px]">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link to="/rera-disclaimer" className="hover:text-gray-300 transition-colors">MahaRERA Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
