import React from 'react';

const Overview = () => {
    return (
        <div id='description' className='space-y-5 text-[#495560]'>
            <p className="text-[24px] text-black">Description</p>
            <div className="hidden md:block">
                <p className="">
                    See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.
                </p>

                <p>
                    Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s architectural masterpiece, where Admirals Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.
                </p>
            </div>

            <div className="md:hidden">
                <p className="">
                    See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.
                </p>
                <p className="font-bold text-primary">Read More...</p>

               
            </div>
        </div>
    );
};

export default Overview;