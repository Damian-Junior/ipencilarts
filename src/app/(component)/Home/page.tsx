"use client";

import ResponsiveFooter from "../(footer)/footer";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroContent}></div>
          </section>
        </main>
      </div>
    <ResponsiveFooter/>
    </div>
  );
};

export default Home;
