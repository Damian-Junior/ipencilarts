"use client";

import styles from "./home.module.css";
const Home = () => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
