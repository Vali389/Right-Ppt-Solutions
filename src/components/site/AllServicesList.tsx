import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, offerings } from './data';
import { SectionTitle } from './Layout';

export function AllServicesList() {
  return (
    <section className="section all-services-section" id="all-services">
      <div className="container">
        <SectionTitle
          label="OUR CORE CAPABILITIES"
          title="Full-Lifecycle Digital Engineering & Technology Solutions"
          description="From high-conversion web experiences and enterprise SaaS to digital growth campaigns and cloud modernizations."
        />

        <div className="all-services-stack">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const whatsappMessage = encodeURIComponent(
              `Hi Right PPT Solutions, I would like to discuss ${service.name} for my organization.`
            );

            return (
              <article
                key={service.slug}
                id={`service-${idx}`}
                className={`all-service-card tone-${service.tone} reveal`}
              >
                {/* Top glow accent */}
                <div className="service-card-accent" />

                <div className="all-service-inner">
                  {/* LEFT COLUMN: Service Information & Deliverables */}
                  <div className="all-service-copy">
                    <div className="service-meta-top">
                      <span className="service-order-badge">0{idx + 1}</span>
                      <span className="service-category-tag">{service.label}</span>
                    </div>

                    <h2 className="all-service-title">{service.name}</h2>
                    <p className="all-service-lead">{service.description}</p>
                    <p className="all-service-detail">{service.detail}</p>

                    {/* Offerings Checklist */}
                    <div className="all-service-offerings">
                      <span className="offerings-title">CORE DELIVERABLES & EXPERTISE</span>
                      <div className="offerings-grid">
                        {offerings[idx]?.map((item) => (
                          <div className="offering-chip" key={item}>
                            <Check size={14} className="offering-check" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions: View In Detail & WhatsApp */}
                    <div className="all-service-actions">
                      <Button asChild size="lg" className="all-service-primary-btn">
                        <Link
                          to="/services/$serviceId"
                          params={{ serviceId: service.slug }}
                        >
                          Explore Service in Detail <ArrowUpRight size={17} />
                        </Link>
                      </Button>
                      <a
                        href={`https://wa.me/917386257784?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="all-service-whatsapp-btn"
                        aria-label={`Chat on WhatsApp about ${service.name}`}
                      >
                        <Phone size={15} /> WhatsApp Chat
                      </a>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Service Image with Frame & Badge */}
                  <div className="all-service-visual">
                    <div className="service-visual-frame">
                      <img
                        src={service.image}
                        alt={service.name}
                        width={1536}
                        height={1024}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="service-visual-overlay" />
                      <div className="service-visual-badge">
                        <div className="badge-icon-box">
                          <Icon size={22} />
                        </div>
                        <div className="badge-text-box">
                          <strong>{service.name}</strong>
                          <span>Enterprise Ready · SLAs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
