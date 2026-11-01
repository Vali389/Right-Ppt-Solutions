import { useState, useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Layers,
  Network,
  Truck,
  Sparkles,
  Scale,
  Users2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RightPptLogo } from './RightPptLogo';
import logoImg from '@/assets/right-ppt-logo.svg';
import studioHero from '@/assets/studio-hero.jpg';
import cityHero from '@/assets/city-hero.jpg';
import ctaTechPlain from '@/assets/cta-tech-plain.jpg';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="scroll-to-top-btn"
      aria-label="Scroll back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917386257784"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float-btn"
      aria-label="Direct WhatsApp Chat with Right PPT Solutions"
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.2 1.2-4.3-.3-.5A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.5-.2-.8.2-.9 1.1-1.1 1.3-.4.2-.7 0a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.3c-.2-.3 0-.5.2-.7l.5-.6.3-.5a.6.6 0 0 0 0-.6c-.1-.2-.8-1.9-1.1-2.6s-.5-.6-.7-.6h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.2 2.7 6.4 6.4 0 0 0 1.4 3.4 14.5 14.5 0 0 0 5.6 5 6.3 6.3 0 0 0 3.3.9 4 4 0 0 0 2.6-1.8 3.3 3.3 0 0 0 .2-1.8c-.2-.2-.4-.3-.7-.4z" />
      </svg>
    </a>
  );
}

const nav = [
  { to: '/' as const, name: 'Home' },
  { to: '/about' as const, name: 'About Us' },
  { to: '/services' as const, name: 'Services', hasDropdown: true },
  { to: '/projects' as const, name: 'Projects' },
  { to: '/contact' as const, name: 'Contact Us' },
];

const servicesDropdownItems = [
  {
    to: '/services#software-development',
    name: 'Software Development & Modernization',
    desc: 'Legacy platform migration & bespoke cloud applications',
    icon: Layers,
    tone: 'blue',
  },
  {
    to: '/services#ai-solutions',
    name: 'AI-Enabled Network Security & Infrastructure',
    desc: 'Deep packet telemetry, anomaly detection & SDN intelligence',
    icon: Network,
    tone: 'cyan',
  },
  {
    to: '/services#logistics-solutions',
    name: 'Logistics, Supply Chain & E-commerce',
    desc: 'Carrier integration, real-time dispatch & margin analytics',
    icon: Truck,
    tone: 'green',
  },
  {
    to: '/services#ai-everyday-business',
    name: 'AI Solutions for Everyday Business',
    desc: 'Intelligent search, document automation & content workflows',
    icon: Sparkles,
    tone: 'blue',
  },
  {
    to: '/services#ai-legal-compliance',
    name: 'AI for Legal & Compliance Operations',
    desc: 'Assisted contract review, clause library & obligation tracking',
    icon: Scale,
    tone: 'violet',
  },
  {
    to: '/services#nonprofits-and-associations',
    name: 'Nonprofits & Professional Associations',
    desc: 'Membership, dues, renewals, publishing & RyteAI assistants',
    icon: Users2,
    tone: 'green',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const revealVisibleElements = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
          el.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '120px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    revealVisibleElements();
    window.addEventListener('scroll', revealVisibleElements, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealVisibleElements);
    };
  }, [children]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" aria-label="Right PPT Solutions home" className="logo-link">
            <RightPptLogo className="site-logo" />
          </Link>

          <nav className={menu ? 'navigation navigation-open' : 'navigation'} aria-label="Main navigation">
            {nav.map((n) => {
              if (n.hasDropdown) {
                return (
                  <div
                    key="services-dropdown-wrap"
                    className="nav-dropdown-wrap"
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to="/services"
                      onClick={() => {
                        setDropdownOpen(false);
                        setMenu(false);
                      }}
                      activeProps={{ className: 'nav-active' }}
                      className="nav-link-with-icon"
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={14}
                        className={`dropdown-chevron ${dropdownOpen ? 'is-rotated' : ''}`}
                      />
                    </Link>

                    {/* Services Dropdown Panel for Desktop */}
                    <div className={`services-dropdown-panel ${dropdownOpen ? 'is-open' : ''}`}>
                      <div className="services-dropdown-inner">
                        <div className="services-dropdown-header">
                          <span className="dropdown-eyebrow">SERVICES &amp; CAPABILITIES</span>
                          <span className="dropdown-count">6 Core Areas</span>
                        </div>
                        <div className="services-dropdown-grid">
                          {servicesDropdownItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => {
                                  setDropdownOpen(false);
                                  setMenu(false);
                                }}
                                className="services-dropdown-item"
                              >
                                <div className={`dropdown-item-icon tone-${item.tone}`}>
                                  <Icon size={12} />
                                </div>
                                <span className="dropdown-item-title">{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="services-dropdown-footer">
                          <Link
                            to="/services"
                            onClick={() => {
                              setDropdownOpen(false);
                              setMenu(false);
                            }}
                            className="dropdown-all-services-link"
                          >
                            <span>Explore All Services &amp; Deep-Dives</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Services Accordion */}
                    {menu && (
                      <div className="mobile-services-accordion">
                        <button
                          type="button"
                          className="mobile-services-toggle"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                          <span>Explore Specific Services</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {mobileServicesOpen && (
                          <div className="mobile-services-list">
                            {servicesDropdownItems.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setMenu(false)}
                                className="mobile-service-subitem"
                              >
                                • {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => {
                    setMenu(false);
                  }}
                  activeProps={{ className: 'nav-active' }}
                  activeOptions={{ exact: n.to === '/' }}
                >
                  {n.name}
                </Link>
              );
            })}
          </nav>

          <Button asChild className="header-cta">
            <Link to="/contact">
              Let’s Talk <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label="Toggle navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link to="/" aria-label="Right PPT Solutions home" className="footer-logo-wrap">
              <RightPptLogo className="footer-logo-img" />
            </Link>
            <p className="footer-brand-text">
              The right combination of <strong className="brand-dot-blue">People</strong>,{' '}
              <strong className="brand-dot-green">Process</strong>, and{' '}
              <strong className="brand-dot-violet">Technology</strong>.
            </p>
            <div className="footer-brand-chips">
              <span className="footer-chip chip-blue">
                <span className="chip-dot dot-blue" /> People
              </span>
              <span className="footer-chip chip-green">
                <span className="chip-dot dot-green" /> Process
              </span>
              <span className="footer-chip chip-violet">
                <span className="chip-dot dot-violet" /> Technology
              </span>
            </div>
            <a
              href="https://wa.me/917386257784"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp-btn"
            >
              <Phone size={15} /> <span>Chat on WhatsApp</span> <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="footer-nav-col">
            <h3>Explore</h3>
            <span className="footer-heading-bar bar-blue" />
            <div className="footer-links-list">
              {nav.map((n) => (
                <Link to={n.to} key={n.to} className="footer-item-link">
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-nav-col">
            <h3>Our Expertise</h3>
            <span className="footer-heading-bar bar-green" />
            <div className="footer-links-list">
              <Link
                to="/services/$serviceId"
                params={{ serviceId: 'software-development' }}
                className="footer-item-link"
              >
                Software &amp; Modernization
              </Link>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: 'logistics-solutions' }}
                className="footer-item-link"
              >
                Logistics &amp; E-commerce
              </Link>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: 'ai-solutions' }}
                className="footer-item-link"
              >
                AI &amp; Network Security
              </Link>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: 'ai-everyday-business' }}
                className="footer-item-link"
              >
                Everyday Business AI
              </Link>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: 'ai-legal-compliance' }}
                className="footer-item-link"
              >
                Legal &amp; Compliance AI
              </Link>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: 'nonprofits-and-associations' }}
                className="footer-item-link"
              >
                Nonprofits &amp; Associations
              </Link>
              <Link to="/projects" className="footer-item-link">
                Explore Case Studies
              </Link>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <span className="footer-heading-bar bar-violet" />
            <a href="tel:+917386257784" className="footer-contact-item">
              <div className="contact-icon-bubble blue">
                <Phone size={16} />
              </div>
              <div>
                <small>Direct Line</small>
                <strong>+91 73862 57784</strong>
              </div>
            </a>
            <a href="mailto:info@rightppt.com" className="footer-contact-item">
              <div className="contact-icon-bubble violet">
                <Mail size={16} />
              </div>
              <div>
                <small>Email &amp; Document Downloads</small>
                <strong>info@rightppt.com</strong>
              </div>
            </a>
            <div className="footer-contact-item">
              <div className="contact-icon-bubble green">
                <MapPin size={16} />
              </div>
              <div>
                <small>Hyderabad Office</small>
                <span>Innov8 Pranava Business Park- 7th Floor KONDAPUR, KOTHAGUDA, Telangana- 500084</span>
              </div>
            </div>
            <div className="footer-hours-pill">
              <span className="status-dot-pulse" /> Daily · 9:00 am – 5:00 pm IST
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Right PPT Solutions. All rights reserved.</span>
          <span className="footer-tagline-pillars">
            <span className="dot dot-blue" /> People <span className="dot dot-green" /> Process{' '}
            <span className="dot dot-violet" /> Technology
          </span>
        </div>
      </footer>
      <ScrollToTop />
      <WhatsAppFloat />
    </>
  );
}

export function Hero({
  eyebrow,
  title,
  description,
  home = false,
  image,
  actions,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  home?: boolean;
  image?: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className={home ? 'hero home-hero' : 'hero inner-hero'}>
      <img
        className="hero-image"
        src={image || studioHero}
        alt="Modern business technology and engineering environment"
        width={1920}
        height={1024}
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span />
          {eyebrow}
        </div>
        <h1>
          {title ? (
            title
          ) : home ? (
            <>
              Right PPT <span className="hero-brand-accent">Solutions.</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="hero-lead-text">{description}</p>
        <div className="hero-actions">
          {actions ? (
            actions
          ) : (
            <>
              <Button asChild size="lg" className="hero-cta-btn">
                <Link to="/contact">
                  Talk to RightPPT <ArrowRight size={17} />
                </Link>
              </Button>
              {home && (
                <Button asChild size="lg" variant="outline" className="hero-secondary">
                  <Link to="/services">
                    Explore Capabilities <ArrowUpRight size={17} />
                  </Link>
                </Button>
              )}
            </>
          )}
        </div>
        {home && (
          <div className="hero-trust-badges reveal">
            <span className="hero-trust-badge">
              <span className="dot dot-blue" /> Enterprise Grade Architecture
            </span>
            <span className="hero-trust-badge">
              <span className="dot dot-green" /> 99.99% Cloud SLA Guarantee
            </span>
            <span className="hero-trust-badge">
              <span className="dot dot-violet" /> 24/7 Agile Engineering Squads
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function CTA() {
  return (
    <section className="cta-band relative overflow-hidden text-white py-24 sm:py-28">
      <img
        src={ctaTechPlain}
        alt="RightPPT modern enterprise technology command center"
        className="cta-bg-image absolute inset-0 w-full h-full object-cover z-0"
        width={1920}
        height={1080}
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950/90" />
      <div className="container relative z-20 mx-auto px-4 text-center max-w-3xl flex flex-col items-center">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-500/40 px-4 py-1.5 rounded-full mb-5 shadow-sm">
          LET’S DISCUSS YOUR BUSINESS NEEDS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
          Technology That Simplifies Business.
        </h2>
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl font-medium drop-shadow-sm">
          Build a new application, improve an existing system or explore practical AI solutions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all">
            <Link to="/contact">
              Talk to RightPPT <ArrowUpRight size={18} className="ml-1" />
            </Link>
          </Button>
          <a
            href="https://wa.me/917386257784"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-600 font-semibold text-sm shadow-md transition-all"
          >
            <Phone size={16} className="text-emerald-400" /> Quick WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
