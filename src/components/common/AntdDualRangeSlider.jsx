import { Slider } from 'antd';
import { useState, useEffect } from 'react';
import 'antd/dist/reset.css';

const AntdDualRangeSlider = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const [range, setRange] = useState([minPrice, maxPrice]);

  // Update local state when props change
  useEffect(() => {
    setRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleChange = (val) => {
    setRange(val);
    setMinPrice(val[0]);
    setMaxPrice(val[1]);
  };

  return (
    <div className=''>
      <Slider
        range
        value={range}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: 'black', height: 6 }]}
        handleStyle={[
          { backgroundColor: 'white', borderColor: 'white' },
          { backgroundColor: 'white', borderColor: 'white' },
        ]}
        min={1000}  // Fixed minimum value
        max={500000} // Fixed maximum value
      />
      <div className="mt-2 text-center">Selected Range: {range.join(' - ')}</div>
    </div>
  );
};

export default AntdDualRangeSlider;