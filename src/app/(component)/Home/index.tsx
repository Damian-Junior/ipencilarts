import styles from './home.module.css';
import Link from 'next/link'
import { Button } from 'antd';
const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to Artify</h1>
            <p>Discover unique artworks by our featured artist.</p>
            <Button>Shop Now</Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
