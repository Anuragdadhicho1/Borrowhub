import { PageShell } from "@/components/page-shell";

export default async function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <PageShell title={`Booking #${id}`} description="View booking status, meetup details, and payment timeline." />;
}
