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
  Database,
  FileText,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import team from '@/assets/team.jpg';
import { services } from './data';
import { SectionTitle } from './Layout';

export function ServicesSection() {
  return (
    <section className="section services-section" id="capabilities">
      <div className="container">
        <SectionTitle
          label="TECHNOLOGY THAT SIMPLIFIES BUSINESS"
          title="Enterprise Solutions Built Around Your Business"
          description="RightPPT builds, modernizes and connects business applications—helping you automate work, improve visibility and put AI to practical use."
        />

        <div className="main-capabilities-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                className={`capability-showcase-card tone-${s.tone} reveal`}
              >
                {/* Header Row */}
                <div className="capability-card-header">
                  <div className="capability-icon-pill">
                    <Icon size={24} />
                  </div>
                  <div className="capability-meta-wrap">
                    <span className="capability-tag">{s.label}</span>
                    <h3 className="capability-title">{s.name}</h3>
                  </div>
                </div>

                {/* Subtitle / Promise */}
                <p className="capability-subtitle">{s.description}</p>

                {/* Bullet Points List */}
                <ul className="capability-bullets-list">
                  {s.bullets.map((b) => (
                    <li key={b.title} className="capability-bullet-item">
                      <span className="bullet-dot" />
                      <div className="bullet-content">
                        <strong>{b.title}:</strong> <span>{b.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Card Action Link ("Know More — ...") */}
                <div className="capability-card-footer">
                  <Button asChild size="lg" className="capability-knowmore-btn">
                    <Link
                      to="/services/$serviceId"
                      params={{ serviceId: s.slug }}
                    >
                      <span>{s.knowMoreText}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProjectWorkSection() {
  const projectPillars = [
    {
      title: 'Legacy Modernization',
      desc: 'Connected document viewing, editing and reporting.',
      icon: RefreshCw,
      tone: 'blue',
      slug: 'legacy-modernization',
    },
    {
      title: 'CRM and Membership',
      desc: 'Integrated member records, billing and communications.',
      icon: Users2,
      tone: 'green',
      slug: 'crm-membership',
    },
    {
      title: 'Digital Publishing and Learning',
      desc: 'Connected content, subscriptions, assessments and institutional access.',
      icon: FileText,
      tone: 'violet',
      slug: 'digital-publishing',
    },
    {
      title: 'Cloud CRM Migration',
      desc: 'Migration planning, customization, data transfer and integration.',
      icon: Database,
      tone: 'cyan',
      slug: 'cloud-crm-migration',
    },
  ];

  return (
    <section className="section project-work-highlight-section">
      <div className="container">
        <div className="project-work-banner reveal">
          <div className="project-work-header">
            <span className="eyebrow">— VERIFIED DELIVERABLES —</span>
            <h2>Explore Our Project Work</h2>
            <p>
              Discover how RightPPT connects disparate systems, modernizes legacy dependencies, and delivers measurable operational value.
            </p>
          </div>

          <div className="project-pillars-grid">
            {projectPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`project-pillar-box tone-${p.tone}`}>
                  <div className="pillar-icon-box">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="project-work-action">
            <Button asChild size="lg" className="project-work-explore-btn">
              <Link to="/projects">
                <span>Explore Project Details</span>
                <ArrowRight size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const commitmentItems = [
  {
    title: '24×7 Agile Engineering & Sprint Governance',
    desc: 'Direct access to dedicated senior technical leads and full milestone transparency.',
    icon: Zap,
    tag: 'CONTINUOUS SPRINTS',
    tone: 'blue',
  },
  {
    title: 'Customized 1-on-1 Solution Architecture',
    desc: 'Precision-engineered architectures built for your exact domain, security, and performance criteria.',
    icon: Cpu,
    tag: 'DOMAIN TAILORED',
    tone: 'green',
  },
  {
    title: 'Cloud-Native, AI-Ready Modern Infrastructure',
    desc: 'Fast, resilient digital products designed to scale seamlessly on modern enterprise stacks.',
    icon: Cloud,
    tag: 'ELASTIC SCALABILITY',
    tone: 'violet',
  },
  {
    title: 'Transparent Governance & Continuous Knowledge Transfer',
    desc: 'Zero black boxes — clean documentation, sprint demos, and smooth knowledge transfer at every milestone.',
    icon: ShieldCheck,
    tag: 'ZERO BLACK BOXES',
    tone: 'cyan',
  },
];

export function AboutSection() {
  return (
    <section className="section commitment-section">
      <div className="commitment-ambient-glow" />
      <div className="container commitment-grid">
        <div className="commitment-visual reveal">
          <div className="commitment-image-frame">
            <img
              src={team}
              alt="Right PPT Solutions engineering and consulting team"
              width={1536}
              height={1024}
              loading="lazy"
            />
            <div className="commitment-floating-badge">
              <span className="commitment-badge-icon">
                <Users size={22} />
              </span>
              <div>
                <strong>Multidisciplinary Squad</strong>
                <span>Engineers, Architects &amp; Strategists Under One Roof</span>
              </div>
            </div>
            <div className="commitment-stat-floating-pill">
              <span className="status-dot-pulse" />
              <span>100% Transparent Governance</span>
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
          <div className="commitment-cards-grid">
            {commitmentItems.map((item) => (
              <div key={item.title} className={`commitment-feature-card tone-${item.tone}`}>
                <div className="commitment-card-head">
                  <span className="commitment-card-icon">
                    <item.icon size={18} />
                  </span>
                  <span className="commitment-card-tag">{item.tag}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
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
        ].map((p, i) => (
          <div className={`pillar reveal tone-${p.tone}`} key={p.name}>
            <div className="pillar-icon">
              <p.icon size={25} />
            </div>
            <div>
              <h3>{p.name}</h3>
              <p>{p.copy}</p>
            </div>
            <span className="pillar-number">0{i + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const samples = [
  {
    quote: 'A collaborative approach, thoughtful solutions, and a team that truly understands our goals.',
    name: 'Business Owner',
    sector: 'Web development',
    initial: 'B',
  },
  {
    quote: 'The right balance of technical expertise and clear communication, from the first conversation to delivery.',
    name: 'Technology Lead',
    sector: 'Software development',
    initial: 'T',
  },
  {
    quote: 'A fresh perspective on our digital presence and a clear direction for moving our brand forward.',
    name: 'Marketing Lead',
    sector: 'Digital marketing',
    initial: 'M',
  },
];

export function Testimonials() {
  return (
    <section className="section testimonials-section">
      <SectionTitle
        label="BETTER TOGETHER"
        title="Great partnerships. Shared success."
        description="The kind of experience we strive to create for every business we work with."
      />
      <div className="testimonial-window">
        <div className="testimonial-track">
          {[...samples, ...samples].map((t, i) => (
            <article className="testimonial-item" key={i} aria-hidden={i >= samples.length ? true : undefined}>
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
