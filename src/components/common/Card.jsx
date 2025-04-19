import { IoLocationOutline } from "react-icons/io5";

const Card = ({ data }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col h-[360px] sm:h-[400px] md:h-[420px] lg:h-[380px]">
            {/* Image Section (60% height) */}
            <div className="relative h-[70%] w-full">
                <img
                    src={data?.img}
                    className="w-full h-full object-cover"
                    alt={data?.title || "Accommodation"}
                />
                <p className="text-white absolute top-4 left-4 bg-black bg-opacity-10 px-3 py-1 rounded-md text-sm font-medium backdrop-blur-sm">
                    Free Exclusive Services
                </p>
            </div>

            {/* Content Section */}
            <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-center gap-2">
                    <div className="flex flex-col w-[60%]">
                        <p className="flex items-center text-lg gap-2">
                            <IoLocationOutline />
                            <span className="truncate">{data?.location}</span>
                        </p>
                        <p className="font-semibold text-gray-800 text-2xl line-clamp-2">
                            {data?.title}
                        </p>
                    </div>
                    <div>
                        <button className="bg-secondary text-sm text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all">
                            View package
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
