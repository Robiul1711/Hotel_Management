import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {

    const navigate = useNavigate();
    return (
        <div>
                       <h1 className='text-2xl font-semibold mb-6 font-neris'>Web Check-in</h1>
            <div className='flex flex-col items-center justify-center bg-[#FA0] rounded-[12px] p-16'>
<p className='font-neris text-[32px] text-white text-center mx-auto '>Need Help?</p>
<p className='font-neris text-lg text-white text-center mx-auto '>Facing any issues with your booking or stay? We're here to help you.</p>
          <button onClick={() => navigate('/dashboard/open-support-ticket')} className='bg-white text-black px-20 py-3 rounded-[12px] transition-all'>Open a Support Ticket</button>
            </div>
        </div>
    );
};

export default Support;