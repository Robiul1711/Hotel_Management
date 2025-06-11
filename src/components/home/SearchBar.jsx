import React, { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';
import { useForm, Controller } from 'react-hook-form';

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState("stays");
    const { control, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            destination: "Lonavala",
            checkIn: dayjs('2025-02-28'),
            checkOut: dayjs('2025-02-28'),
            adults: 2,
            rooms: 1
        }
    });

    const [openPopup, setOpenPopup] = useState(null);
    const popularDestinations = ["Lonavala", "Mumbai", "Goa", "Bangalore", "Delhi", "Jaipur"];
    const popupRef = useRef(null);
    const destinationRef = useRef(null);
    const guestsRef = useRef(null);
    const navigate = useNavigate();

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openPopup === 'destination' &&
                destinationRef.current &&
                !destinationRef.current.contains(event.target)) {
                setOpenPopup(null);
            }
            if (openPopup === 'guests' &&
                guestsRef.current &&
                !guestsRef.current.contains(event.target)) {
                setOpenPopup(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openPopup]);

    const togglePopup = (popupName) => {
        setOpenPopup(openPopup === popupName ? null : popupName);
    };

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            checkIn: data.checkIn.format('YYYY-MM-DD'), // Formats to '2025-02-28'
            checkOut: data.checkOut.format('YYYY-MM-DD')
        };
        console.log(formattedData);
        // Handle search logic here
        navigate('/stays');
    };

    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-4 ">
            <div className="flex">
                <button
                    onClick={() => setActiveTab("stays")}
                    className={`px-4 py-2 font-semibold rounded-t-md text-sm sm:text-base ${activeTab === "stays" ? "bg-orange-500 text-white" : "text-gray-600 bg-white"}`}
                >
                    Stays
                </button>
                {/* <button
                    onClick={() => setActiveTab("experiences")}
                    className={`px-4 py-2 font-medium rounded-t-md text-sm sm:text-base ${activeTab === "experiences" ? "bg-orange-500 text-white" : "text-gray-600 bg-white"}`}
                >
                    Experiences
                </button> */}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="rounded-tr-xl rounded-br-xl rounded-bl-xl bg-white shadow-md p-4 md:p-6 lg:p-8">
                    {activeTab === "stays" ? (
                        <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 font-semibold">
                            {/* Destination */}
                            <div className="hidden xmd:flex flex-col relative w-full sm:w-auto" ref={destinationRef}>
                                <span className="text-sm md:text-lg text-black flex items-center">
                                    Destination {openPopup === 'destination' ? <RiArrowDropUpLine className='text-xl md:text-2xl' /> : <RiArrowDropDownLine className='text-xl md:text-2xl' />}
                                </span>
                                <button
                                    type="button"
                                    className="text-primary text-sm md:text-2xl font-semibold text-left"
                                    // onClick={() => togglePopup('destination')} for popup
                                >
                                    {watch('destination')}
                                </button>

                                {openPopup === 'destination' && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10 p-4">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-700 mb-2">Popular destinations</h4>
                                            {popularDestinations.map(dest => (
                                                <div
                                                    key={dest}
                                                    className="p-2 hover:bg-gray-100 rounded cursor-pointer "
                                                    onClick={() => {
                                                        setValue('destination', dest);
                                                        setOpenPopup(null);
                                                    }}
                                                >
                                                    {dest}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Check-in */}
                            <div className="flex flex-col basis-[48%] sm:basis-auto">
                                <span className="text-sm md:text-lg text-black flex items-center">
                                    Check-in <RiArrowDropDownLine className='text-2xl' />
                                </span>
                                <Controller
                                    name="checkIn"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            format="DD MMM 'YY"
                                            allowClear={false}
                                            bordered={false}
                                            suffixIcon={null}
                                            className="!text-primary !text-2xl !font-medium !bg-transparent !p-0 !border-none !shadow-none hover:!border-none focus:!border-none focus:!shadow-none custom-datepicker"
                                            popupClassName="custom-calendar-dropdown"
                                        />
                                    )}
                                />
                            </div>

                            {/* Check-out */}
                            <div className="flex flex-col basis-[48%] sm:basis-auto">
                                <span className="text-sm md:text-lg text-black flex items-center">
                                    Check-out <RiArrowDropDownLine className='text-2xl' />
                                </span>
                                <Controller
                                    name="checkOut"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            format="DD MMM 'YY"
                                            allowClear={false}
                                            bordered={false}
                                            suffixIcon={null}
                                            className="!text-primary !text-2xl !font-medium !bg-transparent !p-0 !border-none !shadow-none hover:!border-none focus:!border-none focus:!shadow-none custom-datepicker"
                                            popupClassName="custom-calendar-dropdown"
                                        />
                                    )}
                                />
                            </div>

                            {/* Guests Dropdown */}
                            {/* <div className="flex flex-col relative w-full sm:w-auto" ref={guestsRef}>
                                <span className="text-sm md:text-lg text-black flex items-center">
                                    Guests {openPopup === 'guests' ? <RiArrowDropUpLine className='text-xl md:text-2xl' /> : <RiArrowDropDownLine className='text-xl md:text-2xl' />}
                                </span>
                                <button
                                    type="button"
                                    className="text-primary text-sm md:text-2xl font-semibold text-left"
                                    onClick={() => togglePopup('guests')}
                                >
                                    {watch('adults')} Adults | {watch('rooms')} Room
                                </button>

                                {openPopup === 'guests' && (
                                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10 p-4">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-700">Adults</span>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setValue('adults', Math.max(1, watch('adults') - 1))}
                                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-6 text-center">{watch('adults')}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setValue('adults', Math.min(15, watch('adults') + 1))}
                                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-700">Rooms</span>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setValue('rooms', Math.max(1, watch('rooms') - 1))}
                                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-6 text-center">{watch('rooms')}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setValue('rooms', Math.min(15, watch('rooms') + 1))}
                                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div> */}

                            {/* Search Button */}
                            <button
                                type="submit"
                                className="bg-primary text-white text-sm sm:text-base md:text-lg py-2 px-3 sm:px-6 sm:py-2 md:px-8 md:py-2 w-fit sm:w-auto rounded-full hover:bg-orange-600 transition-all mt-2 sm:mt-0"
                            >
                                Search
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            Experience
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default SearchBar;