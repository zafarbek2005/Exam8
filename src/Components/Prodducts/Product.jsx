import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import './product.scss'
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const Product = ({data,isLoading,isError}) => {

    let Products = data?.map(product => (
        <div className="product_cart" key={product.id}>
        <span id="like"><CiHeart/></span>
        <div className="product_image">
            <img src= {product.Image_url} alt={product.desc} />
        </div>
        <h2>{product.title}</h2>
        <div className="sena">
            <div className="old_sena">
                <p id="oldprice">7 000₽</p>
                <p>{product.price}₽</p>   
            </div>
            <div className="cart">
                <PiShoppingCartSimpleThin/>
            </div>
        </div>
    </div>
    ))  
  return (
  <>
  <div className="product_link conteiner">
    <h3 id="product_title">Популярные товары</h3>
    <button id="vce">Все товары <BsArrowRight /> </button>
  </div>
  
  <div className="product conteiner">
        {Products}
  
  </div>    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Product