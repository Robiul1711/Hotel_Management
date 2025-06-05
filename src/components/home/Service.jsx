import yoga from "@/assets/images/yoga.png";
import { CheckCircle, Truck, BedDouble, Briefcase, Utensils, Wifi } from "lucide-react";
import CardGrid from "../common/CardGrid";
import CardSwipe from "./CardSwipe";
import CardGrid2 from "../common/CardGrid2";
import { motion } from 'framer-motion'
import { SlideUp } from "@/animation/animate";

const services = [
    {
        icon: <BedDouble className="w-6 h-6" />,
        title: "One–Click Room Service & Housekeeping",
        description: "Request room service or housekeeping with one tap, just download Hich app.",
    },
    {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Complimentary In-Hotel Activities",
        description: "Join complimentary wellness, sports, and leisure activities.",
    },
    {
        icon: <Truck className="w-6 h-6" />,
        title: "Transportation Services",
        description: "Travel hassle-free with our reliable transport services.",
    },
    {
        icon: <Utensils className="w-6 h-6" />,
        title: "Order Food",
        description: "Enjoy delicious meals delivered straight to your room or savor a delightful dining experience at our restaurant.",
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Pack My Bag Service",
        description: "Let us pack your belongings for a stress-free departure.",
    },
    {
        icon: <Wifi className="w-6 h-6" />,
        title: "Other Amenities (10 Facilities)",
        description: "Enjoy access to Wi-Fi, laundry services, concierge assistance, and a range of other premium amenities.",
    },
];

const Service = () => {
    return (
        <motion.section
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="md:py-12 bg-white">
            <div className=" ">
                <h2 className="md:text-4xl font-bold text-primary md:mb-8">
                    Enjoy Exclusive services for free:
                </h2>


                <div className="flex flex-col gap-5 lg:flex-row items-stretch">
                    <div className=" lg:w-[72%]">
                        <div className=" ">
                            {/* <CardGrid /> */}
                            
                            <CardGrid2 />
                        </div>

                    </div>
                    <div className="w-[80%] hidden lg:block lg:w-[28%]  ">
                        <CardSwipe />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Service;
