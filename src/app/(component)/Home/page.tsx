"use client";
import styles from "./home.module.css";
import { useRouter } from "next/navigation";
import { Button } from "antd";
const Home = () => {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            {/* <h1 style={{ fontSize: 60 }}>Discover Unique Artworks</h1> */}
          </div>
        </section>
        {/* <Button
          onClick={() => push("/shop")}
          className={styles.ctaButton}
        >
          Shop Now
        </Button> */}
      </main>
    </div>
  );
};

export default Home;
