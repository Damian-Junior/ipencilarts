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

  const {
    cartItems,
    removeFromCart,
    artPrints,
    removeFromCartPrint,
    setArtPrints,
    showDrawer,
    onClose: handleCloseCart,
    visible: showCart,
  } = useContext(CartContext);
  const { push } = useRouter();

  const showMenu = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={styles.mobile_header_container}>
      <Button className="menu-btn" type="primary" onClick={showMenu}>
        <MenuOutlined style={{ background: "#fff" }} />
      </Button>
      <div
        style={{
          color: "#fff",
          fontWeight: "bolder",
          letterSpacing: "8px",
        }}
      >
        IPENCIL
      </div>
      <div onClick={showDrawer} style={{ display: "flex" }}>
        <ShoppingCartOutlined className={styles.cart} size={150} />
        <span style={{ color: "#fff", marginLeft: 5 }}>
          {cartItems.length > 0 || artPrints.length > 0
            ? cartItems.length + artPrints.length
            : ""}
        </span>
      </div>
      <Drawer
        title={<span style={{ color: "#fff" }}>Menu</span>}
        width={450}
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        className={styles.drawer}
        height={450}
        style={{ backgroundColor: "#000", borderColor: "#fff" }}
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
              fontWeight: "bolder",
            }}
          >
            Shop
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{
              color: "#fff",
              fontWeight: "bolder",
            }}
            onClick={() => {
              push("/prints");
              onClose();
            }}
          >
            Buy My Prints
          </Menu.Item>
        </Menu>
      </Drawer>
      <AppDrawer
        onClose={handleCloseCart}
        width={350}
        style={{ backgroundColor: "#000", borderColor: "#fff" }}
        open={showCart}
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
    </div>
  );
};
export default MobileHeader;
