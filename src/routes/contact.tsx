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
                  <label htmlFor="service">Solution Area of Interest</label>
                  <select id="service" name="service" defaultValue="Choose a service">
                    <option value="Choose a service">Choose a service</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} ({s.label})
                      </option>
                    ))}
                    <option value="Enterprise Custom Solution">Enterprise Custom Solution</option>
                    <option value="Consulting & Advisory">Consulting &amp; Advisory</option>
                  </select>
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
