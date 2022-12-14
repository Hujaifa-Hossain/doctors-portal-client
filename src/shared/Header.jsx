import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = <>
    <li className='m-1 p-0'><Link to='/'>Home</Link></li>
    <li className='m-1 p-0'><Link to='appoinment'>Appoinment</Link></li>
  </>
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div>
          <Link to='/' className="normal-case text-2xl p-1 w-48">Doctors Portal</Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>

        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;