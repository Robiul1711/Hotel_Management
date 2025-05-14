import { SlideLeft, SlideRight, SlideUp } from '@/animation/animate';
import logo from '@/assets/images/biglogo.png';
import element from '@/assets/images/element1.png';
import { motion } from 'framer-motion'

const PromotionalBanner = () => {
    return (
        <motion.div
            variants={SlideRight(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className='bg-secondary rounded-2xl flex justify-between items-center p-5'>
            <img src={logo} alt="" className='w-20 xmd:w-auto' />
            <div className="">
                <p className="text-white xmd:text-5xl ">Launching Hich Getaways</p>
                <span className="text-primary xmd:text-2xl">Experience our finest Villas - The Unhotel Experience</span>
            </div>
            <img src={element} alt="" className='w-20 xmd:w-auto' />
        </motion.div>
    );
};

export default PromotionalBanner;