import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser } from 'react-icons/fi';
import { TripIcons, CalanderIcons, UserIcons, HomeIcons } from '@/lib/CustomIcons';

const MobileNavbar = () => {
  const navItems = [
    { to: '/', icon: HomeIcons, label: 'Home' },
    { to: '/', icon: CalanderIcons, label: 'Calendar' },
    { to: '/bookings', icon: TripIcons, label: 'Bookings' },
    { to: '/profile', icon: UserIcons, label: 'Profile' },
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
            {({ isActive }) => {
              const IconComponent = item.icon;
              const color = isActive ? '#f97316' : '#6b7280'; // tailwind's orange-500 and gray-500
              return <IconComponent color={color} size={22} />;
            }}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
