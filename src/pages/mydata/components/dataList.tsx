import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CsvIcon from "@/assets/svg/csv.svg?react";
import { useNavigate } from "react-router";
import NiceModal from "@ebay/nice-modal-react";
import PreviewData from "./previewDataDialog";
import { getFileData } from "@/service/data";
export default function DataList({ files, viewMode }: { files: any[], viewMode: 'grid' | 'list' }) {
    const navigate = useNavigate()


    const previewData = async (file: any) => {
        const res = await getFileData(file.id)
        console.log(res)
        NiceModal.show(PreviewData, {
            header: res.headers,
            rows: res.rows
        })
    }

    return <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(156px, 1fr))',
       
    }}>
        {files.map((file) => (
            viewMode === 'grid' ? (
                <FileItem key={file.id} onClick={() => previewData(file)}>
                    <CsvIcon></CsvIcon>
                    <div className="filename">{file.filename}</div>
                </FileItem>
            ) : (
                <ListItem key={file.id}>
                    <CsvIcon></CsvIcon>
                    <div className="filename">{file.filename}</div>
                </ListItem>
            )
        ))}
    </Box>;
}



const FileItem = styled(Box)({
    width: 156,
    height: 156,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"space-between",
    padding: 12,
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f2f2f2',
        borderRadius:8
    },
    '& .filename': {
        fontSize: 14,
        lineHeight: '22px',
        color:'#1f1f1f'
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
