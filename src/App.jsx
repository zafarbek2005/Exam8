import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home/Home'
import Foter from './Components/Footer/Foter'
import Single from './Components/Single/Single'
import Wishes from './Components/Wish/Wish'
import Product_Cart from './Components/ProductC_Cart/Product_Cart'
import NotFound from './Components/NotFound/NotFound'
import About from './Components/About/About'
import Dastavka from './Components/Dastavka/Dastavka'
import Return from './Components/Return/Return'
import Garant from './Components/Garant/Garant'
import Cantact from './Components/Contact/Cantact'

const App = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname !== '/') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Single />} />
        <Route path='/Wishes' element={<Wishes />} />
        <Route path='/Product_Cart' element={<Product_Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/dastavka' element={<Dastavka />} />
        <Route path='/return' element={<Return />} />
        <Route path='/garant' element={<Garant />} />
        <Route path='/cantact' element={<Cantact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Foter />
    </>
  )
}

export default App
