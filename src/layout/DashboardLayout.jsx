import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaSearch, FaBell, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import UserDashSidebar from '@/shared/sidebar/UserDashSidebar';
import UserDashTopbar from '@/shared/topbar/UserDashTopbar';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { user, setUser } = useAuth();

    const logout = async () => {
        const toastId = toast.loading('Logging out...');
        try {
            const response = await axiosSecure.post('/logout');
            if (response) {
                // console.log(response);
                setUser(null);
                toast.success(response?.data?.message || 'Logout successful', { id: toastId });
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || 'Logout failed', { id: toastId });
        }
    }

    return (
        <div className="flex  h-screen overflow-hidden">
            {/* Sidebar */}
            <UserDashSidebar logout={logout} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden  ">
                {/* Top Bar */}
                {/* <UserDashTopbar setIsSidebarOpen={setIsSidebarOpen} /> */}

                {/* Routed Page Content */}
                <main className="flex-1 overflow-auto   p-4 md:p-6 h-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
