import React, { useState } from 'react';



const scrollWithOffset = (element) => {
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -200; // Adjust offset as needed
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const TabSection = ({tabs}) => {
    const [selectedTab, setSelectedTab] = useState('Description');

    const handleTabClick = (tab) => {
        setSelectedTab(tab.name);

        const element = document.querySelector(tab.section);
        if (element) {
            scrollWithOffset(element);
        }
    };

    return (
        <div className="">
            <div className="flex flex-wrap gap-3 justify-start">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => handleTabClick(tab)}
                        className={`relative text-black px-2 md:px-4 py-2 rounded-full text-xs md:text-lg transition-all duration-200 ${
                            selectedTab === tab.name ? 'bg-primary text-white' : 'hover:bg-gray-100'
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TabSection;
