"use client";
import { Drawer, Menu, Button } from "antd";
import { useState } from "react";
import styles from "../header.module.css";

import { MenuOutlined } from "@ant-design/icons";
const MobileHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <div>Ipencil</div>
      <Button className="menu-btn" type="primary" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["1"]}
        //   className={styles.header_menu}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
          <Menu.Item key="4">Commissions</Menu.Item>
          <Menu.Item key="6">Gallery</Menu.Item>
          <Menu.Item key="7">Shop</Menu.Item>
          <Menu.Item key="8">Book a meeting</Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};
export default MobileHeader;
