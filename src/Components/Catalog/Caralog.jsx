import React from 'react'
import { GoArrowRight } from "react-icons/go";
import './Catalog.scss'
import Img from './img/img.svg'
import Img1 from './img/img1.svg'
import Img2 from './img/img2.svg'
import Img3 from './img/img3.svg'
import Img4 from './img/img4.svg'
import Img5 from './img/img5.svg'

const Caralog = () => {
  return (
  <>
  <div className="catalog container">
    <div className="catalog_nav">
        <h3>Каталог</h3>
        <button>Весь каталог <GoArrowRight/> </button>
    </div>
    <div className="carts container">
      <div className="cart1">
          <div className="items">
            <h3>Люстры</h3>
            <img src= {Img} alt="img.png" />
          </div>
          <span>От 540₽ <GoArrowRight/> </span>
      </div>
      <div className="cart1">
          <div className="items">
            <h3>Люстры</h3>
            <img src= {Img1} alt="img.png" />
          </div>
          <span>От 540₽ <GoArrowRight/> </span>
      </div>
      <div className="cart1">
          <div className="items">
            <h3>Люстры</h3>
            <img src= {Img2} alt="img.png" />
          </div>
          <span>От 540₽ <GoArrowRight/> </span>
      </div>
      <div className="cart1">
          <div className="items">
            <h3>Люстры</h3>
            <img src= {Img3} alt="img.png" />
          </div>
          <span>От 540₽ <GoArrowRight/> </span>
      </div>
      <div className="cart1">
          <div className="items">
            <h3>Люстры</h3>
            <img src= {Img4} alt="img.png" />
          </div>
          <span>От 540₽ <GoArrowRight/> </span>
      </div>
      <div className="cart1">
          <div className="items">
            <h3>Люстры</h3>
            <img src= {Img5} alt="img.png" />
          </div>
          <span>От 540₽ <GoArrowRight/> </span>
      </div>












    </div>


    

  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Caralog