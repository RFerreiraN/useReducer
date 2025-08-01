import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ComponentForm } from './Components/ComponentForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentForm/>
  </StrictMode>,
)
