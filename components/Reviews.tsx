"use client"

import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import isMobile from '@/lib/isMobile';

import styles from "@/styles/Reviews.module.scss";

export default function Reviews() {
  const sliderItems = [
    {
      id: 0,
      reviewer: "Name",
      date: "5th May 2023",
      score: 7,
      review: "Lorem ipsum odor amet, consectetuer adipiscing elit."
    },
    {
      id: 1,
      reviewer: "Name",
      date: "5th May 2023",
      score: 7,
      review: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus gravida efficitur convallis mollis placerat consectetur erat."
    },
    {
      id: 2,
      reviewer: "Name",
      date: "5th May 2023",
      score: 7,
      review: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla magna ipsum magnis scelerisque tempus blandit; ex mauris sapien. Odio primis facilisis nunc, ac leo quis."
    },
    {
      id: 3,
      reviewer: "Name",
      date: "5th May 2023",
      score: 7,
      review: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus gravida efficitur convallis mollis placerat consectetur erat. Proin orci auctor faucibus condimentum feugiat fames."
    },
    {
      id: 4,
      reviewer: "Name",
      date: "5th May 2023",
      score: 7,
      review: "Lorem ipsum odor amet, consectetuer adipiscing elit. Quisque auctor placerat venenatis curae dis mattis. Volutpat semper efficitur class tempus habitasse. Finibus etiam consectetur hac netus semper ante ornare?"
    },
    {
      id: 5,
      reviewer: "Name",
      date: "5th May 2023",
      score: 7,
      review: "Lorem ipsum odor amet, consectetuer adipiscing elit."
    },
    {
      id: 6,
      reviewer: "Name",
      date: "5th May 2023",
      score: 7,
      review: "Natoque morbi class, class neque mollis nisl nisl nec."
    },
    {
      id: 7,
      reviewer: "Name",
      date: "5th May 2023",
      score: 7,
      review: "Adipiscing hendrerit congue sem nostra malesuada metus semper arcu. Adipiscing ornare ridiculus vitae suscipit scelerisque mollis natoque laoreet."
    },
  ]

  return (
    <div className={styles.new_slider}>
      <div className={styles.section_header}>
        <h2>Отзывы</h2>
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9427 24.1093L20.552 16.5L12.9427 8.89062L11.0574 10.776L16.7814 16.5L11.0574 22.224L12.9427 24.1093Z" fill="white"/>
        </svg>
      </div>
      <div className={styles.swiper_container}>
        <Swiper
          spaceBetween={20}
          slidesPerView={isMobile() ? 1.25 : 5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
        >
          {sliderItems.map((item, key) => (
            <SwiperSlide key={key}>
              <div className={styles.review_container}>
                <div className={styles.top}>
                  <div className={styles.reviewer_and_date}>
                    <h2>{item.reviewer}</h2>
                    <p>{item.date}</p>
                  </div>
                  <div className={styles.score}>{item.score}</div>
                </div>
                {item.review.length > 100 ? (
                  <>
                    <p className={styles.review}>{item.review.slice(0, 100)}...</p>
                    <button>Читать дальше</button>
                  </>
                ) : (
                  <p className={styles.review}>{item.review}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
