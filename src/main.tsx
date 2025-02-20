  import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css/normalize.css'
import 'virtual:uno.css'
import './designs/global.less'
createRoot(document.getElementById('root')!).render(
  <App />
)
