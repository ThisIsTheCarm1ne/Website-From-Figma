"use client"

import { useState } from 'react';

import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';

import isMobile from '@/lib/isMobile';

import testImageSmall from "@/media/Test_Image_Small.webp";
import testImageBig from "@/media/Test_Image_Big.webp";

import styles from "@/styles/TrailerSection.module.scss";

interface ISliderItem {
  id: number,
  title: string,
  releaseDate: number,
  genre: string,
  countryOfOrign: string,
  rating: number,
  banner: any,
  bannerBig: any,
  pgRating: string
}

export default function TrailerSection() {
  const sliderItems: ISliderItem[] = [
    {
      id: 0,
      title: "Title of a movie",
      releaseDate: 2024,
      genre: "Фентези",
      countryOfOrign: "США",
      rating: 9.9,
      banner: testImageSmall,
      bannerBig: testImageBig,
      pgRating: "16+"
    },
    {
      id: 1,
      title: "Title of a movie 1",
      releaseDate: 2023,
      genre: "Фентези",
      countryOfOrign: "США",
      rating: 6.9,
      banner: testImageSmall,
      bannerBig: testImageBig,
      pgRating: "18+"
    },
    {
      id: 2,
      title: "Title of a movie 2",
      releaseDate: 1999,
      genre: "Фентези",
      countryOfOrign: "США",
      rating: 5.5,
      banner: testImageSmall,
      bannerBig: testImageBig,
      pgRating: "12+"
    },
    {
      id: 3,
      title: "Title of a movie 3",
      releaseDate: 2005,
      genre: "Фентези",
      countryOfOrign: "США",
      rating: 9.9,
      banner: testImageSmall,
      bannerBig: testImageBig,
      pgRating: "16+"
    },
    {
      id: 4,
      title: "Title of a movie 3",
      releaseDate: 2005,
      genre: "Фентези",
      countryOfOrign: "США",
      rating: 9.9,
      banner: testImageSmall,
      bannerBig: testImageBig,
      pgRating: "16+"
    },
    {
      id: 5,
      title: "Title of a movie 3",
      releaseDate: 2005,
      genre: "Фентези",
      countryOfOrign: "США",
      rating: 9.9,
      banner: testImageSmall,
      bannerBig: testImageBig,
      pgRating: "16+"
    },
    {
      id: 6,
      title: "Title of a movie 3",
      releaseDate: 2005,
      genre: "Фентези",
      countryOfOrign: "США",
      rating: 9.9,
      banner: testImageSmall,
      bannerBig: testImageBig,
      pgRating: "16+"
    },
    {
      id: 7,
      title: "Title of a movie 3",
      releaseDate: 2005,
      genre: "Фентези",
      countryOfOrign: "США",
      rating: 9.9,
      banner: testImageSmall,
      bannerBig: testImageBig,
      pgRating: "16+"
    },
  ];

  const [selectedItem, setSelectedItem] = useState<ISliderItem>(sliderItems[0]);

  return (
    <div className={styles.trailer_section}>
      <Image
        src={selectedItem.bannerBig}
        alt={selectedItem.title}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.info_container}>
        <div className={styles.text_about_movie}>
          <h1>{selectedItem.title}</h1>
          <div className={styles.info_about_movie_container}>
            <div className={styles.info_about_movie}>
              {selectedItem.rating}
            </div>
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="white" fill-opacity="0.3"/>
            </svg>
            <div className={styles.info_about_movie}>
              {selectedItem.releaseDate}
            </div>
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="white" fill-opacity="0.3"/>
            </svg>
            <div className={styles.info_about_movie}>
              {selectedItem.genre}
            </div>
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="white" fill-opacity="0.3"/>
            </svg>
            <div className={styles.info_about_movie}>
              {selectedItem.countryOfOrign}
            </div>
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="white" fill-opacity="0.3"/>
            </svg>
            <div className={styles.info_about_movie}>
              {selectedItem.pgRating}
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={isMobile() ? 3.25 : 7}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {sliderItems.map((item, key) => (
            <SwiperSlide key={key}>
              <div className={styles.movie_container}>
                <div className={styles.banner_contrainer} onClick={() => setSelectedItem(item)}>
                  <Image
                    src={item.banner}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.progress_bar}></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
