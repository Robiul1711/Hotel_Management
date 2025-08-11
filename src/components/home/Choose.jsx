import { SlideUp } from '@/animation/animate';
import choose from '@/assets/images/choose.png';
import { CareIcons, FingerIcons, TailorIcons } from '@/lib/CustomIcons';
import { motion } from 'framer-motion'

const Choose = () => {
    return (
        <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className='space-y-20'>
            <div className="">
                <div className='space-y-4 xlg:w-1/2 pb-5'>
                    <p className="text-primary  md:text-4xl text-lg font-semibold mb-0">
                        Why Choose Us?
                    </p>
                    <p className="text-lg">
                        Whether you're here for leisure or business, we ensure personalized service, modern amenities, and seamless experiences that feel like home.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-14">
                    <div className="xlg:w-[60%] ">
                        <img src={choose} className="w-full" alt="" />
                    </div>

                    <div className="w-full xlg:w-[30%] xlg:flex  xlg:flex-col  xlg:space-y-16">
                        {/* First Feature */}
                        <div className="flex gap-3 md:gap-4 flex-row ">
                            <div className="">
                                <FingerIcons className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <div>
                                <p className="text-xl sm:text-2xl xlg:text-3xl font-medium mb-0">Effortless Convenience</p>
                                <p className="text-sm sm:text-base">
                                    One-click services for housekeeping, room service, and amenities.
                                </p>
                            </div>
                        </div>

                        {/* Second Feature */}
                        <div className="flex gap-3 md:gap-4 flex-row">
                            <div className="flex-shrink-0">
                                <CareIcons className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <div>
                                <p className="text-xl sm:text-2xl xlg:text-3xl font-medium mb-0">Comfort & Care</p>
                                <p className="text-sm sm:text-base">
                                    Cozy accommodations designed for relaxation and productivity.
                                </p>
                            </div>
                        </div>

                        {/* Third Feature */}
                        <div className="flex gap-6 md:gap-6 flex-row">
                            <div className="flex-shrink-0">
                                <TailorIcons className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <div>
                                <p className="text-xl sm:text-2xl xlg:text-3xl font-medium mb-0">Tailored Experiences</p>
                                <p className="text-sm sm:text-base">
                                    Complimentary activities and personalized services to enhance your stay.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Choose;