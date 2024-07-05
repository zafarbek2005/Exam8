import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './dastavka.scss';

const Dastavka = () => {
  return (
    <>
      <div className="dastavka_link conteiner">
        <Link to={`/`}>Главная <AiOutlineRight /></Link>
        <Link to={`/dastavka`}>Доставка и оплата</Link>
      </div>

      <div className="dastavkka conteiner">
        <h3 id='oplata'>Доставка  <br /> и оплата</h3>
        <div className="dastavla_txt">
          <h3>Доставка</h3>
          <p>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
          <h3>Курьерская доставка</h3>
          <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽. Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
          <h3>Самовывоз</h3>
          <p>Любой заказ можно забрать самостоятельно по адресу: г. Москва, Дмитровское шоссе д.100с2</p>
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
  );
}

export default Dastavka;
