import { IoLocationOutline } from "react-icons/io5";

const Card = ({ data }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col h-[300px] xs:h-[340px] sm:h-[380px] md:h-[400px] lg:h-[380px]">
            {/* Image Section */}
            <div className="relative h-[60%] sm:h-[65%] md:h-[70%] w-full">
                <img
                    src={data?.img}
                    className="w-full h-full object-cover"
                    alt={data?.title || "Accommodation"}
                />
                <p className="text-white absolute top-3 left-3 sm:top-4 sm:left-4 bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
                    Free Exclusive Services
                </p>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-2 sm:items-center">
                    <div className="flex flex-col w-[60%] sm:w-[65%]">
                        <p className="flex items-center text-sm sm:text-base md:text-lg gap-1 sm:gap-2">
                            <IoLocationOutline className="flex-shrink-0" />
                            <span className="truncate">{data?.location}</span>
                        </p>
                        <p className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl line-clamp-2">
                            {data?.title}
                        </p>
                    </div>
                    <div>
                        <button className="bg-secondary text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full hover:bg-orange-600 transition-all whitespace-nowrap">
                            View package
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;