import React from 'react';
import { DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Avatar, Space, Menu } from 'antd';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useAuth from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        label: 'Profile',
        key: 'profile',
        icon: <UserOutlined />,
    },
    // {
    //     label: 'Settings',
    //     key: 'settings',
    //     icon: <SettingOutlined />,
    // },
    {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <SettingOutlined />,
    },
    {
        type: 'divider',
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: <LogoutOutlined />,
        danger: true,
    },
];





const UserDropdown = () => {
    const axiosSecure = useAxiosSecure();
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

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

    const handleMenuClick = ({ key }) => {
        switch (key) {
            case 'profile':
                navigate('/profile')
                break;
            case 'settings':
                console.log('Go to Settings');
                break;
            case 'dashboard':
                navigate('/dashboard/villa-reservation-history');
                break;
            case 'logout':
                logout();
                break;
            default:
                break;
        }
    };

    return (
        <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            trigger={['click']}
            placement="bottomRight"
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>

                    <p className="bg-white border font-semibold rounded-full shadow-lg w-12 h-12 flex items-center justify-center">{user?.name ? user?.name?.charAt(0) : 'A'}</p>
                </Space>
            </a>
        </Dropdown>
    );
};

export default UserDropdown;
