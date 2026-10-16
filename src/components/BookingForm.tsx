import React, { useState, useEffect } from 'react';
import {
  Send,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Info,
} from 'lucide-react';
import { PackageType, ExhibitorEnquiry } from '../types';
import { submitExhibitorEnquiry, isSupabaseConfigured } from '../lib/supabase';

interface BookingFormProps {
  initialPackage?: PackageType;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialPackage = 'Basic',
}) => {
  const [formData, setFormData] = useState<ExhibitorEnquiry>({
    institution_name: '',
    institution_type: 'School',
    contact_person: '',
    designation: '',
    email: '',
    phone: '',
    whatsapp: '',
    location: '',
    preferred_package: initialPackage,
    preferred_stall_type: 'Standard Octanorm Booth',
    additional_requirements: '',
    consent: true,
  });

  // Honeypot for spam protection
  const [honeypot, setHoneypot] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<{
    message: string;
    isDemo: boolean;
  } | null>(null);

  // Sync package if parent prop updates (e.g. user clicked "Enquire About Platinum")
  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, preferred_package: initialPackage }));
    }
  }, [initialPackage]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMsg(null);
  };

  const handleCopyPhoneToWhatsapp = () => {
    setFormData((prev) => ({ ...prev, whatsapp: prev.phone }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam check
    if (honeypot) {
      return;
    }

    // Validation
    if (!formData.institution_name.trim()) {
      setErrorMsg('Please enter your institution name.');
      return;
    }
    if (!formData.contact_person.trim()) {
      setErrorMsg('Please enter the contact person name.');
      return;
    }
    if (!formData.designation.trim()) {
      setErrorMsg('Please enter the contact person designation.');
      return;
    }
    if (
      !formData.email.trim() ||
      !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setErrorMsg('Please enter a valid official email address.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit contact phone number.');
      return;
    }
    if (!formData.location.trim()) {
      setErrorMsg('Please provide your institution location/area.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg(
        'Please accept the consent checkbox to permit the organising team to contact you.'
      );
      return;
    }

    try {
      setLoading(true);
      setErrorMsg(null);

      const result = await submitExhibitorEnquiry(formData);
      setSuccessResult({
        message: result.message,
        isDemo: result.isDemoMode,
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit stall enquiry.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessResult(null);
    setFormData({
      institution_name: '',
      institution_type: 'School',
      contact_person: '',
      designation: '',
      email: '',
      phone: '',
      whatsapp: '',
      location: '',
      preferred_package: 'Basic',
      preferred_stall_type: 'Standard Octanorm Booth',
      additional_requirements: '',
      consent: true,
    });
  };

  const isConfigured = isSupabaseConfigured();

  return (
    <section id="booking" className="py-24 bg-[#0A1022] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D6AD55]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182547] border border-[#D6AD55]/30 text-[#D6AD55] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exhibitor Stall Booking</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Reserve Your Stall at{' '}
            <span className="text-gold-gradient font-normal">PARVA 2027.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Connect with Bengaluru North families during the 2027–28 admission season.
            Fill out the form below to receive official floor plans, package details, and early-bird terms.
          </p>

          {/* Backend Status Notice */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full bg-[#101A35] border border-white/10 text-slate-400">
            <span
              className={`w-2 h-2 rounded-full ${
                isConfigured ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
              }`}
            />
            <span>
              {isConfigured
                ? 'Connected to Live Database (PostgreSQL / Supabase)'
                : 'Demo Preview Mode (Enquiries saved securely to local preview store)'}
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#101A35] border-2 border-[#D6AD55]/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          {successResult ? (
            /* Success Feedback State */
            <div className="py-12 text-center max-w-xl mx-auto animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-[#182547] border-2 border-[#D6AD55] text-[#D6AD55] flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Enquiry Successfully Received
              </h3>

              <div className="p-6 rounded-2xl bg-[#182547] border border-[#D6AD55]/30 text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {successResult.message}
              </div>

              {successResult.isDemo && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs mb-8 text-left">
                  <div className="flex items-start gap-2.5">
                    <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                    <div>
                      <span className="font-semibold block mb-0.5">Demo Mode Notice:</span>
                      Your enquiry has been stored in browser local storage. When you configure your Supabase URL & Anon Key in the environment file, enquiries will automatically write to your production PostgreSQL table.
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleReset}
                className="px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#F3DF9A] via-[#D6AD55] to-[#B88E38] text-[#101A35] hover:brightness-105 active:scale-95 transition-all shadow-md"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            /* Main Booking Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Spam Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="user_verification_field"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {/* Error Message Alert */}
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Section 1: Institution Details */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>1. Institutional Details</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Institution Name */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Institution Name <span className="text-[#D6AD55]">*</span>
                    </label>
                    <input
                      type="text"
                      name="institution_name"
                      required
                      placeholder="e.g. Greenfield Public School / National PU College"
                      value={formData.institution_name}
                      onChange={handleChange}
                      className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors"
                    />
                  </div>

                  {/* Institution Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Institution Type <span className="text-[#D6AD55]">*</span>
                    </label>
                    <select
                      name="institution_type"
                      value={formData.institution_type}
                      onChange={handleChange}
                      className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors"
                    >
                      <option value="School">School (CBSE / ICSE / State / IB)</option>
                      <option value="PU College">PU College (Science / Commerce / Arts)</option>
                    </select>
                  </div>

                  {/* Institution Location */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Campus Location / Area <span className="text-[#D6AD55]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="e.g. Bagalagunte, Jalahalli, Hesaraghatta Rd"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors pl-10"
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Contact Person Details */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] mb-4 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>2. Contact Person Information</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Person Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Contact Person Name <span className="text-[#D6AD55]">*</span>
                    </label>
                    <input
                      type="text"
                      name="contact_person"
                      required
                      placeholder="e.g. Dr. Raghavendra Rao"
                      value={formData.contact_person}
                      onChange={handleChange}
                      className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors"
                    />
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Designation <span className="text-[#D6AD55]">*</span>
                    </label>
                    <input
                      type="text"
                      name="designation"
                      required
                      placeholder="e.g. Principal / Director / Admissions Head"
                      value={formData.designation}
                      onChange={handleChange}
                      className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors"
                    />
                  </div>

                  {/* Official Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Official Email Address <span className="text-[#D6AD55]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="admissions@school.edu.in"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors pl-10"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number <span className="text-[#D6AD55]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors pl-10"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        WhatsApp Number (for instant updates)
                      </label>
                      {formData.phone && (
                        <button
                          type="button"
                          onClick={handleCopyPhoneToWhatsapp}
                          className="text-[11px] text-[#D6AD55] hover:underline"
                        >
                          Same as Phone
                        </button>
                      )}
                    </div>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="e.g. 9876543210"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Package & Stall Preferences */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#D6AD55] mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  <span>3. Package & Stall Selection</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Preferred Package */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Preferred Package <span className="text-[#D6AD55]">*</span>
                    </label>
                    <select
                      name="preferred_package"
                      value={formData.preferred_package}
                      onChange={handleChange}
                      className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors"
                    >
                      <option value="Basic">Basic Package (&ldquo;Be Seen&rdquo; - Standard Stall)</option>
                      <option value="Premium">Premium Package (&ldquo;Stand Out&rdquo; - Corner/Front + Stage)</option>
                      <option value="Platinum">Platinum Package (&ldquo;Lead the Stage&rdquo; - Prime + Panel Seat)</option>
                      <option value="Need Guidance">Need Guidance / Custom Arrangement</option>
                    </select>
                  </div>

                  {/* Preferred Stall Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Preferred Stall Layout <span className="text-[#D6AD55]">*</span>
                    </label>
                    <select
                      name="preferred_stall_type"
                      value={formData.preferred_stall_type}
                      onChange={handleChange}
                      className="w-full bg-[#182547] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors"
                    >
                      <option value="Standard Octanorm Booth">Standard Octanorm Shell Scheme</option>
                      <option value="Corner Stall (2-Side Open)">Corner Stall (2-Side Open)</option>
                      <option value="Prime Front Row Stall">Prime Front Row Stall</option>
                      <option value="Custom Fabricated Island">Custom Fabricated Space</option>
                    </select>
                  </div>

                  {/* Additional Requirements */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Additional Requirements or Specific Inquiries
                    </label>
                    <textarea
                      name="additional_requirements"
                      rows={3}
                      placeholder="e.g. Student performance interest, specific electrical load requirements, multi-stall request..."
                      value={formData.additional_requirements}
                      onChange={handleChange}
                      className="w-full bg-[#182547] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-400 focus:border-[#D6AD55] focus:ring-1 focus:ring-[#D6AD55] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Consent & Submission */}
              <div className="pt-6 border-t border-white/10 space-y-6">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-[#D6AD55] focus:ring-[#D6AD55] bg-[#182547] border-white/20"
                  />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    I agree to be contacted by the PARVA organising team regarding exhibitor participation, stall allotment, and promotional package details.
                  </span>
                </label>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Info className="w-4 h-4 text-[#D6AD55] shrink-0" />
                    <span>Early-bird price guaranteed for submissions before 15 November 2026.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-xs font-bold uppercase tracking-wider text-[#101A35] bg-gradient-to-r from-[#F3DF9A] via-[#D6AD55] to-[#B88E38] rounded-xl shadow-gold-glow hover:brightness-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span>Submit Stall Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
