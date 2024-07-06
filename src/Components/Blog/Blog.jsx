import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BsArrowUpRight } from 'react-icons/bs';
import rasm from './img1.svg'; 
import rasm2 from './img2.svg'; 
import rasm3 from './img3.svg';  

const Blog = () => {
  return (
    <>
      <div className="blog_link container">
        <div className="link">
          <h3>Блог</h3>
          <button id="none_btn">Перейти в блог <BiRightArrowAlt /></button>
        </div>

        <div className="blog_carts">
          <div className="blog_cart">
            <img src={rasm} alt="rasm.svg" />
            <div className="title_blog">
              <h3>Как правильно освещать дом снаружи?</h3>
              <BsArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
          <div className="blog_cart">
            <img src={rasm2} alt="rasm.svg" />
            <div className="title_blog">
              <h3>Как правильно освещать дом снаружи?</h3>
              <BsArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
          <div className="blog_cart">
            <img src={rasm3} alt="rasm.svg" />
            <div className="title_blog">
              <h3>Как правильно освещать дом снаружи?</h3>
              <BsArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
        </div>
        <button id="none_btn2">Перейти в блог <BiRightArrowAlt /></button>
      </div>
      <div className="blog_link container">
       

        <div className="blog_carts">
          <div className="blog_cart">
            <img src={rasm} alt="rasm.svg" />
            <div className="title_blog">
              <h3>Как правильно освещать дом снаружи?</h3>
              <BsArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
          <div className="blog_cart">
            <img src={rasm2} alt="rasm.svg" />
            <div className="title_blog">
              <h3>Как правильно освещать дом снаружи?</h3>
              <BsArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
          <div className="blog_cart">
            <img src={rasm3} alt="rasm.svg" />
            <div className="title_blog">
              <h3>Как правильно освещать дом снаружи?</h3>
              <BsArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
        </div>
        <button id="none_btn2">Перейти в блог <BiRightArrowAlt /></button>
      </div>
    </>
  );
};

export default Blog;
