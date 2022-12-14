import React from 'react';
import Banner from '../components/Home/Banner';
import ContactForm from '../components/Home/ContactForm';
import Feature from '../components/Home/Feature';
import Information from '../components/Home/Information';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  return (
    <main>
      <Banner />
      <Information />
      <Services />
      <Feature />
      <Testimonials/>
      <ContactForm/>
    </main>
  );
};

export default Home;