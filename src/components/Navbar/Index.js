import React, { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };


  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <h6 className="brand-font">Providers</h6>
          </div>
          <div className="navbar-menu">
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div>

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;