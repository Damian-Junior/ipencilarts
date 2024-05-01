import React, { ReactElement } from "react";
import styles from './drawer.module.css'
import { Drawer } from "antd";
type AppDrawerProps = {
  open: boolean;
  component: ReactElement;
  width?: string | number;
  placement?: "left" | "right" | "top" | "bottom";
  onClose: () => void;
  style?: Record<string, any>;
  className?: string;
  mask?: boolean;
};

const AppDrawer = (props: AppDrawerProps) => {
  const {
    open,
    onClose,
    component,
    placement = "right",
    width,
    style,
    className,
    mask = true,
  } = props;
  return (
    <Drawer
      title={<span style={{ color: "#fff" , letterSpacing:10,}}>Your Cart</span>}
      onClose={onClose}
      open={open}
      placement={placement}
      width={width}
      style={style}
      className={`${styles.drawer} ${className}`}
      mask={mask}
      closable={true}
  
    >
      {component}
    </Drawer>
  );
};

export default AppDrawer;
