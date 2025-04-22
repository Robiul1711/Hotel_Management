import React, { useState } from 'react';
const tabs = [
    'Details',
    'Location',
    'Room Options',
    'Facilities',
    'Policies',
    'Contact Hotel'
];

const TabContent = ({selected})=>{
return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-2">{selected}</h2>
        <p className="text-gray-600">This is the content for the {selected} tab.</p>
    </div>
)
}


const TabSection = () => {
    const [selectedTab, setSelectedTab]=useState('Details');
    return (
        <div className=''>
            <div className=" flex flex-wrap gap-3 justify-start">
                {
                    tabs?.map((tab)=>(
                        <button
                        key={tab}
                        onClick={()=>setSelectedTab(tab)}
                        className={`relative  text-black px-2 md:px-4 py-2 rounded-full text-xs md:text-lg  transition-all duration-200 ${selectedTab === tab ? ' bg-primary text-white': 'hover:bg-gray-100'}`}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>

            {/* <TabContent selected={selectedTab} /> */}
        </div>
    );
};

export default TabSection;