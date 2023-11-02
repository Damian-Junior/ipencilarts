import Image from "next/image";
import styles from "./spin.module.css";
const Spin = () => {
  return (
    <div className={styles.spinWrapper}>
      <div style={{marginTop:"6%"}}>
        <div style={{fontSize:30, marginBottom:20}}>Spin Wheel and Win Everyday</div>
        <button className={styles.playButton}>Play Now</button>
      </div>
      <div>
        <Image
          src="/images/spin-pic.png"
          width={300}
          height={300}
          alt="spinner"
        />
      </div>
    </div>
  );
};
export default Spin;
