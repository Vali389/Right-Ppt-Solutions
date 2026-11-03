import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Star,
  Quote,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Linkedin,
  Award,
  Users,
  Sparkles,
  HeartHandshake,
  TrendingUp,
  Clock,
  Target,
  MessageSquare,
} from 'lucide-react';
import { Layout, Hero, CTA } from '@/components/site/Layout';
import { Button } from '@/components/ui/button';
import { customerDelightStories, CustomerDelightStory, meta } from '@/components/site/data';
import studioHero from '@/assets/studio-hero.jpg';

export const Route = createFileRoute('/customer-delight')({
  head: () =>
    meta(
      'Customer Delight & Client Testimonials | Right PPT Solutions',
      'Read unfiltered reviews and endorsements from executive leaders, association directors, and tech partners who partner with David and RightPPT Solutions.'
    ),
  component: CustomerDelightPage,
});

const filterTabs = [
  { id: 'all', label: 'All Endorsements (7)' },
  { id: 'associations', label: 'Associations & Nonprofits' },
  { id: 'executive', label: 'Executive Leadership & Advisory' },
  { id: 'software', label: 'Software & Infrastructure' },
];

function CustomerDelightPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredStories = customerDelightStories.filter((story) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'associations') {
      return (
        story.organization.includes('AIA') ||
        story.organization.includes('Architects') ||
        story.organization.includes('APhA') ||
        story.organization.includes('Beacon')
      );
    }
    if (activeTab === 'executive') {
      return (
        story.title.includes('CEO') ||
        story.title.includes('Chief Executive') ||
        story.organization.includes('2040') ||
        story.organization.includes('Integrity')
      );
    }
    if (activeTab === 'software') {
      return (
        story.organization.includes('SGTech') ||
        story.organization.includes('Demand') ||
        story.sectorTag.includes('Software') ||
        story.sectorTag.includes('Infrastructure')
      );
    }
    return true;
  });

  return (
    <Layout>
      {/* 1. Executive Hero */}
      <Hero
        image={studioHero}
        eyebrow="EXECUTIVE TRUST · PROVEN TRACK RECORD · REAL IMPACT"
        title={
          <>
            Customer <span className="hero-brand-accent">Delight.</span>
          </>
        }
        description="Direct, unfiltered feedback from business owners, association executives, and technology leaders who partner with David and the RightPPT Solutions team to achieve their mission-critical goals."
      />

      {/* 2. Trust Metrics Band */}
      <section className="pillars-band customer-delight-metrics-band">
        <div className="container">
          <div className="pillars-grid customer-delight-stats-grid">
            <div className="pillar tone-blue">
              <div className="pillar-icon">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3>100% Client Endorsement</h3>
                <p>Every client partner affirms dedication, transparency, and superior delivery.</p>
              </div>
              <span className="pillar-number">01</span>
            </div>
            <div className="pillar tone-green">
              <div className="pillar-icon">
                <Clock size={24} />
              </div>
              <div>
                <h3>On Time &amp; Within Budget</h3>
                <p>Rigorous project governance with no hidden costs or scope creep.</p>
              </div>
              <span className="pillar-number">02</span>
            </div>
            <div className="pillar tone-violet">
              <div className="pillar-icon">
                <Award size={24} />
              </div>
              <div>
                <h3>Multi-Year Collaboration</h3>
                <p>Long-term trusted relationships spanning complex, multi-phase systems.</p>
              </div>
              <span className="pillar-number">03</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Customer Delight Testimonials Showcase */}
      <section className="section customer-delight-main-section">
        <div className="container">
          <div className="section-heading text-center max-w-4xl mx-auto mb-10">
            <span className="eyebrow">WHAT OUR PARTNERS SAY</span>
            <h2>Authentic Reviews From Respected Industry Leaders</h2>
            <p>
              Explore firsthand accounts of how RightPPT combines people, process, and technology to deliver
              lasting value for prominent associations, software companies, and enterprise organizations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="customer-delight-filter-bar mb-10 flex flex-wrap justify-center gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`delight-tab-btn ${activeTab === tab.id ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="customer-delight-grid">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className={`customer-delight-card tone-${story.tone} reveal is-visible`}
              >
                <div className="delight-card-header">
                  <div className="delight-card-badge-row">
                    <span className="delight-verified-badge">
                      <ShieldCheck size={14} /> {story.verifiedBadge}
                    </span>
                    {story.metric && (
                      <span className="delight-metric-tag">{story.metric}</span>
                    )}
                  </div>
                  <div className="delight-card-stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={16} className="star-filled" fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>

                <div className="delight-card-quote">
                  <Quote className="delight-quote-icon" size={32} />
                  <blockquote>“{story.quote}”</blockquote>
                </div>

                <div className="delight-card-highlights">
                  {story.highlights.map((h, idx) => (
                    <span key={idx} className="delight-highlight-pill">
                      <CheckCircle2 size={12} /> {h}
                    </span>
                  ))}
                </div>

                <div className="delight-card-footer">
                  <div className="delight-author-avatar">
                    <span>{story.initials}</span>
                  </div>
                  <div className="delight-author-info">
                    <h4>{story.name}</h4>
                    <span className="delight-author-title">{story.title}</span>
                    <span className="delight-author-org">
                      <Building2 size={13} className="inline mr-1" />
                      {story.organization}
                    </span>
                  </div>
                </div>

                {story.linkedin && (
                  <div className="delight-card-linkedin-action">
                    <a
                      href={story.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="delight-linkedin-btn"
                    >
                      <Linkedin size={15} />
                      <span>View LinkedIn Profile</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Executive Spotlight: American Institute of Architects & 2040 Digital */}
      <section className="section executive-spotlight-section">
        <div className="container">
          <div className="spotlight-inner-box reveal">
            <div className="spotlight-header">
              <span className="eyebrow text-cyan-400">ENTERPRISE CASE SPOTLIGHT</span>
              <h3>American Institute of Architects (AIA) — Contract Documents</h3>
            </div>
            <div className="spotlight-body">
              <div className="spotlight-quote">
                <Quote size={40} className="spotlight-quote-mark" />
                <p>
                  “David was a consistent bright beacon in a highly complex and challenging environment. He was
                  unwavering in his support to the team and his clear, transparent communications to our leadership team.
                  He has been a tremendous asset to our team, greatly assisting us to achieve our technology goals. Even when
                  obstacles arose, David was the one person we knew we could turn to for important insights that generated
                  results.”
                </p>
                <div className="spotlight-signer">
                  <strong>Deborah DeBernard</strong>
                  <span>SVP - Emeritus, American Institute of Architects (AIA)</span>
                </div>
              </div>
              <div className="spotlight-meta-cards">
                <div className="spotlight-meta-item">
                  <ShieldCheck size={24} className="text-primary" />
                  <div>
                    <strong>High Complexity Replatforming</strong>
                    <p>Orchestrated distributed teams across legal contract document management workflows.</p>
                  </div>
                </div>
                <div className="spotlight-meta-item">
                  <Target size={24} className="text-emerald-500" />
                  <div>
                    <strong>Direct Executive Insights</strong>
                    <p>Transparent communication with association board &amp; executive sponsors.</p>
                  </div>
                </div>
                <div className="spotlight-meta-item">
                  <TrendingUp size={24} className="text-purple-500" />
                  <div>
                    <strong>Measurable Technology Delivery</strong>
                    <p>Mission-critical software milestones delivered on schedule.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Tenets of RightPPT Client Relationships */}
      <section className="section why-delight-section">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">THE RIGHT COMBINATION</span>
            <h2>Why Technology Leaders Choose to Stay With RightPPT</h2>
            <p>
              We treat every engagement as a true partnership—combining deep architectural capability with senior-level
              accountability.
            </p>
          </div>

          <div className="delight-principles-grid">
            <div className="delight-principle-card">
              <div className="principle-icon-bubble tone-blue">
                <Users size={22} />
              </div>
              <h4>Direct Access to Senior Leadership</h4>
              <p>
                No layers of junior intermediaries. You work directly with David and veteran senior architects who know your
                business inside and out.
              </p>
            </div>
            <div className="delight-principle-card">
              <div className="principle-icon-bubble tone-green">
                <ShieldCheck size={22} />
              </div>
              <h4>Financial &amp; Technical Optimization</h4>
              <p>
                We proactively search for ways to save client budget, optimize cloud infrastructure, and eliminate redundant
                software licensing.
              </p>
            </div>
            <div className="delight-principle-card">
              <div className="principle-icon-bubble tone-violet">
                <Sparkles size={22} />
              </div>
              <h4>Willingness to Go Beyond Scope</h4>
              <p>
                When unforeseen challenges appear outside standard contracts, our team steps up to ensure your overall ecosystem
                succeeds.
              </p>
            </div>
            <div className="delight-principle-card">
              <div className="principle-icon-bubble tone-cyan">
                <Clock size={22} />
              </div>
              <h4>Proactive Check-Ins &amp; Transparency</h4>
              <p>
                Frequent, transparent milestones keep projects predictable, on time, and aligned with leadership expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Consultation CTA */}
      <CTA />
    </Layout>
  );
}
