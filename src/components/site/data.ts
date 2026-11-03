import { Code2, Layers3, Megaphone, Cpu, Network, ShieldCheck, Truck, Users2, Sparkles, Scale } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import softDevPlain from '@/assets/soft-dev-plain.jpg';
import logisticsPlain from '@/assets/logistics-plain.jpg';
import aiSecPlain from '@/assets/ai-sec-plain.jpg';
import pubPlain from '@/assets/pub-plain.jpg';
import aiEverydayPlain from '@/assets/ai-everyday-plain.jpg';
import aiLegalPlain from '@/assets/ai-legal-plain.jpg';

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
  image?: string;
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
    image: softDevPlain,
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
    slug: 'ai-solutions',
    name: 'AI-Enabled Network Security & Intelligent Infrastructure',
    label: 'INTELLIGENCE & NETWORK SECURITY',
    description: 'Develop smarter networks with traffic prediction, automated control and threat detection.',
    detail: 'RightPPT helps organizations automate routine work, find information faster, secure network infrastructure, and deliver more personalized experiences through applied AI.',
    knowMoreText: 'Know More — AI & Network Security',
    image: aiSecPlain,
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
    slug: 'logistics-solutions',
    name: 'Logistics, Supply Chain and E-commerce',
    label: 'FREIGHT & OPERATIONAL CONTROL',
    description: 'Connect orders, shipments, inventory and partners for better operational control.',
    detail: 'RightPPT connects your applications, automates manual workflows and turns operational data into actionable insights—helping you move freight, inventory and orders with greater control.',
    knowMoreText: 'Know More — Logistics Solutions',
    image: logisticsPlain,
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
    slug: 'ai-everyday-business',
    name: 'AI Solutions for Everyday Business',
    label: 'APPLIED AI & WORKFLOW AUTOMATION',
    description: 'RightPPT helps organizations automate routine work, find information faster and deliver more personalized experiences through AI.',
    detail: 'RightPPT helps organizations automate routine work, find information faster and deliver more personalized experiences through practical AI—from intelligent knowledge search to automated document processing.',
    knowMoreText: 'Know More — Explore Our AI Capabilities',
    image: aiEverydayPlain,
    icon: Sparkles,
    tone: 'violet',
    bullets: [
      {
        title: 'Content and Marketing',
        desc: 'Create articles, images, podcasts and email or social campaigns. Translate content and turn multilingual recordings into transcripts and summaries.',
      },
      {
        title: 'Intelligent Search and Knowledge',
        desc: 'Bring business knowledge into a searchable repository. Ask questions in everyday language to find relevant documents, resources and answers.',
      },
      {
        title: 'Document Automation',
        desc: 'Extract information from invoices, forms and contracts. Classify documents and route them into business workflows to reduce manual processing.',
      },
      {
        title: 'Personalized Recommendations',
        desc: 'Recommend products, content and services based on user interests and behavior to improve discovery and engagement.',
      },
      {
        title: 'Video Search and Insights',
        desc: 'Search webinars, training recordings and video archives. Generate summaries, extract topics and automatically tag content.',
      },
      {
        title: 'Identity Verification and Access',
        desc: 'Verify identity documents, support customer onboarding and enable facial recognition for access, attendance and visitor management.',
      },
      {
        title: 'Visual Monitoring and Content Moderation',
        desc: 'Detect objects for inventory, asset tracking and quality checks. Flag inappropriate text, images and videos for review.',
      },
    ],
  },
  {
    slug: 'ai-legal-compliance',
    name: 'AI for Legal and Compliance Operations',
    label: 'LEGAL & REGULATORY INTELLIGENCE',
    description: 'Simplify contract workflows and give teams better visibility into documents, obligations and deadlines.',
    detail: 'Simplify contract workflows and give teams better visibility into documents, obligations and deadlines with clause libraries, assisted review, automated approvals, and compliance audit tracking.',
    knowMoreText: 'Know More — Explore Legal and Compliance Solutions',
    image: aiLegalPlain,
    icon: Scale,
    tone: 'blue',
    bullets: [
      {
        title: 'Contract Drafting',
        desc: 'Generate agreements using approved templates and clause libraries.',
      },
      {
        title: 'Assisted Review',
        desc: 'Identify potentially risky terms, conflicting clauses and compliance gaps for legal review.',
      },
      {
        title: 'Approvals and E-signatures',
        desc: 'Coordinate role-based approvals, signing and audit trails.',
      },
      {
        title: 'Centralized Repository',
        desc: 'Organize, search and retrieve contracts and supporting documents.',
      },
      {
        title: 'Compliance Tracking',
        desc: 'Monitor requirements, obligations and deadlines with alerts and reporting.',
      },
      {
        title: 'Due Diligence and Analytics',
        desc: 'Consolidate records for review and surface contract risks and governance insights.',
      },
    ],
  },
  {
    slug: 'nonprofits-and-associations',
    name: 'Smarter Technology for Nonprofits & Associations',
    label: 'MEMBERSHIP, RYTEAI & OPERATIONS',
    description: 'Engage your community. Grow revenue. Advance your mission.',
    detail: 'RightPPT combines custom software, connected systems and the RyteAI platform to help mid-size to large nonprofits and associations improve services and simplify operations.',
    knowMoreText: 'Know More — Explore Nonprofits & Associations Solutions',
    image: pubPlain,
    icon: Users2,
    tone: 'green',
    bullets: [
      {
        title: 'Membership & Retention',
        desc: 'Acquisition, onboarding, dues, renewals, personalized engagement and chapter coordination.',
      },
      {
        title: 'RyteAI Search & Knowledge',
        desc: 'Natural-language search and knowledge assistants across publications, research, documents and webinar archives.',
      },
      {
        title: 'AI Content & Communications',
        desc: 'Articles, newsletters, campaign content, visuals, audio, translations and personalized recommendations—with editorial review.',
      },
      {
        title: 'Publishing & Revenue',
        desc: 'Digital magazines, subscriptions, premium content, advertising, sponsorships and print distribution through specialist partners.',
      },
      {
        title: 'Learning & Events',
        desc: 'Learning portals, registrations, payments, assessments, certificates and continuing-education reporting.',
      },
      {
        title: 'Donor, Grant & Program Management',
        desc: 'Supporter records, contributions, applications, approvals, service delivery and funder reporting.',
      },
      {
        title: 'Applications & Modernization',
        desc: 'Custom websites and portals; development, customization and enhancement of CRM, association management, learning and content systems.',
      },
      {
        title: 'Integrations & Data',
        desc: 'Connect finance, payments, marketing and business applications; cleanse, deduplicate, migrate and reconcile records.',
      },
      {
        title: 'Analytics & Insights',
        desc: 'Dashboards for engagement, renewals, revenue and program outcomes, with predictive insights where appropriate.',
      },
      {
        title: 'Document & Workflow Automation',
        desc: 'Extract information, generate documents and streamline routing, reminders, approvals and agreement review.',
      },
      {
        title: 'AI Strategy & Responsible Adoption',
        desc: 'Readiness assessments, pilots, roadmaps, access controls, privacy and human oversight.',
      },
      {
        title: 'Cloud & Ongoing Support',
        desc: 'Cloud migration, performance improvements, upgrades, maintenance, training and continuous enhancements.',
      },
    ],
  },
];

export const offerings = [
  // 0: Software Development & Modernization
  [
    'Application Development (custom software, customer portals, mobile apps)',
    'Modernization (replace legacy tech, preserve rules & workflows)',
    'Customization & Integrations (vendor SDKs, APIs, specialist tools)',
    'Documents, Data and AI (automated processing, dashboards, search)',
    'Ongoing Engineering Support (post-launch maintenance & enhancements)',
  ],
  // 1: AI-Enabled Network Security & Intelligent Infrastructure
  [
    'Traffic Intelligence (demand forecasting, capacity & routing support)',
    'Network Optimization (SDN controller workloads, automated resource coordination)',
    'Threat Detection (ML intrusion detection, anomaly, DDoS & encrypted traffic)',
    'Programmable Monitoring (eBPF and P4 telemetry for supported platforms)',
    'Secure Connections (lightweight authentication for edge, IoT & new architectures)',
  ],
  // 2: Logistics, Supply Chain and E-commerce
  [
    'Workflow Automation (quoting, carrier sourcing, delivery planning)',
    'System Integration (TMS, WMS, ERP, CRM, accounting bridges)',
    'Shipment & Field Visibility (exceptions, barcode scans, proof of delivery)',
    'E-commerce & Fulfilment Operations (orders, inventory, shipping, returns)',
    'AI & Margin Analytics (document extraction, cost and margin intelligence)',
  ],
  // 3: AI Solutions for Everyday Business
  [
    'Content and Marketing (articles, graphics, podcasts, multilingual transcription)',
    'Intelligent Search & Knowledge (natural language repository, instant Q&A)',
    'Document Automation (invoice extraction, contract classification, routing)',
    'Personalized Recommendations (interest & behavioral matching engines)',
    'Video Search & Insights (webinar summaries, automated topic tagging)',
    'Identity Verification & Access (ID document checks, secure visitor access)',
    'Visual Monitoring & Moderation (inventory tracking, content safety checks)',
  ],
  // 4: AI for Legal and Compliance Operations
  [
    'Contract Drafting (approved templates, standard clauses, automated generation)',
    'Assisted Review (risk scoring, conflicting clauses, compliance gap detection)',
    'Approvals & E-signatures (role-based approvals, cryptographic audit trails)',
    'Centralized Repository (indexed search, document OCR & relational archiving)',
    'Compliance Tracking (statutory obligations, SLA alerts, deadline monitoring)',
    'Due Diligence & Analytics (governance insights, portfolio risk assessment)',
  ],
  // 5: Nonprofits and Associations
  [
    'Membership & Retention (acquisition, dues, renewals & chapter sync)',
    'RyteAI Search & Knowledge (natural-language search across archives)',
    'AI Content & Communications (multilingual articles & campaign content)',
    'Publishing & Revenue (digital magazines, subscriptions, ads & print)',
    'Learning & Events (learning portals, registrations & CE reporting)',
    'Donor & Grant Operations (supporter records, contributions & approvals)',
    'Integrations & Automation (AMS/CRM sync, deduplication & workflows)',
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
    caseStudyHighlight: {
      title: 'Customer success story: AI Driven Rebate Processing and Business Intelligence',
      client: 'B2B Fulfillment Services Provider (Food & Distribution)',
      story: 'RightPPT transformed manual business-to-business rebate operations for a fulfillment services provider supporting food manufacturers, distributors, brokers and restaurant operators. Paper submissions, handwritten forms, scanned invoices, and varying distributor codes caused lengthy review delays and audit friction.',
      solution: 'Delivered an integrated intelligent document processing (IDP) and predictive analytics platform. The solution automated invoice digitization, product code reconciliation, multi-tier eligibility checks, and duplicate payout detection while retaining human expert gates and SOC 2 data security.',
      value: 'Processing moved from lengthy manual queues to rapid approval, duplicate payouts were eliminated, teams handled higher volumes with minimal additional staffing, and predictive recommendations unlocked high-margin advisory services.',
    },
  },
  'nonprofits-and-associations': {
    tagline: 'Engage your community. Grow revenue. Advance your mission.',
    overview:
      'RightPPT combines custom software, connected systems and the RyteAI platform to help mid-size to large nonprofits and associations improve services, simplify operations, and automate everyday work. Built for national offices, chapters, affiliates and institutional communities.',
    capabilities: [
      {
        title: 'Membership Growth, Engagement & Retention',
        desc: 'Make membership easier to join, more valuable to use and simpler to renew. Streamline acquisition, onboarding, dues, benefits, renewals, and member service. Personalize communications and coordinate chapter and regional memberships.',
        tech: 'AMS / CRM Integration · Dues Automation · Chapter Sync',
      },
      {
        title: 'RyteAI: Intelligent Search & Knowledge Access',
        desc: 'Turn your organization’s expertise into an accessible, everyday resource. Enable natural-language search across connected publications, research, policies, and webinar video archives with conversational knowledge assistants.',
        tech: 'RyteAI Platform · Semantic Embeddings · Video Transcript NLP',
      },
      {
        title: 'AI Content, Campaigns & Multilingual Communications',
        desc: 'Extend your reach and get more value from every piece of content. Create first drafts of articles, newsletters, campaign messages, and visual assets. Repurpose research into audio, social content, and localized multilingual communications.',
        tech: 'Generative AI Pipelines · Multilingual Localization · Audio Synthesis',
      },
      {
        title: 'Publishing & Non-Dues Revenue',
        desc: 'Connect trusted content with stronger engagement and revenue opportunities. Deliver digital magazines, searchable archives, subscriptions, advertising sales, sponsorships, and print distribution through specialist partners.',
        tech: 'Digital Magazines · Periodical Class Postal Sync · Ad Sales Engine',
      },
      {
        title: 'Learning, Events & Professional Development',
        desc: 'Keep members connected to knowledge throughout their professional journey. Integrated learning portals with assessments, certificates, course recommendations, event registrations, and continuing-education reporting.',
        tech: 'LMS Portals · Event Gateways · CE Credit Tracking',
      },
      {
        title: 'Donor, Grant & Program Operations',
        desc: 'Connect supporter relationships with the work they help fund. Tailored applications for donor records, contributions, grant intake, document collection, review approvals, and funder reporting.',
        tech: 'Donor Portals · Grant Workflows · Funder Compliance Reporting',
      },
      {
        title: 'Application Development, Modernization & Integration',
        desc: 'Build the capabilities your mission needs on a maintainable technology foundation. Custom portals, modernization of legacy software, and unified API integrations across finance, payments, and marketing platforms.',
        tech: 'React 19 · Node.js · REST APIs · Enterprise SSO',
      },
      {
        title: 'Data, Analytics & Decision Support',
        desc: 'Cleanse, deduplicate, migrate and reconcile information across systems. Connect member, donor, content, and event data into executive dashboards for renewals, revenue, and program outcomes.',
        tech: 'ETL Pipelines · Data Deduplication · Business Intelligence',
      },
      {
        title: 'Document & Workflow Automation',
        desc: 'Reduce repetitive administration and keep work moving. Extract and classify information from forms, invoices, and applications. Automate routing, reminders, approvals, and agreement review preparation.',
        tech: 'Document OCR · Automated Routing · Form Classification',
      },
      {
        title: 'AI Strategy, Cloud & Ongoing Support',
        desc: 'Prioritize AI opportunities through readiness assessments, focused pilots, and implementation roadmaps. Design permissions, privacy controls, cloud migration, upgrades, and continuous enhancements.',
        tech: 'AI Governance · Cloud Infrastructure · 24/7 SLA Support',
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
  'ai-everyday-business': {
    tagline: 'Practical AI that Automates Routine Work and Multiplies Team Output',
    overview:
      'RightPPT helps organizations automate routine work, find information faster and deliver more personalized experiences through applied AI. We integrate private enterprise LLMs, multimodal document extractors, and intelligent search systems directly into your existing operational workflows.',
    capabilities: [
      {
        title: 'Content and Marketing Automation',
        desc: 'Create articles, images, podcasts and email or social campaigns. Translate content and turn multilingual recordings into transcripts and summaries.',
        tech: 'Generative AI Pipelines · Multilingual Whisper · Content Orchestration',
      },
      {
        title: 'Intelligent Search and Enterprise Knowledge',
        desc: 'Bring business knowledge into a searchable repository. Ask questions in everyday language to find relevant documents, resources and answers across business apps.',
        tech: 'Hybrid Vector Search · RAG Architecture · Knowledge Graph',
      },
      {
        title: 'Document Automation & OCR Extraction',
        desc: 'Extract information from invoices, forms and contracts. Classify documents and route them into business workflows to reduce manual processing.',
        tech: 'Vision AI · Document AI · Automated Form Parsers',
      },
      {
        title: 'Personalized Recommendations',
        desc: 'Recommend products, content and services based on user interests and behavior to improve discovery and customer engagement.',
        tech: 'Behavioral Recommendation Engines · Real-time Collaborative Filtering',
      },
      {
        title: 'Video Search and Insights',
        desc: 'Search webinars, training recordings and video archives. Generate summaries, extract key topics and automatically tag multimedia assets.',
        tech: 'Multimodal Video Indexing · Topic Segmentation · Automated Transcripts',
      },
      {
        title: 'Identity Verification & Visual Quality',
        desc: 'Verify identity documents, support onboarding and detect objects for inventory, asset tracking, quality checks and content moderation.',
        tech: 'Facial & Document OCR · YOLO Object Detection · Automated Safety Filters',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Workflow & Data Audit', duration: 'Weeks 1-2', detail: 'Map daily repetitive tasks, identify high-volume document workflows, and audit enterprise knowledge sources.' },
      { step: '02', phase: 'Model & Pipeline Integration', duration: 'Weeks 3-5', detail: 'Configure private RAG pipelines, setup document parsers, and integrate APIs with internal business software.' },
      { step: '03', phase: 'User Pilot & Human-in-the-Loop', duration: 'Weeks 6-7', detail: 'Deploy targeted pilot for marketing, search, and document extraction with role-based validation checkpoints.' },
      { step: '04', phase: 'Enterprise Rollout & Continuous Tuning', duration: 'Ongoing', detail: 'Company-wide rollout, latency optimization, accuracy monitoring, and periodic prompt and embedding fine-tuning.' },
    ],
    metrics: [
      { stat: '80%', label: 'Manual Processing Saved' },
      { stat: '<3s', label: 'Knowledge Retrieval Time' },
      { stat: '99.4%', label: 'Document Field Accuracy' },
      { stat: '100%', label: 'Private VPC Isolation' },
    ],
    caseStudyHighlight: {
      title: 'Enterprise AI Success: Multi-department automated document parsing & semantic knowledge repository',
      client: 'Mid-Market Logistics & Financial Services Firm',
      story: 'The client processed over 15,000 monthly invoices, bills of lading, and vendor contracts manually, with employee knowledge fragmented across disparate email threads, SharePoint folders, and network drives.',
      solution: 'RightPPT engineered a unified Everyday AI solution integrating intelligent document OCR, automated invoice-to-ERP routing, and a private natural language knowledge repository accessible via web portal.',
      value: 'Reduced invoice handling cycle from 4 days to 45 minutes and enabled cross-department instant search across 200,000 archived documents.',
    },
  },
  'ai-legal-compliance': {
    tagline: 'Contract Automation, Clause Intelligence & Regulatory Governance',
    overview:
      'Simplify contract workflows and give teams better visibility into documents, obligations and deadlines. RightPPT provides automated clause generation, assisted risk review, encrypted e-signature routing, and real-time statutory compliance audit trails.',
    capabilities: [
      {
        title: 'Contract Drafting & Clause Libraries',
        desc: 'Generate agreements using approved templates and vetted clause libraries, enforcing brand standards and legal guardrails automatically.',
        tech: 'Dynamic Clause Libraries · Template Engines · Automated Drafting',
      },
      {
        title: 'Assisted Review & Risk Detection',
        desc: 'Identify potentially risky terms, non-standard indemnity, conflicting clauses and compliance gaps for faster legal team review.',
        tech: 'Legal NLP · Risk Scoring Matrix · Variance Highlights',
      },
      {
        title: 'Approvals, E-signatures & Audit Trails',
        desc: 'Coordinate role-based multi-tier approvals, cryptographic e-signatures, and immutable audit logs ensuring evidentiary standards.',
        tech: 'Role-Based Workflows · E-Sign Integrations · Tamper-evident Audit Logs',
      },
      {
        title: 'Centralized Repository & OCR Retrieval',
        desc: 'Organize, search and retrieve active contracts and supporting documentation using OCR search, metadata filters, and linked party records.',
        tech: 'Full-Text OCR Search · Relational Metadata · Secure Document Vault',
      },
      {
        title: 'Compliance Tracking & SLA Alerts',
        desc: 'Monitor statutory requirements, regulatory obligations and contract renewal deadlines with automated multi-channel alerts and dashboards.',
        tech: 'Automated Deadline Engines · SLA Monitors · Statutory Milestone Alerts',
      },
      {
        title: 'Due Diligence & Governance Analytics',
        desc: 'Consolidate portfolios for merger/audit review and surface aggregate contract risks, counterpart exposures, and governance insights.',
        tech: 'Portfolio Risk Analytics · Counterparty Exposure · Governance Dashboards',
      },
    ],
    roadmap: [
      { step: '01', phase: 'Clause Library & Policy Blueprint', duration: 'Weeks 1-2', detail: 'Catalog standard contract templates, approve fallback clause variations, and define legal risk scoring thresholds.' },
      { step: '02', phase: 'Workflow & E-Signature Integration', duration: 'Weeks 3-5', detail: 'Deploy contract drafting engine, connect approval tiers with corporate SSO, and configure secure e-signature pipelines.' },
      { step: '03', phase: 'Repository Migration & OCR Indexing', duration: 'Weeks 6-8', detail: 'Digitize legacy contract archives, run deep OCR classification, and index obligations and expiration milestones.' },
      { step: '04', phase: 'Governance Monitoring & Legal Ops Support', duration: 'Ongoing', detail: 'Continuous compliance tracking, quarterly contract risk audits, regulatory update integration, and user training.' },
    ],
    metrics: [
      { stat: '70%', label: 'Faster Contract Turnaround' },
      { stat: '100%', label: 'Obligations Tracked' },
      { stat: 'Zero', label: 'Missed Renewal Deadlines' },
      { stat: 'SOC 2', label: 'Compliance Ready' },
    ],
    caseStudyHighlight: {
      title: 'Legal Operations Success: Automated contract lifecycle and regulatory audit system',
      client: 'Multi-Entity Commercial Advisory & Property Group',
      story: 'Over 2,400 supplier agreements and vendor NDAs were managed across spreadsheets and email inboxes, leading to missed renewal deadlines and unflagged non-standard liability terms.',
      solution: 'RightPPT deployed a centralized LegalOps platform featuring template drafting, AI assisted clause variance scoring, automated e-signatures, and milestone alerts.',
      value: 'Eliminated 100% of missed contract renewal deadlines, cut agreement turnaround from 12 days to under 48 hours, and established full audit readiness.',
    },
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
    'ai-everyday-business': 'ai-everyday-business',
    'ai-business': 'ai-everyday-business',
    'everyday-ai': 'ai-everyday-business',
    'ai-legal-compliance': 'ai-legal-compliance',
    'legal-compliance': 'ai-legal-compliance',
    'legal-ai': 'ai-legal-compliance',
  };

  const resolvedSlug = slugAliases[rawSlug] || rawSlug;
  const index = services.findIndex((s) => s.slug === resolvedSlug);

  const fallbackService = services[0]!;
  const fallbackDeepDive = serviceDeepDives['software-development']!;

  if (index === -1) {
    const numIdx = parseInt(rawSlug, 10);
    const matched = !isNaN(numIdx) ? services[numIdx] : undefined;
    if (matched) {
      return {
        service: matched,
        deepDive: serviceDeepDives[matched.slug] ?? fallbackDeepDive,
        index: numIdx,
      };
    }
    // Default to software-development
    return {
      service: fallbackService,
      deepDive: fallbackDeepDive,
      index: 0,
    };
  }

  const matchedService = services[index] ?? fallbackService;
  return {
    service: matchedService,
    deepDive: serviceDeepDives[resolvedSlug] ?? fallbackDeepDive,
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

export interface CustomerDelightStory {
  id: string;
  name: string;
  title: string;
  organization: string;
  sectorTag: string;
  tone: 'blue' | 'green' | 'violet' | 'cyan';
  quote: string;
  highlights: string[];
  initials: string;
  linkedin?: string;
  verifiedBadge: string;
  metric?: string;
}

export const customerDelightStories: CustomerDelightStory[] = [
  {
    id: 'kevin-novak',
    name: 'Kevin Novak',
    title: 'Chief Executive Officer (CEO)',
    organization: '2040 Digital',
    sectorTag: 'Digital Transformation & Executive Advisory',
    tone: 'blue',
    quote:
      'I have collaborated and partnered with David & his team for a number of years. They are highly responsive, work to get clients the best outcome (financially and technically) and ensures the best resources are assigned. They routinely check in with clients to ensure they are satisfied with the progress and quality of work and take an active role to ensure everything stays on a positive and productive track and timeline.',
    highlights: ['Multi-Year Collaboration', 'High Responsiveness', 'Financial & Technical Optimization'],
    initials: 'KN',
    verifiedBadge: 'Executive Partner',
    metric: 'Multi-Year Partner',
  },
  {
    id: 'deborah-debernard',
    name: 'Deborah DeBernard',
    title: 'Senior Vice President (SVP) - Emeritus',
    organization: 'American Institute of Architects (AIA)',
    sectorTag: 'Architecture & Contract Documents Technology',
    tone: 'violet',
    quote:
      'David is an incredible client manager and team leader. While working on the American Institute of Architects - Contract Documents technology development project, David was a consistent bright beacon in a highly complex and challenging environment. He was unwavering in his support to the team and his clear, transparent communications to our leadership team. He has been a tremendous asset to our team, greatly assisting us to achieve our technology goals. Even when obstacles arose, David was the one person we knew we could turn to for important insights that generated results.',
    highlights: ['AIA Contract Documents Technology', 'Unwavering Team Leadership', 'Mission-Critical Results'],
    initials: 'DD',
    verifiedBadge: 'Enterprise Leadership',
    metric: 'AIA Technology Lead',
  },
  {
    id: 'angel-baltimore',
    name: 'Angel Baltimore',
    title: 'Senior Vice President (SVP)',
    organization: 'American Pharmacists Association (APhA)',
    sectorTag: 'Association Web Platforms & Digital Products',
    tone: 'green',
    quote:
      "I've worked with David and his team on several web development projects and each time the results exceeded our expectations. The professional and methodical approach in which his team manages projects (big or small) cannot be matched. In working with David I know I am going to get the job done on time and within budget. I've never had a problem working with his team and cannot wait until I am able to work with him again.",
    highlights: ['On-time & Within Budget', 'Methodical Project Governance', 'Exceeded Expectations'],
    initials: 'AB',
    verifiedBadge: 'Verified Association Leader',
    metric: 'On Time & In Budget',
  },
  {
    id: 'bryce-house',
    name: 'Bryce House',
    title: 'IT Director',
    organization: 'VP Demand Creation Services',
    sectorTag: 'Enterprise IT Systems & Infrastructure',
    tone: 'cyan',
    quote:
      'We’ve been working with David and his team for quite some time now. They’re very professional and consistent in their service offerings, and their willingness to go the extra mile has been invaluable. They have also supported technologies outside their usual scope, which has been extremely helpful. I would highly recommend their services.',
    highlights: ['Supported Outside Usual Scope', 'Willingness to Go Extra Mile', 'Consistent Service Delivery'],
    initials: 'BH',
    verifiedBadge: 'Verified IT Director',
    metric: 'Technology Expansion',
  },
  {
    id: 'gary-brown',
    name: 'Gary Brown',
    title: 'Owner',
    organization: 'SGTech services',
    sectorTag: 'Custom Application Outsourcing & Engineering',
    tone: 'blue',
    quote:
      "I've worked with RightPPT Solutions on several projects so far and plan to continue this business relationship for the foreseeable future. David and his organization have been great to work with. We've \"outsourced\" software development of a few initial applications with great results. They are easy to work with and very customer-service oriented.",
    highlights: ['Software Application Outsourcing', 'Customer-Service Oriented', 'Ongoing Future Partnership'],
    initials: 'GB',
    verifiedBadge: 'Verified Client Partner',
    metric: 'Software Outsourcing',
  },
  {
    id: 'vanessa-dennison',
    name: 'Vanessa Dennison, CAE, CBAP®',
    title: 'Owner of Dennison & Associates and Co-Founder of Beacon Tech Research',
    organization: 'Dennison & Associates / Beacon Tech Research',
    sectorTag: 'Technology Selection & Association Research',
    tone: 'violet',
    quote:
      "David has been the sales manager on selection projects we've conducted for our clients, and always has a great understanding of what the clients need, and how to solve their issues. He is helpfully persistent without being overwhelming as a sales lead and account manager, keeping things moving forward at an appropriate pace for the clients. He also helped my organization with sales efforts for a short time and did a great job trying to tailor his message to the prospects and leads. He is professional, smart, and great to work with!",
    highlights: ['Client Needs Assessment', 'Tailored Messaging', 'Helpfully Persistent Leadership'],
    initials: 'VD',
    verifiedBadge: 'CAE / CBAP® Certified Partner',
    metric: 'Tech Selection Lead',
  },
  {
    id: 'helen-s',
    name: 'Helen S',
    title: 'Chief Executive Officer',
    organization: 'Integrity Financial Group, Inc.',
    sectorTag: 'Financial Services & Back-Office Automation',
    tone: 'green',
    quote:
      'David has been great in helping our company expand and utilize back office processing more efficiently and productively. We look forward to continued success and efficiency.',
    highlights: ['Back-Office Processing Expansion', 'Productivity & Efficiency', 'Executive Endorsement'],
    initials: 'HS',
    linkedin: 'https://www.linkedin.com/in/helen-s-241b2126/',
    verifiedBadge: 'Verified CEO Partner',
    metric: 'Back-Office Efficiency',
  },
];

