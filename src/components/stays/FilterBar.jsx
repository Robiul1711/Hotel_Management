import React, { useState } from 'react';
import ToggleButton from '../common/ToggleButton';
import AntdDualRangeSlider from '../common/AntdDualRangeSlider';
import { Slider } from "@/components/ui/slider"
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useData from '@/hooks/useData';
import toast from 'react-hot-toast';
const FilterBar = () => {

    let [quantity, setQuantity] = useState(0);
    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(500000);
    const [showAll, setShowAll] = useState(false);
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const [isEnabled, setIsEnabled] = useState(false);

    const axiosPublic = useAxiosPublic();
    const { setVillaSearchResult } = useData();

    const { data: aminities } = useQuery({
        queryKey: ["aminities"],
        queryFn: async () => {
            const res = await axiosPublic.get('/villa/allAmenities');
            return res?.data?.allamenities;
        }
    })
    const displayedAmenities = showAll ? aminities : aminities?.slice(0, 6);
    // console.log('All amenities:', aminities);

    const handleSearch = async () => {
        let payload = {};
        isEnabled ? payload = { minPrice, maxPrice, amenity_id: selectedAmenities } :
            payload = { one_rupe: 1 };
        console.log(payload)

        const toastId = toast.loading('Searching...');
        try {
            const res = await axiosPublic.post('/villa/allfilterdatas', payload);
            setVillaSearchResult(res?.data?.allVillas);
            scrollTo(0, 400);
            toast.success('Villas found', { id: toastId });
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong', { id: toastId });
        }
    }



    return (
        <div className='relative'>
            <p className="text-lg"><span className="text-primary">Home</span> {">"} <span className="text-gray-400">Villas in Lonavala</span></p>
            <div className="flex items-center justify-between sticky top-[90px] bg-white z-10 py-2 border-b ">
                <button onClick={handleSearch} className="border py-3 px-8  rounded-xl">
                    Apply
                </button>
                <p onClick={() => {
                    setSelectedAmenities([]);
                    setMinPrice(1000);
                    setMaxPrice(500000);
                    setVillaSearchResult(null);
                    scrollTo(0, 400);
                }} className="underline cursor-pointer text-gray-400 mb-0">Clear All</p>
            </div>

            <div className="border-b-2 space-y-3 my-5 pb-8">
                <p className="text-2xl">One Rupee Villa</p>
                <p className="text-lg">Price per night with taxes</p>
                <ToggleButton enabled={isEnabled} onToggle={setIsEnabled} />
            </div>


            {/* <div className="border-b-2 space-y-3 my-5 pb-8">
                <p className="text-2xl">Display total Price</p>
                <p className="text-lg">Price per night with taxes</p>
                <ToggleButton />
            </div> */}

            <div className="border-b-2 pb-8">
                <div className="my-5">
                    <p className="text-2xl">Price Range</p>
                    <AntdDualRangeSlider minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
                    {/* <Slider defaultValue={[33]} max={100} step={1} /> */}
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

                    {/* <button className="border  py-3 px-8 mt-5 rounded-xl ">
                        Apply Filter
                    </button> */}
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

                {
                    displayedAmenities?.map(item =>
                        <label key={item?.id} className="inline-flex items-center gap-2">
                            <input type="checkbox"
                                className="accent-blue-500"
                                value={item?.id}
                                onChange={(e) => {
                                    const id = e.target.value;
                                    setSelectedAmenities(prev => e.target.checked ? [...prev, id] : prev.filter(aid => aid !== id));
                                }}
                            />
                            <span>{item?.name}</span>
                        </label>
                    )
                }


                <p onClick={() => setShowAll(!showAll)} className="underline text-gray-400">{showAll ? "See Less" : "See More"}</p>
            </div>



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

                {/* <div className="flex items-center justify-between">
                    <button onClick={handleSearch} className="border py-3 px-8  rounded-xl">
                        All Results
                    </button>
                    <p onClick={() => {
                        setSelectedAmenities([]);
                        setMinPrice(1000);
                        setMaxPrice(500000);
                        setVillaSearchResult(null);
                        scrollTo(0, 400);
                    }} className="underline cursor-pointer text-gray-400">Clear All</p>
                </div> */}


            </div>
        </div>
    );
};

export default FilterBar;