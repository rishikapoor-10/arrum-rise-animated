import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Shield } from 'lucide-react';

interface EnquiryFormProps {
  defaultProject?: string;
  sourceContext?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultProject = 'general',
  sourceContext = 'Website Enquiry',
  className = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    project: defaultProject,
    enquiryType: 'Brochure & Pricing',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile contact number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please accept the privacy consent to receive verified project details.');
      return;
    }

    setStatus('submitting');

    try {
      // Integration-ready simulation: stores locally and logs data cleanly
      const payload = {
        ...formData,
        source: sourceContext,
        submittedAt: new Date().toISOString()
      };

      // In production, dispatch to backend CRM API endpoint
      const existing = JSON.parse(localStorage.getItem('aurrum_enquiries') || '[]');
      existing.push(payload);
      localStorage.setItem('aurrum_enquiries', JSON.stringify(existing));

      // Simulate network latency
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Submission failed. Please call our sales desk directly at +91 98673 43005.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-[#071914] border border-[#C9A050]/40 p-8 rounded-lg text-center space-y-4 ${className}`}>
        <div className="w-12 h-12 mx-auto rounded-full bg-[#163B31] border border-[#C9A050] flex items-center justify-center text-[#DFBA73]">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="font-serif-luxury text-xl font-bold text-white tracking-wide">
          Enquiry Received
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
          Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry for{' '}
          <span className="text-[#DFBA73] font-semibold">
            {formData.project === 'casa-bliss' ? 'CASA BLISS' : formData.project === 'casa-one' ? 'CASA ONE' : 'Aurrum Rise Properties'}
          </span>{' '}
          has been registered. Our property advisory team will reach out at {formData.phone} shortly with the official brochure and floor plans.
        </p>
        <div className="pt-4 border-t border-white/10 flex justify-center items-center space-x-3 text-xs text-gray-400">
          <Phone className="w-4 h-4 text-[#C9A050]" />
          <span>Immediate enquiry? Call <a href="tel:9867343005" className="text-[#DFBA73] font-semibold underline">+91 98673 43005</a></span>
        </div>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              project: defaultProject,
              enquiryType: 'Brochure & Pricing',
              message: '',
              consent: false
            });
          }}
          className="text-xs text-[#C9A050] hover:text-[#DFBA73] underline mt-3 block mx-auto"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-[#071914] border border-[#C9A050]/30 p-6 sm:p-8 rounded-lg shadow-xl text-left ${className}`}>
      <div className="mb-6">
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C9A050]">Direct Developer Desk</span>
        <h3 className="font-serif-luxury text-2xl font-bold text-white tracking-wide mt-1">
          Request Project Information
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Receive verified brochures, floor plans, and pricing direct from the promoter desk.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-950/80 border border-red-500/40 rounded flex items-start space-x-2 text-xs text-red-200">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Full Name <span className="text-[#C9A050]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Vikram Joshi"
            required
            className="w-full bg-[#0E2A22] border border-white/15 focus:border-[#C9A050] text-white text-sm px-3.5 py-2.5 rounded outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Mobile Number <span className="text-[#C9A050]">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-[#163B31] border border-r-0 border-white/15 text-xs text-gray-300 rounded-l">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              required
              className="w-full bg-[#0E2A22] border border-white/15 focus:border-[#C9A050] text-white text-sm px-3.5 py-2.5 rounded-r outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Email Address <span className="text-[#C9A050]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vikram@example.com"
            required
            className="w-full bg-[#0E2A22] border border-white/15 focus:border-[#C9A050] text-white text-sm px-3.5 py-2.5 rounded outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1.5">
            Select Project
          </label>
          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full bg-[#0E2A22] border border-white/15 focus:border-[#C9A050] text-white text-sm px-3.5 py-2.5 rounded outline-none transition-colors"
          >
            <option value="casa-bliss">CASA BLISS (Sec 55, Dronagiri)</option>
            <option value="casa-one">CASA ONE (Sec 53, Dronagiri)</option>
            <option value="both">Both Projects</option>
            <option value="general">General Advisory & Land Consultation</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-300 mb-1.5">
          Type of Enquiry
        </label>
        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          className="w-full bg-[#0E2A22] border border-white/15 focus:border-[#C9A050] text-white text-sm px-3.5 py-2.5 rounded outline-none transition-colors"
        >
          <option value="Brochure & Pricing">Send Brochure & Pricing Sheet</option>
          <option value="Site Visit Request">Schedule Site Visit (Dronagiri)</option>
          <option value="Floor Plan Blueprint">Detailed Floor Plan Blueprints</option>
          <option value="Retail Space (Casa Arcade)">Retail / Shop Space Enquiry (Casa Bliss)</option>
          <option value="Home Loan Guidance">Bank Loan & Down Payment Guidance</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-300 mb-1.5">
          Specific Requirement / Questions (Optional)
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Specify preference for 1 BHK or 2 BHK, planned timeline, or loan requirements..."
          className="w-full bg-[#0E2A22] border border-white/15 focus:border-[#C9A050] text-white text-sm px-3.5 py-2 rounded outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <div className="mb-6 flex items-start space-x-2.5">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded border-gray-600 text-[#C9A050] focus:ring-[#C9A050] accent-[#C9A050]"
        />
        <label htmlFor="consent" className="text-[11px] text-gray-400 leading-tight">
          I authorize Aurrum Rise and its project partners to contact me via phone, WhatsApp, or email regarding project updates, pricing, and site visits. We uphold complete privacy and never spam.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#C9A050] hover:bg-[#DFBA73] disabled:opacity-50 text-[#071914] font-semibold text-sm uppercase tracking-wider py-3 rounded transition-all shadow-md flex items-center justify-center space-x-2"
      >
        {status === 'submitting' ? (
          <span>Transmitting Enquiry...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Project Enquiry</span>
          </>
        )}
      </button>

      <div className="mt-4 flex items-center justify-center space-x-2 text-[10px] text-gray-400">
        <Shield className="w-3.5 h-3.5 text-[#C9A050]" />
        <span>Your data is protected under our strict Privacy Policy.</span>
      </div>
    </form>
  );
};
