import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Compass, Building, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 space-y-0">
      {/* Hero Header */}
      <section className="bg-[#0E2A22] text-white py-16 sm:py-24 border-b border-[#C9A050]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] mb-3">
            About Aurrum Rise
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F5] leading-tight max-w-3xl mx-auto">
            A New Standard for Boutique Residential Living
          </h1>
          <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Founded on the pillars of architectural discipline, low-density community planning, and transparent developer partnerships across Navi Mumbai.
          </p>
        </div>
      </section>

      {/* Brand Narrative */}
      <section className="py-20 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235]">
                Our Purpose
              </span>
              <h2 className="font-serif-luxury text-3xl font-bold text-[#0E2A22]">
                Elevating Homes Beyond Mass-Market Templates
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                In metropolitan real estate, rapid commercialization often dilutes residential quality. Mega-townships pack thousands of apartments into congested towers, stripping away daylight, cross-ventilation, and privacy.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Aurrum Rise</strong> was conceived as an intentional alternative. We believe that true luxury lies in restraint and proportion: limited-inventory boutique communities where residents know their neighbors, where floor layouts maximize usable carpet space, and where structural engineering prioritizes longevity over speed.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-[#C9A050]/30 shadow-xl">
                <img
                  src="/assets/casa-one-facade.png"
                  alt="Casa One Architectural Detail"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="pt-12 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235] block mb-2">
                Our Foundational Pillars
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0E2A22]">
                How We Approach Development
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg border border-[#C9A050]/20 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#0E2A22]">Statutory Transparency</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We believe RERA compliance is the baseline, not a marketing claim. All sanctions, title search reports, and escrow mechanisms are openly accessible to our buyers.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-[#C9A050]/20 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#0E2A22]">Low-Density Living</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We limit the number of residences per project (e.g., only 24 homes in Casa Bliss), preventing lift queues and overcrowding while fostering high-trust communities.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-[#C9A050]/20 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#0E2A22]">Climate-Conscious Design</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Balconies, large powder-coated sliding windows, and dual corner exposures ensure generous cross-ventilation and natural illumination throughout the day.
                </p>
              </div>
            </div>
          </div>

          {/* Collaborative Ecosystem */}
          <div className="pt-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4EFE6] p-8 rounded-lg border border-[#C9A050]/30">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#A78235] uppercase tracking-wider">
                  <Building className="w-4 h-4" />
                  <span>Collaborative Development Synergy</span>
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">
                  Partnering with Recognized Engineering Experts
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Aurrum Rise developments are executed in tight collaborative alignment with trusted regional builders and certified structural consultants:
                </p>
                <ul className="text-xs text-gray-800 space-y-1.5 pt-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A050]" />
                    <span><strong>Falcon Realty & Aaum Constructions:</strong> Project development, land procurement, and execution.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A050]" />
                    <span><strong>Gagan Vives Architects:</strong> Architectural planning, exterior elevations, and space optimization.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A050]" />
                    <span><strong>Ashwin Wankhade & Associates:</strong> RCC structural design and earthquake-resistant engineering.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right">
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0E2A22] hover:bg-[#163B31] text-white text-xs uppercase tracking-wider font-semibold rounded shadow transition-all"
                >
                  <span>Explore Developments</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Banner */}
      <section className="py-16 bg-[#071914] text-white border-t border-[#C9A050]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FAF9F5]">
            Discover the Difference of Boutique Living
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-light">
            Connect with our advisory desk to learn more about our ongoing developments, structural specifications, and upcoming releases.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-wider font-bold rounded shadow transition-all inline-block"
            >
              Contact Our Advisory Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
