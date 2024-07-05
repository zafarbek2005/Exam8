import { BsArrowRight } from "react-icons/bs";
import React, {memo} from 'react';
import './product.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { toggleHeart } from '../context/Heart/Heart_Slice';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {addToCart} from '../context/Cart/CartSlice'
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import Skeleton from '../Skeleton/Sklet'

const Product = ({ data, isLoading, isError }) => {
  const dispatch = useDispatch();
  let wishlist = useSelector(s => s.wishlist.value);
  let carts = useSelector(s => s.cart.value)
  if (isLoading) {
    return <h1 className='Container'><Skeleton/></h1>;
  }

  let Products = data?.map(product => (
    <div className="product_cart" key={product.id}>
      <button id="like" onClick={() => dispatch(toggleHeart(product))}>
        {wishlist.some((item) => item.id === product.id) ? (
          <FaHeart className="hearts" />
        ) : (
          <FaRegHeart className="svg" />
        )}
      </button>
      <div className="product_image">
        <img src={product.Image_url} alt={product.desc} />
      </div>
      <Link to={`products/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
      <div className="sena">
        <div className="old_sena">
          <p id="oldprice">7 000₽</p>
          <p>{product.price}₽</p>
        </div>
        <div className="cart">
        <button onClick={() => dispatch(addToCart(product))}>
                    {carts.some((item) => item.id === product.id) ? (
                      <BsCartCheck className="svg"  />
                    ) : (
                      <AiOutlineShoppingCart className="svg" />  
                    )}
                  </button>  
        </div>
      </div>
    </div>
  ));

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
  );
}

export default memo(Product);
