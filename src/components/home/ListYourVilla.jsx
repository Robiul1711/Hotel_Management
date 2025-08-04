import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import toast from 'react-hot-toast';
const ListYourVilla = () => {

    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();


    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        form
            .validateFields()
            .then(async (values) => {
                const payload = {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    contact_number: values.contact_number,
                    email_address: values.email,
                    property_name: values.propertyName,
                    property_location: values.location,
                    property_type: values.propertyType,
                    number_of_rooms: values.roomCount,
                    unique_features: values.uniqueFeatures
                }
                console.log('Form values:', payload);
                try {
                    const res = await axiosPublic.post('/contact_form', payload);
                    if (res) {
                        console.log(res);
                        toast.success(res?.data)
                        form.resetFields();
                        setOpen(false);
                    }
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false);
                }

            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
    };

    const propertyTypes = [
        { value: 'hotel', label: 'Hotel' },
        { value: 'villa', label: 'Villa' },
        { value: 'homestay', label: 'Homestay' },
        { value: 'resort', label: 'Resort' },
    ];

    return (
        <>

            <button onClick={showModal} className='font-bold' >
                List your villa
            </button>
            <Modal
                title="Property Information Form"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                width={600}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="" className='bg-primary text-white font-semibold' onClick={handleOk}>
                        {loading ? 'Submitting' : 'Enquire'}
                    </Button>,
                ]}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="property_form"
                >
                    <Form.Item
                        name="first_name"
                        label="Owner/Manager Name"
                        rules={[{ required: true, message: 'Please input the owner/manager name!' }]}
                    >
                        <Input placeholder="Enter owner/manager name" />
                    </Form.Item>

                    <Form.Item
                        name="last_name"
                        label="Owner/Manager Name"
                        rules={[{ required: true, message: 'Please input the owner/manager name!' }]}
                    >
                        <Input placeholder="Enter owner/manager name" />
                    </Form.Item>

                    <Form.Item
                        name="contact_number"
                        label="Contact Number"
                        rules={[{ required: true, message: 'Please input the contact number!' }]}
                    >
                        <Input placeholder="Enter contact number" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email Address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the email address!'
                            },
                            {
                                type: 'email',
                                message: 'Please enter a valid email address!'
                            }
                        ]}
                    >
                        <Input placeholder="Enter email address" />
                    </Form.Item>

                    <Form.Item
                        name="propertyName"
                        label="Property Name"
                        rules={[{ required: true, message: 'Please input the property name!' }]}
                    >
                        <Input placeholder="Enter property name" />
                    </Form.Item>

                    <Form.Item
                        name="location"
                        label="Location (City/Area)"
                        rules={[{ required: true, message: 'Please input the location!' }]}
                    >
                        <Input placeholder="Enter city/area" />
                    </Form.Item>

                    <Form.Item
                        name="propertyType"
                        label="Property Type"
                        rules={[{ required: true, message: 'Please select property type!' }]}
                    >
                        <Select placeholder="Select property type" options={propertyTypes} />
                    </Form.Item>

                    <Form.Item
                        name="roomCount"
                        label="Number of Rooms/Villas (optional)"
                    >
                        <Input type="number" min={0} placeholder="Enter number of rooms/villas" />
                    </Form.Item>

                    <Form.Item
                        name="media_folder_link"
                        label="Media Folder Link"
                        rules={[{ required: true, message: 'Please input the media folder link!' }]}
                    >
                        <Input placeholder="Enter media folder link" />
                    </Form.Item>

                    <Form.Item
                        name="uniqueFeatures"
                        label="Anything unique about your property? (optional)"
                    >
                        <Input.TextArea rows={3} placeholder="Describe unique features of your property" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ListYourVilla;