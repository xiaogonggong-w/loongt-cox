import { Layout, Menu, Breadcrumb, MenuProps } from 'antd'
import { Outlet, useLocation, Link, useNavigate } from 'react-router'
import { HomeOutlined, UserOutlined, TableOutlined } from '@ant-design/icons'

const { Header, Footer, Content } = Layout

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

// 根据路径获取面包屑项
const getBreadcrumbItems = (pathname: string) => {
    const paths = pathname.split('/').filter(Boolean)
    return [
        {
            title: <Link to="/"><HomeOutlined /> 首页</Link>
        },
        ...paths.map((path, index) => ({
            title: <Link to={`/${paths.slice(0, index + 1).join('/')}`}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
        }))
    ]
}

export default function BasicLayout() {
    const location = useLocation()
    const navigate = useNavigate()
    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        navigate(key)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ 
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
            </Header>
            <Content style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
            }}>
                <Breadcrumb
                    style={{ marginBottom: '16px' }}
                    items={getBreadcrumbItems(location.pathname)}
                />
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Loongtex ©{new Date().getFullYear()} Created by Your Team
            </Footer>
        </Layout>
    )
}