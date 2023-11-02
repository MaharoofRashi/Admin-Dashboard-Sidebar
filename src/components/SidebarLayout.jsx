import React from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from "./ToggleThemeButton";
import { useRecoilState } from "recoil";
import { darkThemeState } from "../store/atoms/darkThemeState.js";
import { collapsedState} from "../store/atoms/collapsedState.js";

const { Header, Sider } = Layout;

const SidebarLayout = ({ toggleTheme, headerBackgroundColor }) => {
    const [darkTheme] = useRecoilState(darkThemeState);
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    return (
        <Layout>
            <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className='sidebar'>
                <Logo />
                <MenuList darkTheme={darkTheme} />
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: headerBackgroundColor }}>
                    <Button
                        type='text'
                        className='toggle'
                        onClick={() => setCollapsed(!collapsed)}
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
                </Header>
            </Layout>
        </Layout>
    );
};

export default SidebarLayout;