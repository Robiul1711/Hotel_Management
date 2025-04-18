import React from 'react';
import logo from '@/assets/images/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navLinkClass = ({ isActive }) => {
    return isActive ? 'text-black font-bold' : 'font-semibold text-[#486284]'
  }

  return (
    <div className="flex items-center justify-between w-11/12 mx-auto">
      <div className=''>
        <img src={logo} alt="" />
      </div>
      <div className="">
        <ul className='text-black flex gap-5 lg:gap-12'>
          <NavLink className={navLinkClass} to={'/'}>Home</NavLink>
          <NavLink className={navLinkClass} to={'/about'}>About Us</NavLink>
          <NavLink className={navLinkClass} to={'/contact'}>Our Packages</NavLink>
          <NavLink className={navLinkClass} to={'/faq'}>FAQ</NavLink>
          <NavLink className={navLinkClass} to={'/faq'}>Contact Us</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;