"use client"

import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

import isMobile from '@/lib/isMobile';

import testImageVertical from "@/media/Test_Image_Vertical.webp";
import styles from "@/styles/New.module.scss";

export default function New() {
  const sliderItems = [
    {
      id: 0,
      title: "Title of a movie",
      releaseDate: 2024,
      // Length as string for simplicity
      length: "2 ч 32 мин",
      rating: 9.9,
      banner: testImageVertical,
      isNewSeason: false
    },
    {
      id: 0,
      title: "Title of a movie",
      releaseDate: 2024,
      // Length as string for simplicity
      length: "2 ч 32 мин",
      rating: 9.9,
      banner: testImageVertical,
      isNewSeason: false
    },
    {
      id: 0,
      title: "Title of a movie",
      releaseDate: 2024,
      // Length as string for simplicity
      length: "2 ч 32 мин",
      rating: 9.9,
      banner: testImageVertical,
      isNewSeason: true
    },
    {
      id: 0,
      title: "Title of a movie",
      releaseDate: 2024,
      // Length as string for simplicity
      length: "2 ч 32 мин",
      rating: 9.9,
      banner: testImageVertical,
      isNewSeason: false
    },
    {
      id: 0,
      title: "Title of a movie",
      releaseDate: 2024,
      // Length as string for simplicity
      length: "2 ч 32 мин",
      rating: 9.9,
      banner: testImageVertical,
      isNewSeason: false
    },
    {
      id: 0,
      title: "Title of a movie",
      releaseDate: 2024,
      // Length as string for simplicity
      length: "2 ч 32 мин",
      rating: 9.9,
      banner: testImageVertical,
      isNewSeason: true 
    },
    {
      id: 0,
      title: "Title of a movie",
      releaseDate: 2024,
      // Length as string for simplicity
      length: "2 ч 32 мин",
      rating: 9.9,
      banner: testImageVertical,
      isNewSeason: false
    },
  ];

  return (
    <div className={styles.new_slider}>
      <h2>Новинки</h2>
      <div className={styles.swiper_container}>
        <Swiper
          spaceBetween={10}
          slidesPerView={isMobile() ? 2 : 6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
        >
          {sliderItems.map((item, key) => (
            <SwiperSlide key={key}>
              <div className={styles.movie_container}>
                <div className={styles.banner_contianer}>
                  <div className={styles.rating_and_new_season}>
                    <div className={styles.rating}>{item.rating}</div>
                    {item.isNewSeason && (
                      <div className={styles.new_season}>Новый сезон</div>
                    )}
                  </div>
                  <Image
                    src={item.banner}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.title_and_length}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.release_date_length}>{item.releaseDate}, {item.length}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
