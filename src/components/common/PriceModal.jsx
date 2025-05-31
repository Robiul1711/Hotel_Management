import React from 'react';
import { Modal, Flex, Divider, Tag, Table } from 'antd';
import { CheckOutlined, FireOutlined } from '@ant-design/icons';





const PriceModal = ({mealPlans}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-primary text-white md:px-16 py-1 px-2 md:py-3 rounded-full hover:bg-orange-600 transition-all mt-10"
      >
        Meal Pricing
      </button>

      <Modal
        title={
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-1">Meal Pricing</h2>
          </div>
        }
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
      >
       

        <Divider />

        <div className="text-sm text-gray-500 p-4 bg-gray-50 rounded-lg">
         <p className="text-black text-xl">
          {mealPlans}
         </p>
        </div>
      </Modal>
    </>
  );
};

export default PriceModal;