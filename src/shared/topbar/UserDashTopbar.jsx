import { BellIcon, MessageIcon } from '@/lib/CustomIconPackage';
import React from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const UserDashTopbar = ({ setIsSidebarOpen }) => {
    return (
        <div className="flex items-center justify-between p-4  bg-white z-10">
            <div className="flex items-center w-full md:w-1/2">
                <button className="md:hidden mr-4" onClick={() => setIsSidebarOpen(true)}>
                    <FaBars />
                </button>
                <div className="flex items-center w-full rounded-2xl shadow-sm border border-gray-300 px-3 p-2">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search anything here..."
                        className="w-full font-nerisLight py-3 placeholder:font-nerisLight outline-none"
                    />
                </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
                <MessageIcon/>
                <BellIcon/>
                
                <FaUserCircle className="text-gray-600 text-2xl" />
            </div>
        </div>
    );
};

export default UserDashTopbar;