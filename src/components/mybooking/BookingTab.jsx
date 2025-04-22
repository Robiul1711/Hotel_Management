import React, { useState } from 'react';
import MyExperienceTabContent from './MyExperienceTabContent';

const tabs = ['My Stays', 'My Experiences'];

const TabContent = ({ selected }) => {
    return (
        <>
            {
                selected === 'My Stays' ?
                    <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">{selected}</h2>
                        <p className="text-gray-600">This is the content for the {selected} tab.</p>
                    </div>
                    :
                    <MyExperienceTabContent />
            }
        </>
    )
}

const BookingTab = () => {
    const [selectedTab, setSelectedTab] = useState('My Experiences');

    return (
        <>
            <div className="w-fit">
                <div className="inline-flex gap-2 border border-primary rounded-full p-1 bg-white">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-4 py-2 rounded-full text-lg font-medium transition-all duration-200
              ${selectedTab === tab
                                    ? 'bg-primary text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

            </div>
            <TabContent selected={selectedTab} />
        </>
    );
};

export default BookingTab;
