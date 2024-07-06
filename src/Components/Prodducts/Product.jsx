import { BsArrowRight } from "react-icons/bs";
import React, { memo, useState, useEffect } from 'react';
import './product.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { toggleHeart } from '../context/Heart/Heart_Slice';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToCart } from '../context/Cart/CartSlice';
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Skeleton from '../Skeleton/Sklet';
import { useGetCategoryQuery } from "../../Components/context/Api/Catigory";

const Product = ({ data, isLoading, isError }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(s => s.wishlist.value);
  const carts = useSelector(s => s.cart.value);

  const [visibleCount, setVisibleCount] = useState(8);
  const [categoryValue, setCategoryValue] = useState("all");
  const [filteredData, setFilteredData] = useState(data);

  const handleSeeMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  const { data: categories } = useGetCategoryQuery();

  useEffect(() => {
    if (categoryValue === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data?.filter((i) => i.category === categoryValue));
    }
  }, [categoryValue, data]);

  if (isLoading) {
    return <h1 className='Container'><Skeleton /></h1>;
  }

  const Products = filteredData?.slice(0, visibleCount).map(product => (
    <div className="product_cart" key={product.id}>
      <button id="like" onClick={() => dispatch(toggleHeart(product))}>
        {wishlist.some((item) => item.id === product.id) ? (
          <FaHeart className="hearts" />
        ) : (
          <FaRegHeart className="svg" />
        )}
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
          <button onClick={() => dispatch(addToCart(product))}>
            {carts.some((item) => item.id === product.id) ? (
              <BsCartCheck className="svg" />
            ) : (
              <AiOutlineShoppingCart className="svg" />
            )}
          </button>
        </div>
      </div>
    </div>
  ));

  const CatigoryData = categories?.map((el) => (
    <li
      className={`category__item ${categoryValue === el.title ? "click" : ""}`}
      onClick={() => setCategoryValue(el.title)}
      key={el.id}
    >
      <span>{el.title}</span>
    </li>
  ));

  return (
    <>
      <div className="product_link conteiner">
        <h3 id="product_title">Популярные товары</h3>  
         <Link to={"/allProducts"}> 
        <button id="vce">Все товары <BsArrowRight /></button>
        </Link>
      </div>
      <div className="category conteiner">
        <ul>
          <li className={`category__item ${categoryValue === "all" ? "click" : ""}`} onClick={() => setCategoryValue("all")}>
            <span>All</span>
          </li>
          {CatigoryData}
        </ul>
      </div>
      <div className="product conteiner">
        {Products}
      </div>
      {visibleCount < filteredData?.length && (
        <div id="see_more">
          <button onClick={handleSeeMore}>See More</button>
        </div>
      )}
    </>
  );
}

export default memo(Product);
