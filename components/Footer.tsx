import styles from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content1}>
        <button className={styles.contact_support_btn}>
          Написать в поддержку
        </button>
        <div className={styles.social_links_container}>
          <a href="" className={styles.social_links}>
            <p>Telegram</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5664 5.09205L4.77947 10.7942C3.77032 11.1995 3.77616 11.7624 4.59432 12.0135L8.39072 13.1978L17.1745 7.65579C17.5898 7.40309 17.9693 7.53903 17.6574 7.81592L10.5408 14.2386H10.5391L10.5408 14.2394L10.2789 18.1526C10.6626 18.1526 10.8319 17.9766 11.047 17.769L12.891 15.9758L16.7266 18.809C17.4339 19.1984 17.9418 18.9983 18.1177 18.1543L20.6356 6.28802C20.8933 5.25468 20.2411 4.78681 19.5664 5.09205Z" fill="white" fill-opacity="0.3"/>
            </svg>
          </a>
          <a href="" className={styles.social_links}>
            <p>ВКонтакте</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.579 6.85501C21.719 6.39001 21.579 6.04901 20.917 6.04901H18.724C18.166 6.04901 17.911 6.34401 17.771 6.66801C17.771 6.66801 16.656 9.38701 15.076 11.15C14.566 11.663 14.333 11.825 14.055 11.825C13.916 11.825 13.714 11.663 13.714 11.198V6.85501C13.714 6.29701 13.553 6.04901 13.088 6.04901H9.642C9.294 6.04901 9.084 6.30701 9.084 6.55301C9.084 7.08101 9.874 7.20301 9.955 8.69101V11.919C9.955 12.626 9.828 12.755 9.548 12.755C8.805 12.755 6.997 10.026 5.924 6.90201C5.715 6.29501 5.504 6.05001 4.944 6.05001H2.752C2.125 6.05001 2 6.34501 2 6.66901C2 7.25101 2.743 10.131 5.461 13.94C7.273 16.541 9.824 17.951 12.148 17.951C13.541 17.951 13.713 17.638 13.713 17.098V15.132C13.713 14.506 13.846 14.38 14.287 14.38C14.611 14.38 15.169 14.544 16.47 15.797C17.956 17.283 18.202 17.95 19.037 17.95H21.229C21.855 17.95 22.168 17.637 21.988 17.019C21.791 16.404 21.081 15.509 20.139 14.45C19.627 13.846 18.862 13.196 18.629 12.871C18.304 12.452 18.398 12.267 18.629 11.895C18.63 11.896 21.301 8.13401 21.579 6.85501Z" fill="white" fill-opacity="0.3"/>
            </svg>
          </a>
          <a href="" className={styles.social_links}>
            <p>Youtube</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5931 7.20301C21.4792 6.78041 21.2566 6.39501 20.9475 6.08518C20.6383 5.77534 20.2534 5.55187 19.8311 5.43701C18.2651 5.00701 12.0001 5.00001 12.0001 5.00001C12.0001 5.00001 5.73609 4.99301 4.16909 5.40401C3.74701 5.52415 3.36291 5.75078 3.05365 6.06214C2.7444 6.3735 2.52037 6.75913 2.40309 7.18201C1.99009 8.74801 1.98609 11.996 1.98609 11.996C1.98609 11.996 1.98209 15.26 2.39209 16.81C2.62209 17.667 3.29709 18.344 4.15509 18.575C5.73709 19.005 11.9851 19.012 11.9851 19.012C11.9851 19.012 18.2501 19.019 19.8161 18.609C20.2386 18.4943 20.6238 18.2714 20.9337 17.9622C21.2436 17.653 21.4675 17.2682 21.5831 16.846C21.9971 15.281 22.0001 12.034 22.0001 12.034C22.0001 12.034 22.0201 8.76901 21.5931 7.20301ZM9.99609 15.005L10.0011 9.00501L15.2081 12.01L9.99609 15.005Z" fill="white" fill-opacity="0.3"/>
            </svg>
          </a>
          <a href="" className={styles.social_links}>
            <p>TikTok</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5999 5.82C15.9163 5.03962 15.5396 4.03743 15.5399 3H12.4499V15.4C12.4261 16.071 12.1428 16.7066 11.6597 17.1729C11.1766 17.6393 10.5314 17.8999 9.85991 17.9C8.43991 17.9 7.25991 16.74 7.25991 15.3C7.25991 13.58 8.91991 12.29 10.6299 12.82V9.66C7.17991 9.2 4.15991 11.88 4.15991 15.3C4.15991 18.63 6.91991 21 9.84991 21C12.9899 21 15.5399 18.45 15.5399 15.3V9.01C16.7929 9.90985 18.2973 10.3926 19.8399 10.39V7.3C19.8399 7.3 17.9599 7.39 16.5999 5.82Z" fill="white" fill-opacity="0.3"/>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.resourse_links}>
          <a href="">Главная</a>
          <a href="">Фильмы</a>
          <a href="">Сериалы</a>
          <a href="">ТВ</a>
          <a href="">Контакты</a>
        </div>
        <div className={styles.customer_links}>
          <a href="">Реферальная программа</a>
          <a href="">Скачать приложение</a>
          <a href="">Вопросы и ответы</a>
          <a href="">Условия использования</a>
        </div>
        <div className={styles.mobile_links}>
          <button className={styles.header_btn}>
            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9412 11.0058C20.3815 11.5149 20.0518 12.2213 20.0518 12.9749C20.0518 13.7284 20.3815 14.4348 20.9412 14.9439C21.3122 15.2814 21.765 15.5156 22.2506 15.6345V18.9749C22.2506 19.2822 22.117 19.5931 21.8519 19.8342C21.5845 20.0775 21.2078 20.2249 20.8018 20.2249H3.21138C2.8054 20.2249 2.42868 20.0775 2.16124 19.8342C1.89617 19.5931 1.76257 19.2822 1.76257 18.9749V15.6345C2.24819 15.5156 2.70101 15.2814 3.07202 14.9439C3.63165 14.4348 3.96138 13.7284 3.96138 12.9749C3.96138 12.2213 3.63165 11.5149 3.07202 11.0058C2.70101 10.6684 2.24819 10.4341 1.76257 10.3152V6.97485C1.76257 6.6675 1.89617 6.35656 2.16124 6.11546C2.42868 5.8722 2.8054 5.72485 3.21138 5.72485H20.8018C21.2078 5.72485 21.5845 5.8722 21.8519 6.11546C22.117 6.35656 22.2506 6.6675 22.2506 6.97485V10.3152C21.765 10.4341 21.3122 10.6684 20.9412 11.0058Z" stroke="white" stroke-width="1.5"/>
              <path d="M12.0131 8.97485L13.1933 11.3503L15.8173 11.7388L13.9228 13.5954L14.3642 16.2109L12.0131 14.9829L9.66192 16.2109L10.1033 13.5954L8.20884 11.7388L10.8328 11.3503L12.0131 8.97485Z" fill="white"/>
            </svg>
            Промокод
          </button>
          <a href="">Контакты</a>
          <a href="">Реферальная программа</a>
          <a href="">Скачать приложение</a>
          <a href="">Вопросы и ответы</a>
          <a href="">Условия использования</a>
        </div>
      </div>
      <hr />
      <div className={styles.content3}>
        <div className={styles.disclaimer}>
          <div className={styles.eighteen}>18+</div>
          <div className={styles.copyright}>
            <p>2024, ООО «ТВОЁ ЛАЙВ»</p>
            <p>Все права защищены.</p>
          </div>
        </div>
        <div className={styles.logo_container}>
          <svg width="116" height="40" viewBox="0 0 116 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.5 11.2001L26.5 28.8001L0.5 40.0001L0.500002 0.00012207L26.5 11.2001Z" fill="white" fill-opacity="0.3"/>
            <path d="M20 3.60012V7.67512L13.5 4.85012V0.000123189L20 3.60012Z" fill="white" fill-opacity="0.3"/>
            <path d="M26.5 7.20012V10.5001L20.8125 8.02825V4.05012L26.5 7.20012Z" fill="white" fill-opacity="0.3"/>
            <path d="M38.5 16.5722V12.759H55.847V16.5722H49.8345V26.7352H44.5159V16.5722H38.5Z" fill="white" fill-opacity="0.3"/>
            <path d="M63.4135 26.7386L56.3718 12.759H62.4046L67.0867 22.5111L71.4878 12.759H77.0128L70.4755 26.7386H63.4135Z" fill="white" fill-opacity="0.3"/>
            <path d="M87.3723 12.4942C96.3641 12.4942 97.5253 16.7964 97.5253 19.428V19.9916C97.5253 22.6028 96.381 27.0001 87.3723 27.0001H86.5294C77.5004 27.0001 76.3561 22.6028 76.3561 19.9916V19.428C76.3561 16.7964 77.5004 12.4942 86.5294 12.4942H87.3723ZM92.0172 19.557C92.0172 18.0731 91.0625 16.2497 86.9424 16.2497C82.8223 16.2497 81.8676 18.0731 81.8676 19.557V19.7811C81.8676 21.248 82.8223 23.2208 86.9424 23.2208C91.0625 23.2208 92.0172 21.3227 92.0172 19.8185V19.557Z" fill="white" fill-opacity="0.3"/>
            <path d="M114.348 12.759V16.1784H104.178V17.9271H114.145V21.3295H104.178V23.2446H114.5V26.7386H98.9337V12.759H114.351H114.348ZM106.368 11.9135H101.761V9.00012H106.368V11.9135ZM111.856 11.9135H107.265V9.00012H111.856V11.9135Z" fill="white" fill-opacity="0.3"/>
          </svg>
        </div>
      </div>
    </footer>
  )
}
