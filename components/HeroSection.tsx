"use client"

import Image from 'next/image';

import testImageBig from "@/media/Test_Image_Big.webp";

import styles from "@/styles/HeroSection.module.scss";

export default function HeroSection() {
  const selectedItem = {
    id: 0,
    title: "Title of a movie",
    description: "Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.",
    releaseDate: 2024,
    genre: "Фентези",
    countryOfOrign: "США",
    rating: 9.9,
    bannerBig: testImageBig,
    pgRating: "16+"
  };

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
        <div className={styles.bottom_section}>
          <div className={styles.bottom_text}>
            <h2>Сериал {selectedItem.title} смотреть онлайн</h2>
            <p>{selectedItem.description}</p>
          </div>
          <div className={styles.btns}>
            <div className={styles.left_side}>
              <button className={styles.highlited_btn}>Смотреть бесплатно</button>
              <div className={styles.grouped_for_mobile}>
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0004 4.55852C10.9079 3.55629 9.47776 3.00005 7.99349 3C7.20789 3.00082 6.4302 3.15661 5.70518 3.45842C4.98016 3.76023 4.32213 4.2021 3.76896 4.75859C1.40951 7.12237 1.41052 10.8196 3.77096 13.1734L11.123 20.5078C11.2935 20.8069 11.6224 21 12.0004 21C12.1557 20.9985 12.3084 20.9607 12.4463 20.8896C12.5842 20.8186 12.7035 20.7163 12.7946 20.5909L20.2299 13.1734C22.5904 10.8186 22.5904 7.12237 20.2279 4.75458C19.675 4.19912 19.0175 3.75815 18.2932 3.45704C17.5689 3.15592 16.7921 3.0006 16.0074 3C14.5232 3.00024 13.0931 3.55646 12.0004 4.55852ZM18.81 6.16906C20.3773 7.74058 20.3783 10.1954 18.812 11.7589L12.0004 18.5542L5.18883 11.7589C3.62256 10.1954 3.62356 7.74058 5.18683 6.17306C5.94891 5.41681 6.94563 5.00067 7.99349 5.00067C9.04136 5.00067 10.0341 5.41681 10.7901 6.17106L11.2915 6.67122C11.3845 6.7642 11.4951 6.83796 11.6167 6.88829C11.7383 6.93862 11.8687 6.96452 12.0004 6.96452C12.1321 6.96452 12.2625 6.93862 12.3842 6.88829C12.5058 6.83796 12.6163 6.7642 12.7094 6.67122L13.2107 6.17106C14.7269 4.66155 17.2959 4.66556 18.81 6.16906Z" fill="#BABABA"/>
                  </svg>
                </button>
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2806 9.97021L14.7806 2.47021C14.6757 2.36526 14.5421 2.29375 14.3967 2.26473C14.2512 2.23572 14.1004 2.25049 13.9633 2.30719C13.8262 2.36389 13.709 2.45996 13.6265 2.58326C13.5441 2.70657 13.5 2.85156 13.4999 2.9999V6.78271C11.0681 6.99083 8.38213 8.18146 6.17244 10.0555C3.51182 12.313 1.85526 15.2221 1.50744 18.2465C1.48026 18.4816 1.52794 18.7193 1.64368 18.9258C1.75943 19.1322 1.93735 19.2969 2.15212 19.3964C2.36689 19.4959 2.60757 19.5251 2.83991 19.4799C3.07225 19.4347 3.28441 19.3174 3.44619 19.1446C4.47744 18.0468 8.14682 14.5752 13.4999 14.2696V17.9999C13.5 18.1482 13.5441 18.2932 13.6265 18.4165C13.709 18.5398 13.8262 18.6359 13.9633 18.6926C14.1004 18.7493 14.2512 18.7641 14.3967 18.7351C14.5421 18.706 14.6757 18.6345 14.7806 18.5296L22.2806 11.0296C22.4208 10.889 22.4996 10.6985 22.4996 10.4999C22.4996 10.3013 22.4208 10.1108 22.2806 9.97021ZM14.9999 16.1896V13.4999C14.9999 13.301 14.9209 13.1102 14.7803 12.9696C14.6396 12.8289 14.4489 12.7499 14.2499 12.7499C11.6174 12.7499 9.05338 13.4371 6.629 14.7936C5.39427 15.4876 4.24383 16.3219 3.20057 17.2799C3.74432 15.0449 5.11494 12.9196 7.14276 11.1993C9.31963 9.35333 11.9765 8.2499 14.2499 8.2499C14.4489 8.2499 14.6396 8.17088 14.7803 8.03023C14.9209 7.88957 14.9999 7.69881 14.9999 7.4999V4.81115L20.6896 10.4999L14.9999 16.1896Z" fill="#BABABA"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.right_side}>
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7075 20.293L19.6845 18.27C21.1849 16.5263 22.0068 14.3003 21.9995 12C21.9995 7.90897 19.5275 4.54697 16.0005 2.99997V4.99997C18.3875 6.38597 19.9995 9.04697 19.9995 12C19.9951 13.7765 19.4077 15.5025 18.3275 16.913L17.0425 15.628C17.6445 14.536 18.0005 13.19 18.0005 12C18.0005 10.229 17.2255 8.09997 16.0005 6.99997V14.586L14.0005 12.586V3.99997C14.0004 3.81908 13.9512 3.64161 13.8583 3.48645C13.7653 3.3313 13.632 3.20426 13.4725 3.11889C13.313 3.03351 13.1334 2.99298 12.9527 3.00163C12.772 3.01027 12.5971 3.06776 12.4465 3.16797L7.72749 6.31297L3.70749 2.29297L2.29349 3.70697L20.2935 21.707L21.7075 20.293ZM12.0005 5.86797V10.586L9.16949 7.75497L12.0005 5.86797ZM4.00049 17H6.69749L12.4455 20.832C12.5963 20.9321 12.7713 20.9896 12.9521 20.9984C13.1329 21.0072 13.3127 20.967 13.4725 20.882C13.6321 20.7965 13.7655 20.6693 13.8585 20.514C13.9515 20.3587 14.0006 20.181 14.0005 20V18.121L12.0005 16.121V18.132L7.55549 15.168C7.53049 15.151 7.49949 15.148 7.47349 15.135C7.3554 15.0707 7.2254 15.0312 7.09149 15.019C7.05949 15.016 7.03249 15 7.00049 15H4.00049V8.99997H4.87949L3.10249 7.22297C2.77238 7.38821 2.49459 7.6418 2.30003 7.95553C2.10547 8.26926 2.00178 8.63081 2.00049 8.99997V15C2.00049 16.103 2.89749 17 4.00049 17Z" fill="#BABABA"/>
                </svg>
              </button>
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5H10V3H3V10H5V5ZM10 19H5V14H3V21H10V19ZM21 14H19V19H14V21H21V14ZM19 10H21V3H14V5H19V10Z" fill="#BABABA"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
