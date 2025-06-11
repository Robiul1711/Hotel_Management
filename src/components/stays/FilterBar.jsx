import React, { useState } from 'react';
import ToggleButton from '../common/ToggleButton';
import AntdDualRangeSlider from '../common/AntdDualRangeSlider';

const FilterBar = () => {
    let [quantity, setQuantity] = useState(0);
    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(500000);

    return (
        <div>
            <p className="text-lg"><span className="text-primary">Home</span> {">"} <span className="text-gray-400">Villas in Lonavala</span></p>
            <div className="border-b-2 space-y-3 my-5 pb-8">
                <p className="text-2xl">Display total Price</p>
                <p className="text-lg">Price per night with taxes</p>
                <ToggleButton />
            </div>

            <div className="border-b-2 pb-8">
                <div className="my-5">
                    <p className="text-2xl">Price Range</p>
                    <AntdDualRangeSlider minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
                </div>

                <div className="flex gap-5 justify-center items-center">
                    <button className="border py-3 px-4 rounded-xl">
                        ₹1000
                    </button>
                    <button className="border py-3 px-4 rounded-xl">
                        ₹500000
                    </button>
                </div>

                <div className="w-fit mx-auto">

                    <button className="border  py-3 px-8 mt-5 rounded-xl ">
                        Apply Filter
                    </button>
                </div>
            </div>

            <div className="py-8 border-b-2 flex items-center justify-between ">
                <div className="">
                    <p className="text-2xl">Rooms</p>
                    <p className="text-lg">No. of Rooms</p>
                </div>
                <div className="border p-5 rounded-xl flex gap-3">
                    <button onClick={() => setQuantity(--quantity)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(++quantity)}>+</button>
                </div>

            </div>

            <div className="py-8 border-b-2 flex flex-col gap-3">
                <p className="text-2xl">Key Amenities</p>

                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>Newly Launched</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>High Speed WiFi</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>Pool/Jacuzzi</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>Pet Friendly</span>
                </label>
                <p className="underline text-gray-400">See More</p>
            </div>

            {/* <div className="py-8 border-b-2 flex flex-col gap-3">
                <p className="text-2xl">Great For</p>

                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>Food</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>Service</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>View</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>Kids</span>
                </label>
                <p className="underline text-gray-400">See More</p>
            </div> */}

            <div className="py-8 border-b-2 flex flex-col gap-3">
                <p className="text-2xl">Price Per Night</p>

                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>Under ₹10,000</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>₹10,000 - ₹20,000</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>₹20,000 - ₹35,000</span>
                </label>
                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>₹35,000 - ₹50,000</span>
                </label>

                <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>More than ₹50,000 </span>
                </label>
            </div>

            <div className="py-8 flex flex-col gap-3">
                <p className="text-2xl">Selected Filters</p>

                <div className="flex items-center justify-between">
                    <button className="border py-3 px-8  rounded-xl">
                        All Results
                    </button>
                    <p className="underline text-gray-400">Clear All</p>
                </div>


            </div>
        </div>
    );
};

export default FilterBar;