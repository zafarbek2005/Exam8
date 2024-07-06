import React from 'react'
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../context/Api/productapi";
import './Single.scss'
import Social_media from './img/media.svg'
import { CiHeart } from "react-icons/ci";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Single = () => {
    let { id } = useParams();
    const { data: product, isLoading: isLoadingProduct } = useGetProductByIdQuery(id);

  return (
   <>
   <div className="single container">
        <div className="single_cart">
            <div className="img">
                {isLoadingProduct ? (
                    <Skeleton height={400} />
                ) : (
                    <img src={product?.url[0]} alt={product?.desc} />
                )}
                <div className="slide">
                    {Array(4).fill().map((_, i) => (
                        <div className="img" key={i}>
                            {isLoadingProduct ? (
                                <Skeleton height={100} />
                            ) : (
                                <img src={product?.url[0]} alt={product?.desc} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="single_txt">
                <h3>{isLoadingProduct ? <Skeleton width={300} /> : product?.title}</h3>
                
                <div className="single_title">
                    <div className="single_column">
                        <p>{isLoadingProduct ? <Skeleton width={50} /> : 'Scott'}</p>
                        <p>{isLoadingProduct ? <Skeleton width={100} /> : 'Артикул : 7655-188'}</p>
                        <span>{isLoadingProduct ? <Skeleton width={100} /> : 'В наличии'}</span>
                    </div>
                    <div className="st_img">
                        {isLoadingProduct ? (
                            <Skeleton width={30} height={30} />
                        ) : (
                            <img src={Social_media} alt={product?.desc} />
                        )}
                    </div>
                </div>

                <div className="SENA">
                    <span id='sena_sp'>{isLoadingProduct ? <Skeleton width={80} /> : `${product?.price} ₽`}</span>
                    <p>{isLoadingProduct ? <Skeleton width={80} /> : '522 000 ₽'}</p>
                </div>
                <p id='single_txt_p'>{isLoadingProduct ? <Skeleton count={3} /> : 'Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.'}</p>

                <div className="single_karzina">
                    <div className="current">
                        <span>-</span> <span>1</span> <span>+</span>
                    </div>
                    <button id="single_karzino">В корзину</button>
                    <button id="single_heart"><CiHeart /></button>
                </div>
            </div>
        </div>

        <div className="single_xarakterichistka conteiner ">
            <h3>Характеристика</h3>
            <div className="single_tabel">
                <p>Цвет</p>
                <p>Жёлтый</p>
            </div>
            <div className="single_tabel">
                <p>Год</p>
                <p>2016</p>
            </div>
            <div className="single_tabel">
                <p>Диаметр колеса</p>
                <p>27.5</p>
            </div>
            <div className="single_tabel">
                <p>Материал рамы</p>
                <p>Карбон</p>
            </div>
            <div className="single_tabel">
                <p>Размер</p>
                <p>L</p>
            </div>
            <div className="single_tabel">
                <p>Страна</p>
                <p>Швейцария</p>
            </div>
            <div className="single_tabel">
                <p>Производитель</p>
                <p>Scott</p>
            </div>
            <div className="single_tabel">
                <p>Покрышки</p>
                <p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p>
            </div>
            <div className="single_tabel">
                <p>Рама</p>
                <p>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
            </div>
            <div className="single_tabel">
                <p>Подседельный Штырь</p>
               <p>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p>
            </div>
            <div className="single_tabel">
                <p>Седло</p>
                <p>Ritchey WCS Streem V3 Titanium rails</p>
            </div>
            <div className="single_tabel">
                <p>Вилка</p>
                <p>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
            </div>
        </div>
   </div>
   </>
  )
}

export default Single
