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
            <h1 style={{ fontSize: 60 }}>Welcome to Ipencil Art Collections</h1>
            <p style={{ marginBottom: 10, fontSize: 20 }}>
              Discover unique artworks
            </p>
            <Button
              onClick={() => push("/shop")}
              style={{ backgroundColor: "rgb(199, 144, 41)", color: "#fff" }}
            >
              Shop Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
