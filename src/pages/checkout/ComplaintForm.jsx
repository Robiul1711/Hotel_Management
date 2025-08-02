import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import useAxiosPublic from '@/hooks/useAxiosPublic';

const ComplaintForm = () => {

    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();

    const showModal = () => {
        setOpen(true);
    }

    const handleOk = () => {
        setLoading(true);
        form
            .validateFields()
            .then(async (values) => {
                const payload = {
                    issue: values.issue,
                }

                console.log("Form values: ", payload);

            })
    }

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
    };




    return (
        <div>
            <button
                onClick={showModal}
                className="border border-primary px-4 py-2 text-xs xxs:text-sm sm:text-base rounded-md">
                Click here
            </button>

            <Modal
                title="Complaint Form"
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
                    <Form.Item
                        name="issue"
                        label="Issues facing while using the property"
                    >
                        <Input.TextArea rows={3} placeholder='Enter your issue' />
                    </Form.Item>

                </Form>
            </Modal>

        </div>
    );
};

export default ComplaintForm;