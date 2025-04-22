import banner from "@/assets/images/bookingBanner.png";


const BookingBanner = () => {
    return (
        <div className="relative">
            {/* Banner Image */}
            <img
                src={banner}
                className="w-full h-auto object-cover"
                alt="Banner background"
            />

            {/* Main Text Overlay */}
            <div className="absolute inset-0 flex top-[40%] justify-center">
                <p className="text-xl font-neris md:text-4xl lg:text-5xl xlg:text-6xl xl:text-8xl w-1/2 font-semibold text-white text-center px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    My Bookings
                </p>
            </div>


        </div>
    );
};

export default BookingBanner;