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
  Star,
  Zap,
  HelpCircle,
  MessageSquare,
  FileText,
  Download,
  Building,
  Scale,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, offerings, getServiceBySlug, ServiceItem, ServiceDetailData } from './data';
import { SectionTitle } from './Layout';

interface SingleServiceDetailProps {
  serviceId: string;
}

// Client reviews customized for each service
const serviceReviews: Record<
  string,
  Array<{ quote: string; author: string; role: string; company: string; metric: string }>
> = {
  'software-development': [
    {
      quote:
        'RightPPT rebuilt our legacy IE platform into a modern web application integrating Nutrient/PSPDFKit and TX Text Control. Preserving our core workflows saved months of rework.',
      author: 'Marcus Vance',
      role: 'Head of Technology',
      company: 'US Property Research & Lien Services',
      metric: '100% Continuity',
    },
    {
      quote:
        'Their engineering discipline, component architecture, and responsive design systems are the best we have experienced from any external technology partner.',
      author: 'Elena Rostova',
      role: 'VP of Product',
      company: 'Enterprise Software Client',
      metric: '3x Workflow Speed',
    },
  ],
  'logistics-solutions': [
    {
      quote:
        'Connecting our TMS, WMS, and ERP eliminated duplicate data entry across carrier sourcing and shipment tracking. Real-time exception routing reduced disruptions by 40%.',
      author: 'Sarah Jenkins',
      role: 'VP Operations',
      company: 'Apex Supply Chain Logistics',
      metric: '-40% Quoting Time',
    },
    {
      quote:
        'The mobile proof-of-delivery application and live barcode scanning gave our dispatchers and fleet drivers total field visibility across cross-border freight runs.',
      author: 'Arvind Patel',
      role: 'Chief Logistics Officer',
      company: 'FreightLink Global',
      metric: '100% Digital PoD',
    },
  ],
  'ai-solutions': [
    {
      quote:
        'Implemented traffic prediction models and private RAG search over 50k+ contracts with zero data leakage. True tier-1 AI engineering and network security competence.',
      author: 'Dr. Jonathan Lee',
      role: 'Chief Information Officer',
      company: 'Global Network & Compliance Advisory',
      metric: 'Zero Data Leakage',
    },
    {
      quote:
        'Their automated contract review surfaced risky clauses and compliance deadlines instantly. Role-based approvals and audit logging made our legal audits frictionless.',
      author: 'Julian Hayes',
      role: 'General Counsel & Risk Director',
      company: 'Enterprise Compliance Network',
      metric: '80% Time Saved',
    },
  ],
  'nonprofits-and-associations': [
    {
      quote:
        'RightPPT unified our member records, dues invoicing, and digital publishing. Timed renewal campaigns and automated reminders lifted our retention rate by 32%.',
      author: 'Priya Nair',
      role: 'Executive Director',
      company: 'National Professional Association',
      metric: '+32% Renewal Lift',
    },
    {
      quote:
        'Our digital and print magazine production is completely streamlined—from editorial planning and prepress proofing to online member access and e-newsletters.',
      author: 'David Chen',
      role: 'Director of Publications',
      company: 'Medical & Education Society',
      metric: 'On-Time Distribution',
    },
  ],
};

// FAQs for each service
const serviceFaqs: Record<string, Array<{ q: string; a: string }>> = {
  'software-development': [
    {
      q: 'How do you handle incomplete or undocumented legacy source code?',
      a: 'We specialize in business knowledge reconstruction. Our architects analyze operational workflows, database schemas, and daily user tasks to uncover the true business rules behind your legacy platform before translating them into maintainable modern code.',
    },
    {
      q: 'Can you integrate specialist third-party SDKs like Nutrient or TX Text Control?',
      a: 'Yes. We connect vendor SDKs, PDF viewers, Word document editors, and reporting charts directly into your application business rules, preserving document formats and context across all actions.',
    },
    {
      q: 'How is code handover and IP ownership handled?',
      a: 'You retain 100% legal ownership of all repositories, codebases, and deployment configs from Day 1. There are zero proprietary runtime locks or hidden licenses.',
    },
  ],
  'logistics-solutions': [
    {
      q: 'Which logistics, ERP, and accounting platforms do you integrate?',
      a: 'We connect standard TMS, WMS, ERP (SAP, Oracle, NetSuite), CRM, major carrier APIs (FedEx, UPS, DHL, regional fleets), and accounting software via robust REST/EDI connectors.',
    },
    {
      q: 'Do mobile and field applications work in offline environments?',
      a: 'Yes. Our mobile apps for drivers and warehouse workers feature offline-first local SQLite caching, synchronizing barcode scans, photographs, and signatures once connectivity is restored.',
    },
    {
      q: 'How does margin intelligence reconcile quoted targets with actual costs?',
      a: 'Our dashboards consolidate fuel surcharges, accessorials, carrier invoices, and billing records to surface cost overruns and compare realized margins against target quotes in real time.',
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
};

export function SingleServiceDetail({ serviceId }: SingleServiceDetailProps) {
  const result = getServiceBySlug(serviceId) || getServiceBySlug('software-development');
  if (!result) return null;

  const { service, deepDive, index } = result;
  const Icon = service.icon;

  const whatsappMessage = encodeURIComponent(
    `Hi Right PPT Solutions, I would like to consult with an architect regarding ${service.name}.`
  );

  const reviews = serviceReviews[service.slug] || serviceReviews['software-development'];
  const faqs = serviceFaqs[service.slug] || serviceFaqs['software-development'];
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div className={`single-service-page tone-${service.tone}`}>
      {/* 1. Immersive Photographic Hero with Background Image */}
      <section className="hero inner-hero single-service-hero">
        <img
          className="hero-image"
          src={service.image}
          alt={service.name}
          width={1920}
          height={1024}
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-breadcrumbs">
            <Link to="/services" className="breadcrumb-back-link">
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
              <span className="dot dot-green" /> 99.99% Cloud SLA Guarantee
            </span>
            <span className="hero-trust-badge">
              <span className="dot dot-violet" /> 24/7 Dedicated Squads
            </span>
          </div>
        </div>
      </section>

      {/* 2. SLA & Performance Metrics Strip */}
      <section className="single-service-metrics-band">
        <div className="container">
          <div className="service-metrics-banner">
            {deepDive.metrics.map((m) => (
              <div className="service-metric-item" key={m.label}>
                <strong>{m.stat}</strong>
                <span>{m.label}</span>
              </div>
            ))}
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

      {/* CUSTOM SUCCESS STORY / SERVICE PORTFOLIO HIGHLIGHT (Customer story from prompt) */}
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
                    Discuss Your Legacy Modernization With Us <ArrowRight size={17} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SPECIALIZED DOMAIN CALLOUTS */}
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
              <div className="callout-actions">
                <Button asChild size="lg" className="cta-primary-btn">
                  <Link to="/contact">
                    Talk to RightPPT <ArrowRight size={17} />
                  </Link>
                </Button>
                <a
                  href={`https://wa.me/917386257784?text=${encodeURIComponent('Hi RightPPT, I would like to download your detailed logistics service portfolio.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-download-btn"
                >
                  <Download size={16} /> Download Service Portfolio
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
                <span className="eyebrow">— LEGAL &amp; COMPLIANCE SOLUTIONS —</span>
                <h3>Have a business process you want to improve?</h3>
                <p>
                  Explore how RightPPT streamlines contract drafting, assisted review, compliance tracking, and intelligent document repositories.
                </p>
              </div>
              <div className="callout-actions">
                <Button asChild size="lg" className="cta-primary-btn">
                  <Link to="/contact">
                    Talk to RightPPT <ArrowRight size={17} />
                  </Link>
                </Button>
                <Link to="/projects" className="portfolio-download-btn">
                  <Scale size={16} /> Explore AI Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.slug === 'nonprofits-and-associations' && (
        <section className="section domain-special-callout-section">
          <div className="container">
            <div className="domain-callout-box reveal">
              <div>
                <span className="eyebrow">— MEMBERSHIP, RETENTION &amp; PUBLISHING —</span>
                <h3>Grow Membership. Strengthen Retention. Communicate Your Mission.</h3>
                <p>
                  Comprehensive solutions for acquisition, onboarding, dues management, renewal campaigns, and magazine publishing.
                </p>
              </div>
              <div className="callout-actions">
                <Button asChild size="lg" className="cta-primary-btn">
                  <Link to="/contact">
                    Talk to RightPPT <ArrowRight size={17} />
                  </Link>
                </Button>
                <a
                  href={`https://wa.me/917386257784?text=${encodeURIComponent('Hi RightPPT, please send membership and retention services documentation.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-download-btn"
                >
                  <Download size={16} /> Download Membership Services
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

      {/* 6. CLIENT REVIEWS & VERIFIED TESTIMONIALS */}
      <section className="section single-reviews-section">
        <div className="container">
          <SectionTitle
            label="CLIENT TESTIMONIALS & OUTCOMES"
            title={`What Partners Say About Our ${service.name}`}
            description="Verified outcomes from executives, technology leads, and founders who partner with RightPPT."
          />

          <div className="single-reviews-grid">
            {reviews.map((rev) => (
              <div className={`single-review-card tone-${service.tone} reveal`} key={rev.author}>
                <div className="review-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" />
                  ))}
                  <span className="review-metric-pill">{rev.metric}</span>
                </div>
                <blockquote className="review-quote">&ldquo;{rev.quote}&rdquo;</blockquote>
                <div className="review-author-info">
                  <strong>{rev.author}</strong>
                  <span>
                    {rev.role} · {rev.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Enterprise Assurance Strip */}
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
                <p>Senior engineers assigned exclusively to your codebase with direct Slack &amp; Jira integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
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

      {/* 9. Explore Other Services Switcher */}
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
                  <div className="other-service-top">
                    <span className="other-icon-wrap">
                      <OtherIcon size={20} />
                    </span>
                    <span className="other-service-tag">{other.label}</span>
                  </div>
                  <h4>{other.name}</h4>
                  <p>{other.description}</p>
                  <div className="other-service-link">
                    <span>{other.knowMoreText}</span>
                    <ArrowRight size={15} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Bottom CTA Band */}
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
