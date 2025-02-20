import { Layout } from 'antd'
import { Outlet, Navigate } from 'react-router'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import { useUserStore } from '@/store/user'
import { useShallow } from 'zustand/shallow'
const {  Footer, Content } = Layout




export default function BasicLayout() {
   
    return (
        <AuthLayout>
           <Layout style={{ minHeight: '100vh' }}>
            <Header />
            <Content style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
            }}>
                <Breadcrumb />
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Loongtex ©{new Date().getFullYear()} Created by loongtex
            </Footer>
        </Layout>  
        </AuthLayout>
    )
}



function AuthLayout({children}: {children: React.ReactNode}) {
    const userInfo = useUserStore(useShallow(state => state.userInfo));
    console.log(userInfo);
    if (!userInfo) {
        return <Navigate to="/user/login" />
    }
    return children
}
