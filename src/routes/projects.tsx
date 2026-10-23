import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  X,
  Target,
  AlertTriangle,
  Award,
  Zap,
} from 'lucide-react';
import { Layout, Hero, CTA } from '@/components/site/Layout';
import { Button } from '@/components/ui/button';
import { meta } from '@/components/site/data';
import { projectsData, filterCategories, ProjectItem } from '@/components/site/FeaturedProjectsSection';
import projectsHero from '@/assets/projects-hero.jpg';

export const Route = createFileRoute('/projects')({
  head: () =>
    meta(
      'Client Projects & Case Studies | Right PPT Solutions',
      'Explore real case studies across legacy modernization, enterprise CRM, digital publishing, and applied AI.'
    ),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <Hero
        eyebrow="PORTFOLIO & CASE STUDIES"
        title={<>Explore Our <span className="hero-brand-accent">Project Work.</span></>}
        description="Legacy Modernization, CRM and Membership, Digital Publishing and Learning, and Cloud CRM Migration."
        image={projectsHero}
      />

      <section className="section projects-page-main">
        <div className="container">
          {/* Header Bar with Count */}
          <div className="projects-page-header reveal">
            <div>
              <span className="eyebrow">— REAL-WORLD DELIVERABLES —</span>
              <h2>Proven Deliverables &amp; <span className="hero-brand-accent">Measurable Business Impact</span></h2>
              <p>Explore detailed technical architectures, business challenges, and measurable project outcomes.</p>
            </div>
            <div className="projects-stat-badge">
              <strong>7</strong>
              <span>Verified Case Studies</span>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="portfolio-filter-bar reveal" role="tablist" aria-label="Filter projects">
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

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map((p) => (
              <article
                key={p.id}
                className={`project-card reveal tone-${p.tone}`}
                onClick={() => setSelectedProject(p)}
                tabIndex={0}
                role="button"
                aria-label={`View case study for ${p.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(p);
                  }
                }}
              >
                {/* Visual Thumbnail */}
                <div className="project-card-image">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={640}
                    height={380}
                  />
                  <div className="project-image-gradient" />
                  <span className="project-category-badge">{p.categoryLabel}</span>
                </div>

                {/* Content Body */}
                <div className="project-card-body">
                  <div className="project-client-row">
                    <span className="project-client-name">{p.client}</span>
                    <span className="project-year-pill">{p.year}</span>
                  </div>
                  <h3 className="project-title">{p.name}</h3>
                  <p className="project-tagline">{p.tagline}</p>

                  {/* Highlight Metrics Strip */}
                  <div className="project-metrics-row">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="project-metric-pill">
                        <strong className="metric-val">{m.value}</strong>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="project-tech-chips">
                    {p.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Link */}
                  <div className="project-card-footer">
                    <button
                      type="button"
                      className="project-details-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(p);
                      }}
                    >
                      <span>Explore Full Case Study</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Project Architecture Trust Strip */}
          <div className="portfolio-trust-band reveal">
            <div className="trust-band-item">
              <CheckCircle2 size={20} className="trust-icon" />
              <div>
                <strong>100% Client IP Ownership</strong>
                <span>Source Repos Assigned Directly To You</span>
              </div>
            </div>
            <div className="trust-band-item">
              <ShieldCheck size={20} className="trust-icon" />
              <div>
                <strong>Zero Proprietary Lock-In</strong>
                <span>Open, Auditable, Enterprise Cloud Stacks</span>
              </div>
            </div>
            <div className="trust-band-item">
              <Sparkles size={20} className="trust-icon" />
              <div>
                <strong>Production SLAs &amp; Warranty</strong>
                <span>Direct Engineering Support Post-Launch</span>
              </div>
            </div>
            <div className="trust-band-action">
              <Button asChild size="lg" className="portfolio-cta-btn">
                <Link to="/contact">
                  Talk to RightPPT <ArrowRight size={17} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`project-modal-content tone-${selectedProject.tone}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="modal-cat-tag">{selectedProject.categoryLabel} · {selectedProject.year}</span>
              <h2 id="modal-title">{selectedProject.name}</h2>
              <p className="modal-client">{selectedProject.client}</p>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProject.description}</p>

              <div className="modal-metrics-box">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="modal-metric-col">
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>

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
                <h4>KEY PRODUCTION DELIVERABLES</h4>
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
                <h4>TECHNOLOGY STACK &amp; INFRASTRUCTURE</h4>
                <div className="modal-tech-pills">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="modal-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Button asChild className="modal-discuss-btn">
                <Link to="/contact">
                  Discuss This Solution with RightPPT <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <CTA />
    </Layout>
  );
}
