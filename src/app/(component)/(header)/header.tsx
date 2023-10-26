import Image from "next/image";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div  className={styles.header_container}>
      <Image src={"/images/logo.png"} alt="logo" width={250} height={100} />
      <Image src={"/images/hamburger.png"} alt="logo" width={100} height={100}  style={{cursor:"pointer"}}/>

    </div>
  );
};
export default Header;
