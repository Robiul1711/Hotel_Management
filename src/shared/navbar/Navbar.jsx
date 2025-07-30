import React from 'react';
import logo from '@/assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import useAuth from '@/hooks/useAuth';
import { BsTelephone } from 'react-icons/bs';
import EnquireForm from '@/components/home/EnquireForm';
import ListYourVilla from '@/components/home/ListYourVilla';
import PropertyListingForm from '@/components/home/PropertyListingForm';

const Navbar = () => {
  const { user } = useAuth();

  const navLinkClass = ({ isActive }) => {
    return isActive ? 'text-primary font-bold underline' : 'font-semibold text-[#486284]'
  }

  return (
    <div className="flex items-center justify-between w-11/12 mx-auto ">
      <div className=''>
        <Link to={'/'}><img src={logo} alt="" /></Link>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <ul className='text-black flex gap-5 lg:gap-12'>
          <li>
            <NavLink className={`${navLinkClass} hover:text-primary`} to={'/stays'}>Stays</NavLink>
          </li>
          <li className='flex items-center gap-2 font-bold'><BsTelephone className='font-bold' />+91 97693 89956</li>
          <li>
            <PropertyListingForm button={false} />
          </li>
          {/* <NavLink className={navLinkClass} to={'/'}>About Us</NavLink>
          <NavLink className={navLinkClass} to={'/'}>Our Packages</NavLink>
          <NavLink className={navLinkClass} to={'/'}>FAQ</NavLink>
          <NavLink className={navLinkClass} to={'/'}>Contact Us</NavLink> */}
          {
            user ?
              ''
              :

              <NavLink className={`${navLinkClass} hover:text-primary`} to={'/auth/registration'}>Login/Register</NavLink>

          }
        </ul>

        {
          user && <UserDropdown />
        }



      </div>
    </div>
  );
};

export default Navbar;