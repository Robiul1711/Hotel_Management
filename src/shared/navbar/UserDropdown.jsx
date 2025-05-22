import React from 'react';
import { DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Avatar, Space, Menu } from 'antd';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useAuth from '@/hooks/useAuth';

const items = [
    {
        label: 'Profile',
        key: 'profile',
        icon: <UserOutlined />,
    },
    {
        label: 'Settings',
        key: 'settings',
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
    const { setUser } = useAuth();

    const logout = async () => {
        try {
            const response = await axiosSecure.post('/logout');
            if (response) {
                // console.log(response);
                setUser(null);
                toast.success(response?.data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    }

    const handleMenuClick = ({ key }) => {
        switch (key) {
            case 'profile':
                console.log('Go to Profile');
                break;
            case 'settings':
                console.log('Go to Settings');
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

                    <p className="bg-white border rounded-full shadow-lg w-12 h-12 flex items-center justify-center">A</p>
                </Space>
            </a>
        </Dropdown>
    );
};

export default UserDropdown;
