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

import testImageSmall from "@/media/Test_Image_Small.webp";
import styles from "@/styles/EpisodeSelection.module.scss";

export default function EpisodeSelection() {
  const sliderItems = [
    {
      id: 0,
      title: "Title of an episode",
      banner: testImageSmall,
      length: "55 min",
      progress: 100
    },
    {
      id: 1,
      title: "Title of an episode",
      banner: testImageSmall,
      length: "60 min",
      progress: 55
    },
    {
      id: 2,
      title: "Title of an episode",
      banner: testImageSmall,
      length: "45 min",
      progress: 0
    },
    {
      id: 3,
      title: "Title of an episode",
      banner: testImageSmall,
      length: "55 min",
      progress: 0
    },
    {
      id: 4,
      title: "Title of an episode",
      banner: testImageSmall,
      length: "55 min",
      progress: 0
    },
    {
      id: 5,
      title: "Title of an episode",
      banner: testImageSmall,
      length: "55 min",
      progress: 0
    },
  ]
  return (
    <div className={styles.episode_selection_container}>
      <div className={styles.tabs_btns}>
        <button>
          Трейлер
        </button>
        <button className={styles.active_btn}>
          1 сезон
        </button>
        <button>
          2 сезон
        </button>
        <button>
          3 сезон
        </button>
      </div>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={isMobile() ? 1.75 : 4.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
        >
          {sliderItems.map((item, key) => (
            <SwiperSlide key={key}>
              <div className={styles.episode_container}>
                <div className={styles.banner_contrainer}>
                  <Image
                    src={item.banner}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className={styles.length}>{item.length}</div>
                </div>
                {item.progress !== 0 && (
                  <div className={styles.progress_bar}>
                    <div style={{width: `${item.progress}%`}} className={styles.progress_filled}></div>
                  </div>
                )}
                <p className={styles.title}>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
