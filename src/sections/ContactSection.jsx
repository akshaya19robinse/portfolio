import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { contactData, personalData } from '../data/portfolio';
import { Mail, MapPin, Download, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title={contactData.heading}
          highlightWord="meaningful"
          description={contactData.supportingText}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Direct Mailto */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
                  Direct Inquiries
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Say hello or share feedback
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Whether you have thoughts on technology, guidance for a first-year student, or want to discuss project ideas, my inbox is always open.
                </p>
              </div>

              {/* Email details card */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                  >
                    {contactData.email}
                  </a>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline mt-1"
                  >
                    <span>Click to open mail client</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Location details card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
                    Location
                  </p>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    {contactData.location}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Amal Jyothi College of Engineering • Kerala
                  </p>
                </div>
              </div>

              {/* Resume download option */}
              <div className="pt-2">
                <a
                  href={personalData.resume.fileUrl}
                  download={personalData.resume.downloadName}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-blue-200 bg-white hover:bg-blue-50/40 text-slate-800 transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        Download Academic Resume
                      </p>
                      <p className="text-[11px] text-slate-500">PDF Format • Up-to-date details</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600">PDF ↓</span>
                </a>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex items-center gap-3 text-xs text-slate-600">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span>{contactData.availabilityBadge}</span>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Feedback */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

