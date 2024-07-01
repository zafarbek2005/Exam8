import React from 'react'
import Banner from '../Banner/Banner'
import Caralog from '../Catalog/Caralog'
import About_cart from '../About_carts/About_cart'
import Product from '../Prodducts/Product'
import { useGetProductsQuery } from '../context/Api/productapi'
import Home_bootom from '../Home_bottom/Home_bootom'

const Home = () => {
   const {data,isLoading,isError} = useGetProductsQuery()
  return (
   <>
   <Banner/>
   <Caralog/>
   <About_cart/>
   <Product data={data} isLoading={isLoading}isError={isError}/>
   <Home_bootom/>
   
   
   
   
   </>
  )
}

export default Home