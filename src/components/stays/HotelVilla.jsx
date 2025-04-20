import { MenuIcons } from '@/lib/CustomIcons';
import React from 'react';

const HotelVilla = () => {
    return (
        <div  className='mt-12'>
            <div className="flex justify-between">
                <p className="text-primary text-5xl">
                    Hich Hotels & Villas
                </p>
                <button className='border py-3 px-3 rounded-xl shadow-md flex items-center gap-3'>
                    <MenuIcons />
                    Filters
                </button>
            </div>
            <p className="text-lg mt-10">
                Lörem ipsum biobining senera det teral kupespek. Valav otyrade inte plarere med infrakåvis. Renas ditt, megaling, jösetokroktigt. Tårtgate nyn gende. Lalogi antepoktiga vist misamma om missade. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit at temporibus odit omnis repellendus, consequatur error dolore commodi iste molestiae eos unde minima. Aspernatur consequatur nihil, a culpa vitae odit nam dicta consequuntur? Odio ipsa tenetur quis numquam qui non consequatur explicabo veniam, hic corrupti cumque illo necessitatibus, quos nemo beatae fugiat ut consectetur. Sequi doloribus delectus excepturi aliquid tempora.
            </p>
        </div>
    );
};

export default HotelVilla;