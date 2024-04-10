"use client";
import { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const ResponsiveHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ flexGrow: 1 }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
        <Menu.Item key="4">Commissions</Menu.Item>
        <Menu.Item key="5">Gallery</Menu.Item>
        <Menu.Item key="5">Shop</Menu.Item>
        <Menu.Item key="5">Book a meeting</Menu.Item>
      </Menu>
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
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Menu 1</Menu.Item>
          <Menu.Item key="2">Menu 2</Menu.Item>
          <Menu.Item key="3">Menu 3</Menu.Item>
          <Menu.Item key="4">Menu 4</Menu.Item>
          <Menu.Item key="5">Menu 5</Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default ResponsiveHeader;
