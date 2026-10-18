import { createFileRoute } from '@tanstack/react-router';
import { Layout, CTA } from '@/components/site/Layout';
import { SingleServiceDetail } from '@/components/site/SingleServiceDetail';
import { getServiceBySlug, meta } from '@/components/site/data';

export const Route = createFileRoute('/services_/$serviceId')({
  head: ({ params }) => {
    const data = getServiceBySlug(params.serviceId);
    const title = data ? data.service.name : 'Service Details';
    const desc = data ? data.service.description : 'Explore comprehensive service architecture and deliverables from Right PPT Solutions.';
    return meta(title, desc);
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { serviceId } = Route.useParams();
  return (
    <Layout>
      <SingleServiceDetail serviceId={serviceId} />
      <CTA />
    </Layout>
  );
}
