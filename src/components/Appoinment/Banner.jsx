import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Banner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen home-banner">
      <div className="hero-content flex-col md:flex-row-reverse">

        <img src={chair} className="max-w-sm rounded-lg shadow-2xl flex-1" />
        <div className='flex-1'>
          
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;