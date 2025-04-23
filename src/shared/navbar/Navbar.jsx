import React from 'react';
import logo from '@/assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const navLinkClass = ({ isActive }) => {
    return isActive ? 'text-black font-bold' : 'font-semibold text-[#486284]'
  }

  return (
    <div className="flex items-center justify-between w-11/12 mx-auto ">
      <div className=''>
        <Link to={'/'}><img src={logo} alt="" /></Link>
      </div>
      <div className="">
        <ul className='text-black flex gap-5 lg:gap-12'>
          <NavLink className={navLinkClass} to={'/'}>Home</NavLink>
          <NavLink className={navLinkClass} to={'/'}>About Us</NavLink>
          <NavLink className={navLinkClass} to={'/'}>Our Packages</NavLink>
          <NavLink className={navLinkClass} to={'/'}>FAQ</NavLink>
          <NavLink className={navLinkClass} to={'/'}>Contact Us</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;