import React, { useState } from "react";
import popular from "../../assets/images/popular.png";
import history from "../../assets/images/history.png";
const tabs = ["Most Popular", "Special Offer", "Near Me"];

const HotelCard = ({ showButton = false }) => (
    <div className="flex items-center gap-4 bg-white rounded-lg shadow-sm p-3">
        <img
            src={popular}
            alt="hotel"
            className="w-24 h-20 rounded-lg object-cover"
        />
        <div className="flex justify-between items-center w-full">
            <div>
                <p className="font-semibold text-sm">
                    Tropical Adventures and Sun-Kissed Shores
                </p>
                <p className="text-xs text-gray-500">@Lonavala</p>
            </div>
            <div className="text-right">
                <p className="text-sm font-medium">INR 2500</p>
                {showButton && (
                    <button className="mt-2 text-xs bg-orange-500 text-white px-3 py-1 rounded">
                        Add Review
                    </button>
                )}
            </div>
        </div>
    </div>
);
const History = ({ showButton = false }) => (
    <div className="flex items-center relative bg-white  rounded-lg shadow-sm p-3">
        <img
            src={history}
            alt="hotel"
            className="rounded-lg w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 shadow-xl flex justify-between items-center w-full p-2 md:p-4 bg-white rounded-[12px]">
            <div>
                <p className="font-semibold text-sm">
                    Tropical Adventures and Sun-Kissed Shores
                </p>
            
            </div>
            <div className="">
                <p className="text-sm font-medium">INR 2500</p>
    
            </div>
        </div>
    </div>
);

const TravelSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col xl:flex-row gap-4">
            {/* Left: Tabs + Cards */}
            <div className="xl:w-2/3">
                {/* Tabs */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-6 text-sm font-medium">
                        {tabs.map((tab, idx) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(idx)}
                                className={`pb-1 ${activeTab === idx
                                        ? "text-black border-b-2 border-black"
                                        : "text-gray-400"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button className="text-orange-500 text-sm font-medium">
                        View All
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 xmd:grid-cols-2 gap-4">
                    {[...Array(6)].map((_, idx) => (
                        <HotelCard key={idx} />
                    ))}
                </div>
            </div>

            {/* Right: History Section */}
            <div className=" xl:w-1/3  bg-white rounded-xl border p-4 shadow-md">
                <h3 className="text-md font-medium mb-3">History</h3>
                <div className="space-y-3 grid grid-cols-1 xmd:grid-cols-2 xl:grid-cols-1 gap-4 xl:gap-0 ">
                    {[...Array(2)].map((_, idx) => (
                        <History key={idx} showButton />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelSection;
