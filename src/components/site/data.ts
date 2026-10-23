import { Code2, Layers3, Megaphone, Cpu, Network, ShieldCheck, Truck, Users2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import technology from '@/assets/technology.jpg';
import team from '@/assets/team.jpg';
import marketing from '@/assets/marketing.jpg';
import servicesHero from '@/assets/services-hero.jpg';

export interface ServiceBullet {
  title: string;
  desc: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  label: string;
  description: string;
  detail: string;
  knowMoreText: string;
  image: string;
  icon: LucideIcon;
  tone: 'blue' | 'green' | 'violet';
  bullets: ServiceBullet[];
}

export const services: ServiceItem[] = [
  {
    slug: 'software-development',
    name: 'Software Development and Modernization',
    label: 'APPLICATIONS & MODERNIZATION',
    description: 'Build applications around your business and keep existing systems working effectively.',
    detail: 'Keep the business knowledge. Upgrade the technology. We rebuild aging applications into modern web platforms, preserving critical workflows while replacing obsolete dependencies.',
    knowMoreText: 'Know More — Software Services',
    image: team,
    icon: Layers3,
    tone: 'blue',
    bullets: [
      {
        title: 'Application Development',
        desc: 'Custom business software, customer portals and mobile applications.',
      },
      {
        title: 'Modernization',
        desc: 'Replace outdated technology while preserving essential workflows and business rules.',
      },
      {
        title: 'Customization and Integration',
        desc: 'Enhance existing applications and connect systems, APIs and specialist tools.',
      },
      {
        title: 'Documents, Data and AI',
        desc: 'Automate document processing, migrate records, build dashboards and enable intelligent search.',
      },
      {
        title: 'Ongoing Support',
        desc: 'Resolve issues, improve performance and maintain applications after launch.',
      },
    ],
  },
  {
    slug: 'logistics-solutions',
    name: 'Logistics, Supply Chain and E-commerce',
    label: 'FREIGHT & OPERATIONAL CONTROL',
    description: 'Connect orders, shipments, inventory and partners for better operational control.',
    detail: 'RightPPT connects your applications, automates manual workflows and turns operational data into actionable insights—helping you move freight, inventory and orders with greater control.',
    knowMoreText: 'Know More — Logistics Solutions',
    image: technology,
    icon: Truck,
    tone: 'green',
    bullets: [
      {
        title: 'Workflow Automation',
        desc: 'Simplify quoting, carrier sourcing, supplier coordination and delivery planning.',
      },
      {
        title: 'System Integration',
        desc: 'Connect transport, warehouse, ERP, CRM, carrier and accounting platforms.',
      },
      {
        title: 'Shipment and Field Visibility',
        desc: 'Track exceptions, driver tasks, barcode scans and proof of delivery.',
      },
      {
        title: 'E-commerce Operations',
        desc: 'Coordinate orders, stock, shipping and returns.',
      },
      {
        title: 'AI and Analytics',
        desc: 'Extract document data, automate follow-ups and monitor costs, margins and performance.',
      },
    ],
  },
  {
    slug: 'ai-solutions',
    name: 'AI Networking and Network Security',
    label: 'INTELLIGENCE & SECURITY',
    description: 'Develop smarter networks with traffic prediction, automated control and threat detection.',
    detail: 'RightPPT helps organizations automate routine work, find information faster, secure network infrastructure, and deliver more personalized experiences through applied AI.',
    knowMoreText: 'Know More — Networking Capabilities',
    image: servicesHero,
    icon: Network,
    tone: 'violet',
    bullets: [
      {
        title: 'Traffic Intelligence',
        desc: 'Forecast demand and support routing and capacity decisions.',
      },
      {
        title: 'Network Optimization',
        desc: 'Balance SDN controller workloads and automate resource coordination.',
      },
      {
        title: 'Threat Detection',
        desc: 'Apply machine learning to intrusion, anomaly, DDoS and encrypted traffic analysis.',
      },
      {
        title: 'Programmable Monitoring',
        desc: 'Develop eBPF and P4 telemetry for supported platforms.',
      },
      {
        title: 'Secure Connections',
        desc: 'Design lightweight authentication for edge, IoT and emerging network architectures.',
      },
    ],
  },
  {
    slug: 'nonprofits-and-associations',
    name: 'Nonprofits and Associations',
    label: 'MEMBERSHIP & PUBLISHING',
    description: 'Support membership growth, renewals and communications through technology and specialist delivery partners.',
    detail: 'Grow membership. Strengthen retention. Communicate your mission. RightPPT combines technology and specialist delivery partners to support your members and communications.',
    knowMoreText: 'Know More — Membership, Retention and Publishing',
    image: marketing,
    icon: Users2,
    tone: 'blue',
    bullets: [
      {
        title: 'Membership Services',
        desc: 'Acquisition, onboarding, dues, benefits, events and member support.',
      },
      {
        title: 'Retention Campaigns',
        desc: 'Personalized outreach, renewal reminders, reactivation and campaign analysis.',
      },
      {
        title: 'Publishing Services',
        desc: 'Editorial planning, design, print production, advertising and distribution.',
      },
      {
        title: 'Digital Engagement',
        desc: 'Digital magazines, newsletters, social campaigns and audience reporting.',
      },
    ],
  },
];

export const offerings = [
  [
    'Application Development (custom software, customer portals, mobile apps)',
    'Modernization (replace legacy tech, preserve rules & workflows)',
    'Customization & Integrations (vendor SDKs, APIs, specialist tools)',
    'Documents, Data and AI (automated processing, dashboards, search)',
    'Ongoing Engineering Support (post-launch maintenance & enhancements)',
  ],
  [
    'Workflow Automation (quoting, carrier sourcing, delivery planning)',
    'System Integration (TMS, WMS, ERP, CRM, accounting bridges)',
    'Shipment & Field Visibility (exceptions, barcode scans, proof of delivery)',
    'E-commerce & Fulfilment Operations (orders, inventory, shipping, returns)',
    'AI & Margin Analytics (document extraction, cost and margin intelligence)',
  ],
  [
    'Traffic Intelligence (demand forecasting, capacity & routing support)',
    'Network Optimization (SDN controller workloads, automated resource coordination)',
    'Threat Detection (ML intrusion detection, anomaly, DDoS & encrypted traffic)',
    'Programmable Monitoring (eBPF and P4 telemetry for supported platforms)',
    'Secure Connections (lightweight authentication for edge, IoT & new architectures)',
  ],
  [
    'Membership Services (acquisition, onboarding, dues, benefits & events)',
    'Retention Campaigns (personalized outreach, timed sequences, renewal incentives)',
    'Magazine Publishing (editorial planning, design, print production & distribution)',
    'Digital Engagement (digital magazines, e-newsletters, social campaigns & analytics)',
  ],
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
  overview: string;
  capabilities: CapabilityItem[];
  roadmap: RoadmapItem[];
  metrics: MetricItem[];
  caseStudyHighlight?: {
    title: string;
    client: string;
    story: string;
    solution: string;
    value: string;
  };
}

export const serviceDeepDives: Record<string, ServiceDetailData> = {
  'software-development': {
    tagline: 'Keep the business knowledge. Upgrade the technology.',
    overview:
      'We rebuild aging applications into modern web platforms, preserving critical workflows while replacing obsolete dependencies. Even when source code is incomplete, we help uncover the rules behind your operation and translate them into maintainable software.',
    capabilities: [
      {
        title: 'Custom Applications and Customer Portals',
        desc: 'Connect customer requests with the work behind them. Bring orders, tasks, documents, and status updates into a connected application. We build internal platforms and customer portals that make information easier to find and responsibilities clearer.',
        tech: 'React 19 · TypeScript · Next.js · Node.js',
      },
      {
        title: 'Document Management and Automation',
        desc: 'Make documents part of the workflow. Give users document viewing, editing, generation, and filing capabilities within their business application. We connect Word, PDF, and TIFF workflows to the records they support, helping teams maintain context.',
        tech: 'Nutrient / PSPDFKit · TX Text Control · PDF Pipelines',
      },
      {
        title: 'Third-Party Integrations',
        desc: 'Make specialist tools work together. We connect vendor SDKs and APIs with your application’s business rules, data, and storage, addressing compatibility, document formats, save behavior, and workflow continuity.',
        tech: 'REST / GraphQL · OpenAPI · Webhooks · SDK Connectors',
      },
      {
        title: 'Data Migration and Business Dashboards',
        desc: 'Preserve your records. Make operational information useful. We map and migrate business data, define archival strategies, and build dashboards around the questions your teams need answered.',
        tech: 'FusionCharts · PostgreSQL · Azure SQL · Business Intelligence',
      },
      {
        title: 'AI and Muxly Semantic Search',
        desc: 'Find business information through natural-language questions across connected business sources. Our AI services include document extraction, classification, and assisted summarization with human review suited to the task.',
        tech: 'Muxly Semantic Search · Vector Embeddings · Private LLM Pipelines',
      },
      {
        title: 'Application Support and Enhancement',
        desc: 'Keep improving after launch. We support applications through issue resolution, performance investigation, dependency upgrades, and ongoing enhancements tailored to your business priorities.',
        tech: 'SLA Governance · CI/CD Pipelines · Automated Monitoring',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Knowledge Reconstruction', duration: 'Weeks 1-2', detail: 'Extract undocumented business logic, review legacy dependencies, map document formats, and blueprint the target web architecture.' },
      { step: '02', phase: 'Modern Component Build', duration: 'Weeks 3-6', detail: 'Engineer responsive web application modules, embed document viewing and editing SDKs, and build integration bridges.' },
      { step: '03', phase: 'Data Migration & Validation', duration: 'Weeks 7-8', detail: 'Reconcile legacy database records, test document filing continuity, verify business rule compliance, and execute user acceptance testing.' },
      { step: '04', phase: 'Deployment & Ongoing Support', duration: 'Ongoing', detail: 'Production rollout beyond the legacy browser environment, stabilization warranty, and dedicated support for future enhancements.' },
    ],
    metrics: [
      { stat: '100%', label: 'Browser Independence' },
      { stat: 'Zero', label: 'Workflow Disruption' },
      { stat: '99.9%', label: 'Document Sync Fidelity' },
      { stat: '100%', label: 'Full IP & Code Ownership' },
    ],
    caseStudyHighlight: {
      title: 'Customer success story: Replacing a complex legacy platform with connected document capabilities',
      client: 'US Property Research & Lien Services Provider',
      story: 'A US property research and lien services provider depended on an Internet Explorer-based application to coordinate research, documents, and operational work. Incomplete source code made the replacement a reconstruction of business knowledge as well as a technology project.',
      solution: 'RightPPT delivered a modern replacement integrating Nutrient/PSPDFKit, TX Text Control, and FusionCharts for document review, Word editing, and operational reporting. Handling diverse document formats, retaining order context, and coordinating actions across application components.',
      value: 'Continuity beyond the legacy browser, integrated document tools within operational workflows, and a modern foundation for future enhancements.',
    },
  },
  'logistics-solutions': {
    tagline: 'Smarter Technology for Logistics and Supply Chains',
    overview:
      'RightPPT connects your applications, automates manual workflows and turns operational data into actionable insights—helping you move freight, inventory and orders with greater control.',
    capabilities: [
      {
        title: 'Custom Business Applications',
        desc: 'Tailored solutions for quoting, carrier sourcing, supplier coordination, inventory management and delivery planning.',
        tech: 'Freight Portals · Quoting Engines · Dispatch Tools',
      },
      {
        title: 'Enterprise and Third Party Integrations',
        desc: 'Connect TMS, WMS, ERP, CRM, carrier and accounting systems to reduce duplicate entry and improve information flow.',
        tech: 'EDI Protocols · REST APIs · Webhooks · ERP Bridges',
      },
      {
        title: 'AI and Intelligent Search',
        desc: 'Automate RFQ preparation, document extraction and carrier follow-ups. Find answers across business systems while retaining human approval for critical decisions.',
        tech: 'Automated RFQ Parsing · LLM Extractors · Human-in-the-Loop',
      },
      {
        title: 'Shipment Visibility and Exception Management',
        desc: 'Track shipments, monitor arrival changes and route alerts to responsible teams so they can address disruptions earlier.',
        tech: 'Real-time Telematics · ETA Forecasting · Exception Routing',
      },
      {
        title: 'Mobile and Field Applications',
        desc: 'Digitize driver assignments, barcode scanning, asset verification, photographs, signatures and proof of delivery.',
        tech: 'Offline-First Mobile · Barcode Scanning · Digital Signatures',
      },
      {
        title: 'E-commerce and Fulfilment',
        desc: 'Connect orders, inventory, shipping and returns to simplify fulfilment and improve customer visibility.',
        tech: 'Shopify / WooCommerce Sync · Carrier Rate APIs · Returns Portal',
      },
      {
        title: 'Dashboards and Margin Intelligence',
        desc: 'Monitor operational performance, identify cost overruns and compare actual margins with quoted targets using consistent, reconciled data.',
        tech: 'Margin Analytics · FusionCharts · Live KPI Dashboards',
      },
      {
        title: 'Modernization and Ongoing Support',
        desc: 'Upgrade legacy logistics applications, migrate operational data and enhance existing systems with development, testing, deployment and ongoing maintenance.',
        tech: 'Cloud Native AWS/Azure · Containerization · 24/7 SLAs',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Logistics Process Discovery', duration: 'Weeks 1-2', detail: 'Map freight routes, inventory checkpoints, quoting bottlenecks, and existing carrier/ERP interfaces.' },
      { step: '02', phase: 'Integration & Automation Build', duration: 'Weeks 3-6', detail: 'Develop carrier API connectors, automate RFQ document parsing, and configure real-time exception notifications.' },
      { step: '03', phase: 'Field & Driver Pilot', duration: 'Weeks 7-8', detail: 'Deploy mobile barcode scanning and proof-of-delivery tools to select driver squads with real-world validation.' },
      { step: '04', phase: 'Full Rollout & Intelligence', duration: 'Month 3+', detail: 'Launch synchronized margin dashboards, transition all dispatch channels, and provide continuous operational support.' },
    ],
    metrics: [
      { stat: '-40%', label: 'Manual Quoting Time' },
      { stat: '100%', label: 'Proof-of-Delivery Capture' },
      { stat: '3.2x', label: 'Faster Carrier Sourcing' },
      { stat: 'Reconciled', label: 'Real-time Margins' },
    ],
  },
  'ai-solutions': {
    tagline: 'AI Solutions for Everyday Business & Intelligent Network Infrastructure',
    overview:
      'RightPPT helps organizations automate routine work, find information faster, secure infrastructure, and deliver personalized experiences through AI. From network traffic prediction to legal contract automation, we make AI practical.',
    capabilities: [
      {
        title: 'Traffic Intelligence & Demand Forecasting',
        desc: 'Forecast network demand and support routing and capacity decisions through predictive machine learning models.',
        tech: 'Time-Series Forecasting · Traffic Telemetry · Python ML',
      },
      {
        title: 'Network Optimization & SDN Control',
        desc: 'Balance SDN controller workloads and automate resource coordination across enterprise infrastructure.',
        tech: 'SDN Workload Balancers · OpenFlow · Automated Scaling',
      },
      {
        title: 'Threat Detection & Anomaly Analysis',
        desc: 'Apply machine learning to intrusion detection, anomaly discovery, DDoS mitigation, and encrypted traffic analysis.',
        tech: 'ML Intrusion Engines · Encrypted Flow Inspection · DDoS Shields',
      },
      {
        title: 'Programmable Monitoring & Secure Connections',
        desc: 'Develop eBPF and P4 telemetry for supported platforms. Design lightweight authentication for edge, IoT and emerging network architectures.',
        tech: 'eBPF · P4 Telemetry · Zero-Trust Edge Authentication',
      },
      {
        title: 'Content, Marketing & Multilingual AI',
        desc: 'Create articles, images, podcasts and email or social campaigns. Translate content and turn multilingual recordings into transcripts and summaries.',
        tech: 'Generative Text & Audio · Speech-to-Text · Translation Models',
      },
      {
        title: 'Intelligent Search and Document Automation',
        desc: 'Bring business knowledge into a searchable repository. Extract information from invoices, forms and contracts. Classify documents and route them into workflows.',
        tech: 'RAG Hybrid Vector Search · OCR · Form Parsers · pgvector',
      },
      {
        title: 'Video Search, Verification & Monitoring',
        desc: 'Search webinars and training archives with topic extraction. Verify identity documents, support onboarding, and detect objects for asset tracking and content moderation.',
        tech: 'Video Indexing · Facial Verification · Computer Vision',
      },
      {
        title: 'AI for Legal and Compliance Operations',
        desc: 'Simplify contract workflows: template-based drafting, assisted review for risky terms and compliance gaps, role-based approvals, centralized repository, and due diligence.',
        tech: 'Clause Libraries · Compliance Auditing · E-Signatures · Audit Logs',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Data & Security Assessment', duration: 'Weeks 1-2', detail: 'Evaluate document repositories, network telemetry sources, security guardrails, and compliance requirements.' },
      { step: '02', phase: 'Model & Pipeline Engineering', duration: 'Weeks 3-5', detail: 'Configure private embeddings, train anomaly detection baselines, build automated extraction rules, and establish human review gates.' },
      { step: '03', phase: 'Integration & Guardrail Testing', duration: 'Weeks 6-7', detail: 'Embed within existing ERP, CRM, or network controllers with zero hallucination safeguards and role-based ACLs.' },
      { step: '04', phase: 'Production Rollout', duration: 'Ongoing', detail: 'Live telemetry monitoring, drift detection, accuracy benchmark validation, and quarterly model updates.' },
    ],
    metrics: [
      { stat: '80%', label: 'Manual Processing Saved' },
      { stat: 'Zero', label: 'Data Leakage Risk' },
      { stat: '<150ms', label: 'Semantic Query Response' },
      { stat: '100%', label: 'Human Approval Guardrails' },
    ],
  },
  'nonprofits-and-associations': {
    tagline: 'Grow membership. Strengthen retention. Communicate your mission.',
    overview:
      'RightPPT combines technology and specialist delivery partners to support your members and communications. We coordinate membership management, retention campaigns, and digital magazine publishing.',
    capabilities: [
      {
        title: 'Membership Acquisition & Welcome',
        desc: 'Acquisition campaigns, trial memberships, digital onboarding, and welcome kits designed to build early engagement.',
        tech: 'Acquisition Funnels · Automated Onboarding · Member Portals',
      },
      {
        title: 'Membership Operations & Dues Management',
        desc: 'Dues invoicing, renewals, accounts receivable, member benefits, regional chapter coordination, telephone support, and business-rule adherence.',
        tech: 'AMS / CRM Integration · Dues Automation · Payment Gateways',
      },
      {
        title: 'Data-Driven Retention Campaigns',
        desc: 'Plan renewal strategies, personalized content, timed email/print/telephone sequences, auto-renewal, early incentives, and welcome-back offers.',
        tech: 'Segmentation Engines · Renewal Sequences · Postal Cleansing',
      },
      {
        title: 'Campaign Analytics & Survey Intelligence',
        desc: 'A/B testing, renewal trend analysis, business intelligence metrics, and expired-member surveys to continuously optimize membership health.',
        tech: 'Business Intelligence · Churn Prediction · Survey Analytics',
      },
      {
        title: 'Magazine Publishing & Editorial Planning',
        desc: 'Editorial planning, content acquisition, author management, copyediting, photography, prepress, online proofing, and PDF workflows.',
        tech: 'Editorial CMS · PDF Workflows · Prepress Proofing',
      },
      {
        title: 'Print Production, Digital Delivery & Revenue',
        desc: 'Magazine printing, saddle binding, variable covers, digital magazines, e-newsletters, social campaigns, advertising sales, and Periodical Class mailing discounts.',
        tech: 'Variable Print Engines · Digital Flipbooks · Ad Distribution',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Membership & Data Discovery', duration: 'Weeks 1-2', detail: 'Audit member databases, dues schedules, renewal touchpoint calendars, and publication schedules.' },
      { step: '02', phase: 'System Integration & Campaign Setup', duration: 'Weeks 3-5', detail: 'Connect AMS/CRM with email automation, cleanse postal data, and establish timed renewal sequences.' },
      { step: '03', phase: 'Publishing & Digital Launch', duration: 'Weeks 6-8', detail: 'Coordinate editorial workflows, produce digital publications, and rollout personalized member outreach.' },
      { step: '04', phase: 'Retention Optimization & Reporting', duration: 'Ongoing', detail: 'Track monthly renewal lift, analyze member engagement trends, and deliver quarterly publishing and advertising reports.' },
    ],
    metrics: [
      { stat: '+32%', label: 'Renewal Rate Lift' },
      { stat: '100%', label: 'Postal Data Cleansed' },
      { stat: 'On-Time', label: 'Magazine Distribution' },
      { stat: 'Unified', label: 'Member Single Record' },
    ],
  },
};

// Backward-compatible alias resolver
export function getServiceBySlug(rawSlug: string): { service: ServiceItem; deepDive: ServiceDetailData; index: number } | null {
  const slugAliases: Record<string, string> = {
    'web-development': 'software-development',
    'software-development': 'software-development',
    'software-services': 'software-development',
    'logistics-solutions': 'logistics-solutions',
    'logistics-supply-chain': 'logistics-solutions',
    'ai-solutions': 'ai-solutions',
    'networking-capabilities': 'ai-solutions',
    'technology-solutions': 'ai-solutions',
    'nonprofits-and-associations': 'nonprofits-and-associations',
    'membership-publishing': 'nonprofits-and-associations',
    'digital-marketing': 'nonprofits-and-associations',
  };

  const resolvedSlug = slugAliases[rawSlug] || rawSlug;
  const index = services.findIndex((s) => s.slug === resolvedSlug);

  if (index === -1) {
    const numIdx = parseInt(rawSlug, 10);
    if (!isNaN(numIdx) && services[numIdx]) {
      return {
        service: services[numIdx],
        deepDive: serviceDeepDives[services[numIdx].slug] || serviceDeepDives['software-development'],
        index: numIdx,
      };
    }
    // Default to software-development
    return {
      service: services[0],
      deepDive: serviceDeepDives['software-development'],
      index: 0,
    };
  }

  return {
    service: services[index],
    deepDive: serviceDeepDives[resolvedSlug] || serviceDeepDives['software-development'],
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
