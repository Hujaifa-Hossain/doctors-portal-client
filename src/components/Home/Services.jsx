import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';
const Services = () => {
  const services = [
    {
      title: 'Fluoride',
      img: fluoride,
      description: 'If a dog chews shoes whose shoes does he choose?',
    },
    {
      title: 'Cavity',
      img: cavity,
      description: 'If a dog chews shoes whose shoes does he choose?',
    },
    {
      title: 'Whitening',
      img: whitening,
      description: 'If a dog chews shoes whose shoes does he choose?',
    },
  ]
  return (
<div>
<div className='text-center text-primary my-10'>
        <p className=' text-1xl font-bold'>Our Services</p>
        <p className='text-neutral'>Services We Provide</p>
      </div>
      <div className='lg:flex'>
      {services.map((service, index) => <ServiceCard key={index} service={service}/>)}
    </div>
</div>

    
  );
};

export default Services;