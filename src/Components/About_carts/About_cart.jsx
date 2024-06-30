import { BiRightArrowAlt } from "react-icons/bi"; 
import React from 'react'
import './About.scss'
import Icon from './img/icon.svg'
import Icon4 from './img/icon4.svg'

const About_cart = () => {
  return (
   <>
    <div className="About_links conteiner">
        <h3 id="about_h3">Почему NORNLIGHT?</h3>
        <button id="link_btn1">О компании <BiRightArrowAlt /></button>
    </div>

    <div className="about_carts conteiner">
        <div className="about_cart">
            <div className="cart_img">  
                <img src= {Icon} alt="" />
            </div>
            <div className="cart_txt">
                <h3>Только проверенные бренды</h3>
                <p>Бренды, проверенные временем и качеством</p>
            </div>
        </div>
        <div className="about_cart">
            <div className="cart_img">
                <img src= {Icon} alt="" />
            </div>
            <div className="cart_txt">
                <h3>Только проверенные бренды</h3>
                <p>Бренды, проверенные временем и качеством</p>
            </div>
        </div>
        <div className="about_cart">
            <div className="cart_img">
                <img src= {Icon} alt="" />
            </div>
            <div className="cart_txt">
                <h3>Только проверенные бренды</h3>
                <p>Бренды, проверенные временем и качеством</p>
            </div>
        </div>
        <div className="about_cart">
            <div className="cart_img">
                <img src= {Icon4} alt="" />
            </div>
            <div className="cart_txt">
                <h3>Только проверенные бренды</h3>
                <p>Бренды, проверенные временем и качеством</p>
            </div>
        </div>
        <button id="link_btn2">О компании <BiRightArrowAlt /></button>
    </div>
   </>
  )
}

export default About_cart
