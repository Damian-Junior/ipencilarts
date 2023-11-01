import Image from "next/image";
import styles from "./signgup.module.css";
const SignUp = () => {
  return (
    <div className={styles.singupWrapper}>
      <div style={{ fontSize: 30, marginBottom: 20 }}>
        Get Signup and earn $12
      </div>
      <div style={{ fontSize: 25, marginBottom: 20 }}>Your Special link</div>
      <div className={styles.copy}>
        <span style={{ color: "#000" }}>
          https://paid2play.co/share/emmydollar986412e
        </span>
        <button className={styles.copyButton}>Copy</button>
      </div>
      <div style={{ fontSize: 25, marginBottom: 20 }}>How it works</div>
      <ol className={styles.list}>
        <li>Copy your links and share with friends or around social media</li>
        <li>Earn $1.00 when someone clicks your specail link</li>
        <li>Earn $12.00 when they signup after clicking</li>
      </ol>
      <div style={{ fontSize: 25, marginBottom: 20 }}>Fast share below</div>
      <div className={styles.shareDiv}>
        <Image
          src={"/images/Facebook_Logo.png"}
          alt="Facebook"
          width={100}
          height={100}
        />
        <Image
          src={"/images/twitter-logo.png"}
          alt="Facebook"
          width={100}
          height={100}
        />
        <Image
          src={"/images/whatsaap-logo.png"}
          alt="Facebook"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
export default SignUp;
