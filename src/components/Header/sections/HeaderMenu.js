import React from 'react'
import { Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function HeaderMenu() {
    const menu = (
        <Menu>
          <Menu.Item>
            <a href="/detail">
              Detail
            </a>
          </Menu.Item>
          <Menu.Item >
            <a href="/contact">
              Contact
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
    <div>
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <MenuOutlined style={{ color: "black" , fontSize: "30px", marginTop: "5px" }}/>
            </a>
        </Dropdown> 
    </div>
    )
}

export default HeaderMenu

