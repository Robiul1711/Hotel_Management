import banner from '@/assets/images/banner2.png';

const SectionBanner = () => {
    return (
        <div className="relative my-20">
            {/* Banner Image */}
            <img
                src={banner}
                className="w-full h-auto object-cover"
                alt="Banner background"
            />

            {/* Main Text Overlay */}
            <div className="absolute inset-0 flex flex-col gap-10 text-white top-[25%] left-20">
                <p className=" text-5xl">
                    More Than a Stay, It’s <br /> an Experience
                </p>

                <p className="">
                    Enjoy personalized services, local flavors, and activities designed to enrich your journey.
                </p>
                <div className="flex gap-5">
                    <button className=" border  md:px-6 md:py-2 rounded-full hover:bg-orange-600 transition-all">
                        Contact Us
                    </button>

                    <button className="bg-primary text-white px-10 py-3 rounded-full hover:bg-opacity-90 transition-all font-medium shadow-lg hover:shadow-primary/30">
                        Explore Stays
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SectionBanner;