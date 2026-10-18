import { useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import {
  ArrowUpRight,
  Check,
  ArrowRight,
  Code2,
  Layers,
  Megaphone,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Phone,
  Sparkles,
  Server,
  TrendingUp,
  Workflow,
  Lock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from './data';
import { SectionTitle } from './Layout';

const offerings = [
  ['Business & portfolio websites', 'E-commerce experiences', 'Responsive web applications', 'Website refresh & optimization'],
  ['Custom business applications', 'Workflow automation', 'Connected platforms & integrations', 'Scalable software architecture'],
  ['Search visibility & SEO', 'Social media strategy', 'Content & digital campaigns', 'Brand communication'],
  ['Technology consulting', 'Connected business tools', 'Digital workflow planning', 'Practical implementation'],
];

interface CapabilityItem {
  title: string;
  desc: string;
  tech: string;
}

interface RoadmapItem {
  step: string;
  phase: string;
  duration: string;
  detail: string;
}

interface MetricItem {
  stat: string;
  label: string;
}

interface ServiceDetailData {
  tagline: string;
  capabilities: CapabilityItem[];
  roadmap: RoadmapItem[];
  metrics: MetricItem[];
}

const serviceDeepDives: Record<number, ServiceDetailData> = {
  0: {
    tagline: 'High-speed, SEO-engineered web applications and storefronts designed for maximum conversion and enterprise reliability.',
    capabilities: [
      {
        title: 'High-Performance React & Next.js Stacks',
        desc: 'Blazing fast single-page apps and server-side rendered portals with sub-second page loads and top-tier Core Web Vitals.',
        tech: 'React 19 · Next.js · TypeScript · Vite',
      },
      {
        title: 'Headless E-Commerce & Storefronts',
        desc: 'Custom digital commerce pipelines with frictionless checkout, inventory syncing, and multi-currency payment gateways.',
        tech: 'Shopify Plus · Stripe · Tailwind CSS · OKLCH',
      },
      {
        title: 'Custom CMS & Enterprise Portals',
        desc: 'Intuitive editorial workflows, role-based governance, and flexible content schemas engineered for high-volume publishing.',
        tech: 'Sanity · Strapi · REST / GraphQL API',
      },
      {
        title: 'Technical SEO & Core Web Vitals',
        desc: 'Semantic HTML5, automated schema microdata, edge caching, and WCAG 2.1 AA accessibility compliance from day one.',
        tech: 'Lighthouse 100 · Schema.org · Cloudflare Edge',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Discovery & Wireframing', duration: 'Week 1-2', detail: 'User journey mapping, information architecture, Figma interactive prototypes, and tech stack alignment.' },
      { step: '02', phase: 'Component Engineering', duration: 'Week 3-4', detail: 'Modular design system creation, responsive layout implementation, and API integration in rapid sprints.' },
      { step: '03', phase: 'Testing & Optimization', duration: 'Week 5', detail: 'Cross-device responsiveness, automated performance audits, cross-browser validation, and SEO checks.' },
      { step: '04', phase: 'Deployment & Launch', duration: 'Week 6+', detail: 'Production edge deployment, DNS configuration, Google Search Console indexing, and 90-day warranty.' },
    ],
    metrics: [
      { stat: '99.9%', label: 'Availability SLA' },
      { stat: '<1.2s', label: 'Average LCP Speed' },
      { stat: '100%', label: 'Mobile Responsive' },
      { stat: '100%', label: 'Code & IP Ownership' },
    ],
  },
  1: {
    tagline: 'Custom software architectures and distributed APIs engineered for operational velocity, zero downtime, and elastic scalability.',
    capabilities: [
      {
        title: 'Scalable Microservices Architecture',
        desc: 'Decoupled, event-driven backend services capable of processing high concurrency with low latency and self-healing pods.',
        tech: 'Node.js · Python · FastAPI · Docker',
      },
      {
        title: 'Multi-Tenant SaaS Platforms',
        desc: 'Secure cloud-native SaaS systems with automated provisioning, tiered billing, and tenant data isolation via Row-Level Security.',
        tech: 'PostgreSQL · Supabase · Kubernetes · AWS',
      },
      {
        title: 'API Integration & Webhook Engines',
        desc: 'Robust data bridges synchronizing third-party CRM, ERP, payment providers, and legacy systems with complete audit trails.',
        tech: 'OpenAPI · Redis Pub/Sub · Kafka · Webhooks',
      },
      {
        title: 'Automated CI/CD & DevOps',
        desc: 'Zero-downtime canary rollouts, container orchestration, and automated test coverage pipelines for risk-free continuous deployment.',
        tech: 'GitHub Actions · Terraform · Helm · CloudWatch',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Architecture Blueprint', duration: 'Week 1-2', detail: 'Database schema modeling, API contract definition, cloud infrastructure blueprint, and security review.' },
      { step: '02', phase: 'Sprint-Based Core Build', duration: 'Week 3-6', detail: 'Bi-weekly sprint demos, test-driven microservice development, and continuous staging releases.' },
      { step: '03', phase: 'Security & Penetration Test', duration: 'Week 7', detail: 'OWASP security verification, database stress-testing, automated vulnerability scanning, and load testing.' },
      { step: '04', phase: 'Cloud Rollout & SLAs', duration: 'Week 8+', detail: 'Zero-downtime deployment, infrastructure telemetry monitoring, handover training, and dedicated support.' },
    ],
    metrics: [
      { stat: '99.99%', label: 'System Uptime' },
      { stat: '<15ms', label: 'API Micro-Latency' },
      { stat: '100%', label: 'Automated Tests' },
      { stat: '0%', label: 'Vendor Lock-in' },
    ],
  },
  2: {
    tagline: 'Multi-channel digital marketing campaigns that compound organic reach, maximize conversion rates, and drive measurable revenue.',
    capabilities: [
      {
        title: 'Enterprise Technical & Local SEO',
        desc: 'Deep technical audits, keyword cluster strategy, internal link graphs, and Google Knowledge Graph optimization for top SERP rankings.',
        tech: 'Ahrefs · SEMrush · Schema · Google Search Console',
      },
      {
        title: 'High-ROI Paid Media (PPC)',
        desc: 'Laser-targeted Google Search & Meta advertising campaigns optimized continuously for lowest Customer Acquisition Cost.',
        tech: 'Google Ads · Meta Ads · LinkedIn Ads · GA4',
      },
      {
        title: 'Content Strategy & Thought Leadership',
        desc: 'Data-driven editorial calendars, authoritative whitepapers, and brand storytelling that convert readers into qualified leads.',
        tech: 'Content Funnels · Copywriting · Lead Magnets',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        desc: 'Behavioral heatmap analysis, A/B landing page testing, and frictionless form optimization to maximize conversion yields.',
        tech: 'Hotjar · Google Optimize · VWO · Mixpanel',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Market & Competitor Audit', duration: 'Week 1', detail: 'Full search footprint analysis, competitor gap identification, baseline analytics audit, and KPI definitions.' },
      { step: '02', phase: 'Campaign & Funnel Setup', duration: 'Week 2', detail: 'Conversion tracking pixel implementation, targeted landing page optimization, and ad creative production.' },
      { step: '03', phase: 'Live Launch & Iteration', duration: 'Week 3-4', detail: 'Campaign scaling, bid automation, negative keyword filtering, and weekly transparent performance dashboards.' },
      { step: '04', phase: 'Scale & Compound Growth', duration: 'Month 2+', detail: 'Omnichannel expansion, organic backlink acquisition, CRO refinement, and sustained brand market share.' },
    ],
    metrics: [
      { stat: '3.8x', label: 'Average ROAS' },
      { stat: '+140%', label: 'Organic Traffic Lift' },
      { stat: '-35%', label: 'Cost Per Acquisition' },
      { stat: '100%', label: 'Transparent Reporting' },
    ],
  },
  3: {
    tagline: 'Cloud engineering, AI enablement, and strategic architectural advisory that lower infrastructure spend and accelerate time to market.',
    capabilities: [
      {
        title: 'Cloud Infrastructure & Migration',
        desc: 'Frictionless lift-and-shift or cloud-native re-architecting across AWS, Microsoft Azure, and Google Cloud with zero downtime.',
        tech: 'AWS · Azure · GCP · Terraform · Docker',
      },
      {
        title: 'Generative AI & Enterprise Automation',
        desc: 'Secure domain-specific LLM integration, private RAG pipelines over company docs, and RPA workflow bots that eliminate manual tasks.',
        tech: 'OpenAI · Claude · LangChain · Python · FastAPI',
      },
      {
        title: 'Cloud FinOps & Cost Optimization',
        desc: 'Deep infrastructure billing audits, idle resource termination, and reservation planning yielding 30-45% cloud savings.',
        tech: 'AWS Cost Explorer · Kubernetes Autoscaling · Spot Instances',
      },
      {
        title: 'Fractional CTO & IT Governance',
        desc: 'Executive architectural oversight, technology stack due diligence, vendor audits, and digital roadmap execution.',
        tech: 'Vendor Agnostic · ISO & SOC2 Readiness · Audit Trails',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Infrastructure Audit', duration: 'Week 1-2', detail: 'Comprehensive cloud architecture review, security vulnerabilities mapping, and operational bottlenecks analysis.' },
      { step: '02', phase: 'Transformation Roadmap', duration: 'Week 3', detail: 'Prioritized technical recommendations, ROI projections, cloud migration plan, and risk-mitigation strategies.' },
      { step: '03', phase: 'Execution & Automation', duration: 'Week 4-8', detail: 'Infrastructure as Code deployment, CI/CD pipeline automation, AI model integration, and cloud migration.' },
      { step: '04', phase: 'Governance & Monitoring', duration: 'Ongoing', detail: 'Continuous cloud security telemetry, cost alerts, performance optimization, and architectural reviews.' },
    ],
    metrics: [
      { stat: '35%+', label: 'Cloud Cost Reduction' },
      { stat: '4x', label: 'Deployment Velocity' },
      { stat: 'Zero', label: 'Vendor Commissions' },
      { stat: '24/7', label: 'Architect Availability' },
    ],
  },
};

export function ServiceExplorer() {
  const hash = useLocation({ select: (location) => location.hash });
  const index = services.findIndex((_, i) => hash === `service-${i}`);
  const selected = index < 0 ? 0 : index;
  const service = services[selected];
  const deepDive = serviceDeepDives[selected] || serviceDeepDives[0];

  if (!service) return null;

  useEffect(() => {
    if (hash && hash.startsWith('#service-')) {
      const el = document.getElementById('service-explorer');
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  const whatsappMessage = encodeURIComponent(
    `Hi Right PPT Solutions, I would like to learn more and discuss ${service.name} for my organization.`
  );

  return (
    <section className="section service-explorer" id="service-explorer">
      <div className="container">
        <SectionTitle
          label="OUR EXPERTISE"
          title="Your Ambition. Engineered With Precision."
          description="Connected expertise, carefully shaped around the way your business works."
        />

        {/* 4 SERVICE TABS */}
        <div className="service-selector" aria-label="Choose a service">
          {services.map((s, i) => (
            <Button
              asChild
              variant="ghost"
              className={`service-selector-item tone-${s.tone} ${selected === i ? 'selected' : ''}`}
              key={s.name}
            >
              <Link to="/services" hash={`service-${i}`} aria-current={selected === i ? 'true' : undefined}>
                <s.icon size={22} />
                <span>{s.name}</span>
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          ))}
        </div>

        {/* MAIN SERVICE HERO FEATURE: Text on LEFT, Photo on RIGHT */}
        <div className={`service-feature tone-${service.tone}`} id={`service-${selected}`} key={service.name}>
          {/* LEFT COLUMN: Service Content & Deliverables */}
          <div className="service-feature-copy">
            <div className="service-tag-row">
              <span className="service-category-tag">{service.label}</span>
            </div>
            <h2 className="service-feature-title">{service.name}</h2>
            <p className="feature-lead">{service.description}</p>
            <p className="feature-detail-copy">{service.detail}</p>
            <div className="offerings">
              {offerings[selected]?.map((item) => (
                <span key={item}>
                  <Check size={16} />
                  {item}
                </span>
              ))}
            </div>
            <div className="service-feature-actions">
              <Button asChild size="lg" className="service-discuss-btn">
                <Link to="/contact">
                  Discuss Your Project <ArrowUpRight size={17} />
                </Link>
              </Button>
              <a
                href={`https://wa.me/917386257784?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="service-whatsapp-link"
              >
                <Phone size={15} /> Quick WhatsApp Chat
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Service Photo with subtle floating badge */}
          <div className="service-feature-image">
            <img src={service.image} alt={service.name} width={1536} height={1024} loading="eager" />
            <div className="feature-image-floating-badge">
              <service.icon size={20} />
              <div className="floating-badge-text">
                <strong>{service.name}</strong>
                <span>{service.label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICE KEY METRICS BANNER */}
        <div className="service-metrics-banner reveal">
          {deepDive.metrics.map((m) => (
            <div className="service-metric-item" key={m.label}>
              <strong>{m.stat}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        {/* SECTION 2: SPECIALIZED CAPABILITIES */}
        <div className="service-detail-section reveal">
          <div className="service-detail-heading">
            <span className="eyebrow">CAPABILITY ARCHITECTURE</span>
            <h3>What We Deliver in {service.name}</h3>
            <p>{deepDive.tagline}</p>
          </div>

          <div className="service-capabilities-grid">
            {deepDive.capabilities.map((cap) => (
              <div className={`capability-card tone-${service.tone}`} key={cap.title}>
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

        {/* SECTION 3: DELIVERY ROADMAP & LIFECYCLE */}
        <div className="service-detail-section reveal">
          <div className="service-detail-heading">
            <span className="eyebrow">SPRINT GOVERNANCE</span>
            <h3>How We Deliver Your Project</h3>
            <p>From initial architecture to production launch with weekly transparent sprint milestones.</p>
          </div>

          <div className="service-roadmap-grid">
            {deepDive.roadmap.map((rm) => (
              <div className={`roadmap-card tone-${service.tone}`} key={rm.step}>
                <div className="roadmap-card-top">
                  <span className="roadmap-step-badge">{rm.step}</span>
                  <span className="roadmap-duration-tag"><Clock size={12} /> {rm.duration}</span>
                </div>
                <h4>{rm.phase}</h4>
                <p>{rm.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: ENTERPRISE TRUST & SLA ASSURANCE */}
        <div className="service-assurance-grid reveal">
          <div className="assurance-box">
            <ShieldCheck size={22} className="assurance-icon" />
            <div>
              <strong>100% IP & Code Ownership</strong>
              <p>You retain complete legal ownership of all repositories, design files, and documentation.</p>
            </div>
          </div>
          <div className="assurance-box">
            <Lock size={22} className="assurance-icon" />
            <div>
              <strong>Strict Mutual NDA</strong>
              <p>Your business logic, proprietary data, and roadmap are safeguarded under enterprise NDA.</p>
            </div>
          </div>
          <div className="assurance-box">
            <Zap size={22} className="assurance-icon" />
            <div>
              <strong>Dedicated Sprint Squad</strong>
              <p>Senior engineers assigned exclusively to your codebase with direct Slack & Jira integration.</p>
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION RIBBON */}
        <div className="service-outcome">
          <span>PEOPLE. PROCESS. TECHNOLOGY.</span>
          <p>Ready to build with certainty? Let’s schedule a solution architecture call today.</p>
          <Button asChild size="sm">
            <Link to="/contact">Get Started <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
