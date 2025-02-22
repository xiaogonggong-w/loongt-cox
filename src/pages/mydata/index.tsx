import { Box, Button, Icon, IconButton, InputBase, Paper, ToggleButton, ToggleButtonGroup, toggleButtonGroupClasses } from '@mui/material'
import { GridViewRounded, ListRounded, Search as SearchIcon } from '@mui/icons-material'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import DataList from './components/dataList'
// 自定义样式组件
const SearchBox = styled(Paper)(({ theme }) => ({
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 200,
    height: 32,
    border: '1px solid #e0e0e0',
    boxShadow: 'none',
    borderRadius: 2
}))


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    height: 32,
    padding: 3,
    gap: 4,
    [`& .${toggleButtonGroupClasses.grouped}`]: {
        border: 0,
        width: 26,
        borderRadius: theme.shape.borderRadius,
        [`&.${toggleButtonGroupClasses.disabled}`]: {
            border: 0,
        },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
        borderLeft: '1px solid transparent',
    },
}))

export default function LocalData() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [searchText, setSearchText] = useState('')

    const handleChange = (event: React.MouseEvent<HTMLElement>, newViewMode: 'grid' | 'list') => {
        setViewMode(newViewMode);
    };

    const files = [
        { name: '工作簿1.xlsx', type: 'excel' },
        { name: '示例数据-青少年体质数据.csv', type: 'excel' },
        { name: '示例数据-房地产数据.csv', type: 'excel' }
    ]

    return (
        <Box sx={{ padding: 2 }}>
            {/* 顶部工具栏 */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                   <Paper
                     elevation={0}
                     sx={(theme) => ({
                       display: 'flex',
                       border: `1px solid ${theme.palette.divider}`,
                       flexWrap: 'wrap',
                     })}
                   >
                   <StyledToggleButtonGroup
                        onChange={handleChange}
                        value={viewMode}
                        exclusive
                    >
                        <ToggleButton
                            value="grid"
                            size="small"
                            aria-label="grid"
                        >
                            <GridViewRounded />
                        </ToggleButton>
                        <ToggleButton
                            value="list"
                            size="small"
                            aria-label="list"
                        >
                            <ListRounded />
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                   </Paper>
                </Box>

                <SearchBox sx={{ ml: 2 }}>
                    <Icon baseClassName='search-icon' sx={{
                        width: 16,
                        color: '#666',
                        transform: 'scale(0.6)'
                    }}>
                        <SearchIcon/>
                    </Icon>
                    <InputBase
                        sx={{ ml: 1, flex: 1, fontSize: 12 }}
                        placeholder="搜索文件名称"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </SearchBox>

                <Box sx={{ ml: 2, color: '#666' }}>
                    共 {files.length} 份数据
                </Box>
                <Box className='ml-auto'>
                    <Button variant="outlined" color="primary" className='w-100 h-34 ' >
                        上传数据
                    </Button>
                </Box>
            </Box>

            {/* 文件列表 */}
            <Box className='mt-2'></Box>
            <DataList files={files} viewMode={viewMode} />
        </Box>
    )
}