import { BookingHistoryIcon, BookingIcon, CheckInIcon, DashboardIcon, LogoutIcon, SettingIcon, SupportIcon } from '@/lib/CustomIconPackage';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';


const UserDashSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const { pathname } = useLocation();
    const webcheck=["/dashboard/check-in","/dashboard/web-check-form","/dashboard/submit-form",].includes(pathname);
    const support=["/dashboard/support","/dashboard/open-support-ticket",].includes(pathname);
    const booking=["/dashboard/booking","/dashboard/view-detais",].includes(pathname);
    const navItemClasses = (isActive) =>
        `flex items-center gap-2 p-2 rounded transition-colors duration-200 ${isActive ? 'bg-orange-500 text-white' : 'text-[#333] hover:bg-orange-100'
        }`;

    return (
        <aside
            className={`fixed z-20 top-0 left-0 h-auto  font-nerisLight  w-64 bg-[#FFF4DC] p-4 transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:relative md:translate-x-0 md:block`}
        >
            <div className="flex justify-between items-center mb-10">
                <Link to={'/'}>
                    <img src="/logo.png" alt="Logo" className="h-20" />
                </Link>
                <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
                    <FaTimes />
                </button>
            </div>

            <nav className="flex flex-col gap-4 h-full">
                <NavLink to="/dashboard" end>
                    {({ isActive }) => (
                        <div className={navItemClasses(isActive)}>
                            <DashboardIcon color={isActive ? '#fff' : '#333'} />
                            Dashboard
                        </div>
                    )}
                </NavLink>

                <NavLink to="/dashboard/booking">
                    {({ isActive }) => (
                        <div className={navItemClasses(isActive || booking)}>
                            <BookingIcon color={isActive || booking ? '#fff' : '#333'} />
                            Booking
                        </div>
                    )}
                </NavLink>


                <NavLink to="/dashboard/booking-history">
                    {({ isActive }) => (
                        <div className={navItemClasses(isActive)}>
                            <BookingHistoryIcon color={isActive ? '#fff' : '#333'} />
                            Booking History
                        </div>
                    )}
                </NavLink>


                <NavLink to="/dashboard/check-in">
                    {({ isActive }) => (
                        <div className={navItemClasses(isActive || webcheck)}>
                            <BookingHistoryIcon color={isActive || webcheck ?  '#fff' : '#333'} />
                            Web Check-In
                        </div>
                    )}
                </NavLink>

                <NavLink to="/dashboard/support">
                    {({ isActive }) => (
                        <div className={navItemClasses(isActive || support)}>
                            <SupportIcon color={isActive || support ? '#fff' : '#333'} />
                            Support
                        </div>
                    )}
                </NavLink>

                <NavLink to="/dashboard/settings">
                    {({ isActive }) => (
                        <div className={navItemClasses(isActive)}>
                            <SettingIcon color={isActive ? '#fff' : '#333'} />
                            Settings
                        </div>
                    )}
                </NavLink>

                <NavLink to='#' >

                    <div className={`flex items-center gap-2 p-2 border-t pt-5 mt-5  transition-colors duration-200 text-[#333] hover:bg-orange-100`}>
                        <LogoutIcon color={'#333'} />
                        Log Out
                    </div>

                </NavLink>



            </nav>
        </aside>
    );
};

export default UserDashSidebar;
