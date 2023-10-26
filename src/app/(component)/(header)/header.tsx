import Image from "next/image";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div  className={styles.header_container}>
        <div className={styles.image_div}>
      <Image src={"/images/logo.png"} alt="logo" width={250} height={100} />
      <Image src={"/images/hamburger.png"} alt="logo" width={100} height={100}  style={{cursor:"pointer"}}/>
      </div>
      <div>
        <div className={styles.balance}>Balance</div>
        <div className={styles.balance}>$500</div>
        <div className={styles.balance}>Bonus earnings <span>$120.00</span> Total earnings <span>$620</span></div>
      </div>
    </div>
  );
};
export default Header;
