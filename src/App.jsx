import React from 'react';
import Navbar from './Components/Header/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Foter from './Components/Footer/Foter';
import Single from './Components/Single/Single';
import Wishes from './Components/Wish/Wish';
import Product_Cart from './Components/ProductC_Cart/Product_Cart';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Dastavka from './Components/Dastavka/Dastavka';
import Return from './Components/Return/Return';
import Garant from './Components/Garant/Garant';
import Cantact from './Components/Contact/Cantact';
import Auth from './Components/Auth/Auth';
import Admin from './Components/pages/Admin';
import Login from './Components/pages/login/login';
import ManageProduct from './Components/pages/Produc_manage/Product_manage';
import Product_create from './Components/pages/Create_Product/Create'
import Create_catigory from './Components/pages/Create_caatigory/Create_catigory'

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
        <Route path='/wishes' element={<Wishes />} />
        <Route path='/product_cart' element={<Product_Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/dastavka' element={<Dastavka />} />
        <Route path='/return' element={<Return />} />
        <Route path='/garant' element={<Garant />} /> 
        <Route path='/cantact' element={<Cantact />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
          <Route path="admin/manage-product" element={<ManageProduct />} />
          <Route path="admin/create-product" element={<Product_create />} />
          <Route path="admin/create-category" element={< Create_catigory/>} />
        </Route>
      </Routes>
      <Foter />
    </>
  );
}

export default App;
