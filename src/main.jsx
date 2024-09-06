import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StepContext from './pages/Register/StepContext.jsx'

createRoot(document.getElementById('root')).render(
   <StepContext>
      <StrictMode>
         <App />
      </StrictMode>
   </StepContext>,
)
