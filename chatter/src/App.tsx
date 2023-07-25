import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';


function App() {
  return (
    <>
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/mainpage'element={<MainPage/>}/>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
         
        </Routes>
        </BrowserRouter>
      
       </>
    </>
  )
}

export default App
