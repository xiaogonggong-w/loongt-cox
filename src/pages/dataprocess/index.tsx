import Excel from '@/components/excel'
import { Box } from '@mui/material';


export default function DataProcess() {
  return <div className='w-full flex-1 flex flex-col'>
    <Box className="flex-1 p-20">
      <Excel data={[]} />
    </Box>

  </div>;
}

