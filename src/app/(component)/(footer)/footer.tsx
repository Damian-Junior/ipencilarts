"use client";
import { Layout } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import styles from "./footer.module.css";
const { Footer: AntFooter } = Layout;

const ResponsiveFooter = () => {
  return (
    <AntFooter style={{ textAlign: "center" , position:'fixed', bottom:0, width:'100%'}}>
      <div className={styles.text}>
        <p className={styles.text_p}>Shopping and Returns</p>
        <p className={styles.text_p}>Terms and Conditions</p>
        <p className={styles.text_p}>Privacy Policy</p>
        <div className={styles.socialIcons}>
          <InstagramOutlined className={styles.icon} />
          <TwitterOutlined className={styles.icon} />
          <WhatsAppOutlined className={styles.icon} />
          <FacebookOutlined className={styles.icon} />
        </div>
      </div>
    </AntFooter>
  );
};

export default ResponsiveFooter;
