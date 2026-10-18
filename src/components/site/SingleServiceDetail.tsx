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
  'web-development': [
    {
      quote:
        'Right PPT rebuilt our enterprise web application using modern React 19 and TanStack. Page load time dropped by 65%, and conversion jumped 185% in under 60 days.',
      author: 'Elena Rostova',
      role: 'VP of Product',
      company: 'FinEdge Corp',
      metric: '+185% Conversion',
    },
    {
      quote:
        'Their engineering discipline, component architecture, and responsive design systems are the best we have experienced from any external technology partner.',
      author: 'Marcus Vance',
      role: 'Head of Engineering',
      company: 'CloudScale Global',
      metric: '65% Faster TTI',
    },
  ],
  'software-development': [
    {
      quote:
        'The event-driven microservices backend they built seamlessly processed 10M+ daily telemetry events with zero downtime. Clean code and 100% test coverage.',
      author: 'Arvind Patel',
      role: 'Chief Technology Officer',
      company: 'Nexus Telematics',
      metric: '99.99% Uptime',
    },
    {
      quote:
        'Delivered 2 weeks ahead of our milestone schedule. Daily Jira sync and direct Slack standups made their squad feel like our internal core team.',
      author: 'Sarah Jenkins',
      role: 'VP Engineering',
      company: 'Apex Supply Chain',
      metric: '2 Weeks Ahead',
    },
  ],
  'digital-marketing': [
    {
      quote:
        'Our organic search footprint expanded 140% across targeted commercial keywords, and our blended Customer Acquisition Cost fell by 35% within 4 months.',
      author: 'David Chen',
      role: 'Chief Marketing Officer',
      company: 'Aura Luxe Global',
      metric: '-35% Blended CAC',
    },
    {
      quote:
        'Authoritative content funnels, technical SEO, and conversion rate optimization transformed our site into an enterprise inbound lead machine.',
      author: 'Priya Nair',
      role: 'Growth Director',
      company: 'ScaleFlow SaaS',
      metric: '+140% Organic Lift',
    },
  ],
  'technology-solutions': [
    {
      quote:
        'Their cloud FinOps optimization cut 38% off our monthly AWS and Kubernetes infrastructure spend without impacting query latency or SLA guarantees.',
      author: 'Julian Hayes',
      role: 'Director of Infrastructure',
      company: 'Vanguard Health Network',
      metric: '38% Cloud Savings',
    },
    {
      quote:
        'Implemented a private enterprise RAG pipeline over 50k+ sensitive legal documents with zero data leakage. True tier-1 AI engineering competence.',
      author: 'Dr. Jonathan Lee',
      role: 'Chief Data Officer',
      company: 'OmniFlow Risk Advisory',
      metric: 'Zero Data Leakage',
    },
  ],
};

// FAQs for each service
const serviceFaqs: Record<string, Array<{ q: string; a: string }>> = {
  'web-development': [
    {
      q: 'What modern web frameworks and technology stacks do you build on?',
      a: 'We architect production applications primarily using React 19, TypeScript, Next.js, and TanStack Start, paired with Tailwind CSS, edge routing, and automated testing suites.',
    },
    {
      q: 'Do you ensure full mobile responsiveness and accessibility (WCAG)?',
      a: 'Yes. All components are built with strict WCAG 2.1 AA accessibility, fluid typography, high-DPI asset optimization, and sub-second Core Web Vitals across iOS, Android, and desktop.',
    },
    {
      q: 'How is code handover and IP ownership handled?',
      a: 'You retain 100% legal ownership of all repositories, designs, and deployment configs from Day 1. There are zero proprietary runtime locks or hidden licenses.',
    },
  ],
  'software-development': [
    {
      q: 'Can your team integrate into our existing Jira, GitHub, and daily standups?',
      a: 'Absolutely. Our senior squads operate inside your sprint ceremonies, participate in daily standups, follow your PR review workflows, and maintain transparent velocity tracking.',
    },
    {
      q: 'How do you guarantee security and enterprise data confidentiality?',
      a: 'Every engagement is protected by a strict mutual enterprise NDA, SOC2-aligned development standards, end-to-end secret management, and zero third-party data sharing.',
    },
    {
      q: 'What is your typical sprint cadence and milestone demo schedule?',
      a: 'We work in predictable 2-week agile sprints. Every sprint concludes with an automated test report, staging deployment, and a live demonstration to stakeholders.',
    },
  ],
  'digital-marketing': [
    {
      q: 'How do you measure and report marketing return on investment (ROAS)?',
      a: 'We set up transparent real-time GA4, Google Search Console, and CRM conversion tracking with weekly KPI teardowns focused on qualified pipeline and revenue.',
    },
    {
      q: 'Do you manage technical SEO and Core Web Vitals remediation?',
      a: 'Yes. Our marketing engineers audit schema markup, server response times, internal link equity, and rendering bottlenecks to rank authoritative content in top SERP positions.',
    },
    {
      q: 'Are ad spend budgets paid directly to platforms?',
      a: 'Yes. You retain full ownership and direct billing with Google Ads, Meta, and LinkedIn. We charge transparent management retainers without hidden commissions.',
    },
  ],
  'technology-solutions': [
    {
      q: 'Which cloud platforms do your certified architects support?',
      a: 'We hold certifications across Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and Cloudflare edge computing.',
    },
    {
      q: 'How does your Cloud FinOps and Cost Optimization audit work?',
      a: 'We inspect telemetry across idle resources, compute reservation mismatches, container bin-packing, and unattached storage to deliver actionable 30-45% monthly savings.',
    },
    {
      q: 'Can you help us build private generative AI and RAG pipelines?',
      a: 'Yes. We architect private on-prem or VPC vector databases (pgvector, Pinecone, Qdrant) and LLM inference pipelines with strict role-based document access controls.',
    },
  ],
};

export function SingleServiceDetail({ serviceId }: SingleServiceDetailProps) {
  const result = getServiceBySlug(serviceId) || getServiceBySlug('web-development');
  if (!result) return null;

  const { service, deepDive, index } = result;
  const Icon = service.icon;

  const whatsappMessage = encodeURIComponent(
    `Hi Right PPT Solutions, I would like to consult with an architect regarding ${service.name}.`
  );

  const reviews = serviceReviews[service.slug] || serviceReviews['web-development'];
  const faqs = serviceFaqs[service.slug] || serviceFaqs['web-development'];
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
          {/* Breadcrumb row */}
          <div className="single-hero-breadcrumb-trail">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span className="current">{service.name}</span>
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
                Schedule Architecture Consultation <ArrowRight size={17} />
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
            label="DEEP ARCHITECTURAL CAPABILITY"
            title={`What We Deliver in ${service.name}`}
            description={deepDive.tagline}
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

      {/* 6. CLIENT REVIEWS & VERIFIED TESTIMONIALS (Requested by user) */}
      <section className="section single-reviews-section">
        <div className="container">
          <SectionTitle
            label="CLIENT TESTIMONIALS & REVIEWS"
            title={`What Enterprise Leaders Say About Our ${service.name}`}
            description="Verified outcomes from product executives, engineering heads, and founders who partner with Right PPT."
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
            {faqs.map((f, i) => (
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
                    <span>View Architecture Details</span>
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
              <h3>Ready to bring {service.name} to life?</h3>
              <p>Schedule a confidential consultation with our principal technology architects today.</p>
            </div>
            <div className="cta-actions">
              <Button asChild size="lg" className="cta-primary-btn">
                <Link to="/contact">
                  Start Your Project <ArrowRight size={17} />
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
