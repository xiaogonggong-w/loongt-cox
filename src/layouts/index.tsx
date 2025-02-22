import { Outlet } from 'react-router'
import Header from './Header'
import { Box } from '@mui/material'
import { useUserStore } from '@/store/user'
import { useShallow } from 'zustand/shallow'
export default function Layout() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <Header />
            {/* <Breadcrumb /> */}
            
            <Box sx={{
                flex: 1,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Outlet />
            </Box>
            
            <Box sx={{
                padding: '24px',
                textAlign: 'center',
                background: '#fff',
                borderTop: '1px solid #e8e8e8',
                color: 'rgba(0, 0, 0, 0.45)',
                fontSize: '14px'
            }}>
                © {new Date().getFullYear()} LoongTeX. All Rights Reserved.
            </Box>
        </Box>
    )
}

function AuthLayout({children}: {children: React.ReactNode}) {
    const userInfo = useUserStore(useShallow(state => state.userInfo));
    console.log(userInfo);
    // if (!userInfo) {
    //     return <Navigate to="/user/login" />
    // }
    return children
}
