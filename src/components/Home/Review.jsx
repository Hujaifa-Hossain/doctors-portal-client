import React from 'react';

const Review = ({ review }) => {
  const { name, location, img, view } = review;
  return (
    <div class="card shadow-xl">
      <div class="card-body">

        <p>{view}</p>

        <div className='flex'>
          <div className="avatar mr-3">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
              <img src={img} />
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