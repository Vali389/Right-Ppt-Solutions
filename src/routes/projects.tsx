import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  X,
} from 'lucide-react';
import { Layout, Hero, CTA } from '@/components/site/Layout';
import { Button } from '@/components/ui/button';
import { meta } from '@/components/site/data';
import { projectsData, filterCategories, ProjectItem } from '@/components/site/FeaturedProjectsSection';
import cityHero from '@/assets/city-hero.jpg';

export const Route = createFileRoute('/projects')({
  head: () =>
    meta(
      'Client Projects & Case Studies | Right PPT Solutions',
      'Explore our portfolio of enterprise web applications, SaaS platforms, high-conversion e-commerce storefronts, and cloud AI systems.'
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
        title={<>Proven Deliverables. <span className="hero-brand-accent">Real Business Impact.</span></>}
        description="Explore how Right PPT Solutions architects, engineers, and scales mission-critical digital products, high-conversion web apps, and modern AI platforms."
        image={cityHero}
      />

      <section className="section projects-page-main">
        <div className="container">
          {/* Header Bar with Count */}
          <div className="projects-page-header reveal">
            <div>
              <span className="eyebrow">— VERIFIED CLIENT WORK —</span>
              <h2>Enterprise Platforms &amp; <span className="hero-brand-accent">Digital Products</span></h2>
              <p>Each solution is custom-built with production-grade engineering, full code ownership, and zero lock-in.</p>
            </div>
            <div className="projects-stat-badge">
              <strong>6+</strong>
              <span>Featured Deployments</span>
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
            {filteredProjects.map((p, idx) => (
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
                  <span className="project-card-num">0{idx + 1}</span>
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
                    {p.techStack.map((tech) => (
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
                      <span>Explore Architecture &amp; Delivery</span>
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
                  Start Your Project <ArrowRight size={17} />
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
              <p className="modal-client">Client: {selectedProject.client}</p>
            </div>

            <p className="modal-desc">{selectedProject.description}</p>

            <div className="modal-metrics-box">
              {selectedProject.metrics.map((m) => (
                <div key={m.label} className="modal-metric-col">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>

            <div className="modal-section-block">
              <h4>Key Production Deliverables</h4>
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
              <h4>Technology Stack &amp; Infrastructure</h4>
              <div className="modal-tech-pills">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="modal-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <Button asChild className="modal-discuss-btn">
                <Link to="/contact">
                  Discuss a Similar Solution <ArrowUpRight size={16} />
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
