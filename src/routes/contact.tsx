import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Layout, Hero } from '@/components/site/Layout';
import { meta, services } from '@/components/site/data';
import contactHero from '@/assets/contact-hero.jpg';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export const Route = createFileRoute('/contact')({
  head: () =>
    meta(
      'Contact Us | Right PPT Solutions',
      'Talk to Right PPT Solutions about your next enterprise web, software, or digital project. Call +91 73862 57784 or email info@rightppt.com.'
    ),
  component: ContactPage,
});

function ContactPage() {
  const [ready, setReady] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Software Development and Modernization',
    message: '',
  });
  type FormErrors = {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedDetails, setSubmittedDetails] = useState<typeof formData | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (formData.phone.trim() && !/^[+0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 6) {
      errs.message = 'Please provide details on your project goals (at least 6 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappText = `*New Consultation Request — Right PPT Solutions*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${formData.name.trim()}
📧 *Work Email:* ${formData.email.trim()}
📞 *Phone:* ${formData.phone.trim() || 'Not specified'}
💼 *Solution Area:* ${formData.service}
📝 *Project Scope & Goals:*
${formData.message.trim()}
━━━━━━━━━━━━━━━━━━━━━━
🌐 *Source:* rightppt.com/contact`;

    const waUrl = `https://wa.me/917386257784?text=${encodeURIComponent(whatsappText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmittedDetails({ ...formData });
    setReady(true);
  };

  const handleReset = () => {
    setReady(false);
    setSubmittedDetails(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Software Development and Modernization',
      message: '',
    });
    setErrors({});
  };

  return (
    <Layout>
      <Hero
        image={contactHero}
        eyebrow="CONNECT WITH OUR TEAM"
        title={<>Let’s Discuss Your <span className="hero-brand-accent">Business Needs.</span></>}
        description="Build a new application, improve an existing system or explore practical AI solutions. Have a business process you want to improve? Talk to RightPPT."
      />

      <section className="contact-page-wrapper">
        <div className="container">
          <div className="contact-hero-banner reveal">
            <span className="eyebrow">— LET'S COLLABORATE —</span>
            <h2>Talk to <span className="hero-brand-accent">RightPPT</span></h2>
            <p>
              Build a new application, improve an existing system or explore practical AI solutions. Tell us about your operational challenges and we’ll define the next step.
            </p>
          </div>

          <div className="contact-premium-grid">
            {/* Left Column: Direct Communication Channels */}
            <div className="contact-card-sidebar reveal">
              <span className="eyebrow">— DIRECT CHANNELS —</span>
              <h3>Good Conversations.<br />Great Beginnings.</h3>
              <p>Connect with our technical advisory team directly, request document downloads, or visit our headquarters in Hyderabad.</p>

              <div className="contact-channels-list">
                <a href="tel:+917386257784" className="contact-channel-item">
                  <div className="channel-icon-box channel-icon-blue">
                    <Phone size={20} />
                  </div>
                  <div className="channel-meta">
                    <small>Direct Phone Line</small>
                    <strong>+91 73862 57784</strong>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400" />
                </a>

                <a href="mailto:info@rightppt.com" className="contact-channel-item">
                  <div className="channel-icon-box channel-icon-violet">
                    <Mail size={20} />
                  </div>
                  <div className="channel-meta">
                    <small>Email &amp; Document Downloads</small>
                    <strong>info@rightppt.com</strong>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400" />
                </a>

                <div className="contact-channel-item">
                  <div className="channel-icon-box channel-icon-green">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-meta">
                    <small>Hyderabad Office Location</small>
                    <strong>Innov8 Pranava Business Park- 7th Floor KONDAPUR, KOTHAGUDA, Telangana- 500084</strong>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="channel-icon-box channel-icon-blue">
                    <Clock size={20} />
                  </div>
                  <div className="channel-meta">
                    <small>Business Operating Hours</small>
                    <strong>Daily · 9:00 am – 5:00 pm IST</strong>
                  </div>
                </div>
              </div>

              <div className="contact-wa-action-box">
                <a
                  className="contact-wa-btn"
                  href="https://wa.me/917386257784"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare size={18} />
                  <span>Start WhatsApp Conversation</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Request Form & Details */}
            <div className="contact-form-card reveal">
              {ready && submittedDetails ? (
                <div className="contact-submitted-container p-6 sm:p-8 bg-white rounded-2xl border border-emerald-200 shadow-xl animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={26} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 m-0">Inquiry Prepared for WhatsApp!</h3>
                      <p className="text-xs text-slate-500 m-0">Details formatted and forwarded to +91 73862 57784</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Thank you, <strong className="text-slate-900">{submittedDetails.name}</strong>. Your consultation brief has been generated. If WhatsApp did not open automatically in your browser, click the button below to resume the conversation with our technical squad.
                  </p>

                  {/* Summary of Submitted Details */}
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6 space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row justify-between border-b border-slate-200 pb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Client Name</span>
                      <strong className="text-slate-800">{submittedDetails.name}</strong>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between border-b border-slate-200 pb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Work Email</span>
                      <strong className="text-slate-800">{submittedDetails.email}</strong>
                    </div>
                    {submittedDetails.phone && (
                      <div className="flex flex-col sm:flex-row justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Phone</span>
                        <strong className="text-slate-800">{submittedDetails.phone}</strong>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row justify-between border-b border-slate-200 pb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Solution Area</span>
                      <strong className="text-primary">{submittedDetails.service}</strong>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Project Scope &amp; Goals</span>
                      <p className="text-slate-700 bg-white p-3 rounded-lg border border-slate-200 text-xs leading-relaxed m-0 whitespace-pre-wrap">
                        {submittedDetails.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/917386257784?text=${encodeURIComponent(`*New Consultation Request — Right PPT Solutions*\n👤 Name: ${submittedDetails.name}\n📧 Email: ${submittedDetails.email}\n💼 Area: ${submittedDetails.service}\n📝 Goals: ${submittedDetails.message}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                    >
                      <MessageSquare size={18} />
                      <span>Open WhatsApp Chat (+91 73862 57784)</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors text-center"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="eyebrow">— YOUR VISION STARTS HERE —</span>
                  <h3>Tell Us About Your Project</h3>
                  <p>Fill out the details below to initiate a structured discovery consultation.</p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="modern-form-row">
                      <div className="modern-field">
                        <label htmlFor="name">Your Name <span>*</span></label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          placeholder="e.g. John Doe"
                          autoComplete="name"
                          className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
                        />
                        {errors.name && <span className="text-xs text-red-600 mt-1 block">{errors.name}</span>}
                      </div>

                      <div className="modern-field">
                        <label htmlFor="email">Work Email <span>*</span></label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="you@company.com"
                          autoComplete="email"
                          className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
                        />
                        {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="modern-form-row">
                      <div className="modern-field">
                        <label htmlFor="phone">Phone Number <span className="text-slate-400 font-normal">(Optional)</span></label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                          className={errors.phone ? 'border-red-500 focus:border-red-500' : ''}
                        />
                        {errors.phone && <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>}
                      </div>

                      <div className="modern-field">
                        <label htmlFor="service-select">Solution Area of Interest</label>
                        <Select
                          value={formData.service}
                          onValueChange={(val) => setFormData({ ...formData, service: val })}
                        >
                          <SelectTrigger id="service-select" className="modern-select-trigger">
                            <SelectValue placeholder="Choose a service area…" />
                          </SelectTrigger>
                          <SelectContent className="modern-select-content">
                            <SelectItem value="Software Development and Modernization">Software Development &amp; Modernization</SelectItem>
                            <SelectItem value="AI-Enabled Network Security & Intelligent Infrastructure">AI-Enabled Network Security &amp; Infrastructure</SelectItem>
                            <SelectItem value="Logistics, Supply Chain & E-commerce Operations">Logistics, Supply Chain &amp; E-commerce</SelectItem>
                            <SelectItem value="AI Solutions for Everyday Business">AI Solutions for Everyday Business</SelectItem>
                            <SelectItem value="AI for Legal and Compliance Operations">AI for Legal &amp; Compliance Operations</SelectItem>
                            <SelectItem value="Smarter Technology for Nonprofits & Associations">Nonprofits &amp; Associations</SelectItem>
                            <SelectItem value="Enterprise Custom Solution">Enterprise Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="modern-field">
                      <label htmlFor="message">Project Scope &amp; Goals <span>*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Share a brief overview of your timeline, objectives, or current technical challenges…"
                        className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
                      />
                      {errors.message && <span className="text-xs text-red-600 mt-1 block">{errors.message}</span>}
                    </div>

                    <button type="submit" className="modern-submit-btn">
                      <span>Send Project Brief Via WhatsApp</span>
                      <ArrowUpRight size={18} />
                    </button>

                    <p className="contact-privacy-note">
                      Submissions open directly in WhatsApp for you to review before sending. 100% confidential.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="contact-map-wrapper reveal">
            <div className="contact-map-card">
              <div className="contact-map-header">
                <div className="map-header-left">
                  <span className="eyebrow">— HYDERABAD OFFICE —</span>
                  <h3>Visit Our Office in Kondapur, Hyderabad</h3>
                  <p>Innov8 Pranava Business Park- 7th Floor KONDAPUR, KOTHAGUDA, Telangana- 500084</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Innov8+Pranava+Business+Park+Kondapur+Kothaguda+Telangana+500084"
                  target="_blank"
                  rel="noreferrer"
                  className="map-directions-btn"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="map-iframe-container">
                <iframe
                  title="Right PPT Solutions Headquarters Location"
                  src="https://maps.google.com/maps?q=Innov8+Pranava+Business+Park+Kondapur+Kothaguda+Telangana+500084&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Bottom Trust Row */}
          <div className="contact-trust-badges-row reveal">
            <div className="contact-trust-badge">
              <Zap size={22} className="text-blue-500 shrink-0" />
              <div>
                <strong>Rapid Response SLA</strong>
                <span>Direct replies within 2-4 business hours</span>
              </div>
            </div>
            <div className="contact-trust-badge">
              <ShieldCheck size={22} className="text-emerald-500 shrink-0" />
              <div>
                <strong>Non-Disclosure Guarantee</strong>
                <span>Strict confidentiality and IP protection from day one</span>
              </div>
            </div>
            <div className="contact-trust-badge">
              <Sparkles size={22} className="text-violet-500 shrink-0" />
              <div>
                <strong>Free Technical Scope</strong>
                <span>Complimentary architecture review and estimation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
