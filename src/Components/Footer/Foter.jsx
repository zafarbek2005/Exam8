import React, {memo} from 'react'
import './Footer.scss'
import logo from './img/logo.svg'
import carts from './img/carts.svg'

const Foter = () => {
  return (
   <>
   <footer>
    
    <div className="footer conteiner">

      <div className="logo">
          <img src= {logo} alt="logo.svg" />
          <div className="logo_items">
              <p>8 (800) 890-46-56</p>
              <img src= {carts} alt="" />
              <p>Политика конфидециальности</p>
              <p>Пользовательское соглашение</p>
              <div className="footer_cricle">
                <span>VK</span>
                <span>VK</span>
                <span>VK</span>
              </div>
          </div>
      </div>

      <div className="items">
          <h3>Покупателям</h3> <br />
          <a href="">О компании</a> <br />   
          <a href="">Доставка и оплата</a> <br />
          <a href="">Возврат</a> <br /> 
          <a href="">Гарантии</a>  <br />
          <a href="">Контакты</a>  <br />
          <a href="">Блог</a>
      </div>
      <div className="items">
          <h3>Товары</h3> <br />
          <a href="">Люстры</a> <br />
          <a href="">Светильники</a> <br />
          <a href="">Бра</a> <br /> 
          <a href="">Торшеры</a> <br /> 
          <a href="">Комплектуюшие</a> <br /> 
          <a href="">Настольные лампы</a> <br /> 
      </div> 
      <div className="items item_top">
          <h3 id='footer_tovar'>Товары</h3> <br /> <br /> <br />
          <a href="">Споты</a>  <br /> 
          <a href="">Трековые светильники</a>  <br />
          <a href="">Уличные светильники</a> <br /> 
          <a href="">Технические светильники</a> <br /> 
          <a href="">Комплектуюшие</a> <br /> 
          <a href="">Светодиодные ленты</a>
      </div>






















    </div>

























   </footer>

   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default memo(Foter)