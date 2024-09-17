import React from "react";
import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  CodeOutlined,
  LogoutOutlined,
  BellOutlined,
} from "@ant-design/icons";

const RightMenu = ({ mode }) => {
  return (
    <Menu>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">John Doe</span>
          </>
        }
        key="username"
      >
        
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
