"use client";
import { Drawer, Menu, Button } from "antd";
import { useState, useContext } from "react";
import styles from "../header.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../../(Cart)/cartContext";
import Cart from "../../(Cart)";
import AppDrawer from "../../_shared/drawer";
import { useRouter } from "next/navigation";

import { MenuOutlined } from "@ant-design/icons";
const MobileHeader = () => {
  const [visible, setVisible] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { cartItems, removeFromCart } = useContext(CartContext);
  const { push } = useRouter();

  const showDrawer = () => {
    setVisible(true);
  };
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleCloseCart = () => {
    setShowCart(false);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={styles.mobile_header_container}>
      <Button className="menu-btn" type="primary" onClick={showDrawer}>
        <MenuOutlined style={{ background: "darkorange" }} />
      </Button>
      <div
        style={{
          color: "darkorange",
          fontWeight: "bolder",
          letterSpacing: "8px",
        }}
      >
        IPENCIL
      </div>
      <div onClick={handleShowCart} style={{ display: "flex" }}>
        <ShoppingCartOutlined className={styles.cart} size={150} />
        <span style={{ color: "darkorange", marginLeft: 5 }}>
          {cartItems.length > 0 ? cartItems.length : ""}
        </span>
      </div>
      <Drawer
        title={<span style={{ color: "darkorange" }}>Menu</span>}
        width={450}
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        className={styles.drawer}
        height={450}
        style={{ backgroundColor: "#000", borderColor: "darkorange" }}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "transparent" }}
        >
          <Menu.Item
            key="1"
            onClick={() => {
              push("/");
              onClose();
            }}
            style={{
              color: "darkorange",
              fontWeight: "bolder",
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              push("/about");
              onClose();
            }}
            style={{
              color: "darkorange",
              fontWeight: "bolder",
            }}
          >
            About
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => {
              push("/shop");
              onClose();
            }}
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
            By My Prints
          </Menu.Item>
        </Menu>
      </Drawer>
      <AppDrawer
        onClose={handleCloseCart}
        width={350}
        style={{ backgroundColor: "#000", borderColor: "darkorange" }}
        open={showCart}
        component={
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        }
      />
    </div>
  );
};
export default MobileHeader;
