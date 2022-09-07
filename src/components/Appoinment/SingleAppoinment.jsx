import React from 'react';
import BookingModal from './BookingModal';

const SingleAppoinment = ({ app, setTreatment }) => {
  const { name, slots } = app;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className=" text-center text-secondary">{name}</h2>
        <h2 className=" text-center">
          {slots.length ? <span>{slots[0]}</span> : <span>Try another day please!</span>}
        </h2>
        <p className='text-center uppercase'>
          {slots.length} {slots.length > 1 ? ' spaces ' : ' space '}Available
        </p>
        <div className="card-actions justify-center">

          <label disabled={slots.length===0} htmlFor="booking-modal" 
          className="btn modal-button btn-secondary bg-gradient-to-r 
          from-secondary to-primary text-white uppercase" 
          onClick={() => {setTreatment(app)}}
          >Book appoinment</label>
          {/* <BookingModal app={app} /> */}
        </div>
      </div>
    </div>

  );
};

export default SingleAppoinment;