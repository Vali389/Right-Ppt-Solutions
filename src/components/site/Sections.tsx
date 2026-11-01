import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Quote,
  Star,
  Users,
  Settings2,
  Cpu,
  Zap,
  Cloud,
  ShieldCheck,
  Sparkles,
  Layers3,
  Network,
  Truck,
  Users2,
  ChevronRight,
  ChevronLeft,
  Database,
  FileText,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from './data';
import { SectionTitle } from './Layout';
import softDevPlain from '@/assets/soft-dev-plain.jpg';
import logisticsPlain from '@/assets/logistics-plain.jpg';
import aiSecPlain from '@/assets/ai-sec-plain.jpg';
import pubPlain from '@/assets/pub-plain.jpg';
import commitPlain from '@/assets/commit-plain.jpg';
import aiEverydayPlain from '@/assets/ai-everyday-plain.jpg';
import aiLegalPlain from '@/assets/ai-legal-plain.jpg';
import networkCablesBg from '@/assets/network-cables-bg.jpg';

export function ServicesSection({ all = true }: { all?: boolean }) {
  const displayedServices = all ? services : services.slice(0, 4);

  const getServicePhoto = (slug: string) => {
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

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionTitle
          label="WHAT WE DO · SERVICES & CAPABILITIES"
          title="Technology That Simplifies Business"
          description="RightPPT builds, modernizes and connects business applications—helping you automate work, improve visibility and put AI to practical use."
        />

        <div className="service-grid">
          {displayedServices.map((s, i) => (
            <Link
              to="/services/$serviceId"
              params={{ serviceId: s.slug }}
              className={`service-card reveal tone-${s.tone}`}
              key={s.slug}
            >
              <div className="service-photo">
                <img
                  src={getServicePhoto(s.slug)}
                  alt={s.name}
                  className="service-img"
                  loading="lazy"
                />
                <div className="service-img-overlay" />
                <span className="service-icon">
                  <s.icon size={20} />
                </span>
              </div>
              <div className="service-body">
                <span className="service-label">{s.label}</span>
                <h3 className="service-card-title">{s.name}</h3>
                <p>{s.description}</p>
                <div className="service-deliverables">
                  {s.bullets.map((b) => (
                    <span key={b.title}>
                      <Check size={11} />
                      {b.title}
                    </span>
                  ))}
                </div>
                <div className="learn-link">
                  <span>{s.knowMoreText}</span>
                  <ArrowRight size={14} className="learn-arrow" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="center-action">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Service Capabilities <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ProjectWorkSection() {
  const projectPillars = [
    {
      title: 'AI Rebate & Business Intelligence',
      tag: 'AUTOMATION & IDP',
      desc: 'Intelligent document extraction, automated eligibility & predictive analytics.',
      icon: Sparkles,
      tone: 'violet',
      slug: 'ai-rebate-processing',
      highlight: '10x Faster Processing',
    },
    {
      title: 'Legacy Modernization',
      tag: 'PLATFORM RE-ENGINEERING',
      desc: 'Connected document viewing, editing, and legacy browser retirement.',
      icon: RefreshCw,
      tone: 'blue',
      slug: 'legacy-modernization',
      highlight: '100% Web Native',
    },
    {
      title: 'CRM and Membership',
      tag: 'MEMBER NETWORK AMS',
      desc: 'Integrated member records, automated dues billing and digital access.',
      icon: Users2,
      tone: 'green',
      slug: 'crm-membership',
      highlight: 'Single Member Record',
    },
    {
      title: 'Digital Publishing and Learning',
      tag: 'HEADLESS LMS & COMMERCE',
      desc: 'Connected content archives, subscriptions, assessments and institutional portals.',
      icon: FileText,
      tone: 'violet',
      slug: 'digital-publishing',
      highlight: '+160% Institutional Reach',
    },
    {
      title: 'Cloud CRM Migration',
      tag: 'ENTERPRISE D365 CLOUD',
      desc: 'Migration planning, data transformation, 18 integrations and Azure optimization.',
      icon: Database,
      tone: 'cyan',
      slug: 'cloud-crm-migration',
      highlight: 'Zero Cutover Downtime',
    },
  ];

  return (
    <section className="section verified-deliverables-modern-section" id="project-work">
      <div className="verified-deliverables-ambient" />
      <div className="container">
        <div className="verified-deliverables-wrapper reveal">
          <div className="verified-deliverables-header text-center">
            <div className="verified-eyebrow-pill">
              <span className="pill-dot blue" />
              <span>VERIFIED DELIVERABLES</span>
            </div>
            <h2>
              Enterprise Execution &amp; <span className="hero-brand-accent">Delivery Highlights.</span>
            </h2>
            <p className="verified-deliverables-lead">
              Discover how RightPPT connects disparate systems, modernizes legacy dependencies, and delivers measurable operational value with verified production deliverables.
            </p>
          </div>

          <div className="verified-deliverables-grid">
            {projectPillars.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.title}
                  to="/projects"
                  className={`verified-deliverable-card tone-${p.tone}`}
                >
                  <div className="card-top-row">
                    <div className="deliverable-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <span className="deliverable-tag-pill">{p.tag}</span>
                  </div>
                  <h3 className="deliverable-card-title">{p.title}</h3>
                  <p className="deliverable-card-desc">{p.desc}</p>
                  <div className="deliverable-card-footer">
                    <span className="deliverable-highlight-badge">{p.highlight}</span>
                    <span className="deliverable-view-link">
                      <span>View Study</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="verified-deliverables-action text-center">
            <Button asChild size="lg" className="verified-explore-btn">
              <Link to="/projects">
                <span>Explore All Detailed Case Studies</span>
                <ArrowRight size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section commitment-section" id="commitment">
      <div className="commitment-ambient-glow" />
      <div className="container commitment-grid">
        <div className="commitment-visual reveal w-full">
          <div className="about-team-frame">
            <img
              src={commitPlain}
              alt="Right PPT Solutions enterprise technology architecture and digital infrastructure"
              className="about-team-img"
              loading="lazy"
            />
            <div className="about-team-badge">
              <ShieldCheck size={16} />
              <span>Architectural Rigor · 100% IP Ownership</span>
            </div>
          </div>
        </div>
        <div className="commitment-copy reveal">
          <div className="commitment-pill">
            <span className="pill-dot" />
            <span>OUR COMMITMENT</span>
          </div>
          <h2>
            Dedicated Delivery Built On <span className="brand-italic-accent">Technical Excellence &amp; Trust.</span>
          </h2>
          <p className="commitment-lead">
            At Right PPT Solutions, our commitment extends beyond conventional IT delivery. We combine disciplined engineering protocols with proactive communication, strategic vision, and personalized collaboration to help every business turn ambition into sustainable advantage.
          </p>
          <div className="commitment-action">
            <Button asChild size="lg" className="commitment-btn">
              <Link to="/about">
                Learn More About Our Approach <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pillars() {
  return (
    <section className="pillars-band">
      <div className="container pillars-grid">
        {[
          { icon: Users, name: 'Right People', copy: 'Expertise with a human touch.', tone: 'blue' },
          { icon: Settings2, name: 'Right Process', copy: 'Clarity at every step.', tone: 'green' },
          { icon: Cpu, name: 'Right Technology', copy: 'Innovation with a purpose.', tone: 'violet' },
        ].map((p) => (
          <div className={`pillar reveal tone-${p.tone}`} key={p.name}>
            <div className="pillar-icon">
              <p.icon size={25} />
            </div>
            <div>
              <h3>{p.name}</h3>
              <p>{p.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export interface TestimonialItem {
  id: string;
  initial: string;
  stars: number;
  title: string;
  quote: string;
  fullQuote: string;
  role: string;
}

export const customerTestimonies = [
  {
    quote:
      'David is an incredible client manager and team leader. David and his team deliver exceptional quality work consistently on time and within budget.',
    name: 'Customer Delight',
    sector: 'SVP-AIA',
    initial: 'S',
  },
  {
    quote:
      "I've worked with David on several projects so far and plan to continue our long-term collaboration. Their technical capability and communication are top notch.",
    name: 'Long Term Partnership',
    sector: 'Vice President-IT',
    initial: 'V',
  },
  {
    quote:
      "I've worked with David and his team on several projects for over a decade. They bring true dedication, technical rigor, and complete dependability.",
    name: 'Time Tested Relationship',
    sector: 'SVP',
    initial: 'S',
  },
  {
    quote:
      "My organization has been working with David's company for mission-critical software initiatives. They have consistently proven to be a valuable, trusted partner.",
    name: 'Valuable Partner',
    sector: 'VP',
    initial: 'V',
  },
  {
    quote:
      'I have collaborated and partnered with David for a number of years. Their team understands complex enterprise needs and delivers with excellence.',
    name: 'Trusted Partner',
    sector: 'CEO',
    initial: 'C',
  },
];

export function CustomerDelightSection() {
  return (
    <section className="section testimonials-section" id="customer-delight">
      <SectionTitle
        label="CUSTOMER DELIGHT"
        title="Customer Delight & Client Testimonials"
        description="Verified feedback and shared success stories from partners and technology leaders who rely on Right PPT Solutions."
      />
      <div className="testimonial-window">
        <div className="testimonial-track">
          {[...customerTestimonies, ...customerTestimonies].map((t, i) => (
            <article
              className="testimonial-item"
              key={i}
              aria-hidden={i >= customerTestimonies.length ? true : undefined}
            >
              <div className="quote-box">
                <div className="quote-icon">
                  <Quote size={24} />
                </div>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star key={j} size={17} fill="currentColor" />
                  ))}
                </div>
                <blockquote>“{t.quote}”</blockquote>
              </div>
              <span className="testimonial-avatar">{t.initial}</span>
              <strong>{t.name}</strong>
              <span className="testimonial-sector">{t.sector}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Backward-compatible alias
export const Testimonials = CustomerDelightSection;
