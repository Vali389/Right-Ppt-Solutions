import { createFileRoute } from '@tanstack/react-router';
import { Layout, Hero, CTA } from '@/components/site/Layout';
import { ServicesSection, AboutSection, Testimonials } from '@/components/site/Sections';
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
      'IT Solutions for Your Next Chapter',
      'Right PPT Solutions brings together web development, software engineering, cloud architecture, and digital marketing in Hyderabad.'
    ),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero
        home
        eyebrow="PEOPLE. PROCESS. TECHNOLOGY. · ENTERPRISE DIGITAL EXCELLENCE"
        title="Right PPT Solutions"
        description="The right combination of people, process, and technology to turn enterprise ambition into measurable market impact. We architect modern web applications, resilient software platforms, cloud infrastructure, and data-driven digital growth."
      />
      <AboutSection />
      <OrbitSection />
      <ServicesSection />
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
