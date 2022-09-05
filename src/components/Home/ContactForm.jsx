import React from 'react';

const ContactForm = () => {
  return (
    <div className='appoinment-banner flex flex-col items-center py-6'>
      <p className='text-primary'>Contact Us</p>
      <p className='text-white text-2xl my-3'>Stay connected with us</p>
      <input type="text" placeholder="Email address" className="input input-bordered input-md w-full max-w-xs my-3" />
      <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs my-3" />
      <textarea className="textarea input-xl w-full max-w-xs my-3" placeholder="Your message"></textarea>
      <button className="btn btn-primary bg-primary text-white bg-gradient-to-r from-secondary to-primary">Submit</button>
    </div>
  );
};

export default ContactForm;