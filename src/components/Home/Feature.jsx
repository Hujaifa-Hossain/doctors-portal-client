import React from 'react';
import child from '../../assets/images/treatment.png';
import doctor from '../../assets/images/doctor.png';

const Feature = () => {
  return (
    <div>
      <div class="hero min-h-screen px-12">
        <div class="hero-content flex-col lg:flex-row ">
          <img src={child} class="max-w-sm rounded-lg shadow-2xl" />
          <div className='m-5'>
            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
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