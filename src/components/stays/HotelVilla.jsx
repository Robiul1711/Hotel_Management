import { MenuIcons } from '@/lib/CustomIcons';
import React from 'react';

const HotelVilla = () => {
    return (
        <div className=''>
            <div className="flex flex-col xmd:flex-row xmd:items-center justify-between">
                <div className="">
                    <p className="text-primary text-xl xmd:text-5xl">
                        Hich Hotels & Villas
                    </p>
                </div>
                <div className="flex gap-3 xmd:gap-5">
                            <button className='border py-3 px-5 rounded-3xl text-secondary border-secondary flex items-center gap-3'>
                        Villas
                    </button>
                    <button className='border py-3 px-5 rounded-3xl text-white bg-secondary border-secondary flex items-center gap-3'>
                        Hotels
                    </button>
            
                </div>
            </div>
            <p className="my-5 xmd:text-lg text-gray-500">
                Lörem ipsum biobining senera det teral kupespek. Valav otyrade inte plarere med infrakåvis. Renas ditt, megaling, jösetokroktigt. Tårtgate nyn gende. Lalogi antepoktiga vist misamma om missade. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit at temporibus odit omnis
            </p>
        </div>
    );
};

export default HotelVilla;