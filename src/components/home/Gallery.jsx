import Masonry from 'react-masonry-css';
import img1 from '@/assets/images/gallery/1.png';
import img2 from '@/assets/images/gallery/2.png';
import img3 from '@/assets/images/gallery/3.png';
import img4 from '@/assets/images/gallery/4.png';
import img5 from '@/assets/images/gallery/5.png';
import img6 from '@/assets/images/gallery/6.png';
import img7 from '@/assets/images/gallery/7.png';
import img8 from '@/assets/images/gallery/8.png';
import element from '@/assets/images/element1.png';
import { motion } from 'framer-motion'
import { SlideUp, Zooming } from '@/animation/animate';

const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    640: 3,  // Show 3 columns on mobile (640px and above)
    480: 2   // Show 2 columns on very small screens (below 640px)
};

const galleryItems = [
    { img: img7, title: "Modern Loft", category: "Contemporary" },
    { img: img1, title: "Mountain Retreat", category: "Nature" },
    { img: img5, title: "Cozy Cabin", category: "Woodland" },
    { img: img8, title: "Desert Oasis", category: "Unique Stays" },
    { img: img3, title: "Beachfront Villa", category: "Ocean View" },
    { img: img4, title: "City Apartment", category: "Urban" },
    { img: img2, title: "Luxury Suite", category: "Premium" },
    { img: img6, title: "Historic Manor", category: "Classic" },
];

const Gallery = () => {
    return (
        <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="hidden md:flex flex-col gap-6 md:gap-8 relative px-4 sm:px-6">
            <img src={element} className='w-32 md:w-40 hidden md:flex absolute right-0 -top-20 md:-top-28' alt="" />

            <p className="text-primary text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
                Create Memories, One Stay at a Time
            </p>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4 md:gap-6 -ml-4 md:-ml-6"
                columnClassName="ml-4 md:ml-6"
            >
                {galleryItems.map((item, i) => (
                    <div key={i} className="mb-4 md:mb-6 relative group overflow-hidden rounded-lg md:rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="bg-primary text-xs font-semibold px-2 py-1 md:px-3 rounded-full mb-1 md:mb-2 inline-block">
                                    {item.category}
                                </span>
                                <h3 className="text-base md:text-xl font-bold">{item.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Masonry>

            <div className="text-center">
                <button className="bg-primary text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full hover:bg-opacity-90 transition-all font-medium shadow-lg hover:shadow-primary/30">
                    Show More
                </button>
            </div>
        </motion.div>
    );
};

export default Gallery;