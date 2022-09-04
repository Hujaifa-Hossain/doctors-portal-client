import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
      <div>
      <a class="normal-case text-xl p-1 w-48">Doctors Portal</a>
      </div>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='m-1 p-0'><Link to='/'>Home</Link></li>
            <li className='m-1 p-0'><Link to='appoinment'>Appoinment</Link></li>
            </ul>
          </div>
          
        </div>

        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li className='m-1 p-0'><Link to='/'>Home</Link></li>
            <li className='m-1 p-0'><Link to='appoinment'>Appoinment</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;