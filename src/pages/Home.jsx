import React from 'react';
import Banner from '../components/Home/Banner';
import Feature from '../components/Home/Feature';
import Information from '../components/Home/Information';
import Services from '../components/Home/Services';

const Home = () => {
  return (
    <div>
      <div className='px-12'>
        <Banner />
        <Information />
        <Services />
      </div>
      <Feature />
    </div>
  );
};

export default Home;