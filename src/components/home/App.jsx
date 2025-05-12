import React from 'react';
import { motion } from 'framer-motion'
import { SlideUp } from '@/animation/animate';
const App = () => {
    return (
        <motion.div
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className='mt-[90px] flex flex-col gap-11'>
            <div className="space-y-4 md:space-y-10">
                <p className="text-primary md:text-5xl">
                    Beyond hospitality—download the Hich app <br /> for a seamless stay.
                </p>
                <div className="">
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, ipsam expedita corporis porro blanditiis eius, dicta cumque quia odio quam animi iusto minus fugiat inventore quaerat laudantium reprehenderit sed? Est similique corporis nesciunt,
                    </p>

                    <p className="hidden md:flex">
                        aliquid necessitatibus enim quam excepturi facilis magnam obcaecati sequi numquam. Veniam numquam nulla, pariatur mollitia debitis similique iure soluta quibusdam possimus veritatis. Laboriosam veniam saepe et quasi eos recusandae modi, illum neque quam, molestiae suscipit iusto consectetur, mollitia incidunt voluptatibus eum? Repellendus
                    </p>
                    <p className="hidden md:flex">
                        officia saepe ducimus delectus quibusdam earum deserunt, adipisci quae beatae blanditiis repudiandae! Iste distinctio, corporis deleniti, omnis aliquam possimus adipisci odit consectetur sit soluta modi!
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default App;