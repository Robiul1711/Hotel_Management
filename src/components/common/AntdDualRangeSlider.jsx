import { Slider } from 'antd';
import { useState } from 'react';
import 'antd/dist/reset.css'; // for v5 styling

const AntdDualRangeSlider = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const [range, setRange] = useState([minPrice, maxPrice]);

  return (
    <div className=''>
      <Slider
        range
        defaultValue={range}
        trackStyle={[{ backgroundColor: 'black', height: 6 }]}
        handleStyle={[
          { backgroundColor: 'white', borderColor: 'white' },
          { backgroundColor: 'white', borderColor: 'white' },
        ]}
        onChange={(val) => setRange(val)}
        min={minPrice}
        max={maxPrice}
      />
      <div className="mt-2 text-center">Selected Range: {range.join(' - ')}</div>
    </div>
  );
};

export default AntdDualRangeSlider;
