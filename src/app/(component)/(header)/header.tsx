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
  const [visible, setVisible] = useState(false);
  const { push } = useRouter();
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const { cartItems, removeFromCart } = useContext(CartContext);
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
        style={{ backgroundColor: "transparent" }}
      >
        <Menu.Item
          key="1"
          onClick={() => push("/")}
          style={{
            color: "darkorange",
            fontWeight: "bolder",
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => push("/about")}
          style={{
            color: "darkorange",
            fontWeight: "bolder",
          }}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={() => push("/shop")}
          style={{
            color: "darkorange",
            fontWeight: "bolder",
          }}
        >
          Shop
        </Menu.Item>
        <Menu.Item
          key="4"
          style={{
            color: "darkorange",
            fontWeight: "bolder",
          }}
        >
          Buy My Originals
        </Menu.Item>
        <Menu.Item
          key="5"
          style={{
            color: "darkorange",
            fontWeight: "bolder",
          }}
        >
          Buy My Prints
        </Menu.Item>
      </Menu>
      <div onClick={showDrawer} style={{ display: "flex" }}>
        <ShoppingCartOutlined className={styles.cart} size={150} />
        <span style={{ color: "darkorange", marginLeft:5 }}>
          {cartItems.length > 0 ? cartItems.length : ""}
        </span>
      </div>
      <AppDrawer
        onClose={onClose}
        width={450}
        style={{ backgroundColor: "#000", borderColor: "darkorange" }}
        open={visible}
        component={
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        }
      />
    </Header>
  );
};

export default ResponsiveHeader;
