import React from 'react';
import child from '../../assets/images/treatment.png';
import doctor from '../../assets/images/doctor-small.png';

const Feature = () => {
  return (
    <div>
      <section class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row ">
          <img src={child} class="max-w-sm rounded-lg shadow-2xl" />
          <div className='m-5'>
            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </section>

      <section className='appoinment-banner flex my-24'>
        <div className='flex-1 mt-[-120px] hidden lg:block'>
          <img src={doctor} class="rounded-lg shadow-2xl p-0 m-0" />
        </div>
        <div className='flex-1 px-12'>
          <h1 class="text-2xl font-bold text-primary py-6">Appoinment</h1>
          <h3 className='text-3xl py-3 text-white'>Make an appointment Today</h3>
          <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary my-4 text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Feature;