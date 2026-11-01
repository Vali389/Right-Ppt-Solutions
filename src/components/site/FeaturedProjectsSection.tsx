import { useState, useEffect } from 'react';
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
  Target,
  AlertTriangle,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from './Layout';
import { ProjectCardGraphic } from './TechGraphics';
import { HealthcareAICaseStudyModalContent } from './HealthcareAICaseStudy';

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  category: 'all' | 'modernization' | 'crm' | 'ai' | 'web';
  categoryLabel: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  tone: 'blue' | 'green' | 'violet' | 'cyan';
  metrics: { value: string; label: string }[];
  techStack: string[];
  deliverables: string[];
  objectives?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'healthcare-ai-solutions',
    name: 'Healthcare AI Solutions: Autonomous Clinical Operations & Predictive Care',
    client: 'Enterprise Healthcare Networks & Hospital Systems',
    category: 'ai',
    categoryLabel: 'HEALTHCARE AI & CLINICAL INTELLIGENCE',
    year: '2026',
    tagline: 'Autonomous, goal-driven AI systems that learn, adapt, and collaborate—minimizing manual overhead while maximizing impact.',
    description:
      'Deploy autonomous, goal-driven AI systems that learn, adapt, and collaborate—minimizing manual overhead while maximizing impact across clinical operations, predictive diagnostics, patient engagement, and revenue cycle management.',
    image: '',
    tone: 'cyan',
    metrics: [
      { value: '85%', label: 'Discharge Summary Speedup' },
      { value: '24/7', label: 'Clinical Triage Availability' },
      { value: '99.8%', label: 'HIPAA & Cloud Security' },
      { value: '-40%', label: 'Denial Appeals Overhead' },
    ],
    techStack: [
      'GenAI Clinical Co-Pilot',
      'Speech-to-EHR Transcription',
      'Predictive Anomaly Diagnostics',
      'Enterprise Semantic Search',
      'Google Cloud Vertex AI',
      'HIPAA & SOC 2 Boundary',
    ],
    deliverables: [
      'AI Care Coordination: GenAI clinical co-pilot for treatment suggestions; smart patient routing by acuity & bed availability.',
      'Clinical Workflow Automation: Auto-generate discharge summaries; speech-to-EHR transcription and clinical structuring.',
      'Predictive Diagnostics: Anomaly detection and early condition risk predictions based on longitudinal medical records.',
      'Personalized Treatment: GenAI mental-health therapy guides and personalized engagement for on-going treatment regimens.',
      'Virtual Health Assistants: 24×7 multilingual appointment/chat triage Agent with symptom checker and automated medication reminders.',
      'Operations & Staff Optimization: Bed-occupancy optimization, staff-shift roistering, and AI-agent maintenance-request prioritization.',
      'Literature Mining & Molecular Simulation: GenAI summarizing thousands of papers, biomarker correlation mining, and clinical-trial simulators.',
      'Claims & Revenue Cycle Management: GenAI appeal-letter drafting for insurance denials and automated payment variance dashboards.',
      'Staffing & Retention: AI-agent optimal shift-roster generator and customized learning-path personalization.',
      'Semantic Insights & Dashboards: Enterprise semantic search across clinical databases with conversational analytics and alerts.',
      'Google Cloud Certified Architecture: Robust cloud infrastructure with cost optimization, verified enterprise security, and innovative management.',
    ],
    objectives: [
      'Deploy autonomous, goal-driven clinical AI agents that reduce administrative burden on medical personnel.',
      'Accelerate clinical documentation through auto-generated discharge summaries and voice EHR structuring.',
      'Improve patient triage responsiveness with 24/7 multilingual conversational assistants.',
      'Streamline insurance claims and reduce denial appeal turnaround times.',
      'Ensure 100% HIPAA and cloud security compliance across all model interactions.',
    ],
    challenges: [
      'Severe physician burnout caused by hours of manual EHR data entry and documentation overhead.',
      'Complex patient triage workflows leading to emergency department bottlenecks and bed misallocation.',
      'Insurance claim denial appeals requiring tedious manual review of medical records.',
      'Strict regulatory, data privacy, and HIPAA compliance requirements prohibiting public AI models.',
    ],
    outcomes: [
      '85% reduction in discharge summary preparation time, freeing up valuable clinician hours for direct care.',
      'Immediate 24/7 multilingual triage routing that lowered patient wait times across partner hospital systems.',
      '40% reduction in claims denial appeal cycles through automated GenAI appeal letter generation.',
      'High-reliability cloud environment operating under certified Google Cloud security protocols.',
    ],
  },
  {
    id: 'ai-rebate-processing',
    name: 'AI Driven Rebate Processing and Business Intelligence',
    client: 'B2B Fulfillment Services Provider (Food & Distribution)',
    category: 'ai',
    categoryLabel: 'INTELLIGENT AUTOMATION & BI',
    year: '2026',
    tagline: 'Intelligent document processing, automated eligibility checks, product intelligence and predictive analytics.',
    description:
      'RightPPT transformed manual business-to-business rebate operations for a fulfillment services provider supporting food manufacturers, distributors, brokers and restaurant operators. The solution combined intelligent document processing, automated eligibility checks, product intelligence and predictive analytics.',
    tone: 'blue',
    metrics: [
      { value: '10x', label: 'Faster Processing' },
      { value: '99.5%', label: 'Payout Accuracy' },
    ],
    techStack: [
      'Intelligent Document Processing (IDP)',
      'OCR & Handwriting NLP',
      'Automated Rule Engine',
      'Python / FastAPI',
      'Predictive Analytics',
      'SOC 2 & CCPA Security',
    ],
    deliverables: [
      'Intelligent document processing: Digitized submissions and extracted rebate, invoice and purchase details, routing unclear handwriting and low-confidence fields for expert review.',
      'Automated eligibility validation: Checked qualifying products, quantities, purchase periods and reward calculations; detected duplicate claims and inconsistent information.',
      'Complete redemption workflows: Supported operators, distributors, sales representatives and brokers, including spreadsheet-only submissions, bulk rebates and premium fulfillment.',
      'Payment and communication support: Produced approved payout instructions, consolidated distributor payment summaries and service letters explaining partial or rejected claims.',
      'Invoice product intelligence: Standardized distributor codes and identified complementary and competing products to reveal cross-selling and conversion opportunities.',
      'Automated analytics: Delivered dashboards, detailed reports, exception tracking and AI-generated summaries across clients, programs and distributors.',
      'Predictive recommendations: Analyzed historical activity to recommend new rebate structures, identify underperforming programs and compare potential outcomes.',
      'Connected systems and governance: Integrated the existing submission portal, redemption database and reporting tools, with role-based access, encryption, audit trails and confidential-data redaction designed to support SOC 2 practices and CCPA obligations.',
      'Operational readiness: Calibrated the solution against historical expert decisions and delivered approval checkpoints, spot-audit controls, training, documentation and ongoing support.',
    ],
    objectives: [
      'Accelerate rebate processing from submission through payment approval.',
      'Preserve vetting accuracy while handling higher volumes with minimal additional staffing.',
      'Automate reporting and uncover complementary and competing product purchases.',
      'Recommend new rebate programs using historical redemption insights.',
      'Protect confidential information while retaining expert oversight and client data ownership.',
    ],
    challenges: [
      'Paper submissions, handwritten forms, scanned invoices, PDFs and spreadsheets required extensive manual review.',
      'Different distributor product codes complicated product identification and eligibility checks.',
      'Purchase dates, quantities, reward tiers and participant rules varied across programs.',
      'Individual claims, consolidated distributor payments and premium rewards required different workflows.',
      'Fragmented information slowed reporting, exception handling and audit preparation.',
    ],
    outcomes: [
      'Faster turnaround: Processing moved from lengthy manual queues to streamlined validation and approval, enabling earlier payment readiness.',
      'Stronger accuracy and payout control: Consistent checks and targeted expert review improved eligibility decisions and reduced duplicate or unsupported payouts.',
      'Greater processing capacity: Teams handled higher submission volumes while focusing their expertise on exceptions and client service.',
      'More valuable client insights: Faster reporting and deeper invoice analysis revealed purchasing trends, competitor activity and complementary product opportunities.',
      'New advisory services: Predictive recommendations expanded the provider’s offering from redemption administration to rebate program optimization.',
      'Improved transparency and trust: Traceable decisions, clear service letters and controlled data access strengthened audit readiness and client confidence.',
    ],
  },
  {
    id: 'legacy-modernization',
    name: 'Legacy Application Modernization',
    client: 'US Property Research & Lien Services Provider',
    category: 'modernization',
    categoryLabel: 'LEGACY MODERNIZATION',
    year: '2026',
    tagline: 'Keep the business knowledge. Upgrade the technology. Replaced a complex IE legacy platform.',
    description:
      'A US property research and lien services provider depended on an Internet Explorer-based application to coordinate research, documents, and operational work. Incomplete source code made the replacement a reconstruction of business knowledge as well as a technology project.',
    tone: 'blue',
    metrics: [
      { value: '100%', label: 'Browser Independence' },
      { value: '3x', label: 'Workflow Execution Speed' },
    ],
    techStack: ['React 19', 'Nutrient / PSPDFKit', 'TX Text Control', 'FusionCharts', 'TypeScript', 'Node.js'],
    deliverables: [
      'Modern responsive web platform replacing obsolete Internet Explorer dependencies',
      'Integrated Nutrient/PSPDFKit for high-fidelity document review and markup',
      'Integrated TX Text Control for in-browser Microsoft Word editing and template creation',
      'Embedded FusionCharts for real-time operational reporting and metrics tracking',
    ],
    objectives: [
      'Transition operational workflows beyond the deprecated Internet Explorer browser.',
      'Retain essential domain business logic and document processing capabilities.',
      'Integrate Word editing, PDF viewing, and reporting into unified operational workflows.',
    ],
    challenges: [
      'Incomplete and undocumented source code requiring reverse engineering of business rules.',
      'Handling diverse document formats (Word, PDF, TIFF) within the same process context.',
      'Coordinating complex multi-step actions across disparate third-party components.',
    ],
    outcomes: [
      'Complete continuity beyond the legacy browser with modern web accessibility.',
      'Integrated document tools directly within operational business workflows.',
      'A scalable, maintainable foundation established for future capability enhancements.',
    ],
  },
  {
    id: 'crm-membership',
    name: 'Integrated CRM and Membership Management',
    client: 'Professional Association & Member Network',
    category: 'crm',
    categoryLabel: 'CRM & MEMBERSHIP',
    year: '2026',
    tagline: 'Unified CRM and Association Management System connecting contacts, billing, and content.',
    description:
      'A unified CRM and Association Management System (AMS) connected contact management, membership administration, digital content and marketing tools within a coordinated operational environment.',
    tone: 'green',
    metrics: [
      { value: '85%', label: 'Admin Workload Saved' },
      { value: '100%', label: 'Consolidated Records' },
    ],
    techStack: ['Drupal', 'Mailchimp API', 'MySQL', 'REST API', 'Excel Bridges', 'Payment Gateways'],
    deliverables: [
      'Configured CRM and AMS with custom contact fields, tags, categories, and searchable records',
      'Integrated digital services connecting Drupal and Mailchimp for member-exclusive content',
      'User-friendly data import and export tools for legacy Access and Excel datasets',
      'Streamlined membership applications, automated dues invoicing, and payment processing',
      'Custom query tools, contact segmentation, operational reports, and staff training',
    ],
    objectives: [
      'Centralize contact and member information for easier access and management.',
      'Streamline membership applications, renewals, invoicing and payment collection.',
      'Provide members with secure access to exclusive content and benefits.',
      'Enable targeted communications and flexible business reporting.',
    ],
    challenges: [
      'Fragmented information: Contacts spread across spreadsheets, databases, and marketing tools.',
      'Complex integrations: Connecting Drupal, Mailchimp, and legacy Access/Excel data.',
      'Manual administration: Repetitive membership, billing, and contact-management tasks.',
      'Diverse member relationships: Managing individuals, member organizations, and primary contacts.',
    ],
    outcomes: [
      'Single consolidated record for every member, chapter, and contributing organization.',
      'Automated renewal billing that increased on-time dues collection by 35%.',
      'Seamless single sign-on access to member-only digital publications and resources.',
    ],
  },
  {
    id: 'digital-publishing',
    name: 'Digital Publishing and Learning Platform Modernization',
    client: 'Professional Education & Medical Publisher',
    category: 'web',
    categoryLabel: 'PUBLISHING & LEARNING',
    year: '2026',
    tagline: 'Integrated website for digital content, subscriptions, online learning and engagement.',
    description:
      'Delivered an integrated website for a professional education publisher, bringing digital content, subscriptions, online learning and customer engagement into one connected experience.',
    tone: 'violet',
    metrics: [
      { value: '+160%', label: 'Institutional Reach' },
      { value: '99.9%', label: 'Platform Availability' },
    ],
    techStack: ['Next.js', 'Headless CMS', 'Stripe Billing', 'CME Engine', 'REST API', 'Cloudflare Edge'],
    deliverables: [
      'Responsive website and CMS with reusable page templates, search-friendly URLs, and scheduled publishing',
      'Searchable digital archives, rich metadata, and multimedia publishing with controlled entitlements',
      'Subscription commerce with configurable pricing, promotions, group orders, and recurring renewals',
      'Continuing Medical Education (CME) testing engine with progress tracking and certificates',
      'Institutional administration portal for group member management and exportable learning reports',
      'Bidirectional API integrations with CRM, marketing automation, and subscription fulfillment',
    ],
    objectives: [
      'Improve content discovery and access across desktop and mobile devices.',
      'Simplify subscription purchases, renewals, group orders and institutional access.',
      'Support continuing medical education through online assessments and reporting.',
      'Connect publishing, CRM and marketing systems to strengthen engagement and sales.',
    ],
    challenges: [
      'Complex content: Organizing extensive archives alongside new articles, PDFs, audio, and video.',
      'Diverse access rules: Supporting subscribers, institutions, prospects, and trial users.',
      'Disconnected systems: Coordinating customer records, subscription status, and learning results.',
      'Publishing efficiency: Enabling non-technical staff to manage content without frequent developer assistance.',
    ],
    outcomes: [
      'Subscribers and institutions manage access seamlessly with instant entitlement provisioning.',
      'CME credit tracking and certificate generation automated end-to-end.',
      'Editorial staff publish multi-format digital issues independently in minutes.',
    ],
  },
  {
    id: 'cloud-crm-migration',
    name: 'CRM Modernization and Cloud Migration',
    client: 'Enterprise Organization (450+ Users)',
    category: 'crm',
    categoryLabel: 'CLOUD MIGRATION',
    year: '2026',
    tagline: 'Migration of customized on-premises Microsoft Dynamics CRM to Dynamics 365 Cloud.',
    description:
      'Migration of a highly customized, on-premises Microsoft Dynamics CRM environment to Dynamics 365 Cloud, supporting 450+ users, approximately 1 TB of data and 18 integration touchpoints.',
    tone: 'blue',
    metrics: [
      { value: '450+', label: 'Enterprise Users' },
      { value: '1 TB', label: 'Data Migrated Seamlessly' },
    ],
    techStack: ['Microsoft Dynamics 365', 'Power Platform', 'Power Automate', 'Azure SQL', 'Data Factory'],
    deliverables: [
      'Comprehensive discovery assessment documenting capabilities, dependencies, and migration risks',
      'Cloud solution architecture covering licensing, environments, identity, and security',
      'Application modernization refactoring 30+ tables and 75 workflows into Power Apps & Power Automate',
      'Data migration delivering mapping, cleansing, transformation, trial runs, and reconciliation',
      'Cloud-native integration feeds, dashboards, and reporting warehouse updates',
      'Testing, user training, post-launch stabilization, and legacy system retirement',
    ],
    objectives: [
      'Modernize business-critical CRM capabilities while minimizing operational disruption.',
      'Preserve customer records, operational workflows and 18 essential integrations.',
      'Strengthen security, access governance, auditability, and data integrity.',
      'Optimize licensing and storage costs while enabling future innovation via Power Platform and Azure.',
    ],
    challenges: [
      'Extensive customization: 30+ custom tables, 75 workflows, legacy dialogs, plugins, and web resources.',
      'Complex data migration: Preserving relationships, activities, notes, and 1 TB of attachments.',
      'Interconnected systems: Maintaining bridges with finance, customer portals, email, and docs.',
      'Operational continuity: Coordinating testing, user adoption, and production cutover.',
    ],
    outcomes: [
      'Zero downtime during cutover weekend for 450+ active global enterprise users.',
      '18 integrations modernized to supported cloud REST APIs with automated monitoring.',
      '30% lower infrastructure maintenance costs by retiring legacy on-premise servers.',
    ],
  },
  {
    id: 'digital-ethics-platform',
    name: 'Digital Ethics Guidance and Live Survey Platform',
    client: 'Healthcare Ethics & Compliance Organization',
    category: 'web',
    categoryLabel: 'COMPLIANCE & GOVERNANCE',
    year: '2026',
    tagline: 'Guided decision support, conference surveys and centralized compliance administration.',
    description:
      'A web application designed to extend an existing mobile ethics resource, combining guided decision support, conference surveys and centralized administration for healthcare compliance professionals.',
    tone: 'cyan',
    metrics: [
      { value: '13 Topics', label: 'Guided Policy Trees' },
      { value: 'Live', label: 'Audience Polling Results' },
    ],
    techStack: ['PHP', 'MySQL', 'Interactive Decision Engine', 'WebSockets', 'Chart.js', 'REST API'],
    deliverables: [
      'PHP-based web application connected to the existing administration console',
      'Interactive code navigator featuring guided decision trees across 13 ethics policy topics',
      'Contextual references including FAQs, policy sections, and downloadable decision-tree PDFs',
      'Survey management for creating and running conference sessions with unique participation codes',
      'Live polling displays with real-time graphs, vote counts, percentages, and aggregated results',
      'Administrative controls for session activation, banners, and result visibility',
    ],
    objectives: [
      'Expand access: Make ethics guidance available through both web and mobile applications.',
      'Simplify interpretation: Help users navigate complex policies through step-by-step questions.',
      'Support different audiences: Serve sales representatives, physicians and compliance professionals.',
      'Enable participation: Collect conference survey responses and display group insights.',
    ],
    challenges: [
      'Complex decision paths: Translate policy topics into branching questions with clear outcomes.',
      'Consistent experiences: Coordinate web and mobile functionality using the existing administration console.',
      'Flexible live surveys: Support multiple question formats, session access codes, and administrator controls.',
    ],
    outcomes: [
      'Compliance inquiries resolved 60% faster through automated guided decision trees.',
      'Active live polling at national conferences with instant anonymous insight displays.',
      'Single administration console managing all content across mobile and web channels.',
    ],
  },
  {
    id: 'data-cleansing-migration',
    name: 'Data Cleansing and Migration Preparation',
    client: 'Major Membership Association',
    category: 'modernization',
    categoryLabel: 'DATA & MIGRATION',
    year: '2026',
    tagline: 'Azure SQL data transformation, duplicate reconciliation, and migration readiness.',
    description:
      'Prepared membership and operational data for transition from a legacy association platform to a new management system, using Azure SQL to organize, clean and validate records.',
    tone: 'green',
    metrics: [
      { value: '99.8%', label: 'Verified Data Accuracy' },
      { value: 'Zero', label: 'Import Rework on Cutover' },
    ],
    techStack: ['Azure SQL', 'T-SQL Data Pipelines', 'Deduplication Algorithms', 'ETL Scripts', 'Excel'],
    deliverables: [
      'Structured database with source extracts loaded into Azure SQL and relationships established',
      'Data transformation scripts to clean, standardize, and transform extracted records',
      'Duplicate management routines with matching queries, likelihood scores, and automated merging',
      'Automated quality check audits for formatting, completeness, and relationship integrity',
      'Cleaned, verified datasets prepared for handoff to the destination platform team',
      'Documented exception files separating records needing review from migration-ready data',
    ],
    objectives: [
      'Improve data quality: Correct inconsistent formatting and identify incomplete records.',
      'Reduce duplication: Identify matching records and merge confirmed duplicates.',
      'Preserve relationships: Maintain connections between related member and company records.',
      'Support migration readiness: Prepare verified datasets for the destination platform.',
    ],
    challenges: [
      'Multiple source files: Load separate extracts and re-establish their relational integrity.',
      'Uncertain matches: Distinguish genuine duplicates from similar but separate member records.',
      'Data inconsistencies: Address missing information, orphaned relationships, and integrity issues.',
    ],
    outcomes: [
      'More reliable records: Cleaner, standardized data supports accurate reporting and daily operations.',
      'Fewer duplicates: Consolidated records reduce confusion and repeated member communications.',
      'Smoother migration: Prepared datasets eliminated avoidable import errors and rework.',
    ],
  },
];

export const filterCategories = [
  { id: 'all', label: 'All Case Studies' },
  { id: 'ai', label: 'Applied AI & Data' },
  { id: 'modernization', label: 'Legacy Modernization' },
  { id: 'crm', label: 'CRM & Membership' },
  { id: 'web', label: 'Web & Publishing' },
];

export function FeaturedProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const found = projectsData.find((p) => p.id === hash);
        if (found) {
          setSelectedProject(found);
        }
      }
    }
  }, []);

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="section featured-projects-section" id="portfolio">
      <div className="container">
        <SectionTitle
          label="EXPLORE OUR PROJECT WORK"
          title="Proven Deliverables. Measurable Business Impact."
          description="Explore real case studies across legacy modernization, enterprise CRM, digital publishing, and applied AI."
        />

        {/* Filter Tabs */}
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
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card reveal tone-${project.tone}`}
              onClick={() => setSelectedProject(project)}
              tabIndex={0}
              role="button"
              aria-label={`View detailed case study for ${project.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              {/* Card Graphic */}
              <div className="project-card-image">
                <ProjectCardGraphic id={project.id} title={project.name} />
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



                {/* Tech Chips */}
                <div className="project-tech-chips">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-chip">
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
                    <span>Explore Full Case Study</span>
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
            <Sparkles size={20} className="trust-icon" />
            <div>
              <strong>Applied AI &amp; BI</strong>
              <span>Intelligent document processing &amp; predictive analytics</span>
            </div>
          </div>
          <div className="trust-band-item">
            <CheckCircle2 size={20} className="trust-icon" />
            <div>
              <strong>Legacy Modernization</strong>
              <span>Connected document viewing, editing & reporting</span>
            </div>
          </div>
          <div className="trust-band-item">
            <Zap size={20} className="trust-icon" />
            <div>
              <strong>CRM &amp; Membership</strong>
              <span>Integrated member records, billing & communications</span>
            </div>
          </div>
          <div className="trust-band-item">
            <ShieldCheck size={20} className="trust-icon" />
            <div>
              <strong>Cloud CRM Migration</strong>
              <span>Migration planning, customization & data transfer</span>
            </div>
          </div>
          <div className="trust-band-action">
            <Button asChild size="lg" className="portfolio-cta-btn">
              <Link to="/contact">
                Talk to RightPPT <ArrowRight size={17} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="portfolio-cta-page-link">
              <Link to="/projects">
                Explore All Case Studies <ArrowUpRight size={17} />
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
            className={`project-modal-content tone-${selectedProject.tone} ${
              selectedProject.id === 'healthcare-ai-solutions' ? 'max-w-5xl !p-2 sm:!p-4 bg-white' : ''
            }`}
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

            {selectedProject.id === 'healthcare-ai-solutions' ? (
              <HealthcareAICaseStudyModalContent onClose={() => setSelectedProject(null)} />
            ) : (
              <>
                <div className="modal-header">
                  <span className="modal-cat-tag">{selectedProject.categoryLabel}</span>
                  <h2>{selectedProject.name}</h2>
                  <p className="modal-client">{selectedProject.client} · {selectedProject.year}</p>
                </div>

                <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-6 border border-slate-700/60 shadow-lg">
                  <ProjectCardGraphic id={selectedProject.id} title={selectedProject.name} />
                </div>

                <div className="modal-body">
                  <p className="modal-desc">{selectedProject.description}</p>

                  {selectedProject.objectives && selectedProject.objectives.length > 0 && (
                    <div className="modal-section-block">
                      <h4>BUSINESS OBJECTIVES</h4>
                      <ul className="modal-deliverables-list">
                        {selectedProject.objectives.map((obj) => (
                          <li key={obj}>
                            <Target size={16} className="text-blue-500 shrink-0" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                    <div className="modal-section-block">
                      <h4>PROJECT CHALLENGES</h4>
                      <ul className="modal-deliverables-list">
                        {selectedProject.challenges.map((ch) => (
                          <li key={ch}>
                            <AlertTriangle size={16} className="text-amber-500 shrink-0" />
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="modal-section-block">
                    <h4>PROJECT DELIVERABLES</h4>
                    <ul className="modal-deliverables-list">
                      {selectedProject.deliverables.map((d) => (
                        <li key={d}>
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.outcomes && selectedProject.outcomes.length > 0 && (
                    <div className="modal-section-block">
                      <h4>BUSINESS OUTCOMES & VALUE</h4>
                      <ul className="modal-deliverables-list">
                        {selectedProject.outcomes.map((out) => (
                          <li key={out}>
                            <Award size={16} className="text-purple-500 shrink-0" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="modal-section-block">
                    <h4>TECHNOLOGY STACK</h4>
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
                      Discuss This Solution with RightPPT <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
