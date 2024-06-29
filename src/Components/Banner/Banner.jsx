import React from 'react'
import './Banner.scss'
import photo from './photo.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
  return (
   <>
 
   
   <Swiper
    //  autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   }}
        // loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,]}
        className="mySwiper conteiner"
      >
        <SwiperSlide>
            <div className="Banner conteiner">
            <div className="banner_txt">
                <p>Скидка 15% на все подвесные светильники </p>
                <button>до 5 февраля</button>
            </div>
            <div className="img">
                <img src= {photo} alt="" />
            </div>  
    </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='swiper_img' src="https://www.bmw.uz/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  className='swiper_img' src="https://hips.hearstapps.com/hmg-prod/images/2020-bmw-m8-competition-coupe-104-1570575778.jpg?crop=0.800xw:0.599xh;0.0717xw,0.267xh&resize=1200:*" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='swiper_img' src="https://www.mbusa.com/content/dam/mb-nafta/us/maybach/Maybach-Studio-L_1280x1200.jpg" alt="" />
        </SwiperSlide>
         
      </Swiper>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Banner