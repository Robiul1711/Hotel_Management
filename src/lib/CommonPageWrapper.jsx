import React from 'react';

const CommonPageWrapper = ({children}) => {
    return (
        <div  className={`section-padding-x section-padding-y flex flex-col gap-[45px] xmd:gap-[120px] `}>
            {children}
        </div>
    );
};

export default CommonPageWrapper;