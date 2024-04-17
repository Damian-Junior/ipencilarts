"use client";
import { Layout, Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { mediaSize, useMediaQuery } from "../_shared/responsiveness";
import AppDrawer from "../_shared/drawer";
import styles from "./header.module.css";
import MobileHeader from "./(mobile_header)";
import Cart from "../(Cart)";
import { useContext, useState } from "react";
import { CartContext } from "../(Cart)/cartContext";
import CartIcon from '../../../assets/svgs'
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
  const { cartItems } = useContext(CartContext);
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
      <div onClick={showDrawer} style={{display:'flex'}}>
        <ShoppingCartOutlined className={styles.cart} size={150}/>
        <span style={{color:'#fff',}}>{cartItems.length > 0 ? cartItems.length : ""}</span>
      </div>
      <AppDrawer
        onClose={onClose}
        open={visible}
        component={<Cart cartItems={cartItems} />}
      />
    </Header>
  );
};

export default ResponsiveHeader;
