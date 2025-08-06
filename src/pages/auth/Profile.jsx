import useAuth from '@/hooks/useAuth';
import { Button, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { ScrollRestoration, useNavigate } from 'react-router-dom';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, setUser } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: user?.name || '',
            first_name: user?.first_name || '',
            email: user?.email || '',
            phone: user?.phone || ''
        }
    });

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


    const onSubmit = async (values) => {
        const payload = {
            name: values.name,
            phone: values.phone,
            first_name: values.first_name
        };
        console.log('Form values:', payload);
        // You can add your API call here
        try {
            const res = await axiosSecure.post('/profile/update', payload);
            if (res) {
                logout()
                navigate('/auth/registration');
            }
        } catch (error) {
            console.log(error);
        }
        setIsModalOpen(false);
        reset();
    };

    return (
        <div className=" mx-auto p-6 bg-primary min-h-screen flex flex-col  justify-center">
            <ScrollRestoration />
            <div className="bg-white w-1/2 mx-auto rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
                    <Button
                        type="primary"
                        onClick={showModal}
                        className="bg-orange-600 text-xl py-6 hover:bg-orange-700"
                    >
                        Edit Profile
                    </Button>
                </div>

                {/* Profile Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Avatar Section */}
                    <div className="md:col-span-1 flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            {user?.avatar ? (
                                <img
                                    src={user.avatar}
                                    alt="Avatar"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-4xl text-gray-500 font-medium">
                                    {user?.name?.[0]?.toUpperCase()}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-500">Full Name</label>
                            <p className="text-lg text-gray-800">{user?.name}</p>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-500">Email</label>
                            <p className="text-lg text-gray-800">{user?.email}</p>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-500">Phone</label>
                            <p className="text-lg text-gray-800">{user?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            <Modal
                title="Edit Profile"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            className="w-full border rounded px-3 py-2 mt-1"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            className="w-full border rounded px-3 py-2 mt-1 bg-gray-100"
                            {...register('email')}
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            className="w-full border rounded px-3 py-2 mt-1"
                            {...register('phone')}
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Profile;
