
import { RouterProvider } from 'react-router'
import { router } from './router'
import NiceModal from '@ebay/nice-modal-react'
function App() {

  return <NiceModal.Provider>
    <RouterProvider router={router} />
  </NiceModal.Provider>

}

export default App
