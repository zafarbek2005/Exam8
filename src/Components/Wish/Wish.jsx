import React from 'react';
import './wish.scss';
import { useSelector, useDispatch } from 'react-redux';
import { LuHeart } from "react-icons/lu";
import { Link } from 'react-router-dom'; 
import { toggleHeart } from '../context/Heart/Heart_Slice';
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { FaHeart} from "react-icons/fa";

const Wishes = () => {
  const wishlist = useSelector(state => state.wishlist.value);
  const dispatch = useDispatch();

  const handleToggleHeart = (product) => {
    dispatch(toggleHeart(product));
  };

  let wish = wishlist && wishlist.length > 0 ? (
    wishlist.map((product) => (
      <div className="product_cart" key={product.id}>
        <button id='like' onClick={() => handleToggleHeart(product)}>
          <FaHeart
            className="likee" 
            style={{ color: wishlist.some(wishItem => wishItem.id === product.id) ? "red" : "inherit" }} 
          />
        </button> 
        <div className="product_image">
          <img src={product.url[0]} alt={product.desc} />
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
            <PiShoppingCartSimpleThin />
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="empty_wishlist Container">
      <div className="emty_img">
      <img src="https://sheinm.ltwebstatic.com/pwa_dist/images/wishlist-guide-70bfd4e97b.gif" alt="Empty wishlist" />
      </div>
    </div>
  );

  return (
    <>
      <div className="wishes__wrapper conteiner">
        {wish}
      </div>
      <Link to={"/"} id='backtohome'><button>Go to Home</button></Link>
    </>
  );
};

export default Wishes;
