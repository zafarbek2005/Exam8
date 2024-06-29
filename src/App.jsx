import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>






    </Routes>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default App