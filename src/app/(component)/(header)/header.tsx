"use client";
import { Layout, Menu, Drawer } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { mediaSize, useMediaQuery } from "../_shared/responsiveness";
import styles from "./header.module.css";
import MobileHeader from "./(mobile_header)";

import { useState } from "react";
const { Header } = Layout;

const ResponsiveHeader = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  if (isMobile) return <MobileHeader />;
  return (
    <Header style={{ display: "flex", justifyContent: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className={styles.header_menu}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
        <Menu.Item key="4">Commissions</Menu.Item>
        <Menu.Item key="6">Gallery</Menu.Item>
        <Menu.Item key="7">Shop</Menu.Item>
        <Menu.Item key="8">Book a meeting</Menu.Item>
      </Menu>
      <div onClick={showDrawer}>
        <ShoppingCartOutlined className={styles.cart}/>
      </div>
      <Drawer
        title="Your Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Your cart is empty.</p>
      </Drawer>
    </Header>
  );
};

export default ResponsiveHeader;
