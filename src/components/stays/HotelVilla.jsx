import { MenuIcons } from '@/lib/CustomIcons';
import React from 'react';

const HotelVilla = ({ active, setActive }) => {
    return (
        <div className=''>
            <div className="flex flex-col xmd:flex-row xmd:items-center justify-between">
                <div className="">
                    <p className="text-primary text-xl xmd:text-3xl xlg:text-5xl">
                        Hich Villas
                    </p>
                </div>
                <div className="flex gap-3 xmd:gap-5 my-3">
                    <button
                        onClick={() => setActive('villa')}
                        className={`border py-3 px-5 rounded-3xl ${active === 'villa' ? 'bg-secondary text-white' : 'text-secondary'}  border-secondary flex items-center gap-3 hover:bg-orange-500 hover:text-white`}>
                        Villas
                    </button>
                    {/* <button
                        onClick={() => setActive('hotels')}
                        className={`border py-3 px-5 rounded-3xl ${active === 'hotels' ? 'bg-secondary text-white' : ''}  border-secondary text-secondary flex items-center gap-3 hover:bg-orange-500 hover:text-white`}>
                        Hotels
                    </button> */}
                </div>
            </div>
            
        </div>
    );
};

export default HotelVilla;