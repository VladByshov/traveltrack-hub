"use client";

import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";
import Button from "@/components/Button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Loader from "@/components/PageLoader/PageLoader";
import { CamperReview } from "@/types/camper";
import { sendBooking } from '@/lib/api/camperApi';

interface ReviewsProps {
  reviews: CamperReview[];
  camperId: string;
  isLoading?: boolean;
  isError?: boolean;
}

const bookingSchema = Yup.object({
  name: Yup.string()
      .min(2, "Min 2 characters")
      .max(20, "Max 20 characters")
      .required("Name is required"),
  email: Yup.string()
      .email("Invalid email format")
      .matches(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Email must contain domain (e.g. .com)",
      )
      .required("Email is required"),
});

export default function Reviews({ reviews, camperId, isLoading, isError }: ReviewsProps) {
  const handleBooking = async (payload: { name: string; email: string }) => {
    await sendBooking(camperId, payload);
  };

  return (
    <section>
      <h2 className={css.reviewsTitle}>Reviews</h2>

      <div className={css.contentRow}>
        <div className={css.reviewList}>
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <p className={css.emptyState}>Failed to load reviews.</p>
          ) : reviews.length > 0 ? (
            reviews.map((review, idx) => {
              const reviewerInitial = review.reviewer_name?.trim().charAt(0).toUpperCase() || 'A';

              return (
                <article key={`${review.reviewer_name}-${idx}`} className={css.reviewCard}>
                  <div className={css.reviewHeader}>
                    <div className={css.avatar} aria-hidden="true">
                      {reviewerInitial}
                    </div>

                    <div className={css.authorMeta}>
                      <h3 className={css.authorName}>{review.reviewer_name}</h3>

                      <div className={css.stars}>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FaStar
                            key={index}
                            className={index < review.reviewer_rating ? css.starFilled : css.starEmpty}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className={css.comment}>{review.comment}</p>
                </article>
              );
            })
          ) : (
            <p className={css.emptyState}>No reviews available for this camper.</p>
          )}
        </div>

        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={bookingSchema}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            try {
              await handleBooking(values);
              toast.success('Booking request sent successfully');
              resetForm();
            } catch {
              toast.error('Failed to send booking request');
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={css.bookingForm}>
              <div className={css.bookingHeader}>
                <h3 className={css.bookingTitle}>Book your campervan now</h3>
                <p className={css.bookingSubtitle}>Stay connected! We are always ready to help you.</p>
              </div>

              <div className={css.fieldWrap}>
                <Field
                  className={`${css.input} ${touched.name && errors.name ? css.inputError : ''}`}
                  type="text"
                  name="name"
                  placeholder="Name*"
                  autoComplete="off"
                />
                <ErrorMessage name="name" component="span" className={css.errorText} />
              </div>

              <div className={css.fieldWrap}>
                <Field
                  className={`${css.input} ${touched.email && errors.email ? css.inputError : ''}`}
                  type="email"
                  name="email"
                  placeholder="Email*"
                  autoComplete="off"
                />
                <ErrorMessage name="email" component="span" className={css.errorText} />
              </div>

              <Button
                color="green"
                type="submit"
                text={isSubmitting ? 'Booking...' : 'Send'}
                className={css.submitButton}
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
