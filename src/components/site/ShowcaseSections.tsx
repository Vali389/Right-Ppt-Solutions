import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Brain,
  Sparkles,
  Search,
  FileCheck2,
  FileSpreadsheet,
  Video,
  ShieldAlert,
  Eye,
  Scale,
  Truck,
  Boxes,
  Network,
  BarChart3,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Download,
  Check,
  FileText,
  Activity,
  Layers,
  Cpu,
  Clock,
  Lock,
  Radio,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from './Layout';
import { HeroTechMesh } from './TechGraphics';

/* =========================================================================
   1. AI ENABLED NETWORK SECURITY & INTELLIGENT INFRASTRUCTURE SPOTLIGHT
   ========================================================================= */
export function AISolutionsSpotlightSection() {
  const [activeTab, setActiveTab] = useState<'ai-network' | 'ai-rebates' | 'ai-legal'>('ai-network');

  const networkSecurityCards = [
    {
      title: 'Traffic Intelligence',
      desc: 'Forecast demand and support routing and capacity decisions through predictive network telemetry machine learning models.',
      icon: Activity,
      tag: 'PREDICTIVE ROUTING',
      tone: 'blue',
      metric: 'Demand Forecasting ML',
    },
    {
      title: 'Network Optimization',
      desc: 'Balance SDN controller workloads and automate resource coordination across cloud, edge and enterprise backbones.',
      icon: Network,
      tag: 'SDN BALANCING',
      tone: 'cyan',
      metric: 'Automated Load Distribution',
    },
    {
      title: 'Threat Detection',
      desc: 'Apply machine learning to intrusion detection, anomaly discovery, DDoS mitigation and encrypted traffic analysis in real time.',
      icon: ShieldAlert,
      tag: 'ML THREAT RADAR',
      tone: 'violet',
      metric: 'Sub-second Anomaly Alerts',
    },
    {
      title: 'Programmable Monitoring',
      desc: 'Develop high-performance eBPF and P4 telemetry for supported platforms with granular, kernel-level packet inspection.',
      icon: Cpu,
      tag: 'eBPF & P4 TELEMETRY',
      tone: 'green',
      metric: 'Kernel-Level Telemetry',
    },
    {
      title: 'Secure Connections',
      desc: 'Design lightweight authentication for edge nodes, IoT fleets and emerging zero-trust enterprise network architectures.',
      icon: Lock,
      tag: 'ZERO-TRUST EDGE',
      tone: 'blue',
      metric: 'Lightweight Mutual Auth',
    },
    {
      title: 'Intelligent Search & Knowledge',
      desc: 'Bring business knowledge into a searchable repository. Ask natural-language questions to find relevant documents across connected sources.',
      icon: Search,
      tag: 'MUXLY SEMANTIC SEARCH',
      tone: 'violet',
      metric: 'Natural-Language Q&A',
    },
  ];

  const rebateAICards = [
    {
      title: 'Intelligent Document Processing',
      desc: 'Digitize paper submissions, handwritten forms, scanned invoices, and PDFs. Extract purchase details and automatically route unclear handwriting for expert review.',
      icon: FileSpreadsheet,
      tag: 'OCR & HANDWRITING NLP',
      tone: 'blue',
      metric: 'Multi-Format Digitization',
    },
    {
      title: 'Automated Eligibility Validation',
      desc: 'Verify qualifying products, purchase periods, tiered reward rates, and eliminate duplicate payout claims with automated rule enforcement.',
      icon: FileCheck2,
      tag: 'RULE VERIFICATION',
      tone: 'green',
      metric: '99.5% Payout Accuracy',
    },
    {
      title: 'Invoice Product Intelligence',
      desc: 'Standardize varying distributor item codes and identify complementary or competing product purchases to surface high-margin cross-sell opportunities.',
      icon: Brain,
      tag: 'CROSS-SELL BI',
      tone: 'cyan',
      metric: 'Code Harmonization',
    },
    {
      title: 'Predictive Rebate Analytics',
      desc: 'Analyze historical redemption velocity to recommend optimal promotion structures, flag underperforming programs, and simulate budget scenarios.',
      icon: BarChart3,
      tag: 'PREDICTIVE SIMULATION',
      tone: 'violet',
      metric: 'Predictive Modeling',
    },
    {
      title: 'Omnichannel B2B Workflows',
      desc: 'Unified workflows supporting operators, distributors, sales reps, and brokers—including spreadsheet-only submissions, bulk claims, and premium rewards.',
      icon: Layers,
      tag: 'OMNICHANNEL WORKFLOWS',
      tone: 'blue',
      metric: 'Consolidated Summaries',
    },
    {
      title: 'SOC 2 & CCPA Data Governance',
      desc: 'Role-based access controls, encryption, audit trails, and automated confidential-data redaction ensuring compliance and client data ownership.',
      icon: ShieldAlert,
      tag: 'SECURITY & GOVERNANCE',
      tone: 'green',
      metric: 'SOC 2 & CCPA Compliant',
    },
  ];

  const legalAICards = [
    {
      title: 'Contract Drafting',
      desc: 'Generate agreements using approved enterprise templates and vetted clause libraries with automated jurisdiction customization.',
      icon: FileText,
      tag: 'CLAUSE LIBRARIES',
      tone: 'blue',
    },
    {
      title: 'Assisted Legal Review',
      desc: 'Identify potentially risky terms, conflicting clauses and compliance gaps for rapid attorney and corporate counsel review.',
      icon: Scale,
      tag: 'RISK DETECTION',
      tone: 'violet',
    },
    {
      title: 'Approvals & E-Signatures',
      desc: 'Coordinate role-based multi-tier approval sequences, legally compliant cryptographic signing, and tamper-proof audit trails.',
      icon: CheckCircle2,
      tag: 'AUDIT TRAILS',
      tone: 'green',
    },
    {
      title: 'Centralized Repository',
      desc: 'Organize, index, search and retrieve thousands of executed contracts and supporting addenda with instant version comparison.',
      icon: Boxes,
      tag: 'CONTRACT VAULT',
      tone: 'cyan',
    },
    {
      title: 'Compliance Tracking',
      desc: 'Monitor statutory requirements, post-closing obligations, SLA renewals and expiry deadlines with automated multi-channel alerts.',
      icon: ShieldAlert,
      tag: 'OBLIGATION MONITOR',
      tone: 'green',
    },
    {
      title: 'Due Diligence & Analytics',
      desc: 'Consolidate disparate records for M&A review, uncover systemic contract liabilities, and surface high-level governance insights.',
      icon: BarChart3,
      tag: 'GOVERNANCE BI',
      tone: 'violet',
    },
  ];

  return (
    <section className="section ai-spotlight-modern-section" id="ai-solutions">
      <div className="ai-ambient-mesh" />
      <div className="container">
        <div className="ai-showcase-header text-center reveal">
          <div className="ai-pill-eyebrow">
            <span className="ai-pulse-dot" />
            <span>AI ENABLED NETWORK SECURITY &amp; INTELLIGENCE</span>
          </div>
          <h2>
            AI-Enabled Network Security &amp; <span className="hero-brand-accent">Intelligent Infrastructure.</span>
          </h2>
          <p className="ai-showcase-lead">
            Develop smarter networks with traffic prediction, automated control and threat detection while automating routine business workflows and data extraction.
          </p>

          {/* Segmented Switcher Tabs */}
          <div className="ai-mode-switcher" role="tablist">
            <button
              type="button"
              className={`ai-switch-btn ${activeTab === 'ai-network' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('ai-network')}
              role="tab"
              aria-selected={activeTab === 'ai-network'}
            >
              <Network size={16} />
              <span>AI-Enabled Network Security</span>
            </button>
            <button
              type="button"
              className={`ai-switch-btn ${activeTab === 'ai-rebates' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('ai-rebates')}
              role="tab"
              aria-selected={activeTab === 'ai-rebates'}
            >
              <FileSpreadsheet size={16} />
              <span>Rebate &amp; Document Intelligence</span>
              <span className="ai-tab-badge">Featured</span>
            </button>
            <button
              type="button"
              className={`ai-switch-btn ${activeTab === 'ai-legal' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('ai-legal')}
              role="tab"
              aria-selected={activeTab === 'ai-legal'}
            >
              <Scale size={16} />
              <span>Legal &amp; Compliance Operations</span>
            </button>
          </div>
        </div>

        {/* Tab 1: AI-Enabled Network Security Grid */}
        {activeTab === 'ai-network' && (
          <div className="ai-cards-interactive-grid reveal">
            {networkSecurityCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className={`ai-interactive-card tone-${card.tone}`}>
                  <div className="ai-card-glow" />
                  <div className="ai-card-top">
                    <span className="ai-card-icon">
                      <Icon size={20} />
                    </span>
                    <span className="ai-card-tag">{card.tag}</span>
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                  <div className="ai-card-footer">
                    <span className="ai-metric-tag">
                      <Check size={12} /> {card.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Rebate & Document Intelligence */}
        {activeTab === 'ai-rebates' && (
          <div className="rebate-feature-showcase reveal">
            <div className="rebate-showcase-grid">
              <div className="rebate-cards-subgrid">
                {rebateAICards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className={`ai-interactive-card tone-${card.tone}`}>
                      <div className="ai-card-glow" />
                      <div className="ai-card-top">
                        <span className="ai-card-icon">
                          <Icon size={18} />
                        </span>
                        <span className="ai-card-tag">{card.tag}</span>
                      </div>
                      <h4>{card.title}</h4>
                      <p>{card.desc}</p>
                      <div className="ai-card-footer">
                        <span className="ai-metric-tag">
                          <Check size={12} /> {card.metric}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Technical Blueprint & Summary */}
              <div className="rebate-blueprint-panel">
                <div className="blueprint-badge">
                  <span className="status-dot-pulse" />
                  <span>PRODUCTION ARCHITECTURE BLUEPRINT</span>
                </div>
                <h3>B2B Rebate Engine &amp; Predictive BI</h3>
                <p className="blueprint-lead">
                  Automating end-to-end rebate operations for food manufacturers, distributors, brokers, and restaurant operators with human approval checkpoints.
                </p>

                <div className="blueprint-pillars-strip">
                  <div className="blueprint-pillar-item">
                    <span className="pillar-tag">ACCELERATED WORKFLOW</span>
                    <span>Automated intake through payment approval</span>
                  </div>
                  <div className="blueprint-pillar-item">
                    <span className="pillar-tag">ZERO LEAKAGE</span>
                    <span>Multi-tier rule verification &amp; audit security</span>
                  </div>
                  <div className="blueprint-pillar-item">
                    <span className="pillar-tag">DATA OWNERSHIP</span>
                    <span>Private cloud deployment with SOC 2 safeguards</span>
                  </div>
                </div>

                <div className="blueprint-highlights">
                  <div className="highlight-row">
                    <CheckCircle2 size={15} />
                    <span>Multi-format paper, invoice, PDF &amp; spreadsheet extraction</span>
                  </div>
                  <div className="highlight-row">
                    <CheckCircle2 size={15} />
                    <span>Automated rule engine for tiered quantities &amp; purchase dates</span>
                  </div>
                  <div className="highlight-row">
                    <CheckCircle2 size={15} />
                    <span>Invoice Product Intelligence &amp; Cross-Selling BI</span>
                  </div>
                </div>

                <div className="rebate-feature-cta">
                  <Button asChild size="lg" className="rebate-primary-btn">
                    <Link to="/projects">
                      <span>Explore Full Case Study</span>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rebate-secondary-btn">
                    <Link to="/contact">
                      <span>Discuss Your Automation Goal</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Legal & Compliance Operations Grid */}
        {activeTab === 'ai-legal' && (
          <div className="ai-cards-interactive-grid reveal">
            {legalAICards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className={`ai-interactive-card tone-${card.tone}`}>
                  <div className="ai-card-glow" />
                  <div className="ai-card-top">
                    <span className="ai-card-icon">
                      <Icon size={20} />
                    </span>
                    <span className="ai-card-tag">{card.tag}</span>
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                  <div className="ai-card-footer">
                    <span className="ai-metric-tag">
                      <Check size={12} /> Enterprise Ready
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Call to action bar */}
        <div className="ai-showcase-action-bar reveal">
          <div className="ai-action-text">
            <strong>Have a business process or network you want to improve?</strong>
            <span>Talk to RightPPT to build smarter systems with traffic prediction, automated control and practical AI.</span>
          </div>
          <div className="ai-action-buttons">
            <Button asChild size="lg" className="ai-knowmore-btn">
              <Link to="/contact">
                <span>Talk to an AI &amp; Network Specialist</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2. SMARTER TECHNOLOGY FOR LOGISTICS & SUPPLY CHAINS SPOTLIGHT
   ========================================================================= */
export function LogisticsOperationalSpotlightSection() {
  const logisticsCapabilities = [
    {
      title: 'Custom Business Applications',
      desc: 'Tailored solutions for quoting, carrier sourcing, supplier coordination, inventory management and delivery planning.',
      icon: Boxes,
      metric: 'Zero Manual Spreadsheets',
      tag: 'APPLICATION PLATFORMS',
    },
    {
      title: 'Enterprise & Third Party Integrations',
      desc: 'Connect TMS, WMS, ERP, CRM, carrier and accounting platforms to eliminate duplicate entry and accelerate data flow.',
      icon: Network,
      metric: 'TMS · WMS · ERP · EDI Sync',
      tag: 'SYSTEM CONNECTIVITY',
    },
    {
      title: 'AI and Intelligent Search',
      desc: 'Automate RFQ preparation, document extraction and carrier follow-ups. Find answers across business systems while retaining human approval.',
      icon: Search,
      metric: 'Automated RFQ Matching',
      tag: 'OPERATIONAL AI',
    },
    {
      title: 'Shipment Visibility & Exception Alerts',
      desc: 'Track shipments in real time, detect arrival anomalies early, and dispatch alerts to the right teams before disruptions escalate.',
      icon: Activity,
      metric: 'Live Disruption Telemetry',
      tag: 'EXCEPTION MANAGEMENT',
    },
    {
      title: 'Mobile and Field Applications',
      desc: 'Digitize driver assignments, barcode scanning, asset verification, photographs, signatures and proof of delivery.',
      icon: Smartphone,
      metric: 'Offline-First Scanning',
      tag: 'FIELD MOBILITY',
    },
    {
      title: 'E-commerce & Fulfilment Operations',
      desc: 'Connect orders, stock, shipping and returns to streamline warehouse operations and elevate customer transparency.',
      icon: Truck,
      metric: 'Real-Time Stock & Returns',
      tag: 'FULFILMENT ORCHESTRATION',
    },
  ];

  const workflowSteps = [
    { num: '01', title: 'Automated Quoting & Sourcing', desc: 'RFQ matching across contracted carriers with instant cost comparison.' },
    { num: '02', title: 'Multi-System Synchronization', desc: 'Live dispatch data synced between TMS, WMS, and accounting platforms.' },
    { num: '03', title: 'In-Transit Exception Telemetry', desc: 'Predictive ETA monitoring with automated escalation to field coordinators.' },
    { num: '04', title: 'Digital Proof-of-Delivery', desc: 'Geo-tagged barcode scans and sign-on-glass stored directly into the order record.' },
    { num: '05', title: 'Reconciled Margin Intelligence', desc: 'Actual freight charges measured against quoted targets with cost anomaly alerts.' },
  ];

  return (
    <section className="section logistics-spotlight-modern-section" id="logistics-solutions">
      <div className="container">
        <SectionTitle
          label="FREIGHT, INVENTORY & OPERATIONAL CONTROL"
          title="Smarter Technology for Logistics & Supply Chains"
          description="RightPPT connects your applications, automates manual workflows, and turns operational data into actionable insights—helping you move freight, inventory, and orders with greater control."
        />

        {/* Bento Grid */}
        <div className="logistics-bento-grid reveal">
          {logisticsCapabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="logistics-bento-card">
                <div className="bento-card-top">
                  <div className="bento-icon-box">
                    <Icon size={20} />
                  </div>
                  <span className="bento-tag">{item.tag}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="bento-card-footer">
                  <span className="bento-metric-pill">
                    <CheckCircle2 size={12} />
                    <span>{item.metric}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Operational Console & Telemetry Dashboard */}
        <div className="logistics-interactive-console-wrap reveal">
          <div className="console-hud-frame">
            {/* Header bar */}
            <div className="console-hud-header">
              <div className="hud-dots">
                <span className="hud-dot red" />
                <span className="hud-dot yellow" />
                <span className="hud-dot green" />
              </div>
              <div className="hud-title-wrap">
                <span className="hud-title">RightPPT Global Dispatch &amp; Margin Intelligence Console</span>
                <span className="hud-live-tag">
                  <span className="hud-live-dot" /> LIVE STREAM · 12ms
                </span>
              </div>
            </div>

            <div className="console-hud-body">
              {/* Telemetry Architecture Capabilities Strip */}
              <div className="hud-kpi-row">
                <div className="hud-kpi-card">
                  <span className="kpi-label">Active Freight Dispatches</span>
                  <div className="kpi-val-row">
                    <strong className="kpi-status-text">Active Sync</strong>
                    <span className="kpi-badge green">Multi-Carrier</span>
                  </div>
                  <span className="kpi-desc">Consolidated across 40+ partner carrier APIs</span>
                </div>
                <div className="hud-kpi-card">
                  <span className="kpi-label">Reconciled Margin Intelligence</span>
                  <div className="kpi-val-row">
                    <strong className="kpi-status-text">Cost Shield</strong>
                    <span className="kpi-badge blue">Real-time</span>
                  </div>
                  <span className="kpi-desc">Actual vs quoted rates aligned automatically</span>
                </div>
                <div className="hud-kpi-card">
                  <span className="kpi-label">Dynamic Routing Intelligence</span>
                  <div className="kpi-val-row">
                    <strong className="kpi-status-text">Automated</strong>
                    <span className="kpi-badge cyan">Exception-Free</span>
                  </div>
                  <span className="kpi-desc">Zero manual reroute bottlenecks</span>
                </div>
                <div className="hud-kpi-card">
                  <span className="kpi-label">Paperless PoD Verification</span>
                  <div className="kpi-val-row">
                    <strong className="kpi-status-text">Instant PoD</strong>
                    <span className="kpi-badge green">Geo-Tagged</span>
                  </div>
                  <span className="kpi-desc">Instant digital proof of delivery capture</span>
                </div>
              </div>

              {/* End-to-End Workflow Stages */}
              <div className="hud-workflow-row">
                <div className="workflow-title-wrap">
                  <span className="workflow-eyebrow">AUTOMATED FREIGHT PIPELINE</span>
                  <h4>Integrated Order-to-Delivery Lifecycle</h4>
                </div>
                <div className="workflow-steps-grid">
                  {workflowSteps.map((step, idx) => (
                    <div key={step.num} className="workflow-step-card">
                      <div className="workflow-step-top">
                        <span className="step-num">{step.num}</span>
                        {idx < workflowSteps.length - 1 && <span className="step-connector" />}
                      </div>
                      <h5>{step.title}</h5>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connected Platforms Bar */}
              <div className="hud-integrations-bar">
                <span className="integrations-label">ENTERPRISE SYSTEM CONNECTIONS:</span>
                <div className="integrations-badges">
                  <span>SAP ERP</span>
                  <span>Oracle TMS</span>
                  <span>Manhattan WMS</span>
                  <span>Carrier EDI / API</span>
                  <span>Barcode PoD</span>
                  <span>NetSuite / QuickBooks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom Action Row */}
        <div className="logistics-bottom-actions reveal flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="logistics-primary-btn">
            <Link to="/services/$serviceId" params={{ serviceId: 'logistics-solutions' }}>
              <span>Know More — Logistics Solutions</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
          <a
            href={`mailto:info@rightppt.com?subject=${encodeURIComponent('Download Detailed Logistics Service Portfolio')}&body=${encodeURIComponent('Hello RightPPT Team,\n\nPlease email your detailed Logistics Service Portfolio.\n\nThank you!')}`}
            className="portfolio-download-btn inline-flex items-center gap-2"
          >
            <Download size={16} /> KNOW MORE — Download Our Detailed Service Portfolio (info@rightppt.com)
          </a>
          <Button asChild variant="outline" size="lg" className="logistics-secondary-btn">
            <Link to="/contact">
              <span>Let’s Discuss Your Operational Challenges</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. CLIENT SUCCESS STORY SPOTLIGHT (US PROPERTY RESEARCH & DOCUMENT TOOLS)
   ========================================================================= */
export function CustomerSuccessStorySection() {
  return (
    <section className="section success-story-modern-section" id="case-study-modernization">
      <div className="container">
        <div className="success-story-card reveal">
          <div className="story-badge-row">
            <span className="story-pill">
              <span className="pill-dot green" />
              CUSTOMER SUCCESS STORY
            </span>
            <span className="story-industry-tag">US Property Research &amp; Lien Services</span>
          </div>

          <div className="story-grid-layout">
            <div className="story-main-copy">
              <h3>
                Replacing a complex legacy platform with <span className="hero-brand-accent">connected document capabilities.</span>
              </h3>
              <p className="story-lead">
                A US property research and lien services provider depended on an Internet Explorer-based application to coordinate research, documents, and operational work. Incomplete source code made the replacement a reconstruction of business knowledge as well as a technology project.
              </p>
              <p className="story-body">
                RightPPT delivered a modern replacement integrating <strong>Nutrient/PSPDFKit</strong>, <strong>TX Text Control</strong>, and <strong>FusionCharts</strong> for document review, Word editing, and operational reporting.
              </p>

              <div className="story-challenges-box">
                <strong>The Architectural Complexity:</strong>
                <p>
                  Making these technologies work seamlessly within the same business process: handling different document formats (Word, PDF, TIFF), retaining the correct order context, and coordinating actions across application components without data fragmentation.
                </p>
              </div>

              <div className="story-metrics-grid">
                <div className="story-metric-item">
                  <strong>Browser Independence</strong>
                  <span>Continuity beyond legacy IE browser</span>
                </div>
                <div className="story-metric-item">
                  <strong>Word, PDF, TIFF</strong>
                  <span>Connected directly to operational records</span>
                </div>
                <div className="story-metric-item">
                  <strong>Modern Foundation</strong>
                  <span>Future-proof web stack for scalable enhancements</span>
                </div>
              </div>
            </div>

            <div className="story-quote-card">
              <div className="quote-badge">WHY RIGHTPPT</div>
              <blockquote>
                “We understand the workflow behind the screen. Successful modernization depends on details: how tasks move, how documents connect to records, and which business rules must survive the transition.”
              </blockquote>
              <div className="story-author-info">
                <strong>Engineering &amp; Modernization Lead</strong>
                <span>Right PPT Solutions</span>
              </div>

              <div className="story-action-wrap">
                <Button asChild size="lg" className="story-talk-btn">
                  <Link to="/contact">
                    <span>Let’s Improve Your Critical Systems</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. ENTERPRISE INTEGRATIONS & ECOSYSTEM LOGO MARQUEE
   ========================================================================= */
export function IntegrationEcosystemTicker() {
  const ecosystems = [
    'Microsoft Dynamics 365',
    'Azure SQL Enterprise',
    'Nutrient / PSPDFKit',
    'TX Text Control',
    'FusionCharts BI',
    'Drupal CMS',
    'Mailchimp Automation',
    'eBPF & P4 Telemetry',
    'Microsoft Power Platform',
    'SAP & ERP Connectors',
    'Muxly Semantic Search',
    'Docker & Kubernetes',
  ];

  return (
    <div className="ecosystem-marquee-bar" aria-hidden="true">
      <div className="marquee-track">
        {[...ecosystems, ...ecosystems].map((item, idx) => (
          <div key={idx} className="marquee-badge">
            <span className="marquee-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
