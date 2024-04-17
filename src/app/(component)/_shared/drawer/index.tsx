import React, { ReactElement } from 'react';
import {Drawer} from 'antd';
type AppDrawerProps = {
  open: boolean;
  component: ReactElement;
  size?: string;
  placement?: 'left' | 'right' | 'top' | 'bottom';
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
    placement = 'right',
    size,
    style,
    className,
    mask = true,
  } = props;
  return (
    <Drawer title="Your Cart" onClose={onClose} open={open}
      placement={placement}
      // size={size}
      // overlayOpacity={0.1}
      // duration={400}
      style={style}
      className={className}
      mask={mask}
    >
      {component}
    </Drawer>
  );
};

export default AppDrawer;
