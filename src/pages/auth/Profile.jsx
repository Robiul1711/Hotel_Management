import useAuth from '@/hooks/useAuth';
import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <div className=" mx-auto p-6 bg-primary min-h-screen flex flex-col  justify-center">
            <ScrollRestoration />
            <div className="bg-white w-1/2 mx-auto rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
                    {/* <Button 
                        type="primary" 
                        onClick={showModal}
                        className="bg-orange-600 text-xl py-6 hover:bg-orange-700"
                    >
                        Edit Profile
                    </Button> */}
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
                <Form layout="vertical" initialValues={user}>
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input disabled />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone">
                        <Input />
                    </Form.Item>
                    <div className="flex justify-end gap-4">
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default Profile;
