import React,{memo} from 'react'
import './cantact.scss'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai"; 


const Cantact = () => {

  return (
   <>
    <div className="cantact_link conteiner">
        <Link to={`/`}>Главная <AiOutlineRight /></Link>
        <Link to={`/cantact`} >О компании</Link>
    </div>
   
   <div className="kantact conteiner">
        <h3>Контакты</h3>
        <div className="txt">
            <h3>998 (93) 952-81-51</h3>
            <p>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину
            Телефоны: </p>
        </div>
   </div>
   <div className="map conteiner">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1535688.8301097043!2d69.24165026074219!3d41.25679469093319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1720171585590!5m2!1suz!2s" 
          width="600" 
          height="450" 
          style={{border: 0,borderRadius:"15px"}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default memo(Cantact)