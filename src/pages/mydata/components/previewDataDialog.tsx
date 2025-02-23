import { Dialog, DialogTitle, DialogContent, Box, Typography, DialogActions, Button } from "@mui/material";
import NiceModal, { muiDialogV5, useModal } from '@ebay/nice-modal-react';
import Excel from "@/components/excel";





function PreviewData({header, rows}:{header:any[], rows:any[]}) {
    const modal = useModal()
    return <Dialog
        {...muiDialogV5(modal)}
        sx={{
            '& .MuiDialog-paper': {
                width: 'max-content',
                maxWidth: '100%',
                height: '666px',
            },
        }}
       
    >
        <DialogTitle sx={{
            fontSize: '14px',
        }}>预览数据</DialogTitle>
        <DialogContent sx={{
            width: '866px',
            height: '666px',
        }}>
            <Excel header={header} rows={rows}></Excel>
        </DialogContent>
        <DialogActions
           sx={{
            display: 'flex',
            justifyContent: 'space-between',
           }}   
        >
            <Button type="button" variant="outlined" color="primary" onClick={() => modal.hide()}>确定</Button>
           <Box className="flex-center gap-2">
            <Button type="button" variant="outlined" color="primary" onClick={() => modal.hide()}>去处理</Button>
            <Button type="button" variant="outlined" color="primary" onClick={() => modal.hide()}>去分析</Button>
              
           </Box>
        </DialogActions>
    </Dialog>
}

export default NiceModal.create(PreviewData)


