import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify'
import './App.css'
import Routers from './routers'

function App() {
 

  return (
    <>
      <Routers />
      <ToastContainer />
    </> 
  )
}

export default App
