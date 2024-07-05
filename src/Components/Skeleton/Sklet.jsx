import React from 'react';
import './Skelet.scss';

const LoadingCart = ({ count = 8 }) => {
  return (
    <div className='skeleton__wrapper container'>
      {
        Array(count).fill("").map((_, inx) => (
          <div key={inx} className="skeleton__card">
            <div className="skeleton__image skeleton__anime"></div>
            <div className="skeleton__title skeleton__anime"></div>
            <div className="skeleton__price skeleton__anime"></div>
          </div>
        ))
      }
    </div>
  );
}

export default LoadingCart;