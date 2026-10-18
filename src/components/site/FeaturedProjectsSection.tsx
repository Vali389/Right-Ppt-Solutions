import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Zap,
  ShieldCheck,
  Globe,
  Database,
  Cpu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from './Layout';
import technology from '@/assets/technology.jpg';
import team from '@/assets/team.jpg';
import marketing from '@/assets/marketing.jpg';

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  category: 'all' | 'web' | 'saas' | 'ecommerce' | 'ai';
  categoryLabel: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  tone: 'blue' | 'green' | 'violet' | 'cyan';
  metrics: { value: string; label: string }[];
  techStack: string[];
  deliverables: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'cloudscale',
    name: 'CloudScale Analytics Engine',
    client: 'FinTech & Infrastructure Corp',
    category: 'saas',
    categoryLabel: 'ENTERPRISE SAAS',
    year: '2026',
    tagline: 'High-concurrency cloud telemetry dashboard processing 10M+ daily events with sub-second queries.',
    description: 'Architected and built an event-driven telemetry platform for enterprise infrastructure monitoring. Featuring distributed Kafka pipelines, automated alerting, and multi-tenant Row-Level Security.',
    image: technology,
    tone: 'blue',
    metrics: [
      { value: '99.99%', label: 'Cloud SLA Uptime' },
      { value: '<15ms', label: 'Micro-Query Latency' },
    ],
    techStack: ['React 19', 'FastAPI', 'PostgreSQL', 'AWS K8s', 'Kafka'],
    deliverables: ['Real-time WebSocket Feeds', 'Multi-tenant RLS Architecture', 'SOC2 Audit Compliance'],
  },
  {
    id: 'auraluxe',
    name: 'Aura Luxe Global Storefront',
    client: 'Luxury Retail Brand',
    category: 'ecommerce',
    categoryLabel: 'E-COMMERCE',
    year: '2026',
    tagline: 'Multi-currency headless luxury marketplace with instant search and frictionless checkout.',
    description: 'Designed and engineered an ultra-fast headless commerce platform with localized checkout across 18 countries, automated inventory sync, and sub-second Core Web Vitals.',
    image: marketing,
    tone: 'green',
    metrics: [
      { value: '+185%', label: 'Mobile Conversion' },
      { value: '99/100', label: 'Lighthouse Score' },
    ],
    techStack: ['Next.js 15', 'Shopify Plus', 'Stripe', 'Tailwind', 'Cloudflare'],
    deliverables: ['Headless Checkout Pipeline', 'Multi-Currency Geolocation', 'Sub-second Edge SSR'],
  },
  {
    id: 'omniflow',
    name: 'OmniFlow AI Document Core',
    client: 'Enterprise Legal & Risk Advisory',
    category: 'ai',
    categoryLabel: 'CLOUD & AI',
    year: '2026',
    tagline: 'Private enterprise RAG pipeline enabling semantic discovery over 50,000+ proprietary contracts.',
    description: 'Implemented zero-data-leakage Retrieval-Augmented Generation (RAG) system with hybrid vector search, citation verification, and private LLM inference for legal compliance teams.',
    image: team,
    tone: 'violet',
    metrics: [
      { value: '80%', label: 'Manual Effort Reduced' },
      { value: 'Zero', label: 'Data Leakage Risk' },
    ],
    techStack: ['Python', 'LangChain', 'OpenAI', 'pgvector', 'FastAPI'],
    deliverables: ['Domain RAG Vector Pipeline', 'Role-Based Document ACL', 'Zero Hallucination Guardrails'],
  },
  {
    id: 'apexlogistics',
    name: 'Apex Global Logistics Portal',
    client: 'Supply Chain Operations',
    category: 'web',
    categoryLabel: 'WEB APPLICATIONS',
    year: '2026',
    tagline: 'Real-time freight scheduling, route optimization, and live telematics booking portal.',
    description: 'Built a responsive freight coordination platform serving cross-border shipping fleets. Includes live GPS tracking, automated driver dispatch, and automated billing reconciliation.',
    image: technology,
    tone: 'blue',
    metrics: [
      { value: '12,000+', label: 'Active Fleet Drivers' },
      { value: '3.2x', label: 'Dispatch Speed' },
    ],
    techStack: ['React 19', 'TypeScript', 'Redis Pub/Sub', 'Mapbox', 'Docker'],
    deliverables: ['Interactive Routing Map', 'Instant Automated Invoicing', 'Driver Dispatch Telemetry'],
  },
  {
    id: 'vanguardhealth',
    name: 'Vanguard Telehealth Platform',
    client: 'Healthcare Network',
    category: 'saas',
    categoryLabel: 'ENTERPRISE SAAS',
    year: '2026',
    tagline: 'HIPAA-compliant telehealth scheduling, EHR synchronization, and encrypted consultations.',
    description: 'End-to-end patient consultation suite connecting specialized doctors with remote patients. Features end-to-end encrypted WebRTC video, digital prescription signing, and HL7/FHIR EHR sync.',
    image: team,
    tone: 'cyan',
    metrics: [
      { value: '100%', label: 'HIPAA Compliant' },
      { value: '<0.8s', label: 'EHR Record Sync' },
    ],
    techStack: ['Next.js', 'Supabase RLS', 'WebRTC', 'Tailwind', 'AWS Health'],
    deliverables: ['E2E Encrypted Consultations', 'Automated Calendar Sync', 'FHIR/HL7 Data Bridges'],
  },
  {
    id: 'finedge',
    name: 'FinEdge Capital Investor Suite',
    client: 'Institutional Asset Manager',
    category: 'web',
    categoryLabel: 'WEB APPLICATIONS',
    year: '2026',
    tagline: 'Institutional wealth management portal with real-time portfolio rebalancing and reporting.',
    description: 'Engineered a secure wealth analytics platform tracking $450M+ in institutional assets. Includes automated quarterly tear-sheets, portfolio risk simulation, and bank-grade 256-bit encryption.',
    image: marketing,
    tone: 'green',
    metrics: [
      { value: '$450M+', label: 'Assets Tracked' },
      { value: '100%', label: 'Bank-Grade Security' },
    ],
    techStack: ['React 19', 'GraphQL', 'TypeScript', 'Node.js', 'Docker'],
    deliverables: ['Dynamic Portfolio Simulator', 'Automated PDF Fact-sheets', 'Multi-Factor Biometric SSO'],
  },
];

export const filterCategories = [
  { id: 'all', label: 'All Projects', count: 6 },
  { id: 'web', label: 'Web Applications', count: 2 },
  { id: 'saas', label: 'Enterprise SaaS', count: 2 },
  { id: 'ecommerce', label: 'E-Commerce', count: 1 },
  { id: 'ai', label: 'Cloud & AI', count: 1 },
];

export function FeaturedProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="section featured-projects-section" id="portfolio">
      <div className="container">
        <SectionTitle
          label="FEATURED PORTFOLIO & RECENT WORK"
          title="Proven Deliverables. Measurable Business Impact."
          description="Explore enterprise platforms, high-conversion web applications, and cloud-native architectures engineered for our clients."
        />

        {/* Filter Tabs (Inspired by Dizi Solutions & ArchiStrux) */}
        <div className="portfolio-filter-bar reveal" role="tablist" aria-label="Filter portfolio categories">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`portfolio-filter-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="filter-count-badge">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects 3-Column Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card tone-${project.tone} reveal`}
            >
              {/* Image Frame with Overlay & Watermark Number */}
              <div className="project-card-image">
                <img
                  src={project.image}
                  alt={project.name}
                  width={1536}
                  height={1024}
                  loading="lazy"
                />
                <div className="project-image-gradient" />
                <span className="project-category-badge">{project.categoryLabel}</span>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-client-row">
                  <span className="project-client-name">{project.client}</span>
                  <span className="project-year-pill">{project.year}</span>
                </div>

                <h3 className="project-title">{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>

                {/* Key Metrics Row */}
                <div className="project-metrics-row">
                  {project.metrics.map((m) => (
                    <div className="project-metric-pill" key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="project-tech-chips">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span className="tech-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="project-details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Architecture Details</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust & Capability Strip */}
        <div className="portfolio-trust-band reveal">
          <div className="trust-band-item">
            <CheckCircle2 size={20} className="trust-icon" />
            <div>
              <strong>120+ Completed Deployments</strong>
              <span>Across Web, SaaS & Cloud Stacks</span>
            </div>
          </div>
          <div className="trust-band-item">
            <Zap size={20} className="trust-icon" />
            <div>
              <strong>99.8% On-Time Milestones</strong>
              <span>Predictable 2-Week Sprint Cadence</span>
            </div>
          </div>
          <div className="trust-band-item">
            <ShieldCheck size={20} className="trust-icon" />
            <div>
              <strong>100% Client IP Ownership</strong>
              <span>Clean Repos Assigned From Day 1</span>
            </div>
          </div>
          <div className="trust-band-action">
            <Button asChild size="lg" className="portfolio-cta-btn">
              <Link to="/contact">
                Start Your Project <ArrowRight size={17} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="portfolio-cta-page-link">
              <Link to="/projects">
                Explore All Projects <ArrowUpRight size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`project-modal-content tone-${selectedProject.tone}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="modal-cat-tag">{selectedProject.categoryLabel}</span>
              <h2>{selectedProject.name}</h2>
              <p className="modal-client">{selectedProject.client} · {selectedProject.year}</p>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProject.description}</p>

              <div className="modal-metrics-box">
                {selectedProject.metrics.map((m) => (
                  <div className="modal-metric-col" key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="modal-section-block">
                <h4>CORE DELIVERABLES & ARCHITECTURAL HIGHLIGHTS</h4>
                <ul className="modal-deliverables-list">
                  {selectedProject.deliverables.map((d) => (
                    <li key={d}>
                      <CheckCircle2 size={16} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section-block">
                <h4>PRODUCTION TECHNOLOGY STACK</h4>
                <div className="modal-tech-pills">
                  {selectedProject.techStack.map((tech) => (
                    <span className="modal-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Button asChild size="lg" className="modal-discuss-btn">
                <Link to="/contact" onClick={() => setSelectedProject(null)}>
                  Discuss Similar Project <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
