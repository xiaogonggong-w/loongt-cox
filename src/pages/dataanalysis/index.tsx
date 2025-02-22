import { Box, Container, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FolderIcon from '@mui/icons-material/Folder';

interface ProjectItem {
  name: string;
  fileName: string;
  updateTime: string;
}

const projectList: ProjectItem[] = [
  {
    name: '未命名项目',
    fileName: '工作簿1.xlsx',
    updateTime: '4分钟前'
  },
  {
    name: '未命名项目',
    fileName: '示例数据-房地产数据.csv',
    updateTime: '4小时前'
  },
  {
    name: '未命名项目',
    fileName: '示例数据-青少年休闲数据.csv',
    updateTime: '1月前'
  }
];

export default function DataAnalysis() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box className="text-lg">分析项目</Box>

      <Table>
        <TableHead>
          <TableRow
            className="mt-10"
            sx={{
              backgroundColor: '#f5f7fa',

            }}>
            <TableCell>项目名称</TableCell>
            <TableCell>文件名称</TableCell>
            <TableCell>更新时间</TableCell>
            <TableCell align="right">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectList.map((project, index) => (
            <TableRow key={index} hover>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FolderIcon sx={{ color: '#FAD165' }} />
                  {project.name}
                </Box>
              </TableCell>
              <TableCell>{project.fileName}</TableCell>
              <TableCell>{project.updateTime}</TableCell>
              <TableCell align="right">
                <IconButton size="small">
                  <MoreHorizIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

