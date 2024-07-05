import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../Header/img/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiHeart } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { useSelector } from "react-redux";

const Header = () => {
  let [menu, setmenu] = useState(false);
  const Wishes = useSelector(s => s.wishlist.value);
  const carts = useSelector(s => s.cart.value);

  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="nav__top">
              <div className="top__list">
                <ul className={menu ? "show" : ""}>
                  <div className="links">
                    <Link  to="/about">О компании</Link>
                    <Link  to="/dastavka">Доставка и оплата</Link>
                    <Link  to="/return">Возврат</Link>
                    <Link  to="/Гарантии">Гарантии</Link>
                    <Link  to="/contact">Контакты</Link>
                    <Link  to="/Блог">Блог</Link>
                  </div>
                  <div className="media-btn">
                    <button><RxHamburgerMenu /> Каталог</button>
                  </div>
                  <div className="top__tel">
                    <p>8 (800) 890-46-56</p>
                    <Link>Заказать звонок</Link>
                  </div>
                </ul>
              </div>
            </div>
            <div className="nav__bottom">
              <div className="nav__logo">
                <div>
                  <button onClick={() => setmenu((p) => !p)} className="burger">
                    <RxHamburgerMenu />
                  </button>
                </div>
                <Link to={"/"}>  
                  <img src={logo} alt="Logo" />
                  </Link>
              </div>
              <div className="nav__inp">
                <button><RxHamburgerMenu /> Каталог</button>
                <div className="inp">
                  <input type="text" placeholder="Поиск по товарам" />
                  <CiSearch />
                </div>
              </div>
              <div className="nav__icons">
                <span>
                  <Link to={'/Wishes'}>
                    <CiHeart /> <sup>{Wishes.length}</sup>
                    <p>Избранное</p>
                  </Link>
                </span>
                <span>
                  <Link to={'/Сравнение'}>
                    <TbAntennaBars5 />
                    <p>Сравнение</p>
                  </Link>
                </span>
                <span>
                  <Link to={'/Product_Cart'}>
                    <PiShoppingCartSimpleThin /><sup>{carts.length}</sup>
                    <p>Корзина</p>
                  </Link>
                </span>
              </div>
            </div>
            <div className="media__inp">
              <input type="text" placeholder="Поиск по товарам" />
              <CiSearch />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
