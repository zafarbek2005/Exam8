import { BsArrowUpRight } from "react-icons/bs"; 
import { BiRightArrowAlt } from "react-icons/bi"; 
import React from 'react'
import './bootom.scss'
import left from './img/right.svg'
import right from './img/left.svg'
import img from './img/img.svg'
import img2 from './img/img2.svg'
import img3 from './img/img3.svg'
import rasm from './img/rasm.svg'
import rasm2 from './img/rasm2.svg'
import rasm3 from './img/rasm3.svg'

const Home_bootom = () => {
  return (
   <>
   <div className="brendi_link conteiner">
    <div className="links">
    <h3 id="gg">Только проверенные бренды</h3>
        <div className="right_left">
            <img src= {left} alt="" />
            <img src= {right} alt="" />
        </div> 
    </div>

        <div className="cart">
            <img src= {img} alt="" />
            <img src= {img2} alt="" />
            <img src= {img3} alt="" />
            <img src= {img} alt="" />
        </div>
   </div>
   
   
   <div className="blog_link conteiner">
        <div className="link">
        <h3>Блог</h3>
        <button id="none_btn">Перейти в блог <BiRightArrowAlt /></button>
        </div>

        <div className="blog_carts">
            <div className="blog_cart">
                <img src= {rasm} alt="rasm.svg" />
                <div className="title_blog">
                    <h3>Как правильно освещать дом  снаружи?</h3>
                    <BsArrowUpRight />
                </div>
                <p>01.01.2024</p>
            </div>
            <div className="blog_cart">
                <img src= {rasm2} alt="rasm.svg" />
                <div className="title_blog">
                    <h3>Как правильно освещать дом  снаружи?</h3>
                    <BsArrowUpRight />
                </div>
                <p>01.01.2024</p>
            </div>
            <div className="blog_cart">
                <img src= {rasm3} alt="rasm.svg" />
                <div className="title_blog">
                    <h3>Как правильно освещать дом  снаружи?</h3>
                    <BsArrowUpRight />
                </div>
                <p>01.01.2024</p>
            </div>

        </div>
        <button id="none_btn2">Перейти в блог <BiRightArrowAlt /></button>

        <div className="blog_txt">
            <div className="h3s">
                <h3>Производство <br />  светильников</h3>
                <h2>Блог</h2>
            </div>
            <div className="pss">
                <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /> <br />
                    Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
            </div>
        </div>

   </div>
   
   
   
   
   
   
   
   
   
    
    </>
  )
}

export default Home_bootom