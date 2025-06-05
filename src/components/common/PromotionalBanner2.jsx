import { SlideLeft, SlideRight, SlideUp } from '@/animation/animate';
import logo from '@/assets/images/biglogo.png';
import element from '@/assets/images/promotion.png';
import { motion } from 'framer-motion'

const PromotionalBanner2 = () => {
    return (
        <div
            className='border rounded-2xl flex flex-col lg:flex-row gap-4 justify-between p-6 items-center'>
            <div className="">
                <p className="text-2xl lg:text-5xl font-semibold mb-0">Villas for ₹1 on Weekdays!</p>
                <p className="lg:text-xl font-semibold">Just pay for meals – the villa’s practically on us from Monday -Thursday!</p>
                <button className='bg-primary text-white px-6 py-4 rounded-full'>Save on Stays</button>
            </div>
            <div className="lg:w-[30%]">
                <img src={element} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default PromotionalBanner2;