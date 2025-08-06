import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ComplaintForm = ({ vilaDetails }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const showModal = () => {
    setOpen(true);
  };

  const complainMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure?.post(`/complaints`, data);
      return res.data;
    },
    onSuccess: () => {
     
      form.resetFields();
      toast.success("Complaint submitted successfully");
    //    setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleOk = () => {
    setLoading(true);
    form.validateFields().then(async (values) => {
      const payload = {
        user_id: vilaDetails?.user_id,
        villa_id: vilaDetails?.id,
        complaint: values.issue,
      };

      console.log("Form values: ", payload);

      complainMutation.mutate(payload)
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="border border-primary px-4 py-2 text-xs xxs:text-sm sm:text-base rounded-md"
      >
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
            key="submit"
            type=""
            className="bg-primary text-white font-semibold"
            onClick={handleOk}
          >
            {complainMutation.isPending ? "Submitting" : "Submit"}
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" name="property_compliant">
          <Form.Item
            name="issue"
            label="Issues facing while using the property"
          >
            <Input.TextArea rows={3} placeholder="Enter your issue" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ComplaintForm;
