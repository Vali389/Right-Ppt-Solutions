import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Lock,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
  HelpCircle,
  FileText,
  Download,
  Mail,
  Scale,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, offerings, getServiceBySlug } from './data';
import { SectionTitle } from './Layout';
import {
  AISolutionsSpotlightSection,
  LogisticsOperationalSpotlightSection,
} from './ShowcaseSections';
import softDevPlain from '@/assets/soft-dev-plain.jpg';
import logisticsPlain from '@/assets/logistics-plain.jpg';
import aiSecPlain from '@/assets/ai-sec-plain.jpg';
import pubPlain from '@/assets/pub-plain.jpg';
import aiEverydayPlain from '@/assets/ai-everyday-plain.jpg';
import aiLegalPlain from '@/assets/ai-legal-plain.jpg';

interface SingleServiceDetailProps {
  serviceId: string;
}

const getServiceHeroPhoto = (slug: string) => {
  switch (slug) {
    case 'software-development':
      return softDevPlain;
    case 'logistics-solutions':
      return logisticsPlain;
    case 'ai-solutions':
      return aiSecPlain;
    case 'nonprofits-and-associations':
      return pubPlain;
    case 'ai-everyday-business':
      return aiEverydayPlain;
    case 'ai-legal-compliance':
      return aiLegalPlain;
    default:
      return softDevPlain;
  }
};

// Service FAQs
const serviceFaqs: Record<string, Array<{ q: string; a: string }>> = {
  'software-development': [
    {
      q: 'How do you handle legacy applications with missing source code or documentation?',
      a: 'We reconstruct business rules by profiling database schemas, observing daily operational workflows, and interviewing key stakeholders to preserve critical business logic during web replatforming.',
    },
    {
      q: 'Can we integrate third-party document viewing and editing engines?',
      a: 'Yes. We specialize in deep integration of enterprise SDKs like Nutrient (PSPDFKit) and TX Text Control, embedding Word, PDF, and TIFF manipulation directly into your records without context-switching.',
    },
    {
      q: 'Who owns the intellectual property and source code?',
      a: 'You retain 100% legal ownership of all code, architecture diagrams, configurations, and documentation from day one under strict enterprise IP transfer terms.',
    },
  ],
  'logistics-solutions': [
    {
      q: 'How do you reconcile disparate TMS, WMS, and ERP systems?',
      a: 'We build resilient API bridges and EDI translators that normalize order, inventory, and shipment payloads, eliminating double-entry and keeping carriers and dispatchers synchronized in real time.',
    },
    {
      q: 'Do your mobile field tools support offline barcode scanning and signatures?',
      a: 'Yes. Our field applications feature local-first SQLite/IndexedDB caching, allowing drivers and warehouse personnel to record barcode scans and capture signatures even in remote low-connectivity depots.',
    },
    {
      q: 'How does margin intelligence identify cost overruns?',
      a: 'By pairing contracted freight rate tables with real-time accessorial fees and fuel surcharges, our dashboards highlight variance against quoted margins before invoices are settled.',
    },
  ],
  'ai-solutions': [
    {
      q: 'How do you ensure zero data leakage with enterprise AI models?',
      a: 'We deploy private, VPC-isolated vector databases and models where customer data is never used for training and never leaves your designated compliance boundary.',
    },
    {
      q: 'Can AI assist in contract drafting and legal compliance review?',
      a: 'Yes. We build assisted review pipelines that cross-reference incoming contracts against approved clause libraries, highlighting non-standard liability caps and compliance deadlines for legal review.',
    },
    {
      q: 'How do AI traffic intelligence and network optimization work?',
      a: 'Machine learning algorithms analyze historical telemetry and real-time flows to forecast congestion, balance SDN controller workloads, and detect anomalous encrypted traffic patterns.',
    },
  ],
  'nonprofits-and-associations': [
    {
      q: 'Can you synchronize existing Drupal, Mailchimp, and Access database records?',
      a: 'Yes. We build reliable migration and ETL pipelines that cleanse inconsistent postal data, merge confirmed duplicates, and maintain relational integrity across members and organizations.',
    },
    {
      q: 'How do you coordinate print publishing with digital magazine distribution?',
      a: 'Our publishing services manage editorial calendars, prepress PDF workflows, variable cover print runs, digital flipbooks, and Periodical Class postal discounts under unified management.',
    },
    {
      q: 'What strategies do you use for lapsed member reactivation and retention?',
      a: 'We design timed multi-touch renewal campaigns spanning personalized emails, print notices, telephone follow-ups, and early-renewal incentives evaluated via continuous A/B testing.',
    },
  ],
  'ai-everyday-business': [
    {
      q: 'How does intelligent search protect confidential company data?',
      a: 'Our intelligent search solutions use strict role-based access control (RBAC). Employees only see answers and search results sourced from documents they have verified permissions to access.',
    },
    {
      q: 'Can document automation handle handwritten notes, low-resolution scans, and unstructured forms?',
      a: 'Yes. We utilize modern multimodal vision-language models capable of accurately parsing skewed scans, mixed tables, and handwritten annotations into clean structured JSON.',
    },
    {
      q: 'How does RightPPT ensure generated marketing content aligns with our brand voice?',
      a: 'We configure custom prompt guardrails, few-shot enterprise style guides, and human approval checkpoints, ensuring all generated articles and campaigns strictly adhere to your brand voice.',
    },
  ],
  'ai-legal-compliance': [
    {
      q: 'How does assisted review flag non-standard liability and indemnity terms?',
      a: 'Our legal AI cross-references incoming contract text against your approved standard clause library, calculating semantic similarity and highlighting unusual indemnity clauses, governing law deviations, and missing caps.',
    },
    {
      q: 'Are the e-signatures and audit trails legally binding?',
      a: 'Yes. Our e-signature workflows capture full timestamped audit logs, cryptographic certificate verification, signer IP addresses, and document hashes compliant with global e-signature frameworks (ESIGN, eIDAS, and IT Act).',
    },
    {
      q: 'Can the system automatically notify us before contracts renew?',
      a: 'Yes. The platform automatically indexes key dates (termination notices, auto-renewals, milestone audits) upon upload and triggers multi-channel alerts (email, Slack, dashboard) at custom intervals (e.g., 90, 60, and 30 days prior).',
    },
  ],
};

export function SingleServiceDetail({ serviceId }: SingleServiceDetailProps) {
  const result = getServiceBySlug(serviceId) || getServiceBySlug('software-development');
  if (!result) return null;

  const { service, deepDive, index } = result;

  const whatsappMessage = encodeURIComponent(
    `Hi Right PPT Solutions, I would like to consult with an architect regarding ${service.name}.`
  );

  const faqs = serviceFaqs[service.slug] || serviceFaqs['software-development'] || [];
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div className={`single-service-page tone-${service.tone}`}>
      {/* 1. Immersive Architectural Hero with Professional Human-Involved Photography */}
      <section className="hero inner-hero single-service-hero relative overflow-hidden">
        <div className="single-hero-bg-media">
          <img
            src={getServiceHeroPhoto(service.slug)}
            alt={`${service.name} engineering specialists`}
            className="hero-image single-hero-img"
          />
          <div className="single-hero-overlay" />
          <div className="single-hero-radial-glow" />
        </div>
        <div className="container hero-content relative z-10">
          <div className="hero-back-link">
            <Link to="/services" className="back-link-tag">
              <ArrowLeft size={14} /> Back to Capabilities
            </Link>
          </div>

          <div className="hero-eyebrow">
            <span />
            {service.label} · ENTERPRISE EXCELLENCE
          </div>
          <h1>
            {service.name} <span className="hero-brand-accent">Solutions.</span>
          </h1>
          <p className="hero-lead-text">{service.description}</p>
          <div className="hero-actions">
            <Button asChild size="lg" className="hero-cta-btn">
              <Link to="/contact">
                Talk to RightPPT <ArrowRight size={17} />
              </Link>
            </Button>
            <a
              href={`https://wa.me/917386257784?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="single-hero-whatsapp-link"
            >
              <Phone size={16} /> Quick WhatsApp Chat
            </a>
          </div>

          <div className="hero-trust-badges">
            <span className="hero-trust-badge">
              <span className="dot dot-blue" /> 100% IP &amp; Code Ownership
            </span>
            <span className="hero-trust-badge">
              <span className="dot dot-green" /> Enterprise SLA Guarantee
            </span>
            <span className="hero-trust-badge">
              <span className="dot dot-violet" /> 24/7 Dedicated Squads
            </span>
          </div>
        </div>
      </section>

      {/* 3. Deep Architectural Capabilities */}
      <section className="section single-capabilities-section">
        <div className="container">
          <SectionTitle
            label="TECHNICAL OVERVIEW & CAPABILITIES"
            title={deepDive.tagline}
            description={deepDive.overview}
          />

          <div className="service-capabilities-grid">
            {deepDive.capabilities.map((cap) => (
              <div className={`capability-card tone-${service.tone} reveal`} key={cap.title}>
                <div className="capability-card-header">
                  <span className="capability-icon">
                    <CheckCircle2 size={18} />
                  </span>
                  <h4>{cap.title}</h4>
                </div>
                <p>{cap.desc}</p>
                <div className="capability-tech-pill">
                  <span>{cap.tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SUCCESS STORY / SERVICE PORTFOLIO HIGHLIGHT */}
      {deepDive.caseStudyHighlight && (
        <section className="section single-success-story-section">
          <div className="container">
            <div className="success-story-card reveal">
              <div className="success-story-head">
                <span className="eyebrow">— CUSTOMER SUCCESS STORY —</span>
                <h3>{deepDive.caseStudyHighlight.title}</h3>
                <p className="success-story-client">Client: {deepDive.caseStudyHighlight.client}</p>
              </div>

              <div className="success-story-body">
                <div className="success-story-block">
                  <strong>The Operational Challenge:</strong>
                  <p>{deepDive.caseStudyHighlight.story}</p>
                </div>

                <div className="success-story-block">
                  <strong>The RightPPT Solution:</strong>
                  <p>{deepDive.caseStudyHighlight.solution}</p>
                </div>

                <div className="success-story-block success-value-highlight">
                  <strong>Business Value Realized:</strong>
                  <p>{deepDive.caseStudyHighlight.value}</p>
                </div>
              </div>

              <div className="success-story-footer">
                <Button asChild size="lg" className="cta-primary-btn">
                  <Link to="/contact">
                    Discuss Your Modernization With Us <ArrowRight size={17} />
                  </Link>
                </Button>
                <a
                  href={`mailto:info@rightppt.com?subject=${encodeURIComponent(`Request Detailed Portfolio - ${service.name}`)}&body=${encodeURIComponent(`Hello RightPPT Team,\n\nPlease email the detailed portfolio and documentation for ${service.name}.\n\nThank you!`)}`}
                  className="portfolio-download-btn ml-3 inline-flex items-center gap-2"
                >
                  <Mail size={16} /> Request Portfolio (info@rightppt.com)
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. INTERACTIVE SERVICE CONSOLES & DEEP-DIVE SHOWCASES */}
      {service.slug === 'ai-solutions' && <AISolutionsSpotlightSection />}
      {service.slug === 'logistics-solutions' && <LogisticsOperationalSpotlightSection />}

      {/* SPECIALIZED DOMAIN CALLOUTS WITH INFO@RIGHTPPT.COM DOWNLOAD LINKS */}
      {service.slug === 'logistics-solutions' && (
        <section className="section domain-special-callout-section">
          <div className="container">
            <div className="domain-callout-box reveal">
              <div>
                <span className="eyebrow">— DETAILED SERVICE PORTFOLIO —</span>
                <h3>Let’s Discuss Your Operational Challenges</h3>
                <p>
                  Connect orders, shipments, inventory, and partner platforms for complete operational control and margin intelligence.
                </p>
              </div>
              <div className="callout-actions flex flex-wrap gap-3">
                <Button asChild size="lg" className="cta-primary-btn">
                  <Link to="/contact">
                    Talk to RightPPT <ArrowRight size={17} />
                  </Link>
                </Button>
                <a
                  href={`mailto:info@rightppt.com?subject=${encodeURIComponent('Download Detailed Logistics Service Portfolio')}&body=${encodeURIComponent('Hello RightPPT Team,\n\nPlease email your detailed Logistics, Supply Chain and E-commerce service portfolio.\n\nThank you!')}`}
                  className="portfolio-download-btn inline-flex items-center gap-2"
                >
                  <Download size={16} /> Download Service Portfolio (info@rightppt.com)
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.slug === 'ai-solutions' && (
        <section className="section domain-special-callout-section">
          <div className="container">
            <div className="domain-callout-box reveal">
              <div>
                <span className="eyebrow">— AI &amp; NETWORK SECURITY PORTFOLIO —</span>
                <h3>Have a network or business process you want to improve?</h3>
                <p>
                  Explore how RightPPT delivers traffic intelligence, network optimization, ML threat detection, eBPF telemetry, and legal compliance automation.
                </p>
              </div>
              <div className="callout-actions flex flex-wrap gap-3">
                <Button asChild size="lg" className="cta-primary-btn">
                  <Link to="/contact">
                    Talk to RightPPT <ArrowRight size={17} />
                  </Link>
                </Button>
                <a
                  href={`mailto:info@rightppt.com?subject=${encodeURIComponent('Download AI Networking & Network Security Portfolio')}&body=${encodeURIComponent('Hello RightPPT Team,\n\nPlease email your detailed AI Networking and Network Security capabilities portfolio.\n\nThank you!')}`}
                  className="portfolio-download-btn inline-flex items-center gap-2"
                >
                  <Download size={16} /> Download Capabilities Portfolio (info@rightppt.com)
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.slug === 'nonprofits-and-associations' && <NonprofitInteractivePortfolio />}

      {service.slug === 'software-development' && (
        <section className="section domain-special-callout-section">
          <div className="container">
            <div className="domain-callout-box reveal">
              <div>
                <span className="eyebrow">— DETAILED SERVICE PORTFOLIO —</span>
                <h3>Software Development and Modernization Portfolio</h3>
                <p>
                  Custom business applications, legacy platform modernization, third-party component integrations, and cloud migration.
                </p>
              </div>
              <div className="callout-actions flex flex-wrap gap-3">
                <Button asChild size="lg" className="cta-primary-btn">
                  <Link to="/contact">
                    Talk to RightPPT <ArrowRight size={17} />
                  </Link>
                </Button>
                <a
                  href={`mailto:info@rightppt.com?subject=${encodeURIComponent('Download Software Services Portfolio')}&body=${encodeURIComponent('Hello RightPPT Team,\n\nPlease email the Software Development and Modernization portfolio.\n\nThank you!')}`}
                  className="portfolio-download-btn inline-flex items-center gap-2"
                >
                  <Download size={16} /> Download Service Portfolio (info@rightppt.com)
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Core Deliverables Checklist */}
      <section className="section single-deliverables-section">
        <div className="container">
          <div className="single-deliverables-box reveal">
            <div className="deliverables-box-head">
              <span className="eyebrow">STANDARD PRODUCTION DELIVERABLES</span>
              <h3>Included with Every {service.name} Engagement</h3>
              <p>Everything required to launch, monitor, and scale without hidden costs or licensing friction.</p>
            </div>
            <div className="deliverables-checklist-grid">
              {offerings[index]?.map((item) => (
                <div className="deliverable-item" key={item}>
                  <div className="deliverable-check-bubble">
                    <Check size={16} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sprint Delivery Lifecycle & Roadmap */}
      <section className="section single-roadmap-section">
        <div className="container">
          <SectionTitle
            label="SPRINT GOVERNANCE & LIFECYCLE"
            title="How We Execute & Deliver"
            description="From technical architecture alignment to production launch with weekly transparent sprint demos."
          />

          <div className="service-roadmap-grid">
            {deepDive.roadmap.map((rm) => (
              <div className={`roadmap-card tone-${service.tone} reveal`} key={rm.step}>
                <div className="roadmap-card-top">
                  <span className="roadmap-step-badge">{rm.step}</span>
                  <span className="roadmap-duration-tag">
                    <Clock size={12} /> {rm.duration}
                  </span>
                </div>
                <h4>{rm.phase}</h4>
                <p>{rm.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note: Client testimonials removed from individual service lines per specification */}

      {/* 6. Enterprise Assurance Strip */}
      <section className="section single-assurance-section">
        <div className="container">
          <div className="service-assurance-grid reveal">
            <div className="assurance-box">
              <ShieldCheck size={26} className="assurance-icon text-blue-500" />
              <div>
                <strong>100% IP &amp; Code Ownership</strong>
                <p>You retain complete legal ownership of all repositories, design files, and documentation.</p>
              </div>
            </div>
            <div className="assurance-box">
              <Lock size={26} className="assurance-icon text-emerald-500" />
              <div>
                <strong>Strict Mutual Enterprise NDA</strong>
                <p>Your business logic, proprietary data, and roadmap are safeguarded from Day 1.</p>
              </div>
            </div>
            <div className="assurance-box">
              <Zap size={26} className="assurance-icon text-violet-500" />
              <div>
                <strong>Dedicated Sprint Squad</strong>
                <p>Senior engineers assigned exclusively to your codebase with direct communication and agility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="section single-faq-section">
        <div className="container">
          <SectionTitle
            label="QUESTIONS & ANSWERS"
            title={`Frequently Asked Questions About ${service.name}`}
            description="Transparent answers about our engineering methodology, technical stacks, and engagement models."
          />

          <div className="single-faq-list">
            {faqs.map((f) => (
              <div className="faq-card reveal" key={f.q}>
                <div className="faq-question-row">
                  <HelpCircle size={18} className="faq-icon" />
                  <h4>{f.q}</h4>
                </div>
                <p className="faq-answer-text">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Explore Other Services Switcher */}
      <section className="section other-services-section">
        <div className="container">
          <div className="other-services-header">
            <span className="eyebrow">EXPLORE MORE EXPERTISE</span>
            <h3>Other Technology Capabilities</h3>
          </div>

          <div className="other-services-grid">
            {otherServices.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  to="/services/$serviceId"
                  params={{ serviceId: other.slug }}
                  className={`other-service-card tone-${other.tone}`}
                >
                  <div className="other-service-photo">
                    <img
                      src={getServiceHeroPhoto(other.slug)}
                      alt={other.name}
                      className="other-card-img"
                      loading="lazy"
                    />
                    <div className="other-photo-overlay" />
                    <span className="other-icon-wrap">
                      <OtherIcon size={18} />
                    </span>
                    <span className="other-service-tag">{other.label}</span>
                  </div>
                  <div className="other-card-body">
                    <h4>{other.name}</h4>
                    <p>{other.description}</p>
                    <div className="other-service-link">
                      <span>{other.knowMoreText}</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Bottom CTA Band */}
      <section className="single-service-bottom-cta">
        <div className="container">
          <div className="single-bottom-cta-box reveal">
            <div>
              <h3>Let’s Discuss Your Business Needs</h3>
              <p>Build a new application, improve an existing system or explore practical AI solutions.</p>
            </div>
            <div className="cta-actions">
              <Button asChild size="lg" className="cta-primary-btn">
                <Link to="/contact">
                  Talk to RightPPT <ArrowRight size={17} />
                </Link>
              </Button>
              <a
                href={`https://wa.me/917386257784?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="single-whatsapp-btn"
              >
                <Phone size={15} /> WhatsApp Architect
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function NonprofitInteractivePortfolio() {
  const [showMainPortfolio, setShowMainPortfolio] = useState(false);
  const [expandedMembership, setExpandedMembership] = useState(false);
  const [expandedRetention, setExpandedRetention] = useState(false);
  const [expandedPublishing, setExpandedPublishing] = useState(false);

  return (
    <section className="section py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-7 sm:p-11 mb-10 reveal">
          <div className="max-w-3xl mb-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Smarter Technology for Nonprofits &amp; Associations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Engage your community. Grow revenue. <span className="text-emerald-600">Advance your mission.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              RightPPT combines custom software, connected systems and the RyteAI platform to help mid-size to large nonprofits and associations improve services and simplify operations.
            </p>
          </div>

          {/* 12 Highlight Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm font-bold mb-1">• Membership &amp; Retention</strong>
              <p className="text-xs text-slate-600">Acquisition, onboarding, dues, renewals, personalized engagement and chapter coordination.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm font-bold mb-1">• RyteAI Search &amp; Knowledge</strong>
              <p className="text-xs text-slate-600">Natural-language search and knowledge assistants across publications, research, documents and webinar archives.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm font-bold mb-1">• AI Content &amp; Communications</strong>
              <p className="text-xs text-slate-600">Articles, newsletters, campaign content, visuals, audio, translations and personalized recommendations.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm font-bold mb-1">• Publishing &amp; Revenue</strong>
              <p className="text-xs text-slate-600">Digital magazines, subscriptions, premium content, advertising, sponsorships and print distribution.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm font-bold mb-1">• Learning &amp; Events</strong>
              <p className="text-xs text-slate-600">Learning portals, registrations, payments, assessments, certificates and continuing-education reporting.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm font-bold mb-1">• Donor, Grant &amp; Program</strong>
              <p className="text-xs text-slate-600">Supporter records, contributions, applications, approvals, service delivery and funder reporting.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm font-bold mb-1">• Applications &amp; Modernization</strong>
              <p className="text-xs text-slate-600">Custom websites and portals; development, customization of CRM, AMS, LMS and content systems.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block text-sm font-bold mb-1">• Integrations &amp; Data</strong>
              <p className="text-xs text-slate-600">Connect finance, payments, marketing and business applications; cleanse, deduplicate, migrate records.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500">
              Built for national offices, chapters, affiliates and institutional communities.
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowMainPortfolio(!showMainPortfolio)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>{showMainPortfolio ? 'COLLAPSE PORTFOLIO' : 'KNOW MORE — Download Our Detailed Service Portfolio'}</span>
                {showMainPortfolio ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
              <a
                href={`mailto:info@rightppt.com?subject=${encodeURIComponent('Download Nonprofits Detailed Service Portfolio')}&body=${encodeURIComponent('Hello RightPPT Team,\n\nPlease email our organization the detailed Nonprofit & Association Service Portfolio.\n\nThank you!')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                <Download size={14} /> Email PDF
              </a>
            </div>
          </div>
        </div>

        {/* EXPANDABLE COMPREHENSIVE SERVICE PORTFOLIO */}
        {showMainPortfolio && (
          <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-500/25 p-7 sm:p-11 mb-12 transition-all">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 block">
                — DETAILED SERVICE PORTFOLIO —
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Strengthen engagement. Grow sustainable revenue. Advance your mission.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                RightPPT helps mid-size organizations, national associations and large nonprofit networks modernize applications, connect information and automate everyday work. Our services combine custom software, the RyteAI platform and specialist delivery partners to support your members, teams and communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* 1 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  Membership Growth, Engagement &amp; Retention
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Make membership easier to join, more valuable to use and simpler to renew.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Streamline acquisition, onboarding, dues, benefits, renewals and member service.</li>
                  <li>Personalize communications and resource recommendations around member interests.</li>
                  <li>Analyze participation and renewal trends to guide targeted retention campaigns.</li>
                  <li>Coordinate individual, organizational, chapter and regional memberships.</li>
                </ul>
              </div>

              {/* 2 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                  RyteAI: Intelligent Search &amp; Knowledge Access
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Turn your organization’s expertise into an accessible, everyday resource.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Enable natural-language search across connected publications, research, policies and business information.</li>
                  <li>Help members and staff discover relevant answers, documents and related resources.</li>
                  <li>Make webinar and video archives searchable through transcripts, summaries and topic discovery.</li>
                  <li>Build knowledge assistants around approved content and defined access permissions.</li>
                </ul>
              </div>

              {/* 3 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-600 shrink-0" />
                  AI Content, Campaigns &amp; Multilingual Communications
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Extend your reach and get more value from every piece of content.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Create first drafts of articles, newsletters, campaign messages and visual assets.</li>
                  <li>Repurpose research and publications into audio, social content and concise summaries.</li>
                  <li>Translate and localize communications for multilingual audiences.</li>
                  <li>Support audience segmentation, campaign testing and editorial approval workflows.</li>
                </ul>
              </div>

              {/* 4 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                  Publishing &amp; Non-Dues Revenue
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Connect trusted content with stronger engagement and revenue opportunities.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Deliver digital magazines, searchable archives, newsletters and subscription experiences.</li>
                  <li>Support advertising, sponsorship, premium content and institutional subscriptions.</li>
                  <li>Coordinate editorial planning, design, production, circulation and distribution through specialist partners.</li>
                  <li>Measure content usage, subscriber activity and campaign performance.</li>
                </ul>
              </div>

              {/* 5 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-600 shrink-0" />
                  Learning, Events &amp; Professional Development
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Keep members connected to knowledge throughout their professional journey.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Build integrated learning portals with assessments, certificates and learning records.</li>
                  <li>Connect event registration, payments, communications and post-event resources.</li>
                  <li>Recommend relevant courses, webinars and publications based on interests and activity.</li>
                  <li>Support group access, institutional administration and continuing-education reporting.</li>
                </ul>
              </div>

              {/* 6 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  Donor, Grant &amp; Program Operations
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Connect supporter relationships with the work they help fund.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Customize applications for donor records, contributions and supporter communications.</li>
                  <li>Develop grant intake, document collection, review and approval workflows.</li>
                  <li>Build portals for program applications, service requests and status tracking.</li>
                  <li>Bring program activity and financial information into management and funder reporting.</li>
                </ul>
              </div>

              {/* 7 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                  Application Development, Modernization &amp; Integration
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Build the capabilities your mission needs on a maintainable technology foundation.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Develop custom applications, accessible websites and member, donor, volunteer and staff portals.</li>
                  <li>Modernize legacy software while preserving essential records and business rules.</li>
                  <li>Configure and enhance CRM, association management, learning and content platforms.</li>
                  <li>Integrate finance, payments, marketing, document management and other business systems.</li>
                </ul>
              </div>

              {/* 8 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-600 shrink-0" />
                  Data, Analytics &amp; Decision Support
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Give every team a clearer view of relationships, performance and impact.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Cleanse, deduplicate, migrate and reconcile information across systems.</li>
                  <li>Connect member, donor, content, event and operational data.</li>
                  <li>Build dashboards for engagement, renewals, revenue, service delivery and program outcomes.</li>
                  <li>Develop predictive models where data quality supports reliable evaluation.</li>
                </ul>
              </div>

              {/* 9 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                  Document &amp; Workflow Automation
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Reduce repetitive administration and keep work moving.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Extract and classify information from forms, invoices, applications and supporting documents.</li>
                  <li>Automate routing, reminders, approvals and exception handling.</li>
                  <li>Integrate Word, PDF and scanned-document workflows into business applications.</li>
                  <li>Assist with agreement drafting, clause comparison and review preparation, with human approval.</li>
                </ul>
              </div>

              {/* 10 */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-600 shrink-0" />
                  AI Strategy, Cloud &amp; Ongoing Support
                </h4>
                <p className="text-xs text-slate-500 font-medium mb-3">Move from isolated improvements to sustained organizational capability.</p>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>Prioritize AI opportunities through readiness assessments, focused pilots and implementation roadmaps.</li>
                  <li>Design permissions, privacy controls, evaluation and human review into AI workflows.</li>
                  <li>Support cloud migration, application performance, upgrades and integration maintenance.</li>
                  <li>Equip teams through training, documentation and ongoing enhancements.</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-5">
              <div>
                <strong className="text-base font-bold text-white block mb-1">Designed for Organizational Complexity</strong>
                <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                  Support national offices, chapters, affiliates and institutional relationships through shared systems, configurable workflows and appropriate local access. RightPPT brings together application development, customization, integration, AI and ongoing support, with specialist partners supporting publishing, print, distribution and campaign delivery.
                </p>
              </div>
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold shrink-0">
                <Link to="/contact">Let’s Discuss Your Priorities <ArrowRight size={16} className="ml-1.5" /></Link>
              </Button>
            </div>
          </div>
        )}

        {/* 3 SPECIALIZED SUB-SERVICES WITH INTERACTIVE KNOW MORE BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Membership Management */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                Sub-Service 01
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Membership Management service for non profits</h3>
              <p className="text-xs font-semibold text-emerald-700 mb-2">Grow membership. Strengthen retention. Communicate your mission.</p>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                RightPPT combines technology and specialist delivery partners to support your members and communications.
              </p>

              {expandedMembership && (
                <div className="pt-3 border-t border-slate-100 mb-4 space-y-2 animate-in fade-in duration-200">
                  <div className="text-xs text-slate-700">
                    <strong>• Acquire and welcome:</strong> Acquisition campaigns, trial memberships, onboarding, and welcome kits.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Manage membership:</strong> Dues, renewals, accounts receivable, benefits, and contribution programs.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Support your community:</strong> Events, chapter and regional coordination, telephone support, and business-rule adherence.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Organize and deliver:</strong> Member profiles, acquisition-source analysis, member surveys, inventory, and fulfillment.
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setExpandedMembership(!expandedMembership)}
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-between transition-colors"
              >
                <span>{expandedMembership ? 'Hide Details' : 'KNOW MORE — Download Membership Services'}</span>
                {expandedMembership ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              <a
                href={`mailto:info@rightppt.com?subject=${encodeURIComponent('Download Membership Services Portfolio')}&body=${encodeURIComponent('Hello RightPPT Team,\n\nPlease email the Membership Management services portfolio.\n\nThank you!')}`}
                className="text-[11px] text-center text-slate-500 hover:text-emerald-700 font-medium py-1"
              >
                Request PDF via info@rightppt.com →
              </a>
            </div>
          </div>

          {/* Card 2: Retention and Renewals */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                Sub-Service 02
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Retention and Renewals</h3>
              <p className="text-xs font-semibold text-blue-700 mb-2">Automate renewal lifecycles and increase lifetime supporter value.</p>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Plan renewal strategy, targeted custom content, design, timed sequences, and multi-channel touches.
              </p>

              {expandedRetention && (
                <div className="pt-3 border-t border-slate-100 mb-4 space-y-2 animate-in fade-in duration-200">
                  <div className="text-xs text-slate-700">
                    <strong>• Plan campaigns:</strong> Renewal strategy, custom content, design, timed sequences, and multiple touches.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Personalize outreach:</strong> Targeted email, print, telephone, and publication communications.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Encourage renewals:</strong> Auto-renewal, early-renewal incentives, premiums, and welcome-back offers.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Measure and improve:</strong> A/B testing, trend analysis, business intelligence metrics, and expired-member surveys.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Optimize mailing:</strong> Address cleansing, postal-data management, and postage discounts.
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setExpandedRetention(!expandedRetention)}
                className="w-full py-2.5 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-between transition-colors"
              >
                <span>{expandedRetention ? 'Hide Details' : 'KNOW MORE — Download Retention Services'}</span>
                {expandedRetention ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              <a
                href={`mailto:info@rightppt.com?subject=${encodeURIComponent('Download Retention Services Portfolio')}&body=${encodeURIComponent('Hello RightPPT Team,\n\nPlease email the Retention and Renewals services portfolio.\n\nThank you!')}`}
                className="text-[11px] text-center text-slate-500 hover:text-blue-700 font-medium py-1"
              >
                Request PDF via info@rightppt.com →
              </a>
            </div>
          </div>

          {/* Card 3: Magazine Publishing and Digital Communications */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                Sub-Service 03
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Magazine Publishing &amp; Digital Comms</h3>
              <p className="text-xs font-semibold text-violet-700 mb-2">Connect trusted content with stronger member engagement.</p>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Deliver print publications, digital flipbooks, searchable article archives, and advertising sponsorship sales.
              </p>

              {expandedPublishing && (
                <div className="pt-3 border-t border-slate-100 mb-4 space-y-2 animate-in fade-in duration-200">
                  <div className="text-xs text-slate-700">
                    <strong>• Plan content:</strong> Editorial planning, content acquisition, author management, and production scheduling.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Create publications:</strong> Copyediting, design, photography, stock images, prepress, online proofing, and PDF workflows.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Produce print:</strong> Magazine printing, saddle binding, variable covers, and personalized data.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Deliver digitally:</strong> Digital magazines, e-newsletters, social media campaigns, analytics, and monthly reporting.
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>• Support revenue:</strong> Advertising sales, circulation, mailing, and applicable Periodical Class discounts.
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setExpandedPublishing(!expandedPublishing)}
                className="w-full py-2.5 px-3 rounded-lg bg-violet-50 hover:bg-violet-100 text-violet-800 font-bold text-xs flex items-center justify-between transition-colors"
              >
                <span>{expandedPublishing ? 'Hide Details' : 'KNOW MORE — Download Publishing Services'}</span>
                {expandedPublishing ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              <a
                href={`mailto:info@rightppt.com?subject=${encodeURIComponent('Download Publishing Services Portfolio')}&body=${encodeURIComponent('Hello RightPPT Team,\n\nPlease email the Magazine Publishing & Digital Communications portfolio.\n\nThank you!')}`}
                className="text-[11px] text-center text-slate-500 hover:text-violet-700 font-medium py-1"
              >
                Request PDF via info@rightppt.com →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
