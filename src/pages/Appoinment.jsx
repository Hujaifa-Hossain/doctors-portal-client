import React, { useState } from 'react';
import AvailableAppoinment from '../components/Appoinment/AvailableAppoinment';
import Banner from '../components/Appoinment/Banner';

const Appoinment = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <Banner date={date} setDate={setDate}/>
      <AvailableAppoinment date={date} setDate={setDate}/>
    </div>
  );
};

export default Appoinment;