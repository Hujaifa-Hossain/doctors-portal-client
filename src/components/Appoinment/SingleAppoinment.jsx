import React from 'react';

const SingleAppoinment = ({ app }) => {
  const { name, slots } = app;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className=" text-center text-secondary">{name}</h2>
        <p className='text-center'>
          {
            slots.length !== 0 ? <span>{slots.length + ' SPACES AVAILABLE'}</span> : <span className=' text-red-600'>{slots.length + ' SPACE AVAILABLE'}</span>
          }
        </p>
        <div className="card-actions justify-center">

          <label htmlFor="my-modal-3" className="btn modal-button btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase">Book appoinment</label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
              <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SingleAppoinment;