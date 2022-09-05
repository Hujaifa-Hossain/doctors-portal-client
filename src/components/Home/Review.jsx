import React from 'react';

const Review = ({ review }) => {
  const { name, location, img, view } = review;
  return (
    <div class="card shadow-xl">
      <div class="card-body">

        <p>If a dog chews shoes whose shoes does he choose?</p>

        <div className='flex'>
          <div className="avatar mr-3">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div class="">
            <h2>{name}</h2>
            <h3>{location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;