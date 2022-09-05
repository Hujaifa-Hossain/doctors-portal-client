import React from 'react';

const InfoCard = ({ img, title, bgclassName }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl p-6 ${bgclassName}`}>
      <figure><img src={img} alt="Album" /></figure>
      <div className="card-body  text-white">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;