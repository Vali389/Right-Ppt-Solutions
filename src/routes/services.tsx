import { createFileRoute } from '@tanstack/react-router';
import { Layout, Hero, CTA } from '@/components/site/Layout';
import { ProcessSection, TechEcosystemSection } from '@/components/site/HomeExtras';
import { AllServicesList } from '@/components/site/AllServicesList';
import { meta } from '@/components/site/data';
import servicesHero from '@/assets/services-hero.jpg';

export const Route = createFileRoute('/services')({
  head: () =>
    meta(
      'Our Services',
      'Explore web development, custom software, digital marketing, and technology solutions from Right PPT Solutions.'
    ),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <Hero
        image={servicesHero}
        eyebrow="EXPERTISE THAT MOVES YOU FORWARD"
        title={<>Our Engineering &amp; <span className="hero-brand-accent">IT Services.</span></>}
        description="Websites. Software. Digital growth. The right expertise to turn your next ambition into something extraordinary."
      />
      <AllServicesList />
      <TechEcosystemSection />
      <ProcessSection />
      <CTA />
    </Layout>
  );
}
