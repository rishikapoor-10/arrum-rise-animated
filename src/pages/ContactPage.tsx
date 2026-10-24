import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { EnquiryForm } from '../components/EnquiryForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 space-y-0">
      {/* Header */}
      <section className="bg-[#0E2A22] text-white py-16 sm:py-20 border-b border-[#C9A050]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] mb-3">
            Direct Developer Access
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F5] leading-tight max-w-3xl mx-auto">
            Contact Aurrum Rise
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Discuss unit availability, schedule a Dronagiri site visit, or request official project brochures directly with our promoter advisory desk.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Office */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235]">
                  Reach Our Team
                </span>
                <h2 className="font-serif-luxury text-3xl font-bold text-[#0E2A22]">
                  We Value Direct, Honest Communication
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  No misleading pricing, no unsolicited spam calls. Our team provides verified technical specifications and clear payment breakdowns.
                </p>
              </div>

              {/* Verified contact items */}
              <div className="space-y-4">
                <div className="p-5 bg-white rounded-lg border border-[#C9A050]/20 shadow-sm flex items-start space-x-4">
                  <div className="p-2.5 bg-[#163B31] text-[#DFBA73] rounded">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-sm font-bold text-[#0E2A22]">Phone Consultation</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Call or WhatsApp our sales advisory desk:</p>
                    <a href="tel:9867343005" className="text-sm font-semibold text-[#A78235] hover:underline mt-1 block">
                      +91 98673 43005
                    </a>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-lg border border-[#C9A050]/20 shadow-sm flex items-start space-x-4">
                  <div className="p-2.5 bg-[#163B31] text-[#DFBA73] rounded">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-sm font-bold text-[#0E2A22]">Electronic Mail</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Direct project enquiries and partnership proposals:</p>
                    <a href="mailto:contact@aurrumrise.com" className="text-sm font-semibold text-[#A78235] hover:underline mt-1 block">
                      contact@aurrumrise.com
                    </a>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-lg border border-[#C9A050]/20 shadow-sm flex items-start space-x-4">
                  <div className="p-2.5 bg-[#163B31] text-[#DFBA73] rounded">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-sm font-bold text-[#0E2A22]">Site Locations</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      <strong>CASA BLISS:</strong> Plot No. 74 A, Sector 55, Dronagiri<br />
                      <strong>CASA ONE:</strong> Plot No. 129, Sector 53, Dronagiri<br />
                      Navi Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-lg border border-[#C9A050]/20 shadow-sm flex items-start space-x-4">
                  <div className="p-2.5 bg-[#163B31] text-[#DFBA73] rounded">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-sm font-bold text-[#0E2A22]">Site Visit Timings</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Monday to Sunday: 10:00 AM – 6:30 PM (Prior appointment recommended for dedicated architectural walkthroughs).
                    </p>
                  </div>
                </div>
              </div>

              {/* RERA and Privacy assurance */}
              <div className="p-5 bg-[#F4EFE6] rounded-lg border border-[#C9A050]/30 space-y-2 text-xs text-gray-700">
                <div className="flex items-center space-x-2 font-semibold text-[#0E2A22]">
                  <ShieldCheck className="w-4 h-4 text-[#C9A050]" />
                  <span>Promoter Transparency Guarantee</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Your enquiry is routed directly to the authorized promoters (Falcon Realty / Aurrum Rise). We never distribute your contact details to third-party telemarketers or external broker syndicates.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <EnquiryForm defaultProject="both" sourceContext="Contact Us Page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
