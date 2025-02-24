
import { RouterProvider } from 'react-router'
import { router } from './router'
import NiceModal from '@ebay/nice-modal-react'
import { createTheme, ThemeProvider } from '@mui/material'



const theme = createTheme({
   spacing: 4,
   palette: {
      primary: {
         main: '#008858',
      },
      secondary: {
         main: '#6c757d',
      },
   },
})

function App() {

  return <NiceModal.Provider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </NiceModal.Provider>

}

export default App
