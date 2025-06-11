import CommonPageWrapper from '@/lib/CommonPageWrapper';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const navLinkClass = ({ isActive }) => {
    return isActive ? 'font-semibold text-[#486284]' : 'font-semibold text-black'
  }
  return (
    <div className='w-11/12 space-y-8 mx-auto pb-10'>

      <div className="border-b border-black md:flex justify-center py-8 hidden">
        <ul className='text-black flex gap-5 lg:gap-12'>
          <NavLink className={navLinkClass} to={'/stays'}>Stays</NavLink>
          {/* <NavLink className={navLinkClass} to={'/about'}>Product</NavLink>
          <NavLink className={navLinkClass} to={'/contact'}>Contact Us</NavLink>
          <NavLink className={navLinkClass} to={'/faq'}>About</NavLink> */}
        </ul>
      </div>


      <div className="flex flex-col md:flex-row pb-14 md:pb-0 items-center justify-center md:justify-between ">
        <p className='font-semibold'>2023. All right reserved.</p>
        <div className="">
          <ul className='text-black flex justify-between gap-4 lg:gap-12'>
            <NavLink className={navLinkClass} to={'/'}> <span className="underline text-xs md:text-lg">Privacy Policy</span> </NavLink>
            <NavLink className={navLinkClass} to={'/about'}><span className="underline text-xs md:text-lg">Terms of Service</span></NavLink>
            {/* <NavLink className={navLinkClass} to={'/contact'}><span className="underline text-xs md:text-lg">Cookies Settings</span></NavLink> */}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Footer;