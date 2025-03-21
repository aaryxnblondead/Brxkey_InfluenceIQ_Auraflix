import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.documentElement.style.scrollbarWidth = 'none'
document.documentElement.style.height = '100vh'
document.body.style.height = 'auto'
document.getElementById('root').style.height = 'auto'
document.documentElement.style.width = '100%'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)