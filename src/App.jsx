import React, { useState } from 'react';
import SidebarLayout from './components/SidebarLayout';
import { theme } from 'antd';
import { useRecoilState } from 'recoil';
import { darkThemeState } from "./store/atoms/darkThemeState.js";

function App() {
    const [darkTheme, setDarkTheme] = useRecoilState(darkThemeState);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <SidebarLayout
            toggleTheme={toggleTheme}
            headerBackgroundColor={colorBgContainer}
        />
    );
}

export default App;
