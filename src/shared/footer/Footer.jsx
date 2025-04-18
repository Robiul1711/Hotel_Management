import CommonPageWrapper from '@/lib/CommonPageWrapper';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const navLinkClass = ({ isActive }) => {
    return isActive ? 'font-semibold text-[#486284]' : 'font-semibold text-black'
  }
  return (
    <div className='w-11/12 space-y-8 mx-auto'>

      <div className="border-b border-black flex justify-center py-8">
        <ul className='text-black flex gap-5 lg:gap-12'>
          <NavLink className={navLinkClass} to={'/'}>Home</NavLink>
          <NavLink className={navLinkClass} to={'/about'}>Product</NavLink>
          <NavLink className={navLinkClass} to={'/contact'}>Contact Us</NavLink>
          <NavLink className={navLinkClass} to={'/faq'}>About</NavLink>
        </ul>
      </div>


      <div className="flex justify-between ">
        <p className='font-semibold'>2023. All right reserved.</p>
        <div className="">
          <ul className='text-black flex gap-5 lg:gap-12'>
            <NavLink className={navLinkClass} to={'/'}> <span className="underline">Privacy Policy</span> </NavLink>
            <NavLink className={navLinkClass} to={'/about'}><span className="underline">Terms of Service</span></NavLink>
            <NavLink className={navLinkClass} to={'/contact'}><span className="underline">Cookies Settings</span></NavLink>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Footer;