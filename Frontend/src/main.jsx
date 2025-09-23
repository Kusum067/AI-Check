import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'

function Root(){
  const [LogIn, setLogIn] = useState(false);
  return (
    <StrictMode>
      {LogIn ? (<App />) : (<Login onLogin={() => setLogIn(true)} />
      )}
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)