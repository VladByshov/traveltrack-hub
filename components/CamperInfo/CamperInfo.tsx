import { Camper, CamperReview } from '@/types/camper';
import Gallery from '@/components/Gallery/Gallery';
import Reviews from '@/components/Reviews/Reviews';
import CamperDetails from '@/components/CamperDetails/CamperDetails';
import css from './CamperInfo.module.css';
import { CiMap } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

interface CamperInfoProps {
  camper: Camper;
  reviews: CamperReview[];
}

export default function CamperInfo({ camper, reviews }: CamperInfoProps) {
  return (
    <section className={css.pageSection}>
      <div className={css.topLayout}>
        <div className={css.galleryPane}>
          <Gallery gallery={camper.gallery} coverImage={camper.coverImage} camperName={camper.name} />
        </div>

        <div className={css.infoPane}>
          <article className={css.summaryCard}>
            <h2 className={css.heading}>{camper.name}</h2>

            <div className={css.metaRow}>
              <div className={css.ratingMeta}>
                <FaStar className={css.starIcon} />
                <span>
                  {camper.rating} ({camper.totalReviews} Reviews)
                </span>
              </div>

              <div className={css.locationMeta}>
                <CiMap className={css.mapIcon} />
                <span>{camper.location}</span>
              </div>
            </div>

            <div className={css.priceRow}>
              <p className={css.cost}>€{camper.price}</p>
            </div>

            <p className={css.text}>{camper.description}</p>
          </article>

          <article className={css.detailsCard}>
            <CamperDetails camper={camper} />
          </article>
        </div>
      </div>

      <div className={css.bottomLayout}>
        <Reviews reviews={reviews} camperId={camper.id} />
      </div>
    </section>
  );
}

