import { HomeOutlined, UserOutlined, TableOutlined } from "@ant-design/icons"
import { Layout, Menu, MenuProps } from "antd"
import { useNavigate } from "react-router"


// 定义菜单项配置
const menuItems = [
    { key: '/', label: '欢迎', icon: <HomeOutlined /> },
    { 
        key: '/admin', 
        label: '管理页', 
        icon: <UserOutlined />,
        children: [
            { key: '/admin/users', label: '用户管理' },
            { key: '/admin/roles', label: '角色管理' },
        ]
    },
    { 
        key: '/list', 
        label: '列表页', 
        icon: <TableOutlined />,
        children: [
            { key: '/list/basic', label: '基础列表' },
            { key: '/list/advanced', label: '高级列表' },
        ]
    },
]

export default function Header() {
    const navigate = useNavigate()
    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        navigate(key)
    }
    return <Layout.Header style={{ 
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '0 16px',
        boxShadow: '0 1px 4px rgba(0,21,41,.08)'
    }}>
        <div className='logo' style={{
            width: '200px',
            height: '32px',
            background: 'linear-gradient(135deg, #1890ff 0%, #001529 100%)',
            margin: '16px 24px 16px 0',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}>
            loongtex-cox
        </div>
        <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{ flex: 1, minWidth: 0 }}
            items={menuItems}
            onClick={handleMenuClick}
        />
    </Layout.Header>
}
