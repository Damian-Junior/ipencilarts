"use client";
import Link from "next/link";
import { Layout } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  TikTokOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import styles from "./footer.module.css";
const { Footer: AntFooter } = Layout;

const ResponsiveFooter = () => {
  return (
    <AntFooter
      style={{
        textAlign: "center",
        width: "100%",
        backgroundColor: "transparent",
              }}
    >
      <div className={styles.text}>
        {/* <p className={styles.text_p}>Shopping and Returns</p>
        <p className={styles.text_p}>Terms and Conditions</p> */}
        <p className={styles.text_p}>Contact Us</p>
        <div className={styles.socialIcons}>
          <Link href="https://tr.ee/tjhc35_eFc" passHref>
            <InstagramOutlined className={styles.icon} />
          </Link>
          <Link href="https://tr.ee/vNami6QGtR" passHref>
            <TwitterOutlined className={styles.icon} />
          </Link>
          <Link href="https://tr.ee/0rGMTk0Z4s" passHref>
            <TikTokOutlined className={styles.icon} />
          </Link>
          <Link href="https://tr.ee/vNami6QGtR" passHref>
            <FacebookOutlined className={styles.icon} />
          </Link>
        </div>
        <div style={{ marginTop: 10 }}>
          <p>© {new Date().getFullYear()} Ipencilarts. All Rights Reserved.</p>
        </div>
      </div>
    </AntFooter>
  );
};

export default ResponsiveFooter;
