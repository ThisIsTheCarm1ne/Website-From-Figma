import AboutTvShow from "@/components/AboutTvShow";
import AnnoyingTryForFreeSection from "@/components/AnnoyingTryForFreeSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";
import UserScoreForm from "@/components/UserScoreForm";
import styles from "./page.module.scss";
import EpisodeSelection from "@/components/EpisodeSelection";
import HeroSection from "@/components/HeroSection";
import MobileMenu from "@/components/MobileMenu";

export default function TVShow() {
  return (
    <>
      <Header />
      <div className={styles.back_btn_container}>
        <button className={styles.back_btn}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.desktop_icon}>
            <path d="M20.9999 11H6.41394L11.7069 5.70697L10.2929 4.29297L2.58594 12L10.2929 19.707L11.7069 18.293L6.41394 13H20.9999V11Z" fill="white"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.mobile_icon}>
            <path d="M11.9106 5.24414L7.15479 9.99997L11.9106 14.7558L13.089 13.5775L9.51145 9.99997L13.089 6.42247L11.9106 5.24414Z" fill="white"/>
          </svg>
          <p>
            Назад
          </p>
        </button>
      </div>
      <HeroSection />
      <AnnoyingTryForFreeSection />
      <EpisodeSelection />
      <div className={styles.middle_section}>
        <AboutTvShow />
        <UserScoreForm />
      </div>
      <Reviews />
      <Footer />
      <MobileMenu />
    </>
  )
}
