import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import quote from '../../assets/icons/quote.svg';
import Review from './Review';

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      view: 'Awesome',
      img: people1
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      view: 'Awesome',
      img: people2
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      view: 'Awesome',
      img: people3
    },
  ]
  return (
    <section className='p-12'>
      <div className='flex items-center justify-end'>
        <div className='flex-1'>
          <h3 className='text-primary text-2xl'>Testimonial</h3>
          <p className='text-3xl uppercase py-2'>What Our Patients Says</p>
        </div>
        <div className='justify-end'>
          <img className=' lg:w-28 sm:w-12' src={quote} alt="" />
        </div>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
        {reviews.map(review => <Review key={review._id} review={review} />)}
      </div>
    </section>
  );
};

export default Testimonials;