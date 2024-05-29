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
import { useRouter } from "next/navigation";
const { Header } = Layout;

const ResponsiveHeader = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const { push } = useRouter();
  const {
    cartItems,
    removeFromCart,
    artPrints,
    removeFromCartPrint,
    setArtPrints,
    onClose,
    showDrawer,
    visible,
  } = useContext(CartContext);
  if (isMobile) return <MobileHeader />;
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <Menu
        // theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className={styles.header_menu}
        style={{ backgroundColor: "black" }}
      >
        <Menu.Item
          key="1"
          onClick={() => push("/")}
          style={{
            color: "#fff",
            fontWeight: "bolder",
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => push("/about")}
          style={{
            color: "#fff",
            fontWeight: "bolder",
          }}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={() => push("/originals")}
          style={{
            color: "#fff",
            fontWeight: "bolder",
          }}
        >
          Buy My Originals
        </Menu.Item>
        <Menu.Item
          key="5"
          style={{
            color: "#fff",
            fontWeight: "bolder",
          }}
          onClick={() => push("/prints")}
        >
          Buy My Prints
        </Menu.Item>
      </Menu>
      <div onClick={showDrawer} className={styles.cartDiv}>
        <ShoppingCartOutlined className={styles.cart} size={150} />
        <span style={{ color: "#fff", marginLeft: 5 }}>
          {cartItems.length > 0 || artPrints.length > 0
            ? cartItems.length + artPrints.length
            : ""}
        </span>
      </div>
      <AppDrawer
        onClose={onClose}
        width={450}
        style={{ backgroundColor: "#000", borderColor: "#fff" }}
        open={visible}
        component={
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            artPrints={artPrints}
            removeFromCartPrint={removeFromCartPrint}
            setArtPrints={setArtPrints}
          />
        }
      />
    </Header>
  );
};

export default ResponsiveHeader;
