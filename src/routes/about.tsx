import { createFileRoute, Link } from '@tanstack/react-router';
import { Users, Compass, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout, Hero, SectionTitle, CTA } from '@/components/site/Layout';
import { Pillars } from '@/components/site/Sections';
import { WhyChooseUs } from '@/components/site/HomeExtras';
import { meta } from '@/components/site/data';
import studioHero from '@/assets/studio-hero.jpg';
import aboutStoryPlain from '@/assets/about-story-plain.jpg';

export const Route = createFileRoute('/about')({
  head: () =>
    meta(
      'About Us | Right PPT Solutions',
      'Meet Right PPT Solutions — the right combination of people, process, and technology, helping businesses move forward.'
    ),
  component: About,
});

function About() {
  return (
    <Layout>
      <Hero
        image={studioHero}
        eyebrow="PEOPLE. PURPOSE. POSSIBILITIES."
        title={
          <>
            About <span className="hero-brand-accent">Right PPT.</span>
          </>
        }
        description="A team that shares your ambition. A partner that brings the right people, process, and technology together."
      />
      <Pillars />
      <section className="section about-story">
        <div className="container">
          <SectionTitle
            label="THE PEOPLE BEHIND YOUR PROGRESS"
            title="The right combination makes all the difference."
            description="We connect thoughtful ideas with practical expertise to help your business take its next step."
          />
          <div className="story-layout">
            <div className="story-photo reveal relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl">
              <img
                src={aboutStoryPlain}
                alt="Right PPT Solutions executive technology briefing and architecture center"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full h-[440px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs text-white">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <strong className="font-semibold text-slate-100">Right PPT Architecture Center</strong>
                </span>
                <span className="text-slate-300 font-mono text-[11px]">Enterprise Ready · SLAs</span>
              </div>
            </div>
            <div className="story-copy reveal">
              <span className="eyebrow">THIS IS RIGHT PPT SOLUTIONS</span>
              <h3>
                Human at heart.
                <br />
                Forward by nature.
              </h3>
              <p>
                Great outcomes begin with the right foundation. At Right PPT Solutions, we bring application development, modernization, logistics integrations, and AI security expertise together around your business.
              </p>
              <p>
                We believe in listening first, thinking purposefully, and building carefully. Your goals shape our direction — and disciplined collaboration brings it all to life.
              </p>
              <div className="story-signature">
                <span>Right People.</span>
                <span>Right Process.</span>
                <span>Right Technology.</span>
              </div>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Meet Your Next Partner <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-values">
        <div className="container">
          <SectionTitle
            label="WHAT DRIVES US"
            title="Our principles. Your progress."
            description="The commitments behind every conversation and every solution."
          />
          <div className="principles-grid">
            {[
              {
                icon: Users,
                title: 'People first',
                copy: 'Open communication, shared understanding, and genuine collaboration. Because the best work starts with the right relationships.',
                tone: 'blue',
              },
              {
                icon: Compass,
                title: 'Purpose in every step',
                copy: 'Clear direction and thoughtful execution. We keep your goals at the center, from the first idea to the finished experience.',
                tone: 'green',
              },
              {
                icon: Lightbulb,
                title: 'Practical innovation',
                copy: 'Fresh thinking with real-world purpose. Technology that opens possibilities and supports the way your business works.',
                tone: 'violet',
              },
            ].map((v) => (
              <article className={`principle reveal tone-${v.tone}`} key={v.title}>
                <div>
                  <v.icon size={30} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CTA />
    </Layout>
  );
}
