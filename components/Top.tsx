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
import styles from "@/styles/Top.module.scss";

export default function Top() {
  const sliderItems = [
    {
      id: 0,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 1,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 2,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 3,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 4,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 5,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 6,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 7,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 8,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
    {
      id: 9,
      title: "test movie",
      link: "",
      banner: testImageVertical,
    },
  ];

  return (
    <div className={styles.new_slider}>
      <h2>ТОП-10 НЕДЕЛИ</h2>
      <div className={styles.swiper_container}>
        <Swiper
          spaceBetween={5}
          slidesPerView={isMobile() ? 1.5 : 4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
        >
          {sliderItems.map((item, key) => (
            <SwiperSlide key={key}>
              <div className={styles.movie_container}>
                <div className={styles.top_place}>{key+1}</div>
                <Image
                  src={item.banner}
                  alt={item.title}
                  width={280}
                  height={425}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
