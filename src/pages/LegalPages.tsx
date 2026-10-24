import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const LegalPages: React.FC<{ type: 'privacy' | 'terms' | 'rera' }> = ({ type }) => {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rera: 'MahaRERA Statutory Disclaimer',
  };

  return (
    <div className="pt-24 space-y-0 min-h-screen bg-[#FAF9F5] text-[#1E242B]">
      <section className="bg-[#0E2A22] text-white py-14 border-b border-[#C9A050]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#FAF9F5]">
            {titles[type]}
          </h1>
          <p className="text-xs text-gray-300 mt-2">
            Last updated: October 2026 • Aurrum Rise Legal Cell
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-gray-200 shadow-sm text-sm text-gray-700 leading-relaxed space-y-6">
            {type === 'privacy' && (
              <>
                <h2 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">1. Information We Collect</h2>
                <p>
                  Aurrum Rise and its development partners collect personal information that you provide voluntarily when filling out an enquiry form on our website, such as your full name, email address, mobile phone number, and specific property requirements.
                </p>
                <h2 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">2. Use of Information</h2>
                <p>
                  Your information is used strictly to provide you with verified brochures, floor plans, pricing sheets, schedule site visits, and respond to property enquiries. We do not sell, rent, or trade your personal information to third-party telemarketers or external broker syndicates.
                </p>
                <h2 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">3. Data Security & Storage</h2>
                <p>
                  We implement reasonable technical safeguards to protect your personal information against unauthorized access, loss, or disclosure in accordance with applicable Indian information technology laws.
                </p>
                <h2 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">4. Opting Out</h2>
                <p>
                  You may opt out of receiving further project communications at any time by notifying our advisory team via email at contact@aurrumrise.com or calling +91 98673 43005.
                </p>
              </>
            )}

            {type === 'terms' && (
              <>
                <h2 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">1. Website Content & Purpose</h2>
                <p>
                  The content, renderings, floor plans, architectural layouts, and specifications displayed on this website are provided for informational and educational purposes. While every effort has been made to represent verified project facts from official brochures, nothing contained herein constitutes an irrevocable legal offer or contractual guarantee.
                </p>
                <h2 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">2. Agreement for Sale Precedence</h2>
                <p>
                  The relationship between the developer and the purchaser is governed exclusively by the registered Agreement for Sale executed under the Real Estate (Regulation and Development) Act, 2016 (RERA) and rules framed by MahaRERA.
                </p>
                <h2 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">3. Intellectual Property</h2>
                <p>
                  All logos, trademarks, architectural designs, blueprints, and literary content on this website are the intellectual property of Aurrum Rise, Falcon Realty, and their respective architectural consultants.
                </p>
              </>
            )}

            {type === 'rera' && (
              <>
                <div className="flex items-center space-x-2 text-[#C9A050] font-semibold text-xs uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Maharashtra Real Estate Regulatory Authority (MahaRERA)</span>
                </div>
                <h2 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">Statutory Project Disclosure</h2>
                <p>
                  Projects featured on this website, including <strong>CASA BLISS</strong> (Plot No. 74 A, Sector 55, Dronagiri) and <strong>CASA ONE</strong> (Plot No. 129, Sector 53, Dronagiri), are developed under the regulatory framework of MahaRERA.
                </p>
                <p>
                  Prospective buyers are advised to inspect the sanctioned building plans, layout plans, commencement certificates (CC), and quarterly project status updates on the official MahaRERA website (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#C9A050] underline">maharera.mahaonline.gov.in</a>) under registered projects before entering into any financial commitment.
                </p>
                <p>
                  The images of furniture, fittings, gadgets, and decorative elements shown in architectural renderings or show-flat perspectives are indicative lifestyle concepts and do not form part of the standard handover specifications unless explicitly documented in Schedule G of the registered Agreement for Sale.
                </p>
              </>
            )}

            <div className="pt-6 border-t border-gray-200">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0E2A22] hover:text-[#C9A050] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-[#071914] text-white px-4">
      <div className="text-center max-w-md space-y-5">
        <span className="font-serif-luxury text-6xl font-bold text-[#DFBA73] block">404</span>
        <h1 className="font-serif-luxury text-2xl font-bold text-[#FAF9F5]">Page Not Found</h1>
        <p className="text-xs text-gray-400">
          The requested page could not be located. You can navigate back to our home or explore our boutique residences.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="px-6 py-2.5 bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-wider font-bold rounded shadow transition-all inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
