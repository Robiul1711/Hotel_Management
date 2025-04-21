import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const DropdownBtn = () => {
  const [roomTypes, setRoomTypes] = useState([]);

  // Simulating API response — replace this with actual API call later
  useEffect(() => {
    const fetchRoomTypes = async () => {
      // Mock response
      const data = [
        { id: '1', name: 'Deluxe Room' },
        { id: '2', name: 'Executive Suite' },
        { id: '3', name: 'Standard Room' },
        { id: '4', name: 'Presidential Suite' },
        { id: '5', name: 'Family Room' },
      ];

      setRoomTypes(data);
    };

    fetchRoomTypes();
  }, []);

  const items = roomTypes.map((room) => ({
    label: <span className='text-lg'>{room.name}</span>,
    key: room.id,
  }));

  return (
    <Dropdown menu={{ items }}>
      <button
        className="shadow px-4 py-2 rounded-full text-lg bg-secondary text-white"
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          Room Type
          <DownOutlined />
        </Space>
      </button>
    </Dropdown>
  );
};

export default DropdownBtn;
