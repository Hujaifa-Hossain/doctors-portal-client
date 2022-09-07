import React from 'react';
import { format } from 'date-fns';
import SingleAppoinment from './SingleAppoinment';

const AvailableAppoinment = ({ date }) => {
  const appoinments = [
    {
      "_id": "1",
      "name": "Teeth Orthodontics",
      "slots": [
        '10:05 am - 11:30 am',
        '10:05 am - 11:30 am',
        '10:05 am - 11:30 am',
        '10:05 am - 11:30 am',
      ]
    },
    {
      "_id": "2",
      "name": "Teeth Orthodontics",
      "slots": [
        '10:05 am - 11:30 am',
        '10:05 am - 11:30 am',
        '10:05 am - 11:30 am',
        '10:05 am - 11:30 am',
      ]
    },
    {
      "_id": "3",
      "name": "Teeth Orthodontics",
      "slots": [
        
      ]
    },
  ]
  return (
    <section className='my-5 px-12'>
      <p className='text-center text-secondary'>Available Services on {format(date, 'PP')}.</p>
      <p className='text-accent text-center'>Please select a service.</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {appoinments.map(app => <SingleAppoinment key={app._id} app={app} />)}
      </div>
    </section>
  );
};

export default AvailableAppoinment;