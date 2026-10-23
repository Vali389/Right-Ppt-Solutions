import { createFileRoute } from '@tanstack/react-router';
import { Layout, Hero, CTA } from '@/components/site/Layout';
import { ServicesSection, ProjectWorkSection, AboutSection, Testimonials } from '@/components/site/Sections';
import {
  OrbitSection,
  IndustriesSection,
  PartnerJourneySection,
  KeyFeaturesSection,
  WhyChooseUsSection,
} from '@/components/site/HomeExtras';
import { FeaturedProjectsSection } from '@/components/site/FeaturedProjectsSection';
import { meta } from '@/components/site/data';

export const Route = createFileRoute('/')({
  head: () =>
    meta(
      'Technology That Simplifies Business | RightPPT Solutions',
      'RightPPT builds, modernizes and connects business applications—helping you automate work, improve visibility and put AI to practical use.'
    ),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero
        home
        eyebrow="PEOPLE. PROCESS. TECHNOLOGY. · ENTERPRISE DIGITAL EXCELLENCE"
        title={<>Technology That <span className="hero-brand-accent">Simplifies Business.</span></>}
        description="RightPPT builds, modernizes and connects business applications—helping you automate work, improve visibility and put AI to practical use."
      />
      <AboutSection />
      <OrbitSection />
      <ServicesSection />
      <ProjectWorkSection />
      <IndustriesSection />
      <PartnerJourneySection />
      <KeyFeaturesSection />
      <WhyChooseUsSection />
      <FeaturedProjectsSection />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
