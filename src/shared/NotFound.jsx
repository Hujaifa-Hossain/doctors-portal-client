import React from 'react';
import dribbble from '../assets/images/dribbble_1.gif';

const NotFound = () => {
  return (
    <div className='text-center'>
      <img className='min-h-screen' src={dribbble} alt="Not found" />
    </div>
  );
};

export default NotFound;