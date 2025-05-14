import { CustomACIcon, CustomBathIcon, CustomChildIcon, CustomElderIcon, CustomPoolIcon, CustomWifiIcon } from '@/lib/CustomIconPackage';
import React from 'react';

const Aminities = () => {
    return (
        <div>
            <p className="text-[24px] font-bold">Amenities</p>
            <CustomACIcon/>
            <CustomWifiIcon/>
            <CustomChildIcon/>
            <CustomBathIcon/>
            <CustomElderIcon/>
            <CustomPoolIcon/>
        </div>
    );
};

export default Aminities;