import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ListaDeUsuarios } from './Components/ListaDeUsuarios'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaDeUsuarios/>
  </StrictMode>,
)
