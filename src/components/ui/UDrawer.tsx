import {Drawer} from "antd";
import React from "react";

type IProps = {
  title: string;
  onClose: any;
  open: any;
  children: React.ReactNode;
};

const UDrawer = ({title, open, onClose, children}: IProps) => {
  return (
    <Drawer
      width={450}
      title={title}
      placement="right"
      onClose={onClose}
      open={open}>
      {children}
    </Drawer>
  );
};

export default UDrawer;
