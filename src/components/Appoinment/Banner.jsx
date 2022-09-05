import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import chair from '../../assets/images/chair.png';

const Banner = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div className="hero min-h-screen home-banner">
      <div className="hero-content flex-col md:flex-row-reverse">
      
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl flex-1" />
        <div className='flex-1'>
      <p>You picked {format(date, 'PP')}.</p>
          <DayPicker 
          mode="single"
          selected={date}
          onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;