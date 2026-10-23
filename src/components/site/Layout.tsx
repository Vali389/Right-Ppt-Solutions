import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, ArrowUp, Menu, X, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/right-ppt-logo.png';
import studio from '@/assets/studio-hero.jpg';
import cityHero from '@/assets/city-hero.jpg';
import { ChatAssistant } from './ChatAssistant';

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
  { to: '/services' as const, name: 'Services' },
  { to: '/projects' as const, name: 'Projects' },
  { to: '/contact' as const, name: 'Contact Us' },
];
export function Layout({children}:{children:React.ReactNode}){
 const [menu,setMenu]=useState(false);
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
 return <><header className="site-header"><div className="container header-inner"><Link to="/" aria-label="Right PPT Solutions home" className="logo-link"><img src={logoImg} alt="Right PPT Solutions" className="site-logo" width={260} height={92}/></Link><nav className={menu?'navigation navigation-open':'navigation'} aria-label="Main navigation">{nav.map(n=><Link key={n.to} to={n.to} onClick={()=>setMenu(false)} activeProps={{className:'nav-active'}} activeOptions={{exact:n.to==='/'}}>{n.name}</Link>)}</nav><Button asChild className="header-cta"><Link to="/contact">Let’s Talk <ArrowUpRight/></Link></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</Button></div></header><main>{children}</main><footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Link to="/" aria-label="Right PPT Solutions home" className="footer-logo-wrap"><img src={logoImg} alt="Right PPT Solutions" className="footer-logo-img" loading="lazy" width={260} height={88}/></Link><p className="footer-brand-text">The right combination of <strong className="brand-dot-blue">People</strong>, <strong className="brand-dot-green">Process</strong>, and <strong className="brand-dot-violet">Technology</strong>.</p><div className="footer-brand-chips"><span className="footer-chip chip-blue"><span className="chip-dot dot-blue"/> People</span><span className="footer-chip chip-green"><span className="chip-dot dot-green"/> Process</span><span className="footer-chip chip-violet"><span className="chip-dot dot-violet"/> Technology</span></div><a href="https://wa.me/917386257784" target="_blank" rel="noreferrer" className="footer-whatsapp-btn"><Phone size={15}/> <span>Chat on WhatsApp</span> <ArrowUpRight size={15}/></a></div><div className="footer-nav-col"><h3>Explore</h3><span className="footer-heading-bar bar-blue"/><div className="footer-links-list">{nav.map(n=><Link to={n.to} key={n.to} className="footer-item-link">{n.name}</Link>)}</div></div><div className="footer-nav-col"><h3>Our Expertise</h3><span className="footer-heading-bar bar-green"/><div className="footer-links-list"><Link to="/services/$serviceId" params={{ serviceId: 'software-development' }} className="footer-item-link">Software &amp; Modernization</Link><Link to="/services/$serviceId" params={{ serviceId: 'logistics-solutions' }} className="footer-item-link">Logistics &amp; E-commerce</Link><Link to="/services/$serviceId" params={{ serviceId: 'ai-solutions' }} className="footer-item-link">AI &amp; Network Security</Link><Link to="/services/$serviceId" params={{ serviceId: 'nonprofits-and-associations' }} className="footer-item-link">Nonprofits &amp; Associations</Link><Link to="/projects" className="footer-item-link">Explore Case Studies</Link></div></div><div className="footer-contact"><h3>Get In Touch</h3><span className="footer-heading-bar bar-violet"/><a href="tel:+917386257784" className="footer-contact-item"><div className="contact-icon-bubble blue"><Phone size={16}/></div><div><small>Direct Line</small><strong>+91 73862 57784</strong></div></a><div className="footer-contact-item"><div className="contact-icon-bubble green"><MapPin size={16}/></div><div><small>Corporate Headquarters</small><span>Innov8 Pranava Business Park- 7th Floor KONDAPUR, KOTHAGUDA, Telangana- 500084</span></div></div><div className="footer-hours-pill"><span className="status-dot-pulse"/> Daily · 9:00 am – 5:00 pm IST</div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Right PPT Solutions. All rights reserved.</span><span className="footer-tagline-pillars"><span className="dot dot-blue"/> People <span className="dot dot-green"/> Process <span className="dot dot-violet"/> Technology</span></div></footer><ScrollToTop /><WhatsAppFloat /></>;
}
export function Hero({
  eyebrow,
  title,
  description,
  home = false,
  image = studio,
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
        src={image}
        alt="Modern business and technology environment"
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
              <span className="dot dot-blue" /> 120+ Completed Deployments
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
export function SectionTitle({label,title,description}:{label:string,title:string,description?:string}){return <div className="section-heading reveal"><span className="eyebrow">{label}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>}
export function CTA() {
  return (
    <section className="cta-band">
      <img
        src={cityHero}
        alt="Modern business enterprise towers and cityscape"
        className="cta-bg-image"
        width={1920}
        height={1080}
        loading="lazy"
      />
      <div className="cta-overlay" />
      <div className="container cta-container reveal">
        <span className="cta-eyebrow">LET’S DISCUSS YOUR BUSINESS NEEDS</span>
        <h2 className="cta-title">Technology That Simplifies Business.</h2>
        <p className="cta-lead">
          Build a new application, improve an existing system or explore practical AI solutions.
        </p>
        <div className="cta-actions">
          <Button asChild size="lg" className="cta-primary-btn">
            <Link to="/contact">
              Talk to RightPPT <ArrowUpRight size={18} />
            </Link>
          </Button>
          <a
            href="https://wa.me/917386257784"
            target="_blank"
            rel="noreferrer"
            className="cta-whatsapp-btn"
          >
            <Phone size={16} /> Quick WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
