
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { RouterProvider } from 'react-router'
import { router } from './router'
function App() {

  return <ConfigProvider
   locale={zhCN}
   wave={{ disabled: true }}
  >
    <RouterProvider router={router}/>
  </ConfigProvider>
}

export default App
