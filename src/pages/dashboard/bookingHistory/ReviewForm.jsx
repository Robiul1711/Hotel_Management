import { useState } from 'react';
import { Button, Form, Input, Modal, Rate } from 'antd';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import useAxiosSecure from '@/hooks/useAxiosSecure';

const ReviewForm = ({ villa }) => {

    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();

    const showModal = () => {
        setOpen(true);
    }

    const handleOk = () => {
        setLoading(true);
        form
            .validateFields()
            .then(async (values) => {
                const payload = {
                    villaorhotelid: villa?.id,
                    type: 'villa',
                    rating: values.rating,
                    review: values.review,
                }

                console.log("Review payload: ", payload);
                try {
                    const res = await axiosSecure.post('/submit-review', payload);
                    if (res) {
                        setOpen(false);
                        form.resetFields();
                        setLoading(false);
                        toast.success('Review submitted successfully!');
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error?.response?.data?.message)
                }

            })
        setLoading(false)
    }

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
    };

    return (
        <div>

            <button
                onClick={showModal}
                className="bg-primary w-full text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-lg rounded-xl hover:bg-orange-600 transition-all whitespace-nowrap font-semibold mt-5">Give Review</button>

            <Modal
                title="Review Form"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                width={600}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit" type=''
                        className='bg-primary text-white font-semibold'
                        onClick={handleOk}
                    >
                        {loading ? 'Submitting' : 'Submit'}
                    </Button>,
                ]}
            >
                <Form
                    form={form}
                    layout='vertical'
                    name="property_compliant"
                >
                    <p className="text-2xl font-semibold">{villa?.villa_name}</p>

                    <p className="text-lg font-semibold">Your Rating</p>
                    <Form.Item
                        name="rating"
                        rules={[{ required: true, message: 'Please provide a rating!' }]}
                    >
                        <Rate count={5} />
                    </Form.Item>

                    <p className="text-lg font-semibold">Please share your beautiful moments with us</p>
                    <Form.Item
                        name="review"
                        label=""
                    >
                        <Input.TextArea rows={3} placeholder='Enter your issue' />
                    </Form.Item>

                </Form>
            </Modal>

        </div>
    );
};

export default ReviewForm;