import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../Header/img/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch , CiHeart , CiShoppingCart} from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";


const Header = () => {

  let [menu, setmenu] = useState(false)

  return (
    <>
    <header>
      <div className="conteiner">     
          <div className="navbar">
              <div className="nav__top">
                  <div className="top__list">
                    <ul className={menu ? "show" : ""} >
                      <div className='links'>
                        <Link onClick={() => setmenu(p => !p) }   to="/">О компании</Link>
                        <Link onClick={() => setmenu(p => !p) }  to="/about">Доставка и оплата</Link>
                        <Link onClick={() => setmenu(p => !p) }  to="/">Возврат</Link>
                        <Link onClick={() => setmenu(p => !p) }  to="/">Гарантии</Link>
                        <Link onClick={() => setmenu(p => !p) }  to="/contact">Контакты</Link>
                        <Link onClick={() => setmenu(p => !p) }  to="/">Блог</Link>
                      </div>
                      <div  className="media-btn">
                        <button><RxHamburgerMenu />
                        Каталог</button>
                      </div>
                      <div className="top__tel">
                          <p>8 (800) 890-46-56</p>
                          <Link onClick={() => setmenu(p => !p) } >Заказать звонок</Link>
                      </div>
                    </ul>
                  </div>
              </div>
              <div className="nav__bottom">
                <div className="nav__logo">
                  <div>
                    <button onClick={() => setmenu(p => !p) } className="burger">
                     <RxHamburgerMenu/>
                    </button>
                  </div>
                 <a href="/">
                   <img src={logo} alt="" />
                  </a>
                </div>
                <div className="nav__inp">
                   <button><RxHamburgerMenu />
                   Каталог</button>
                   <div className="inp">
                      <input type="text" placeholder="Поиск по товарам" />
                      <CiSearch />
                   </div>
                </div>
                <div className="nav__icons">
                   <span>
                       <Link to={'/'}>
                        <CiHeart />
                          <p>Избранное</p>
                        </Link>
                   </span>
                   <span>
                      <Link to={'/'}>
                        <TbAntennaBars5 />
                        <p>Сравнение</p>
                      </Link>
                   </span>
                   <span>
                      <Link to={'/'}>
                        <CiShoppingCart />  
                        <p>Корзина</p>
                      </Link>
                   </span>
                </div>
              </div>
              <div className="media__inp">
                 <input type="text" placeholder='Поиск по товарам' />
                 <CiSearch />
              </div>
          </div>
      </div>
    </header>
    </>
  )
}

export default Header