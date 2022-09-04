import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
  return (
    <div class="hero min-h-screen home-banner">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          Calendar
        </div>
      </div>
    </div>
  );
};

export default Banner;