import React from 'react';
import { Modal, Flex, Divider, Tag, Table } from 'antd';
import { CheckOutlined, FireOutlined } from '@ant-design/icons';



const columns = [
  {
    title: 'Meal Plan',
    dataIndex: 'plan',
    key: 'plan',
    render: (text) => <strong>{text}</strong>
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => <Tag color="orange">{text}</Tag>
  },
  {
    title: 'Timing',
    dataIndex: 'timing',
    key: 'timing'
  }
];

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
            <h2 className="text-2xl font-bold text-primary mb-1">Dining Options</h2>
            <p className="text-gray-500">Hotel Sunshine Meal Plans</p>
          </div>
        }
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
      >
        <Table 
          columns={columns} 
          dataSource={mealPlans} 
          pagination={false}
          rowKey="plan"
          expandable={{
            expandedRowRender: (record) => (
              <div className="px-8 py-4">
                <p className="text-gray-600 mb-3">{record.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <CheckOutlined className="text-green-500 mr-2" />
                      Includes
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {record.includes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <FireOutlined className="text-red-400 mr-2" />
                      Dietary Options
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {record.dietary.map((diet, i) => (
                        <Tag key={i} color="blue">{diet}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          }}
        />

        <Divider />

        <div className="text-sm text-gray-500 p-4 bg-gray-50 rounded-lg">
          <p className="font-medium">Notes:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Prices are per person excluding taxes</li>
            <li>Children below 5 years eat free</li>
            <li>Special dietary requests available 24 hours in advance</li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default PriceModal;