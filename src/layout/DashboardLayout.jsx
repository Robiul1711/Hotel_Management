import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaSearch, FaBell, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import UserDashSidebar from '@/shared/sidebar/UserDashSidebar';
import UserDashTopbar from '@/shared/topbar/UserDashTopbar';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex border border-black  h-screen overflow-hidden">
            {/* Sidebar */}
            <UserDashSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden border border-black">
                {/* Top Bar */}
                <UserDashTopbar setIsSidebarOpen={setIsSidebarOpen} />

                {/* Routed Page Content */}
                <main className="flex-1 overflow-auto   p-4 md:p-6 h-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
