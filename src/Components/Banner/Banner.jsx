import React from 'react'
import './Banner.scss'
import Photo from './photo.svg'

const Banner = () => {
  return (
    <>
    <div className="banner ">

        <div className="banner_txt conteiner ">
          <h3>Скидка 15% <br /> на все подвесные <br /> светильники <br /> <mark id='banner_mark'>до 5 февраля</mark></h3>
        </div>

        <div className="img conteiner">
            <img src={Photo} alt="svg.png" />
        </div>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Banner