import React from 'react';

const CommonPageWrapper = ({children}) => {
    return (
        <div  className={`section-padding-x section-padding-y flex flex-col gap-[45px] xmd:gap-[54px] `}>
            {children}
        </div>
    );
};

export default CommonPageWrapper;