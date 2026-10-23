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
  Download,
  Check,
  FileText,
  Activity,
  Layers,
  Cpu,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from './Layout';
import technology from '@/assets/technology.jpg';
import servicesHero from '@/assets/services-hero.jpg';

/* =========================================================================
   1. AI SOLUTIONS FOR EVERYDAY BUSINESS & LEGAL OPERATIONS SHOWCASE
   ========================================================================= */
export function AISolutionsSpotlightSection() {
  const [activeTab, setActiveTab] = useState<'ai-business' | 'ai-legal'>('ai-business');

  const businessAICards = [
    {
      title: 'Content and Marketing',
      desc: 'Create articles, images, podcasts and email or social campaigns. Translate content and turn multilingual recordings into transcripts and summaries.',
      icon: Sparkles,
      tag: 'CONTENT ENGINE',
      tone: 'blue',
      metric: 'Auto-Transcription & Copy',
    },
    {
      title: 'Intelligent Search and Knowledge',
      desc: 'Bring business knowledge into a searchable repository. Ask questions in everyday language to find relevant documents, resources and answers across business sources.',
      icon: Search,
      tag: 'MUXLY SEMANTIC SEARCH',
      tone: 'violet',
      metric: 'Natural-Language Q&A',
    },
    {
      title: 'Document Automation',
      desc: 'Extract information from invoices, forms and contracts. Classify documents and route them into business workflows to reduce manual processing.',
      icon: FileSpreadsheet,
      tag: 'OCR & DATA EXTRACTION',
      tone: 'green',
      metric: '98% Data Extraction Accuracy',
    },
    {
      title: 'Personalized Recommendations',
      desc: 'Recommend products, content and services based on user interests and behavior to improve discovery, cross-sell conversion, and member engagement.',
      icon: Brain,
      tag: 'BEHAVIORAL AI',
      tone: 'cyan',
      metric: '+35% Engagement Uplift',
    },
    {
      title: 'Video Search and Insights',
      desc: 'Search webinars, training recordings and video archives. Generate summaries, extract key topics and automatically tag multimedia content.',
      icon: Video,
      tag: 'MULTIMEDIA AI',
      tone: 'violet',
      metric: 'Automated Timestamp Tagging',
    },
    {
      title: 'Visual Monitoring & Quality Checks',
      desc: 'Detect objects for inventory, asset tracking and quality checks. Flag inappropriate text, images, barcodes and video feeds for human review.',
      icon: Eye,
      tag: 'COMPUTER VISION',
      tone: 'blue',
      metric: 'Sub-Second Detection',
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
            <span>APPLIED ENTERPRISE INTELLIGENCE</span>
          </div>
          <h2>
            AI Solutions for <span className="hero-brand-accent">Everyday Business &amp; Operations.</span>
          </h2>
          <p className="ai-showcase-lead">
            RightPPT helps organizations automate routine work, find information faster, protect legal obligations, and deliver personalized experiences through practical AI.
          </p>

          {/* Segmented Switcher Tabs */}
          <div className="ai-mode-switcher" role="tablist">
            <button
              type="button"
              className={`ai-switch-btn ${activeTab === 'ai-business' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('ai-business')}
              role="tab"
              aria-selected={activeTab === 'ai-business'}
            >
              <Brain size={16} />
              <span>Everyday Business AI</span>
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

        {/* Tab 1: Everyday Business AI Grid */}
        {activeTab === 'ai-business' && (
          <div className="ai-cards-interactive-grid reveal">
            {businessAICards.map((card) => {
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

        {/* Tab 2: Legal & Compliance Operations Grid */}
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
            <strong>Have a business process you want to improve with AI?</strong>
            <span>Talk to RightPPT to automate workflows while retaining human approval for critical decisions.</span>
          </div>
          <div className="ai-action-buttons">
            <Button asChild size="lg" className="ai-knowmore-btn">
              <Link to="/services/$serviceId" params={{ serviceId: 'ai-solutions' }}>
                <span>Know More — Explore Our AI Capabilities</span>
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
    },
    {
      title: 'Enterprise & Third Party Integrations',
      desc: 'Connect TMS, WMS, ERP, CRM, carrier and accounting systems to reduce duplicate entry and improve information flow.',
      icon: Network,
      metric: 'TMS · WMS · ERP · CRM API Sync',
    },
    {
      title: 'AI and Intelligent Search',
      desc: 'Automate RFQ preparation, document extraction and carrier follow-ups. Find answers across business systems while retaining human approval.',
      icon: Search,
      metric: 'Automated RFQ Matching',
    },
    {
      title: 'Shipment Visibility & Exception Management',
      desc: 'Track shipments, monitor arrival changes and route alerts to responsible teams so they can address disruptions earlier.',
      icon: Activity,
      metric: 'Real-Time Disruption Triage',
    },
    {
      title: 'Mobile and Field Applications',
      desc: 'Digitize driver assignments, barcode scanning, asset verification, photographs, signatures and proof of delivery.',
      icon: Smartphone,
      metric: 'Instant Digital Proof of Delivery',
    },
    {
      title: 'Dashboards and Margin Intelligence',
      desc: 'Monitor operational performance, identify cost overruns and compare actual margins with quoted targets using consistent, reconciled data.',
      icon: BarChart3,
      metric: 'Reconciled Quoted vs Actual Margin',
    },
  ];

  return (
    <section className="section logistics-spotlight-section" id="logistics">
      <div className="container">
        <div className="logistics-spotlight-wrapper reveal">
          <div className="logistics-copy-col">
            <div className="logistics-pill-eyebrow">
              <Truck size={14} />
              <span>LOGISTICS &amp; SUPPLY CHAIN INNOVATION</span>
            </div>
            <h2>
              Smarter Technology for <span className="brand-italic-accent">Logistics, Freight &amp; E-commerce.</span>
            </h2>
            <p className="logistics-lead">
              RightPPT connects your applications, automates manual workflows and turns operational data into actionable insights—helping you move freight, inventory and orders with greater control.
            </p>

            <div className="logistics-features-list">
              {logisticsCapabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="logistics-feature-item">
                    <span className="logistics-item-icon">
                      <Icon size={18} />
                    </span>
                    <div className="logistics-item-text">
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                      <span className="logistics-item-pill">
                        <Check size={11} /> {item.metric}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="logistics-action-row">
              <Button asChild size="lg" className="logistics-portfolio-btn">
                <Link to="/services/$serviceId" params={{ serviceId: 'logistics-solutions' }}>
                  <span>Know More — Logistics Solutions</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="logistics-contact-btn">
                <Link to="/contact">
                  <span>Let’s Discuss Operational Challenges</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="logistics-visual-col">
            <div className="logistics-dashboard-mockup">
              <div className="mockup-header-bar">
                <div className="mockup-dots">
                  <span className="mockup-dot red" />
                  <span className="mockup-dot yellow" />
                  <span className="mockup-dot green" />
                </div>
                <span className="mockup-title">RightPPT Dispatch &amp; Margin Command Console</span>
              </div>

              <div className="mockup-body">
                {/* Metric Strip */}
                <div className="mockup-metric-row">
                  <div className="mockup-stat-card">
                    <span className="stat-label">Active Freight Dispatches</span>
                    <strong className="stat-val">1,248</strong>
                    <span className="stat-sub green">99.4% On Schedule</span>
                  </div>
                  <div className="mockup-stat-card">
                    <span className="stat-label">Margin Reconciliation</span>
                    <strong className="stat-val">+18.4%</strong>
                    <span className="stat-sub blue">Cost Overrun Shield</span>
                  </div>
                </div>

                {/* Simulated Shipment Pipeline */}
                <div className="mockup-stream-box">
                  <div className="stream-header">
                    <span>Live Exception Triage &amp; Driver PoD</span>
                    <span className="stream-live-badge">CONNECTED</span>
                  </div>
                  <div className="stream-items">
                    <div className="stream-row ok">
                      <CheckCircle2 size={14} />
                      <span>Carrier Sourcing: RFQ auto-awarded to pre-approved freight pod</span>
                      <span className="time">Just now</span>
                    </div>
                    <div className="stream-row active">
                      <Activity size={14} />
                      <span>Driver Barcode Scan: Milestone verified in warehouse node</span>
                      <span className="time">2m ago</span>
                    </div>
                    <div className="stream-row alert">
                      <Clock size={14} />
                      <span>Arrival Adjustment: Route alert forwarded to operations</span>
                      <span className="time">7m ago</span>
                    </div>
                  </div>
                </div>

                {/* Integration Badges */}
                <div className="mockup-integration-tags">
                  <span>TMS &amp; WMS</span>
                  <span>SAP &amp; ERP</span>
                  <span>Carrier EDI</span>
                  <span>Barcode PoD</span>
                  <span>QuickBooks/Netsuite</span>
                </div>
              </div>
            </div>
          </div>
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
                  <strong>100%</strong>
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
