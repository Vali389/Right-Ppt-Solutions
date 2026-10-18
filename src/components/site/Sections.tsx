import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Check, Quote, Star, Users, Settings2, Cpu, Zap, Cloud, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import team from '@/assets/team.jpg';
import { services } from './data';
import { SectionTitle } from './Layout';
export function ServicesSection({ all = false }: { all?: boolean }) {
  const displayedServices = all ? services : services.slice(0, 3);
  return (
    <section className="section services-section">
      <div className="container">
        <SectionTitle
          label="WHAT WE DO"
          title="The right solutions. Real possibilities."
          description="From your first idea to your next big milestone, we bring the expertise that moves your business forward."
        />
        <div className="service-grid">
          {displayedServices.map((s, i) => (
            <Link
              to="/services/$serviceId"
              params={{ serviceId: s.slug }}
              className={`service-card reveal tone-${s.tone}`}
              key={s.name}
            >
              <div className="service-photo">
                <img src={s.image} alt={s.name} width={1536} height={1024} loading="lazy" />
                <span className="service-icon">
                  <s.icon size={20} />
                </span>
                <span className="service-number">0{i + 1}</span>
                <h3>{s.name}</h3>
              </div>
              <div className="service-body">
                <span className="service-label">{s.label}</span>
                <p>{s.description}</p>
                <div className="service-deliverables">
                  {(
                    [
                      ['Business websites', 'E-commerce'],
                      ['Custom platforms', 'Integrations'],
                      ['Brand visibility', 'Digital campaigns'],
                      ['Business tools', 'Digital strategy'],
                    ][i] ?? []
                  ).map((item) => (
                    <span key={item}>
                      <Check size={11} />
                      {item}
                    </span>
                  ))}
                </div>
                <div className="learn-link">
                  <span>Explore Details</span>
                  <ArrowRight size={14} className="learn-arrow" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="center-action">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Service Capabilities <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const commitmentItems = [
  {
    title: '24×7 Agile Engineering & Sprint Governance',
    desc: 'Direct access to dedicated senior technical leads and full milestone transparency.',
    icon: Zap,
    tag: 'CONTINUOUS SPRINTS',
    tone: 'blue',
  },
  {
    title: 'Customized 1-on-1 Solution Architecture',
    desc: 'Precision-engineered architectures built for your exact domain, security, and performance criteria.',
    icon: Cpu,
    tag: 'DOMAIN TAILORED',
    tone: 'green',
  },
  {
    title: 'Cloud-Native, AI-Ready Modern Infrastructure',
    desc: 'Fast, resilient digital products designed to scale seamlessly on modern enterprise stacks.',
    icon: Cloud,
    tag: 'ELASTIC SCALABILITY',
    tone: 'violet',
  },
  {
    title: 'Transparent Governance & Continuous Knowledge Transfer',
    desc: 'Zero black boxes — clean documentation, sprint demos, and smooth knowledge transfer at every milestone.',
    icon: ShieldCheck,
    tag: 'ZERO BLACK BOXES',
    tone: 'cyan',
  },
];

export function AboutSection(){
 return (
  <section className="section commitment-section">
   <div className="commitment-ambient-glow" />
   <div className="container commitment-grid">
    <div className="commitment-visual reveal">
     <div className="commitment-image-frame">
      <img src={team} alt="Right PPT Solutions engineering and consulting team" width={1536} height={1024} loading="lazy"/>
      <div className="commitment-floating-badge">
       <span className="commitment-badge-icon"><Users size={22}/></span>
       <div>
        <strong>Multidisciplinary Squad</strong>
        <span>Engineers, Architects & Strategists Under One Roof</span>
       </div>
      </div>
      <div className="commitment-stat-floating-pill">
       <span className="status-dot-pulse"/>
       <span>100% Transparent Governance</span>
      </div>
     </div>
    </div>
    <div className="commitment-copy reveal">
     <div className="commitment-pill">
      <span className="pill-dot"/>
      <span>OUR COMMITMENT</span>
     </div>
     <h2>Dedicated Delivery Built On <span className="brand-italic-accent">Technical Excellence & Trust.</span></h2>
     <p className="commitment-lead">
      At Right PPT Solutions, our commitment extends beyond conventional IT delivery. We combine disciplined engineering protocols with proactive communication, strategic vision, and personalized collaboration to help every business turn ambition into sustainable advantage.
     </p>
     <div className="commitment-cards-grid">
      {commitmentItems.map((item) => (
       <div key={item.title} className={`commitment-feature-card tone-${item.tone}`}>
        <div className="commitment-card-head">
         <span className="commitment-card-icon">
          <item.icon size={18} />
         </span>
         <span className="commitment-card-tag">{item.tag}</span>
        </div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
       </div>
      ))}
     </div>
     <div className="commitment-action">
      <Button asChild size="lg" className="commitment-btn">
       <Link to="/about">Learn More About Our Approach <ArrowUpRight size={18}/></Link>
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
}
export function Pillars(){return <section className="pillars-band"><div className="container pillars-grid">{[{icon:Users,name:'Right People',copy:'Expertise with a human touch.',tone:'blue'},{icon:Settings2,name:'Right Process',copy:'Clarity at every step.',tone:'green'},{icon:Cpu,name:'Right Technology',copy:'Innovation with a purpose.',tone:'violet'}].map((p,i)=><div className={`pillar reveal tone-${p.tone}`} key={p.name}><div className="pillar-icon"><p.icon size={25}/></div><div><h3>{p.name}</h3><p>{p.copy}</p></div><span className="pillar-number">0{i+1}</span></div>)}</div></section>}
const samples=[{quote:'A collaborative approach, thoughtful solutions, and a team that truly understands our goals.',name:'Business Owner',sector:'Web development',initial:'B'},{quote:'The right balance of technical expertise and clear communication, from the first conversation to delivery.',name:'Technology Lead',sector:'Software development',initial:'T'},{quote:'A fresh perspective on our digital presence and a clear direction for moving our brand forward.',name:'Marketing Lead',sector:'Digital marketing',initial:'M'}];
export function Testimonials(){return <section className="section testimonials-section"><SectionTitle label="BETTER TOGETHER" title="Great partnerships. Shared success." description="The kind of experience we strive to create for every business we work with."/><div className="testimonial-window"><div className="testimonial-track">{[...samples,...samples].map((t,i)=><article className="testimonial-item" key={i} aria-hidden={i>=samples.length?true:undefined}><div className="quote-box"><div className="quote-icon"><Quote size={24}/></div><div className="stars">{Array.from({length:5},(_,j)=><Star key={j} size={17} fill="currentColor"/>)}</div><blockquote>“{t.quote}”</blockquote></div><span className="testimonial-avatar">{t.initial}</span><strong>{t.name}</strong><span className="testimonial-sector">{t.sector}</span></article>)}</div></div></section>}
