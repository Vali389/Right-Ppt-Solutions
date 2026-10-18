import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  Phone,
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
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import team from '@/assets/contact-hero.jpg';

export const Route = createFileRoute('/contact')({
  head: () =>
    meta(
      'Contact Us | Right PPT Solutions',
      'Talk to Right PPT Solutions about your next enterprise web, software, or digital project. Call +91 73862 57784 or visit us in Hyderabad.'
    ),
  component: ContactPage,
});

function ContactPage() {
  const [ready, setReady] = useState(false);
  const [selectedService, setSelectedService] = useState('Web Development');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = `Hello Right PPT! My name is ${d.get('name')}.\nEmail: ${d.get('email')}\nInterested in: ${d.get('service')}\nMessage: ${d.get('message')}`;
    window.open(`https://wa.me/917386257784?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setReady(true);
  };

  return (
    <Layout>
      <Hero
        eyebrow="LET’S MAKE IT HAPPEN"
        title={<>Get In Touch With <span className="hero-brand-accent">Our Architects.</span></>}
        description="A great partnership begins with a conversation. Tell us what you have in mind and let's craft an enterprise-grade digital solution."
        image={team}
      />

      <section className="contact-page-wrapper">
        <div className="container">
          <div className="contact-hero-banner reveal">
            <span className="eyebrow">— YOUR NEXT STEP —</span>
            <h2>Start Something <span className="hero-brand-accent">Remarkable</span></h2>
            <p>
              Have a project, a question, or a digital vision? Our solutions architects and engineering leads are ready to collaborate.
            </p>
          </div>

          <div className="contact-premium-grid">
            {/* Left Column: Direct Communication Channels */}
            <div className="contact-card-sidebar reveal">
              <span className="eyebrow">— DIRECT CHANNELS —</span>
              <h3>Good Conversations.<br />Great Beginnings.</h3>
              <p>Connect with our technical advisory team directly or visit our headquarters in Hyderabad.</p>

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

                <div className="contact-channel-item">
                  <div className="channel-icon-box channel-icon-green">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-meta">
                    <small>Headquarters Location</small>
                    <strong>Plot 3 Viswasnagar, Hyderabad, Telangana 500086</strong>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="channel-icon-box channel-icon-violet">
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

            {/* Right Column: Interactive Consultation Request Form */}
            <div className="contact-form-card reveal">
              <span className="eyebrow">— YOUR VISION STARTS HERE —</span>
              <h3>Tell Us About Your Project</h3>
              <p>Fill out the details below to initiate a structured discovery consultation.</p>

              <form onSubmit={handleSubmit}>
                <div className="modern-form-row">
                  <div className="modern-field">
                    <label htmlFor="name">Your Name <span>*</span></label>
                    <input
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="modern-field">
                    <label htmlFor="email">Work Email <span>*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="modern-field">
                  <label htmlFor="service-select">Solution Area of Interest</label>
                  <input type="hidden" name="service" value={selectedService} />
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger id="service-select" className="modern-select-trigger">
                      <SelectValue placeholder="Choose a service area…" />
                    </SelectTrigger>
                    <SelectContent className="modern-select-content">
                      <SelectItem value="Web Development">Web Development (Websites &amp; Digital Experiences)</SelectItem>
                      <SelectItem value="Software Development">Software Development (Custom Applications &amp; Platforms)</SelectItem>
                      <SelectItem value="Digital Marketing">Digital Marketing (Strategy, Visibility &amp; Growth)</SelectItem>
                      <SelectItem value="Technology Solutions">Technology Solutions (Innovation &amp; Enablement)</SelectItem>
                      <SelectItem value="Enterprise Custom Solution">Enterprise Custom Solution</SelectItem>
                      <SelectItem value="Consulting & Advisory">Consulting &amp; Advisory</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="modern-field">
                  <label htmlFor="message">Project Scope &amp; Goals <span>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share a brief overview of your timeline, objectives, or current technical challenges…"
                    required
                  />
                </div>

                <button type="submit" className="modern-submit-btn">
                  <span>Send Project Brief Via WhatsApp</span>
                  <ArrowUpRight size={18} />
                </button>

                <p className="contact-privacy-note">
                  Submissions open directly in WhatsApp for you to review before sending. 100% confidential.
                </p>

                {ready && (
                  <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                    <span>Your brief is prepared and open in WhatsApp. Press send to connect with our leads!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="contact-map-wrapper reveal">
            <div className="contact-map-card">
              <div className="contact-map-header">
                <div className="map-header-left">
                  <span className="eyebrow">— OUR HEADQUARTERS —</span>
                  <h3>Visit Our Office in Hyderabad</h3>
                  <p>Plot 3 Viswasnagar, Hyderabad, Telangana 500086, India</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Plot+3+Viswasnagar+Hyderabad+Telangana+500086"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.665678434778!2d78.508!3d17.404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd941%3A0x6b7bf6a20d20d754!2sHyderabad%2C%20Telangana%20500086!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
