import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Sparkles,
  Cpu,
  Layers,
  Globe,
  Database,
  TrendingUp,
  Workflow,
  Users,
  Cloud,
  Terminal,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  HeartPulse,
  Landmark,
  Building2,
  Factory,
  ShoppingBag,
  PhoneCall,
  Search,
  Rocket,
  Handshake,
  Compass,
  Code2,
  Check,
  Target,
  Lightbulb,
  HeartHandshake,
  PencilRuler,
  Server,
  Zap,
  Shield,
  GitBranch,
  Lock,
  Activity,
  Award,
  Bell,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from './Layout';
import technology from '@/assets/technology.jpg';

/* =========================================================================
   1. ORBIT SECTION (Reference Image 1: The PPT Advantage / Rotating Orbit)
   ========================================================================= */
const orbitCapabilities = [
  { name: 'AI & Automation', icon: Sparkles, tone: 'violet', label: 'LLMs & RPA' },
  { name: 'Cloud Architecture', icon: Cloud, tone: 'blue', label: 'AWS, Azure & Cloudflare' },
  { name: 'Full-Stack Web', icon: Globe, tone: 'green', label: 'React, Node & Next' },
  { name: 'Enterprise Software', icon: Layers, tone: 'blue', label: 'Custom Platforms' },
  { name: 'Digital Growth', icon: TrendingUp, tone: 'violet', label: 'Performance Marketing' },
  { name: 'Data Engineering', icon: Database, tone: 'blue', label: 'Pipelines & Telemetry' },
  { name: 'DevOps & MLOps', icon: Terminal, tone: 'green', label: 'CI/CD & Model Deploy' },
  { name: 'Agile Squads', icon: Users, tone: 'violet', label: 'Dedicated Talent' },
];

export function OrbitSection() {
  const [activeCapability, setActiveCapability] = useState<number | null>(null);

  return (
    <section className="section orbit-section">
      <div className="orbit-ambient-glow" />
      <div className="orbit-waves-overlay" />
      <svg className="orbit-aurora-waves" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M-100,320 C300,100 800,550 1540,240" stroke="url(#aurora-cyan-1)" strokeWidth="120" strokeLinecap="round" opacity="0.32" filter="url(#aurora-blur)" />
        <path d="M-50,260 C350,80 750,480 1500,200" stroke="url(#aurora-cyan-2)" strokeWidth="4" opacity="0.6" />
        <path d="M100,400 C500,240 900,580 1600,340" stroke="url(#aurora-cyan-3)" strokeWidth="80" strokeLinecap="round" opacity="0.25" filter="url(#aurora-blur)" />
        <defs>
          <linearGradient id="aurora-cyan-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
            <stop offset="40%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#0084ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7928ca" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="aurora-cyan-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0084ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="aurora-cyan-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0084ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <filter id="aurora-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="45" />
          </filter>
        </defs>
      </svg>
      <div className="container orbit-layout">
        {/* Left Storytelling */}
        <div className="orbit-copy reveal">
          <div className="orbit-eyebrow">
            <span className="orbit-eyebrow-dot" />
            <span>THE AI ADVANTAGE · RIGHT PPT</span>
          </div>
          <h2>
            Empowering Modern Enterprises in the <span className="hero-brand-accent">AI & Cloud Era</span>
          </h2>
          <p className="orbit-lead">
            Sustainable transformation requires more than disconnected software. Right PPT Solutions brings together
            disciplined engineering talent, rigorous agile processes, and cutting-edge technology to architect, deploy,
            and scale mission-critical digital products.
          </p>
          <div className="orbit-stats-row">
            <div className="orbit-stat">
              <strong>100%</strong>
              <span>Outcome Focused</span>
            </div>
            <div className="orbit-stat">
              <strong>8+ Yrs</strong>
              <span>Avg Consultant Exp</span>
            </div>
            <div className="orbit-stat">
              <strong>24×7</strong>
              <span>Agile Sprints</span>
            </div>
          </div>
          <div className="orbit-actions">
            <Button asChild size="lg" className="orbit-primary-btn">
              <Link to="/services">
                Explore Our Capabilities <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="orbit-secondary-btn">
              <Link to="/contact">
                Talk to an Architect <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Animated Rotating Circular Orbit */}
        <div className="orbit-stage reveal">
          <div className="orbit-system-wrapper">
            {/* Concentric ambient background rings */}
            <div className="orbit-ring-outer" />
            <div className="orbit-ring-mid" />
            <div className="orbit-ring-inner" />

            {/* Central glowing hub */}
            <div className="orbit-center-hub">
              <div className="orbit-hub-pulse" />
              <div className="orbit-hub-content">
                <Sparkles className="orbit-hub-icon" size={28} />
                <span className="orbit-hub-title">PPT READY</span>
                <span className="orbit-hub-sub">PEOPLE · PROCESS · TECH</span>
              </div>
            </div>

            {/* Rotating orbit track holding the 8 nodes */}
            <div className="orbit-track-spinning">
              {orbitCapabilities.map((cap, index) => {
                const total = orbitCapabilities.length;
                const angle = (360 / total) * index;
                const radius = 175; // px from center
                const rad = (angle * Math.PI) / 180;
                const x = Math.round(radius * Math.cos(rad));
                const y = Math.round(radius * Math.sin(rad));

                return (
                  <div
                    key={cap.name}
                    className={`orbit-node-pill tone-${cap.tone} ${activeCapability === index ? 'is-active' : ''}`}
                    style={
                      {
                        '--node-x': `${x}px`,
                        '--node-y': `${y}px`,
                      } as React.CSSProperties
                    }
                    onMouseEnter={() => setActiveCapability(index)}
                    onMouseLeave={() => setActiveCapability(null)}
                  >
                    <div className="orbit-node-inner">
                      <span className="orbit-node-icon">
                        <cap.icon size={15} />
                      </span>
                      <span className="orbit-node-label">{cap.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2. INDUSTRIES SECTION (Image 5 Reference: Deep Expertise Across Sectors)
   ========================================================================= */
/* =========================================================================
   2. INDUSTRIES SECTION (Clean Homepage Card Style)
   ========================================================================= */
const industriesData = [
  {
    title: 'Healthcare',
    icon: HeartPulse,
    tag: 'SPECIALIST TALENT',
    tone: 'blue',
    description:
      'Supporting digital health, clinical systems, infrastructure modernization, and patient-centered innovation.',
  },
  {
    title: 'Financial Services',
    icon: Landmark,
    tag: 'SPECIALIST TALENT',
    tone: 'green',
    description:
      'Enabling secure, compliant, and scalable digital banking and financial technology initiatives.',
  },
  {
    title: 'Government',
    icon: Building2,
    tag: 'SPECIALIST TALENT',
    tone: 'violet',
    description:
      'Dependable technology professionals for public sector modernization and mission-critical projects.',
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    tag: 'SPECIALIST TALENT',
    tone: 'cyan',
    description:
      'Supporting ERP transformation, automation, smart factories, and digital supply chains.',
  },
  {
    title: 'Retail',
    icon: ShoppingBag,
    tag: 'SPECIALIST TALENT',
    tone: 'blue',
    description:
      'Enhancing customer experience, e-commerce platforms, and data-driven decision making.',
  },
  {
    title: 'Technology',
    icon: Cpu,
    tag: 'SPECIALIST TALENT',
    tone: 'violet',
    description:
      'Helping software companies scale engineering teams and accelerate product delivery.',
  },
];

export function IndustriesSection() {
  return (
    <section className="section industries-clean-section">
      <div className="container">
        <div className="section-heading text-center reveal">
          <span className="eyebrow">— INDUSTRIES —</span>
          <h2>
            Deep Expertise Across the <span className="hero-brand-accent">Sectors You Serve</span>
          </h2>
          <p>
            We bring specialized knowledge and proven delivery to the industries driving digital transformation.
          </p>
        </div>

        <div className="industries-clean-grid">
          {industriesData.map((ind) => (
            <article className={`industry-clean-card tone-${ind.tone} reveal`} key={ind.title}>
              <div className="industry-clean-top">
                <div className="industry-clean-icon">
                  <ind.icon size={22} />
                </div>
                <span className="industry-clean-tag">{ind.tag}</span>
              </div>
              <h3 className="industry-clean-title">{ind.title}</h3>
              <p className="industry-clean-desc">{ind.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. HOW WE PARTNER (5-Step Connected Flow in Homepage Card Style)
   ========================================================================= */
const partnerSteps = [
  {
    step: '01',
    name: 'Discovery Call',
    icon: PhoneCall,
    tone: 'blue',
    desc: 'We start by understanding your goals, tech stack, timeline, and team culture — not just a job description.',
  },
  {
    step: '02',
    name: 'Talent Match',
    icon: Search,
    tone: 'green',
    desc: 'Our specialists source and rigorously vet candidates matched to your exact technical and cultural needs.',
  },
  {
    step: '03',
    name: 'Rapid Onboarding',
    icon: Rocket,
    tone: 'violet',
    desc: 'Selected talent is onboarded fast and productive from day one — onshore, offshore, or blended.',
  },
  {
    step: '04',
    name: 'Delivery & Support',
    icon: ShieldCheck,
    tone: 'cyan',
    desc: 'Dedicated teams deliver with ongoing communication, quality checks, and full accountability.',
  },
  {
    step: '05',
    name: 'Long-Term Partnership',
    icon: Handshake,
    tone: 'blue',
    desc: 'We scale with you — growing teams and evolving support as your business and priorities grow.',
  },
];

export function PartnerJourneySection() {
  return (
    <section className="section partner-journey-clean-section">
      <div className="container">
        <div className="section-heading text-center reveal">
          <span className="eyebrow">— HOW WE PARTNER —</span>
          <h2>
            Your Journey With <span className="hero-brand-accent">Right PPT Solutions</span>
          </h2>
          <p>
            From first conversation to long-term partnership — here&apos;s how we help you move forward with confidence.
          </p>
        </div>

        <div className="journey-clean-row">
          {partnerSteps.map((step, idx) => (
            <div className="journey-clean-wrapper" key={step.name}>
              <div className={`journey-clean-card tone-${step.tone} reveal`}>
                <div className="journey-card-top-bar" />
                <div className="journey-step-indicator-row">
                  <span className="journey-num-pill">Step {step.step}</span>
                  <div className="journey-clean-icon">
                    <step.icon size={19} />
                  </div>
                </div>
                <h3 className="journey-clean-title">{step.name}</h3>
                <p className="journey-clean-desc">{step.desc}</p>
              </div>
              {idx < partnerSteps.length - 1 && (
                <div className="journey-clean-arrow" aria-hidden="true">
                  <ArrowRight size={15} strokeWidth={2.6} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. KEY FEATURES (REDESIGNED: High-Performance Architecture Matrix)
   ========================================================================= */
const keyFeaturesMatrix = [
  {
    id: 'f1',
    title: 'User-Friendly Interface',
    icon: Users,
    tone: 'blue',
    badge: 'FRONTEND & UX',
    desc: 'Intuitive modern design systems with sub-second page transitions, accessible WCAG 2.1 layouts, and seamless user onboarding.',
    highlight: 'Sub-second UX Navigation',
  },
  {
    id: 'f2',
    title: 'Real-Time Monitoring',
    icon: Clock,
    tone: 'green',
    badge: 'OBSERVABILITY',
    desc: '24/7 continuous health probes, automated Prometheus telemetry, and real-time operational metrics dashboards.',
    highlight: '24/7 Continuous Health Probes',
  },
  {
    id: 'f3',
    title: 'Scalable Cloud Architecture',
    icon: Layers,
    tone: 'violet',
    badge: 'CLOUD INFRASTRUCTURE',
    desc: 'Elastic multi-cloud microservices and containerized Kubernetes clusters engineered for high concurrency and zero downtime.',
    highlight: 'Multi-Region Elastic Auto-Scale',
  },
  {
    id: 'f4',
    title: 'Fault Notifications & Resilience',
    icon: Bell,
    tone: 'cyan',
    badge: 'SYSTEM RESILIENCE',
    desc: 'Instant automated incident triage, zero-downtime failover routing, and proactive multi-channel notification bots.',
    highlight: 'Automated Self-Healing Failover',
  },
  {
    id: 'f5',
    title: 'Secure Authentication',
    icon: ShieldCheck,
    tone: 'blue',
    badge: 'SECURITY & RBAC',
    desc: 'Enterprise OAuth2, SAML single sign-on, multi-factor verification, and strict role-based access control policies.',
    highlight: 'Zero-Trust Data Protection',
  },
  {
    id: 'f6',
    title: 'Energy & Cloud Tracking',
    icon: Zap,
    tone: 'green',
    badge: 'FINOPS & OPTIMIZATION',
    desc: 'Continuous cloud resource telemetry, idle container termination, and transparent infrastructure spend optimization.',
    highlight: '30-45% Cloud Spend Savings',
  },
  {
    id: 'f7',
    title: 'Automated Error Alerts',
    icon: AlertCircle,
    tone: 'violet',
    badge: 'EXCEPTION TRACING',
    desc: 'Instant automated exception tracking, structured JSON audit logs, and distributed trace observability across all services.',
    highlight: 'Sub-Second Exception Capture',
  },
  {
    id: 'f8',
    title: 'High-Frequency Data Sync',
    icon: Database,
    tone: 'cyan',
    badge: 'DATA REPLICATION',
    desc: 'Bi-directional real-time data pipelines, WebSocket streaming, and distributed edge replication with zero conflict.',
    highlight: 'Real-Time WebSocket Streaming',
  },
];

export function KeyFeaturesSection() {
  return (
    <section className="section key-features-modern-section" id="features">
      <div className="container">
        <div className="section-heading text-center reveal">
          <span className="eyebrow">— KEY FEATURES &amp; CAPABILITIES —</span>
          <h2>
            Core Capabilities &amp; <span className="hero-brand-accent">Platform Features</span>
          </h2>
          <p>
            Connected enterprise engineering modules operating in perfect synchronization across web, cloud, and mobile.
          </p>
        </div>

        {/* Live Mission Control Telemetry Strip */}
        <div className="features-telemetry-strip reveal">
          <div className="telemetry-item">
            <span className="telemetry-dot pulse-green" />
            <span className="telemetry-label">Cloud Uptime:</span>
            <strong>99.99% Operational</strong>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-dot pulse-blue" />
            <span className="telemetry-label">Micro-Latency:</span>
            <strong>&lt;14ms Response</strong>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-dot pulse-violet" />
            <span className="telemetry-label">Architecture:</span>
            <strong>Zero-Trust RBAC</strong>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-dot pulse-cyan" />
            <span className="telemetry-label">Cadence:</span>
            <strong>2-Week Sprints</strong>
          </div>
        </div>

        {/* 8 Features Grid (2 Rows of 4 Cards) */}
        <div className="features-modern-grid">
          {keyFeaturesMatrix.map((item) => (
            <div className={`feature-modern-card tone-${item.tone} reveal`} key={item.id}>
              <div className="feature-card-header">
                <div className="feature-modern-icon">
                  <item.icon size={22} />
                </div>
                <span className="feature-category-badge">{item.badge}</span>
              </div>
              <h3 className="feature-modern-title">{item.title}</h3>
              <p className="feature-modern-desc">{item.desc}</p>
              <div className="feature-modern-footer">
                <CheckCircle2 size={14} className="feature-check-icon" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. WHY CHOOSE US (Following Official PPT Logo Colors: Blue, Green, Violet, Cyan)
   ========================================================================= */
const whyChooseUsData = [
  {
    title: 'Expert Engineering Squads',
    desc: 'Skilled senior engineers and architects with 8+ years of hands-on expertise spanning full-stack, cloud, and modern AI.',
    icon: Users,
    tone: 'blue', // People (#0084ff)
    pillarTag: 'PEOPLE',
  },
  {
    title: 'End-to-End Solutions',
    desc: 'Architecture, UX design, agile development, automated testing, and ongoing cloud support — all under one roof.',
    icon: Zap,
    tone: 'green', // Process (#10b981)
    pillarTag: 'PROCESS',
  },
  {
    title: 'Tier-1 Components & Stacks',
    desc: 'Only production-grade, enterprise-tested architectures, zero-downtime cloud infrastructure, and modern open frameworks.',
    icon: ShieldCheck,
    tone: 'violet', // Technology (#8b5cf6)
    pillarTag: 'TECHNOLOGY',
  },
  {
    title: 'Flexible Engagement Plans',
    desc: 'Dedicated agile pods, sprint-based milestones, or talent augmentation tailored to your exact budget and velocity.',
    icon: Layers,
    tone: 'cyan', // Innovation (#00b4d8)
    pillarTag: 'INNOVATION',
  },
  {
    title: 'Proactive 24/7 After-Sales Care',
    desc: 'Proactive continuous monitoring, automated CI/CD test suites, zero-lag response SLAs, and warranty engineering support.',
    icon: Activity,
    tone: 'blue', // People (#0084ff)
    pillarTag: 'PEOPLE',
  },
  {
    title: 'Future-Proof Scalability',
    desc: 'Sustainable cloud resource optimization, FinOps governance, and clean architectures engineered for enterprise longevity.',
    icon: Globe,
    tone: 'green', // Process (#10b981)
    pillarTag: 'PROCESS',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section why-choose-logo-section" id="why-choose-us">
      <div className="container">
        <div className="section-heading text-center reveal">
          <span className="eyebrow">— WHY CHOOSE US —</span>
          <h2>
            Trust, Performance &amp; <span className="hero-brand-accent">Sustainability.</span>
          </h2>
          <p>
            Rooted in our core pillars of People, Process, and Technology — delivering verified outcomes for enterprise leaders.
          </p>
        </div>

        <div className="why-choose-logo-grid">
          {whyChooseUsData.map((item) => (
            <div className={`why-choose-logo-card tone-${item.tone} reveal`} key={item.title}>
              {/* Top Accent Stripe in Logo Tone */}
              <div className="why-card-top-stripe" />
              <div className="why-card-header">
                <div className="why-logo-icon-wrap">
                  <item.icon size={24} />
                </div>
                <span className="why-pillar-badge">{item.pillarTag}</span>
              </div>
              <h3 className="why-logo-title">{item.title}</h3>
              <p className="why-logo-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. ENTERPRISE VALUES / ARCHITECTURAL ADVANTAGE (Reference Image 4)
   ========================================================================= */
const enterprisePillars = [
  {
    num: '01',
    name: 'Certified Senior Experts',
    badge: 'TOP 3% TALENT',
    stat: '8+ Yrs',
    statSub: 'Avg Experience',
    icon: Award,
    tone: 'blue',
    tagline: 'Vetted, high-calibre engineers with battle-tested enterprise track records.',
    copy: 'Full-stack, cloud, and digital transformation practitioners who integrate seamlessly into your engineering workflows and contribute production-grade code from sprint one.',
    capabilities: [
      'AWS & Microsoft Azure certified leads',
      'Direct sprint integration with zero onboarding lag',
      'Strictly senior practitioners — no junior outsourcing tiers',
      'Domain expertise across fintech, healthcare, SaaS & enterprise',
    ],
    highlight: 'Rigorous 4-stage technical vetting',
  },
  {
    num: '02',
    name: 'Cloud & AI-First Engineering',
    badge: 'FUTURE-PROOF TECH',
    stat: '99.99%',
    statSub: 'Cloud SLA Reliability',
    icon: Sparkles,
    tone: 'green',
    tagline: 'Architectures engineered for elastic scalability and generative AI readiness.',
    copy: 'From serverless microservices and containerized Kubernetes clusters to private enterprise LLM pipelines and RAG vector search, we build resilient architectures for what’s next.',
    capabilities: [
      'Elastic multi-cloud serverless & K8s deployments',
      'Enterprise LLM integration & RAG vector search pipelines',
      'Automated CI/CD with zero-downtime canary rollouts',
      'SOC2, HIPAA & ISO-grade architectural compliance',
    ],
    highlight: 'Production-ready AI & cloud infrastructure',
  },
  {
    num: '03',
    name: '24/7 High-Velocity Delivery',
    badge: 'GLOBAL ADVANTAGE',
    stat: '24×7',
    statSub: 'Continuous Sprints',
    icon: Globe,
    tone: 'violet',
    tagline: 'Continuous sprint progression without timezone bottlenecks.',
    copy: 'Onshore strategic advisory paired with world-class engineering squads working in complete sync to accelerate roadmaps, beat deadlines, and maintain continuous delivery.',
    capabilities: [
      '48-hour rapid squad mobilization from agreement',
      'Daily standup participation & direct Jira/Slack visibility',
      'Bi-weekly production demo releases with milestone signoffs',
      'Clear sprint retrospectives & transparent velocity tracking',
    ],
    highlight: 'Guaranteed milestone accountability',
  },
  {
    num: '04',
    name: '100% IP & Source Sovereignty',
    badge: 'TRANSPARENT & OPEN',
    stat: '100%',
    statSub: 'Client Owned From Day 1',
    icon: ShieldCheck,
    tone: 'cyan',
    tagline: 'Zero proprietary lock-in. Full legal sovereignty over all your assets.',
    copy: 'You retain complete legal ownership of every line of source code, deployment config, and architecture design from the moment it is committed to your repositories.',
    capabilities: [
      'Immediate GitHub/GitLab repo & IP assignment',
      'No proprietary frameworks, hidden royalties, or lock-in',
      'Vendor-agnostic stack & cloud provider recommendations',
      'Full transfer of design files, schemas, and documentation',
    ],
    highlight: 'Clean, auditable, modular repositories',
  },
];

const enterpriseMetrics = [
  { value: '48h', label: 'Squad Deployment', desc: 'From kickoff to active sprint commits', icon: Rocket },
  { value: '99.8%', label: 'Sprint Reliability', desc: 'Predictable milestone velocity', icon: CheckCircle2 },
  { value: '100%', label: 'IP & Code Rights', desc: 'Full legal ownership on Day 1', icon: Lock },
  { value: 'Zero', label: 'Vendor Lock-in', desc: 'Open, auditable standard stacks', icon: Shield },
];

export function EnterpriseValuesSection() {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <section className="section enterprise-values-section" id="why-choose-us">
      <div className="enterprise-ambient-glow" />
      <div className="enterprise-grid-pattern" />

      <div className="container enterprise-container">
        {/* Header with pill badge */}
        <div className="enterprise-header reveal">
          <div className="enterprise-pill-badge">
            <span className="badge-pulse-dot" />
            <span>WHY ENTERPRISES CHOOSE US</span>
          </div>
          <h2 className="enterprise-title">
            Built For High Stakes. <span className="hero-brand-accent">Engineered For Enterprise Scale.</span>
          </h2>
          <p className="enterprise-subtitle">
            A technology partnership rooted in verified engineering competence, cloud-native resilience,
            and absolute architectural transparency.
          </p>
        </div>

        {/* 4 Feature Pillar Bento Cards (2x2 Grid) */}
        <div className="enterprise-pillars-grid">
          {enterprisePillars.map((p, idx) => {
            const Icon = p.icon;
            const isHovered = hoveredPillar === idx;
            return (
              <div
                key={p.name}
                className={`enterprise-card reveal tone-${p.tone} ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setHoveredPillar(idx)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                {/* Background architectural watermark number */}
                <div className="enterprise-card-bg" aria-hidden="true">
                  <span className="enterprise-watermark-num">{p.num}</span>
                </div>

                {/* Top glow accent stripe */}
                <div className="card-top-accent" />

                {/* Card Top Row: Icon halo + Category badge + Stat Callout */}
                <div className="card-top-row">
                  <div className="card-top-left">
                    <div className="card-icon-halo">
                      <Icon size={26} className="card-icon" />
                    </div>
                    <span className="card-category-badge">{p.badge}</span>
                  </div>
                  <div className="card-stat-pill">
                    <span className="stat-number">{p.stat}</span>
                    <span className="stat-sub">{p.statSub}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="card-meta">
                  <h3 className="card-title">{p.name}</h3>
                  <p className="card-tagline">{p.tagline}</p>
                </div>

                {/* Description */}
                <p className="card-body-copy">{p.copy}</p>

                {/* Key Capabilities in 2-Column Grid */}
                <div className="card-capabilities">
                  <span className="capabilities-label">VERIFIED ENTERPRISE ADVANTAGES</span>
                  <ul className="capabilities-list">
                    {p.capabilities.map((cap) => (
                      <li key={cap} className="capability-item">
                        <Check size={15} className="cap-check" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="card-footer">
                  <span className="card-highlight-tag">
                    <Sparkles size={14} />
                    <span>{p.highlight}</span>
                  </span>
                  <Link to="/contact" className="card-cta-link" aria-label={`Consult about ${p.name}`}>
                    <span>Discuss Strategy</span>
                    <ArrowUpRight size={15} className="card-link-icon" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Trust Metric Strip */}
        <div className="enterprise-trust-strip reveal">
          <div className="trust-strip-header">
            <span className="trust-strip-tag">OUR COMMITMENT</span>
            <h4>Enterprise Service Level Agreements & Accountability</h4>
          </div>
          <div className="trust-strip-metrics">
            {enterpriseMetrics.map((m) => {
              const MetricIcon = m.icon;
              return (
                <div key={m.label} className="trust-metric-col">
                  <div className="trust-metric-top">
                    <div className="trust-icon-box">
                      <MetricIcon size={18} />
                    </div>
                    <span className="trust-metric-val">{m.value}</span>
                  </div>
                  <strong className="trust-metric-title">{m.label}</strong>
                  <span className="trust-metric-desc">{m.desc}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enterprise Bottom CTA Banner */}
        <div className="enterprise-bottom-banner reveal">
          <div className="enterprise-banner-content">
            <div className="banner-icon-ring">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3>Ready to elevate your engineering velocity?</h3>
              <p>Schedule a confidential consultation with our principal technology architects today.</p>
            </div>
          </div>
          <div className="enterprise-banner-actions">
            <Button asChild size="lg" className="enterprise-consult-btn">
              <Link to="/contact">
                Schedule Architecture Consultation <ArrowRight size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. TECH ECOSYSTEM SECTION (Google/Enterprise-Grade Tooling Radar)
   ========================================================================= */
const techCategories = [
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud, count: '6 Core Platforms' },
  { id: 'ai', label: 'AI & Automation', icon: Sparkles, count: '6 Intelligent Tools' },
  { id: 'fullstack', label: 'Web & Architecture', icon: Code2, count: '6 Modern Stacks' },
  { id: 'data', label: 'Enterprise Data', icon: Database, count: '6 Scaled Stores' },
];

const techCatalog: Record<string, Array<{ name: string; tag: string; role: string; metric: string; tone: string; icon: any }>> = {
  cloud: [
    { name: 'Amazon Web Services (AWS)', tag: 'CLOUD ARCHITECTURE', role: 'Elastic compute, serverless Lambda, S3, ECS & automated cloud scaling', metric: '99.99% Multi-AZ SLA', tone: 'blue', icon: Cloud },
    { name: 'Microsoft Azure', tag: 'ENTERPRISE CLOUD', role: 'Hybrid cloud architectures, Azure Kubernetes, Entra ID & federated SSO', metric: 'Global FedRAMP & ISO', tone: 'cyan', icon: Server },
    { name: 'Google Cloud Platform (GCP)', tag: 'DATA & COMPUTE', role: 'BigQuery warehousing, Cloud Run, Vertex AI pipelines & global VPC', metric: '<15ms Global Latency', tone: 'green', icon: Globe },
    { name: 'Docker & Kubernetes (K8s)', tag: 'CONTAINERIZATION', role: 'Containerized orchestration, zero-downtime canary rollouts & self-healing pods', metric: 'Automated Self-Healing', tone: 'blue', icon: Terminal },
    { name: 'Terraform & CI/CD Pipelines', tag: 'DEVOPS / IAC', role: 'Automated GitOps pipelines, reproducible drift-free cloud topologies', metric: '100% Audit Traceable', tone: 'violet', icon: GitBranch },
    { name: 'Cloudflare & Edge CDN', tag: 'SECURITY & EDGE', role: 'Global edge workers, DDoS mitigation, rate limiting & asset caching', metric: '<40ms Worldwide TTFB', tone: 'cyan', icon: Shield },
  ],
  ai: [
    { name: 'OpenAI API & Enterprise GPT', tag: 'GENERATIVE AI', role: 'Domain-specific enterprise GPT integration, structured reasoning & embeddings', metric: 'SOC2 Compliant Privacy', tone: 'green', icon: Sparkles },
    { name: 'Anthropic Claude Models', tag: 'DEEP COGNITION', role: 'High-precision document synthesis, 200K token analysis & autonomous agents', metric: 'Zero-Hallucination Controls', tone: 'violet', icon: Cpu },
    { name: 'LangChain & RAG Pipelines', tag: 'KNOWLEDGE RETRIEVAL', role: 'Retrieval Augmented Generation over internal PDFs, knowledge bases & ERP data', metric: 'Instant Vector Search', tone: 'blue', icon: Search },
    { name: 'PyTorch & Hugging Face', tag: 'MACHINE LEARNING', role: 'Open-weight model quantization, fine-tuning & low-latency ONNX serving', metric: '4x Inference Acceleration', tone: 'cyan', icon: Zap },
    { name: 'Python & FastAPI Backends', tag: 'AI MICROSERVICES', role: 'High-throughput asynchronous inference APIs, SSE streaming & token telemetry', metric: '>10,000 req/sec Capacity', tone: 'green', icon: Activity },
    { name: 'Enterprise RPA & UiPath Bots', tag: 'WORKFLOW ROBOTS', role: 'Automated back-office reconciliation, invoice validation & legacy sync', metric: '80% Human Effort Reduced', tone: 'violet', icon: Workflow },
  ],
  fullstack: [
    { name: 'React 19 & Next.js App Router', tag: 'MODERN WEB', role: 'React Server Components, streaming SSR, lightning routing & modern UX', metric: '100 Google Lighthouse Core', tone: 'blue', icon: Code2 },
    { name: 'TypeScript Strict Mode', tag: 'TYPE SAFETY', role: 'End-to-end typed contracts, automated linting & zero-runtime-exception code', metric: 'Zero Type Errors', tone: 'cyan', icon: Terminal },
    { name: 'Node.js & Fastify / Express', tag: 'API ENGINE', role: 'Event-driven high-scale microservices, WebSocket feeds & queue workers', metric: 'Sub-millisecond Routing', tone: 'green', icon: Server },
    { name: 'Tailwind CSS v4 & OKLCH', tag: 'DESIGN ENGINEERING', role: 'Custom enterprise design systems, accessible components & glassmorphic UI', metric: 'WCAG 2.1 AA Compliant', tone: 'violet', icon: Layers },
    { name: 'GraphQL & RESTful OpenAPI', tag: 'FEDERATED APIS', role: 'Schema-first query federation, typed codegen & secure rate limiting', metric: 'Exact Payload Fetching', tone: 'blue', icon: Workflow },
    { name: 'Micro-Frontend Architectures', tag: 'ENTERPRISE SCALE', role: 'Independent deployability for distributed squads and large multi-team portals', metric: 'Decoupled Releases', tone: 'cyan', icon: Globe },
  ],
  data: [
    { name: 'PostgreSQL & Supabase', tag: 'RELATIONAL CORE', role: 'ACID transactional integrity, Row-Level Security (RLS) & pgvector search', metric: 'High-Concurrency Scaling', tone: 'blue', icon: Database },
    { name: 'MongoDB & Distributed NoSQL', tag: 'DOCUMENT STORE', role: 'Dynamic JSON schemas, geo-replicated shards & real-time telemetry storage', metric: 'Petabyte Scalable', tone: 'green', icon: Layers },
    { name: 'Redis In-Memory Accelerator', tag: 'CACHING & PUBSUB', role: 'Sub-millisecond session state, atomic locks & distributed queue handling', metric: '<1ms Micro-Latency', tone: 'violet', icon: Zap },
    { name: 'Snowflake & BigQuery', tag: 'DATA WAREHOUSING', role: 'Consolidated enterprise reporting, lakehouse architecture & automated ELT', metric: 'Sub-second OLAP Queries', tone: 'cyan', icon: TrendingUp },
    { name: 'Apache Kafka Event Bus', tag: 'STREAM PROCESSING', role: 'Durable event sourcing, asynchronous decoupling & real-time analytics feeds', metric: 'Million msg/sec Throughput', tone: 'green', icon: Workflow },
    { name: 'Zero-Trust Security & Vault', tag: 'COMPLIANCE & SEC', role: 'End-to-end data encryption at rest and in transit, key rotation & audit trails', metric: '100% Enterprise Security', tone: 'blue', icon: ShieldCheck },
  ],
};

export function TechEcosystemSection() {
  const [activeTab, setActiveTab] = useState('cloud');
  const items = techCatalog[activeTab] || techCatalog.cloud;

  return (
    <section className="section tech-ecosystem-section">
      <div className="container">
        <SectionTitle
          label="MODERN ARCHITECTURE"
          title="Enterprise Technology Ecosystem & Cloud Architecture"
          description="Curated, battle-tested modern frameworks and platforms architected for security, resilience, and scale."
        />

        <div className="tech-category-tabs" role="tablist" aria-label="Technology Categories">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`tech-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <span className="tech-tab-icon"><Icon size={18} /></span>
                <span className="tech-tab-text">
                  <strong>{cat.label}</strong>
                  <small>{cat.count}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className="tech-grid reveal">
          {items.map((tech) => {
            const TechIcon = tech.icon;
            return (
              <div key={tech.name} className={`tech-card tone-${tech.tone}`}>
                <div className="tech-card-header">
                  <span className="tech-icon-wrap"><TechIcon size={20} /></span>
                  <span className="tech-card-tag">{tech.tag}</span>
                </div>
                <h4>{tech.name}</h4>
                <p>{tech.role}</p>
                <div className="tech-card-footer">
                  <span className="tech-metric-pill">
                    <CheckCircle2 size={13} /> {tech.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="tech-assurance-banner reveal">
          <div className="assurance-item">
            <Check size={16} />
            <span>Multi-Cloud Resilient Architecture</span>
          </div>
          <div className="assurance-item">
            <Check size={16} />
            <span>Automated CI/CD & Zero-Downtime Releases</span>
          </div>
          <div className="assurance-item">
            <Check size={16} />
            <span>SOC2, HIPAA & ISO Security Compliance</span>
          </div>
          <div className="assurance-item">
            <Check size={16} />
            <span>100% Complete IP & Source Code Transfer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6. ENGAGEMENT MODELS SECTION (Enterprise Delivery & Collaboration)
   ========================================================================= */
const engagementModels = [
  {
    name: 'Dedicated Agile Squads',
    badge: 'MOST POPULAR FOR SCALE',
    tone: 'blue',
    tagline: 'Instant senior engineering capacity embedded directly into your sprint rituals.',
    bestFor: 'High-growth ventures & enterprise teams needing sustained execution velocity and scale.',
    teamStructure: '1 Lead Architect + 2-4 Senior Engineers + 1 QA Automation Lead',
    sla: '48h Deployment · Direct Slack Sync',
    perks: [
      'Immediate talent deployment with zero hiring or onboarding lag',
      'Dedicated engineers (100% focused exclusively on your codebase)',
      'Direct daily standup participation, sprint backlog & Jira / Linear sync',
      'Flexible month-to-month squad expansion or contraction',
    ],
    ctaText: 'Assemble Your Squad',
  },
  {
    name: 'Turnkey Product Engineering',
    badge: 'FIXED SCOPE & MILESTONES',
    tone: 'green',
    tagline: 'End-to-end architecture, UX design, and production delivery with guaranteed SLAs.',
    bestFor: 'Targeted greenfield applications, modern MVP launches, or legacy core modernization.',
    teamStructure: 'Solution Architect + UX/UI Specialist + Full-Stack Squad + DevOps Auditor',
    sla: 'Fixed Milestones · 90-Day Warranty',
    perks: [
      'Thorough technical discovery, architecture blueprint & UI wireframing',
      'Milestone-gated delivery with transparent progress demos every 2 weeks',
      'Comprehensive automated test suite & security penetration audit',
      '90-day post-launch warranty with zero deployment surprises',
    ],
    ctaText: 'Discuss Turnkey Project',
  },
  {
    name: 'Strategic Advisory & AI Modernization',
    badge: 'CTO & ARCHITECTURE LEVEL',
    tone: 'violet',
    tagline: 'High-impact advisory audits, cloud FinOps cost reduction & AI transformation blueprints.',
    bestFor: 'CTOs, VP of Engineering, and leadership teams evaluating cloud migration or AI ROI.',
    teamStructure: 'Senior Enterprise Architect + FinOps Cloud Auditor + AI Solutions Lead',
    sla: 'Comprehensive Audit · Vendor Agnostic',
    perks: [
      'In-depth codebase, security posture & technical debt assessment',
      'Cloud infrastructure & FinOps cost optimization (average 35-40% savings)',
      'Enterprise Generative AI readiness assessment & ROI implementation roadmap',
      'Unbiased, vendor-agnostic technology stack recommendations',
    ],
    ctaText: 'Schedule Architecture Audit',
  },
];

export function EngagementModelsSection() {
  return (
    <section className="section engagement-models-section">
      <div className="container">
        <SectionTitle
          label="COLLABORATION FRAMEWORKS"
          title="Flexible Engagement Models Tailored For Enterprise Velocity"
          description="Predictable governance, flexible scaling, and full milestone visibility aligned to your organizational objectives."
        />

        <div className="models-grid">
          {engagementModels.map((m, idx) => (
            <div key={m.name} className={`model-card reveal tone-${m.tone} ${idx === 0 ? 'is-featured' : ''}`}>
              <div className="model-badge-row">
                <span className="model-badge">{m.badge}</span>
                <span className="model-sla-pill">{m.sla}</span>
              </div>
              <h3>{m.name}</h3>
              <p className="model-tagline">{m.tagline}</p>

              <div className="model-structure-box">
                <span className="structure-label">POD COMPOSITION</span>
                <strong>{m.teamStructure}</strong>
              </div>

              <div className="model-perks-list">
                {m.perks.map((p) => (
                  <div key={p} className="model-perk-item">
                    <Check className="perk-check" size={15} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              <div className="model-action-wrap">
                <Button asChild size="lg" className="model-cta-btn">
                  <Link to="/contact">
                    {m.ctaText} <ArrowUpRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="models-trust-row reveal">
          <div className="trust-card">
            <ShieldCheck size={20} className="trust-icon" />
            <div>
              <strong>100% IP & Code Ownership</strong>
              <span>You retain full legal rights to every line of code from Day 1</span>
            </div>
          </div>
          <div className="trust-card">
            <Zap size={20} className="trust-icon" />
            <div>
              <strong>14-Day Risk-Free Trial</strong>
              <span>Experience sprint velocity firsthand with zero commitment</span>
            </div>
          </div>
          <div className="trust-card">
            <Lock size={20} className="trust-icon" />
            <div>
              <strong>Mutual Enterprise NDA</strong>
              <span>Strict compliance, background-verified engineers & data security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. BACKWARD COMPATIBILITY EXPORTS (used by about.tsx)
   ========================================================================= */
const benefits = [
  {
    icon: Target,
    name: 'Your goals, our focus',
    copy: 'Solutions shaped around your business, not the other way around.',
    tone: 'blue',
  },
  {
    icon: Lightbulb,
    name: 'Ideas with real purpose',
    copy: 'Fresh thinking grounded in the challenges that matter to you.',
    tone: 'green',
  },
  {
    icon: HeartHandshake,
    name: 'A genuine partnership',
    copy: 'Clear conversations and close collaboration, every step of the way.',
    tone: 'violet',
  },
  {
    icon: ShieldCheck,
    name: 'Thoughtful craftsmanship',
    copy: 'Careful design and dependable development, down to the details.',
    tone: 'blue',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <SectionTitle
          label="THE RIGHT PARTNER MAKES THE DIFFERENCE"
          title="More than solutions. A shared ambition."
          description="We bring curiosity, commitment, and connected expertise to the table — so your business can move forward with confidence."
        />
        <div className="benefits-grid">
          {benefits.map((b) => (
            <article className={`benefit reveal tone-${b.tone}`} key={b.name}>
              <span className="benefit-icon">
                <b.icon size={28} />
              </span>
              <h3>{b.name}</h3>
              <p>{b.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section approach-section">
      <div className="container">
        <SectionTitle
          label="OUR APPROACH"
          title="Great ideas. Thoughtfully brought to life."
          description="A shared vision, a clear direction, and the right people at every step."
        />
        <div className="approach-layout">
          <div className="approach-photo reveal">
            <img
              src={technology}
              alt="Digital products and technology at a professional workstation"
              width={1536}
              height={1024}
              loading="lazy"
            />
            <div className="approach-photo-caption">
              <span>FROM VISION TO REALITY</span>
              <strong>
                Built with purpose.
                <br />
                Made for your progress.
              </strong>
            </div>
          </div>
          <div className="approach-steps">
            {[
              {
                icon: Search,
                title: 'Discover the possibilities',
                copy: 'We listen to your ideas and explore what matters most to your business.',
                tone: 'blue',
              },
              {
                icon: PencilRuler,
                title: 'Design with intention',
                copy: 'We connect strategy, design, and technology around your goals.',
                tone: 'green',
              },
              {
                icon: Rocket,
                title: 'Bring it to life',
                copy: 'We build carefully and bring every detail together for launch.',
                tone: 'violet',
              },
              {
                icon: TrendingUp,
                title: 'Keep moving forward',
                copy: 'We help uncover the next opportunities for your digital growth.',
                tone: 'blue',
              },
            ].map((step, i) => (
              <article className={`approach-step reveal tone-${step.tone}`} key={step.title}>
                <div className="approach-step-top">
                  <span className="approach-icon">
                    <step.icon size={24} />
                  </span>
                  <span className="approach-number">0{i + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
