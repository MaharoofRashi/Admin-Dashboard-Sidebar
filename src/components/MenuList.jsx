import { Menu } from 'antd';
import {
    AppstoreOutlined,
    AreaChartOutlined,
    BarsOutlined,
    HomeOutlined,
    PayCircleOutlined,
    SettingOutlined
} from "@ant-design/icons";

const MenuList = ({darkTheme}) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
            <Menu.Item key='home' icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key='activity' icon={<AppstoreOutlined />}>
                Activity
            </Menu.Item>
            <Menu.SubMenu key='tasks' icon={<BarsOutlined />} title="Tasks" >
                <Menu.Item key ='task-1'>Task 1</Menu.Item>
                <Menu.Item key ='task-2'>Task 2</Menu.Item>
                <Menu.SubMenu key='subtasks' title="Tasks" >
                    <Menu.Item key ='subtask-1'>SubTask 1</Menu.Item>
                    <Menu.Item key ='subtask-2'>SubTask 2</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key='progress' icon={<AreaChartOutlined />}>
                Progress
            </Menu.Item>
            <Menu.Item key='payment' icon={<PayCircleOutlined />}>
                Payment
            </Menu.Item>
            <Menu.Item key='setting' icon={<SettingOutlined />}>
                Setting
            </Menu.Item>
        </Menu>
    )
}

export default MenuList