import React from 'react';


const AddOnCard = ({ data, isSelected, onToggle }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col h-[320px] sm:h-[350px] md:h-[400px] lg:h-[400px]">
            {/* Image Section */}
            <div className="relative h-[60%] w-full">
                <img
                    src={data?.photo_url}
                    className="w-full h-full object-cover"
                    alt={data?.name || "Accommodation"}
                    loading="lazy"
                />
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col">
                <div className="flex items-start gap-2 sm:items-center mb-1 sm:mb-2">
                    <div className="flex flex-col flex-1">
                        <p className="font-semibold text-gray-800 text-base sm:text-lg md:text-xl lg:text-xl truncate mb-0">
                            {data?.name}
                        </p>
                        <p>{data?.details}</p>
                        <p className="text-2xl font-semibold">₹ {data?.price} once</p>
                    </div>
                    <div className="">
                        <button
                            onClick={() => onToggle(data)}
                            className={`text-secondary border border-secondary px-7 py-2 md:px-6 md:py-2 rounded-full font-semibold transition-all ${isSelected
                                    ? "bg-secondary text-white hover:bg-secondary-dark"
                                    : "hover:bg-orange-600 hover:text-white"
                                }`}
                        >
                            {isSelected ? "✓ Added" : "+ Add to Package"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOnCard;