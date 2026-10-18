import { Code2, Layers3, Megaphone, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import technology from '@/assets/technology.jpg';
import team from '@/assets/team.jpg';
import marketing from '@/assets/marketing.jpg';

export interface ServiceItem {
  slug: string;
  name: string;
  label: string;
  description: string;
  detail: string;
  image: string;
  icon: LucideIcon;
  tone: 'blue' | 'green' | 'violet';
}

export const services: ServiceItem[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    label: 'WEBSITES & DIGITAL EXPERIENCES',
    description: 'Beautiful, fast, and intuitive websites that turn your online presence into a powerful business asset.',
    detail: 'From business websites and e-commerce experiences to custom web applications, we bring thoughtful design and dependable development together.',
    image: technology,
    icon: Code2,
    tone: 'blue',
  },
  {
    slug: 'software-development',
    name: 'Software Development',
    label: 'CUSTOM APPLICATIONS & PLATFORMS',
    description: 'Purpose-built software that simplifies operations, connects your teams, and grows with your business.',
    detail: 'We build tailored applications, integrations, and business platforms with a focus on usability, scalability, and your day-to-day needs.',
    image: team,
    icon: Layers3,
    tone: 'green',
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    label: 'STRATEGY, VISIBILITY & GROWTH',
    description: 'Expert digital strategies that connect your brand with the right audience and move your business forward.',
    detail: 'Bring your brand to life through search visibility, social media, content, and digital campaigns shaped around your business goals.',
    image: marketing,
    icon: Megaphone,
    tone: 'violet',
  },
  {
    slug: 'technology-solutions',
    name: 'Technology Solutions',
    label: 'INNOVATION & BUSINESS ENABLEMENT',
    description: 'The right technology, thoughtfully implemented, to help your business work smarter and stay ahead.',
    detail: 'We help you evaluate your technology needs and connect the right tools, workflows, and expertise to build a stronger digital foundation.',
    image: technology,
    icon: Cpu,
    tone: 'blue',
  },
];

export const offerings = [
  ['Business & portfolio websites', 'E-commerce experiences', 'Responsive web applications', 'Website refresh & optimization'],
  ['Custom business applications', 'Workflow automation', 'Connected platforms & integrations', 'Scalable software architecture'],
  ['Search visibility & SEO', 'Social media strategy', 'Content & digital campaigns', 'Brand communication'],
  ['Technology consulting', 'Connected business tools', 'Digital workflow planning', 'Practical implementation'],
];

export interface CapabilityItem {
  title: string;
  desc: string;
  tech: string;
}

export interface RoadmapItem {
  step: string;
  phase: string;
  duration: string;
  detail: string;
}

export interface MetricItem {
  stat: string;
  label: string;
}

export interface ServiceDetailData {
  tagline: string;
  capabilities: CapabilityItem[];
  roadmap: RoadmapItem[];
  metrics: MetricItem[];
}

export const serviceDeepDives: Record<string, ServiceDetailData> = {
  'web-development': {
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
  'software-development': {
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
  'digital-marketing': {
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
  'technology-solutions': {
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

export function getServiceBySlug(slug: string): { service: ServiceItem; deepDive: ServiceDetailData; index: number } | null {
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) {
    // Also support fallback by index number like "0", "1"
    const numIdx = parseInt(slug, 10);
    if (!isNaN(numIdx) && services[numIdx]) {
      return {
        service: services[numIdx],
        deepDive: serviceDeepDives[services[numIdx].slug] || serviceDeepDives['web-development'],
        index: numIdx,
      };
    }
    return null;
  }
  return {
    service: services[index],
    deepDive: serviceDeepDives[slug] || serviceDeepDives['web-development'],
    index,
  };
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | Right PPT Solutions` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} | Right PPT Solutions` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
});
