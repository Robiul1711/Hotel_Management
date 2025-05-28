import image from '@/assets/images/luxury.png';
import EnquireForm from './EnquireForm';

const LuxuryVila = () => {
    return (
        <div className='flex  justify-between rounded-[10px] '>
            <div className="w-[60%] flex items-center justify-center px-4 rounded-l-[8px] xlg:px-20 bg-[#fef7da] text-dark">
                <div className="">
                    <p className="text-[12px] sm:text-[24px]">
                        List your home amongst India’s finest luxury villas.
                        <span className="hidden xmd:inline">
                            and become part of our prestigious homeowner community...
                        </span>
                    </p>
                    <ul className='list-disc list-inside text-gray-500 text-[10px] md:text-lg'>
                        <li>Trusted by 300+ HNIs, Industrialists, & Celebrities</li>
                        <li>Earn 40% net margins upon partnering with us</li>
                        <li className='hidden xmd:flex'>Enhance the warmth and beauty of your Villa</li>
                        <li className='hidden xmd:flex'>Peace of mind with an end-to-end hospitality operation</li>
                    </ul>
                    <div className="">
                        <EnquireForm/>
                    </div>
                </div>
            </div>
            <div className="w-[40%] ">

                <img src={image} alt="" className='w-full ' />
            </div>

        </div>
    );
};

export default LuxuryVila;