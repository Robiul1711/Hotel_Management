import { SlideLeft, SlideRight, SlideUp } from '@/animation/animate';
import logo from '@/assets/images/biglogo.png';
import element from '@/assets/images/promotion2.png';
import { motion } from 'framer-motion'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Link } from 'react-router-dom';

const PromotionalBanner2 = () => {
    return (
        <div
            className='border rounded-2xl flex flex-col lg:flex-row gap-4 justify-between p-6 items-center'>
            <div className="space-y-3">
                <p className=" lg:text-5xl font-semibold mb-0">Villas for ₹1 on Weekdays!</p>
                <p className="lg:text-xl  font-semibold">Just pay for meals – the villa’s practically on us from Monday -Thursday!</p>
                <Link className='' target='_blank' to={'https://api.whatsapp.com/send?phone=918424996432&text=Hi%2C%20would%20like%20to%20know%20more%20about%20the%201%20rupee%20villas'}>
                    <button className='bg-primary text-white px-2 py-2 my-3 font-semibold xmd:px-6 xmd:py-4 rounded-full'>Save on Stays</button>
                </Link>
            </div>
            <div className="lg:w-[30%]">
                <img src={element} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default PromotionalBanner2;