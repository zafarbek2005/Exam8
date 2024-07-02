import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './Components/Home/Home'
import Foter from './Components/Footer/Foter'
import Single from './Components/Single/Single'
const App = () => {


  const location = useLocation();


  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/:id' element={<Single/>}/>





    </Routes>
    
    <Foter/>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default App