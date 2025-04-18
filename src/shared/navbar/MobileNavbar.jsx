import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiFolder, FiUser } from 'react-icons/fi';

const MobileNavbar = () => {
  const navItems = [
    { to: '/', icon: <FiHome size={22} />, label: 'Home' },
    { to: '/calendar', icon: <FiCalendar size={22} />, label: 'Calendar' },
    { to: '/bookings', icon: <FiFolder size={22} />, label: 'Bookings' },
    { to: '/profile', icon: <FiUser size={22} />, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-sm ${
                isActive ? 'text-orange-500 font-bold' : 'text-gray-500'
              }`
            }
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
