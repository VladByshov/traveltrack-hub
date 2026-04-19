import { getCamperById, getCamperReviews } from '@/lib/api/camperApi';
import { Suspense } from 'react';
import CamperInfo from '@/components/CamperInfo/CamperInfo';
import PageLoader from '@/components/PageLoader/PageLoader';

interface CamperPageProps {
  params: Promise<{ camperId: string }>;
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;

  let camper: Awaited<ReturnType<typeof getCamperById>> | null;
  let reviews: Awaited<ReturnType<typeof getCamperReviews>> | null;

  try {
    [camper, reviews] = await Promise.all([
      getCamperById(camperId),
      getCamperReviews(camperId),
    ]);
  } catch {
    camper = null;
    reviews = null;
  }

  if (!camper || !reviews) {
    return (
      <div style={{ padding: 32, textAlign: 'center', color: 'red' }}>
        Camper not found or API error (404)
      </div>
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <CamperInfo camper={camper} reviews={reviews} />
    </Suspense>
  );
}
