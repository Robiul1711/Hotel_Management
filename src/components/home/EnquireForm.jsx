import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import toast from 'react-hot-toast';
const EnquireForm = () => {

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
                    owner_name: values.ownerName,
                    contact_number: values.contactNumber,
                    email_address: values.email,
                    property_name: values.propertyName,
                    location: values.location,
                    property_type: values.propertyType,
                    number_villa: values.roomCount,
                    anything_text_property: values.uniqueFeatures
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

            <button onClick={showModal} className="xmd:bg-primary xmd:text-white text-primary border text-[10px] p-1 md:text-base border-primary  md:px-8  md:py-3 rounded-full hover:bg-orange-600 transition-all">
                Enquire Now
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
                        name="ownerName"
                        label="Owner/Manager Name"
                        rules={[{ required: true, message: 'Please input the owner/manager name!' }]}
                    >
                        <Input placeholder="Enter owner/manager name" />
                    </Form.Item>

                    <Form.Item
                        name="contactNumber"
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

export default EnquireForm;