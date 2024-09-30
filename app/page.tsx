import styles from "./page.module.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Promo from "@/components/Promo";
import New from "@/components/New";
import Top from "@/components/Top";
import TrailerSection from "@/components/TrailerSection";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <TrailerSection />
      <New />
      <Promo />
      <Top />
      <Footer />
      <MobileMenu />
    </div>
  );
}
