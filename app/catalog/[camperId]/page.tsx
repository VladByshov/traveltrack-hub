import { getCamperById, getCamperReviews } from '@/lib/api/camperApi';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import CamperInfo from '@/components/CamperInfo/CamperInfo';
import PageLoader from '@/components/PageLoader/PageLoader';

interface CamperPageProps {
  params: Promise<{ camperId: string }>;
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return 'Unknown error';
};

export async function generateMetadata({ params }: CamperPageProps): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getCamperById(camperId);
    const ogImage = camper.gallery?.[0]?.original;
    const seoTitle = `${camper.name} - Camper profile | TravelTrack Hub`;
    const seoDescription = camper.description
      ? `Discover ${camper.name} on TravelTrack Hub: specs, reviews, and booking details in one place.`
      : 'Explore camper details, real reviews, and quick booking options on TravelTrack Hub.';

    return {
      title: seoTitle,
      description: seoDescription,
      alternates: {
        canonical: `/catalog/${camperId}`,
      },
      openGraph: {
        title: seoTitle,
        description: seoDescription,
        type: 'website',
        images: ogImage ? [ogImage] : undefined,
      },
    };
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);

    return {
      title: 'Camper page | TravelTrack Hub',
      description:
        `Unable to load camper metadata right now (${errorMessage}). Please try again later.`,
      alternates: {
        canonical: `/catalog/${camperId}`,
      },
    };
  }
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;

  let camper: Awaited<ReturnType<typeof getCamperById>> | null;
  let reviews: Awaited<ReturnType<typeof getCamperReviews>> | null;
  let loadErrorMessage: string | null = null;

  try {
    [camper, reviews] = await Promise.all([
      getCamperById(camperId),
      getCamperReviews(camperId),
    ]);
  } catch (error: unknown) {
    loadErrorMessage = getErrorMessage(error);

    camper = null;
    reviews = null;
  }

  if (!camper || !reviews) {
    const errorText = loadErrorMessage
      ? `Unable to load camper page: ${loadErrorMessage}`
      : 'Camper not found or API error (404)';

    return (
      <div style={{ padding: 32, textAlign: 'center', color: 'red' }}>
        {errorText}
      </div>
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <CamperInfo camper={camper} reviews={reviews} />
    </Suspense>
  );
}
