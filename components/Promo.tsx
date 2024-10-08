import Image from "next/image";

import styles from "@/styles/Promo.module.scss";
import TestImageSmall from "@/media/Test_Image_Small.webp";

export default function Promo() {
  return (
    <div className={styles.promo}>
      <div className={styles.text_container}>
        <h1>Смотри мировые премьеры</h1>
        <div className={styles.advantages_horizontal}>
          <div className={styles.advantages_vertical}>
            <div className={styles.advantages_container}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 5.00012H5C4.46957 5.00012 3.96086 5.21084 3.58579 5.58591C3.21071 5.96098 3 6.46969 3 7.00012V25.0001C3 25.5306 3.21071 26.0393 3.58579 26.4143C3.96086 26.7894 4.46957 27.0001 5 27.0001H27C27.5304 27.0001 28.0391 26.7894 28.4142 26.4143C28.7893 26.0393 29 25.5306 29 25.0001V7.00012C29 6.46969 28.7893 5.96098 28.4142 5.58591C28.0391 5.21084 27.5304 5.00012 27 5.00012ZM5 11.0001H15V21.0001H5V11.0001ZM17 9.00012V7.00012H21V9.00012H17ZM15 9.00012H11V7.00012H15V9.00012ZM15 23.0001V25.0001H11V23.0001H15ZM17 23.0001H21V25.0001H17V23.0001ZM17 21.0001V11.0001H27V21.0001H17ZM27 9.00012H23V7.00012H27V9.00012ZM9 7.00012V9.00012H5V7.00012H9ZM5 23.0001H9V25.0001H5V23.0001ZM27 25.0001H23V23.0001H27V25.0001Z" fill="#B4FD64"/>
              </svg>
              <p>Новинки каждую неделю</p>
            </div>
            <div className={styles.advantages_container}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 24C17 24.7363 16.403 25.3333 15.6666 25.3333C14.9303 25.3333 14.3333 24.7363 14.3333 24C14.3333 23.2636 14.9303 22.6666 15.6666 22.6666C16.403 22.6666 17 23.2636 17 24Z" fill="#B4FD64"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99998 2.66663H22.3333C23.804 2.66663 25 3.86263 25 5.33329V26.6666C25 28.1373 23.804 29.3333 22.3333 29.3333H8.99998C7.52931 29.3333 6.33331 28.1373 6.33331 26.6666V5.33329C6.33331 3.86263 7.52931 2.66663 8.99998 2.66663ZM8.99998 5.33329V26.6666H22.336L22.3333 5.33329H8.99998Z" fill="#B4FD64"/>
              </svg>
              <p>На любом устройстве</p>
            </div>
          </div>
          <div className={styles.advantages_vertical}>
            <div className={styles.advantages_container}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.89992 19.5651L6.8648 28.3776C6.80178 28.6444 6.8207 28.9241 6.91908 29.18C7.01747 29.4359 7.19075 29.6563 7.41629 29.8122C7.64183 29.9681 7.90915 30.0524 8.18333 30.054C8.45751 30.0556 8.72581 29.9745 8.95319 29.8213L16.3903 24.8633L23.8273 29.8213C24.06 29.9758 24.3344 30.0553 24.6136 30.0492C24.8928 30.043 25.1634 29.9516 25.389 29.7871C25.6147 29.6225 25.7846 29.3929 25.8758 29.1289C25.967 28.865 25.9752 28.5794 25.8993 28.3107L23.4012 19.5692L29.5967 13.9938C29.7951 13.8151 29.9368 13.5822 30.0043 13.3239C30.0718 13.0655 30.062 12.793 29.9763 12.5402C29.8905 12.2873 29.7325 12.0651 29.5219 11.9011C29.3112 11.737 29.057 11.6383 28.7908 11.6172L21.0041 10.9971L17.6346 3.53818C17.5271 3.298 17.3525 3.09405 17.1317 2.95095C16.9109 2.80784 16.6534 2.73169 16.3903 2.73169C16.1271 2.73169 15.8697 2.80784 15.6489 2.95095C15.4281 3.09405 15.2534 3.298 15.146 3.53818L11.7764 10.9971L3.98968 11.6158C3.72805 11.6366 3.47794 11.7322 3.26926 11.8914C3.06058 12.0505 2.90217 12.2664 2.81298 12.5132C2.72379 12.7601 2.7076 13.0274 2.76634 13.2831C2.82508 13.5389 2.95627 13.7724 3.14421 13.9555L8.89992 19.5651ZM12.7967 13.6564C13.0405 13.6372 13.2746 13.5528 13.4746 13.412C13.6745 13.2711 13.8329 13.0791 13.9331 12.856L16.3903 7.41857L18.8474 12.856C18.9476 13.0791 19.106 13.2711 19.3059 13.412C19.5059 13.5528 19.74 13.6372 19.9838 13.6564L25.409 14.0867L20.9413 18.1077C20.5534 18.4574 20.399 18.9955 20.5411 19.4982L22.2525 25.4874L17.1497 22.0851C16.9257 21.9348 16.6621 21.8545 16.3923 21.8545C16.1226 21.8545 15.8589 21.9348 15.6349 22.0851L10.3027 25.6404L11.7368 19.4313C11.7894 19.2029 11.7823 18.9648 11.7163 18.74C11.6503 18.5151 11.5275 18.311 11.3598 18.1474L7.21036 14.1017L12.7967 13.6564Z" fill="#B4FD64"/>
              </svg>
              <p>Без рекламы и доплат</p>
            </div>
            <div className={styles.advantages_container}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6667 10.6666H19.184L20.6814 6.17729C20.9507 5.36663 20.8147 4.46796 20.3147 3.77463C19.8147 3.08129 19.004 2.66663 18.1494 2.66663H16C15.604 2.66663 15.2294 2.84263 14.9747 3.14663L8.70802 10.6666H5.33335C3.86269 10.6666 2.66669 11.8626 2.66669 13.3333V25.3333C2.66669 26.804 3.86269 28 5.33335 28H23.076C23.6185 27.9982 24.1477 27.8317 24.5936 27.5227C25.0396 27.2137 25.3812 26.7766 25.5734 26.2693L29.2494 16.468C29.3052 16.3183 29.3336 16.1597 29.3334 16V13.3333C29.3334 11.8626 28.1374 10.6666 26.6667 10.6666ZM5.33335 13.3333H8.00002V25.3333H5.33335V13.3333ZM26.6667 15.7586L23.076 25.3333H10.6667V12.4826L16.624 5.33329H18.152L16.0694 11.5773C16.0017 11.7777 15.9829 11.9914 16.0143 12.2005C16.0458 12.4097 16.1267 12.6083 16.2502 12.78C16.3738 12.9517 16.5365 13.0914 16.7249 13.1876C16.9132 13.2839 17.1218 13.3338 17.3334 13.3333H26.6667V15.7586Z" fill="#B4FD64"/>
              </svg>
              <p>Эксклюзивная озвучка</p>
            </div>
          </div>
        </div>
        <div className={styles.try_for_free_container}>
          <button className={styles.try_for_free_btn}>Попробовать бесплатно</button>
          <p className={styles.disclaimer}>далее от 166 ₽/мес</p>
        </div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.image_row}>
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
        </div>
        <div className={styles.image_row}>
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
        </div>
        <div className={styles.image_row}>
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
          <Image
            src={TestImageSmall}
            width={279}
            height={165}
            alt="Test image"
          />
        </div>
      </div>
    </div>
  );
}
