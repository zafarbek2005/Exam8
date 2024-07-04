import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './Components/Home/Home'
import Foter from './Components/Footer/Foter'
import Single from './Components/Single/Single'
import Wishes from './Components/Wish/Wish'
import Product_Cart from './Components/ProductC_Cart/Product_Cart'
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
    <Route path='/Wishes' element={<Wishes/>}/>
    <Route path='/Product_Cart' element={<Product_Cart/>}/>




    </Routes>
    
    <Foter/>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default App