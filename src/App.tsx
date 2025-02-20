
import { ConfigProvider, App as AntdApp } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { RouterProvider } from 'react-router'
import { router } from './router'
function App() {

  return <ConfigProvider
    locale={zhCN}
    wave={{ disabled: true }}
  >
    <AntdApp component={false}>
      <RouterProvider router={router} />
    </AntdApp>
  </ConfigProvider>
}

export default App
