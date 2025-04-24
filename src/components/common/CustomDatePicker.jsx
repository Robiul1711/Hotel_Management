import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css'; // For modern Ant Design styles
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const CustomDatePicker = () => {
    return (
        <div className="p-4">
            <RangePicker
                allowClear={false}
                format="DD MMM 'YY"
                defaultValue={[dayjs('2025-02-27'), dayjs('2025-02-28')]}
                className="!p-3 !rounded-xl !border-gray-300 !w-full md:!w-auto"
                dropdownClassName="custom-calendar"
                placeholder={['Check-in', 'Check-out']}
                renderExtraFooter={() => <div className="text-center text-xs text-gray-500">Select your stay period</div>}
            />
        </div>
    );
};

export default CustomDatePicker;
