import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MyDataIcon from '@/assets/svg/mydata.svg?react'
import DataProcessIcon from '@/assets/svg/dataprocess.svg?react'
import DataAnalysisIcon from '@/assets/svg/dataanalysis.svg?react'

// 定义菜单项配置
const menuItems = [
    { 
        key: '/', label: '我的数据',
        icon: <MyDataIcon />
     },
    {
        key: '/dataprocess',
        label: '数据处理',
        icon: <DataProcessIcon />
    },
    {
        key: '/dataanalysis',
        label: '数据分析',
        icon: <DataAnalysisIcon />
    },
]

export default function MenuList() {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEls, setAnchorEls] = useState<(HTMLElement | null)[]>(new Array(menuItems.length).fill(null));

    const isSelected = (itemKey: string) => {
        return location.pathname === itemKey || location.pathname.startsWith(itemKey + '/');
    };

    const handleMenuClick = (path: string) => {
        navigate(path);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
        const newAnchorEls = [...anchorEls];
        newAnchorEls[index] = event.currentTarget;
        setAnchorEls(newAnchorEls);
    };

    const handleMenuClose = (index: number) => {
        const newAnchorEls = [...anchorEls];
        newAnchorEls[index] = null;
        setAnchorEls(newAnchorEls);
    };
    return <div style={{ display: 'flex' }}>
        {menuItems.map((item, index) => (
            // <div key={item.key}>
            //     {item.children ? (
            //         <>
            //             <Button
            //                 onClick={(e) => handleMenuOpen(e, index)}
            //                 endIcon={<KeyboardArrowDownIcon />}
            //                 sx={{
            //                     color: isSelected(item.key) ? '#1890ff' : '#666',
            //                     '&:hover': {
            //                         color: '#1890ff',
            //                         background: 'transparent'
            //                     }
            //                 }}
            //             >
            //                 {item.label}
            //             </Button>
            //             <Menu
            //                 anchorEl={anchorEls[index]}
            //                 open={Boolean(anchorEls[index])}
            //                 onClose={() => handleMenuClose(index)}
            //             >
            //                 {item.children.map((child) => (
            //                     <MenuItem
            //                         key={child.key}
            //                         onClick={() => {
            //                             handleMenuClick(child.key);
            //                             handleMenuClose(index);
            //                         }}
            //                         sx={{
            //                             minWidth: '120px',
            //                             color: isSelected(child.key) ? '#1890ff' : 'inherit',
            //                             '&:hover': {
            //                                 color: '#1890ff'
            //                             }
            //                         }}
            //                     >
            //                         {child.label}
            //                     </MenuItem>
            //                 ))}
            //             </Menu>
            //         </>
            //     ) : (
                    <Box
                        key={item.key}
                        onClick={() => handleMenuClick(item.key)}
                        className="text-1f c-pointer flex flex-col-center h-64"
                        sx={{
                            color: isSelected(item.key) ? '#008858' : '#1f1f1f',
                            '&:hover': {
                                color: '#1f1f1f',
                                background: 'transparent'
                            },
                            borderBottom: isSelected(item.key)? '2px solid #008858' : 'none',
                            fontSize: '18px',
                            gap:"4px",
                            paddingInline: "24px"
                        }}
                    >
                            {item.icon}

                        {item.label}
                    </Box>
            //     )}
            // </div>
        ))}
    </div>
}


