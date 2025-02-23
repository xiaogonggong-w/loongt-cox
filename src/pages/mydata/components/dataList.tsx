import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import excel from '@/assets/svg/excel.svg'
import { useNavigate } from "react-router";
import NiceModal from "@ebay/nice-modal-react";
import PreviewData from "./previewDataDialog";
import { getFileData } from "@/service/data";
export default function DataList({files, viewMode}: {files: any[], viewMode: 'grid' | 'list'}) {
    const navigate = useNavigate()


    const previewData =async (file: any) => {
        const res = await getFileData(file.id)
        console.log(res)
        NiceModal.show(PreviewData, {
             header: res.headers,
             rows: res.rows
        })
    }

    return  <Box sx={{
        display: 'flex',
        flexDirection: viewMode === 'grid' ? 'row' : 'column',
        flexWrap: viewMode === 'grid' ? 'wrap' : 'nowrap',
        gap: viewMode === 'grid' ? 2 : 0
    }}>
        {files.map((file) => (
            viewMode === 'grid' ? (
                <FileItem key={file.id} onClick={()=>previewData(file)}>
                    <img src={excel} alt="excel" />
                    <div className="filename">{file.filename}</div>
                </FileItem>
            ) : (
                <ListItem key={file.id}>
                    <img src={excel} alt="excel" />
                    <div className="filename">{file.filename}</div>
                </ListItem>
            )
        ))} 
    </Box>;
}



const FileItem = styled(Box)({
    width: 120,
    height: 140,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 8px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f5f5f5',
    },
    '& img': {
        width: 48,
        height: 48,
        marginBottom: 8
    },
    '& .filename': {
        fontSize: 14,
        textAlign: 'center',
        wordBreak: 'break-all'
    }
})

// 添加列表项样式组件
const ListItem = styled(Box)({
    width: '100%',
    height: 56,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f5f5f5',
    },
    '& img': {
        width: 24,
        height: 24,
        marginRight: 12
    },
    '& .filename': {
        fontSize: 14
    }
})
