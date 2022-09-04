import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import child from '../../assets/images/treatment.png';
import doctor from '../../assets/images/doctor.png';

const Feature = () => {
  return (
    <div>
      <div className='text-center text-primary my-5'>
        <p className=' text-1xl font-bold'>Our Services</p>
        <p className='text-neutral'>Services We Provide</p>
      </div>

      <div className='lg:flex'>
        <div class="card w-100 bg-base-100 shadow-xl m-2">
          <figure class="px-10 pt-10">
            <img src={fluoride} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Fluoride</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-100 bg-base-100 shadow-xl m-2">
          <figure class="px-10 pt-10">
            <img src={cavity} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Cavity</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-100 bg-base-100 shadow-xl m-2">
          <figure class="px-10 pt-10">
            <img src={whitening} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Whitening</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>


      <div class="hero min-h-screen px-12">
        <div class="hero-content flex-col lg:flex-row ">
          <img src={child} class="max-w-sm rounded-lg shadow-2xl" />
          <div className='m-5'>
            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>

      <div class="hero appoinment-banner text-white">
        <div class="hero-content flex-col lg:flex-row ">
          <img src={doctor} class="max-w-sm rounded-lg shadow-2xl sm:hidden" />
          <div className='m-5'>
            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;