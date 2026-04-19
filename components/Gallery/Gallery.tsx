"use client";

import { CamperGallery } from '@/types/camper';
import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import css from './Gallery.module.css';

interface GalleryProps {
  gallery: CamperGallery[];
  coverImage: string;
  camperName: string;
}

interface ImageSet {
  original: string;
  thumb: string;
}

export default function Gallery({ gallery, coverImage, camperName }: GalleryProps) {
  const [thumbs, setThumbs] = useState<SwiperType | null>(null);

  const images = useMemo<ImageSet[]>(() => {
    const safeGallery = Array.isArray(gallery) ? gallery : [];

    const fromGallery = safeGallery
      .map((item) => {
        const anyItem = item as CamperGallery & { url?: string; src?: string };
        const original = anyItem.original || anyItem.url || anyItem.src || '';
        const thumb = anyItem.thumb || original;
        return { original, thumb };
      })
      .filter((item) => item.original);

    const withCover = coverImage
      ? [{ original: coverImage, thumb: coverImage }, ...fromGallery]
      : fromGallery;

    return withCover.filter(
      (item, index, arr) => arr.findIndex((x) => x.original === item.original) === index,
    );
  }, [coverImage, gallery]);

  if (images.length === 0) {
    return <div className={css.emptyGallery}>No images</div>;
  }

  const isMainLoopEnabled = images.length > 1;

  return (
    <section className={css.galleryRoot}>
      <Swiper
        loop={isMainLoopEnabled}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image.original}-${index}`}>
            <div className={css.mainMediaWrap}>
              <img
                src={image.original}
                alt={camperName}
                className={css.imageFill}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbs}
        spaceBetween={16}
        slidesPerView={Math.min(4, images.length)}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbsSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image.thumb}-${index}`} className={css.thumbSlide}>
            <div className={css.thumbMediaWrap}>
              <img
                src={image.thumb}
                alt={`Camper preview ${index + 1}`}
                className={css.imageFill}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
