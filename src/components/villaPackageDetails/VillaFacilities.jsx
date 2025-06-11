import React from 'react';
import CardGrid2 from '../common/CardGrid2';
import CardSwipe from '../home/CardSwipe';

const VillaFacilities = () => {
    return (

        <div className=" ">
            <h2 className="md:text-4xl font-bold  md:mb-8">
                Complimentary Facilities Only with Hich:
            </h2>


            <div className="flex flex-col gap-3 xlg:gap-5 lg:flex-row items-stretch">
                <div className=" lg:w-[72%]">
                    <div className=" ">
                        {/* <CardGrid /> */}

                        <CardGrid2 />
                    </div>

                </div>
                <div className=" hidden md:block md:w-full lg:w-[28%]  ">
                    <CardSwipe />
                </div>
            </div>
        </div>

    );
};

export default VillaFacilities;