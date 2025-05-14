import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import img1 from '@/assets/images/hotelP1.png';
import img2 from '@/assets/images/hotelP2.png';
import img3 from '@/assets/images/hotelP3.png';
import img4 from '@/assets/images/hotelP4.png';
import img5 from '@/assets/images/hotelP5.png';
import { SettingIcons, StarIcons } from '@/lib/CustomIcons';
import { CustomLoveIcon, CustomPdfIcon, CustomShareIcon } from '@/lib/CustomIconPackage';
import StarRatings from 'react-star-ratings';

const PackageGallery = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 justify-center items-center">

                    <p className="mt-6 font-bold text-2xl">4.8</p>
                    <div className="flex">
                        <StarRatings
                            rating={4.8}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name='rating'
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </div>
                    <div className="">
                        <CustomLoveIcon />
                    </div>
                </div>

                <div className="flex items-center">
                    <CustomPdfIcon />
                    <CustomShareIcon />
                </div>
            </div>
            <div className=" px-4 py-6">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Left Large Image */}
                    <div className="md:w-[58%] w-full rounded-xl overflow-hidden">
                        <img src={img1} alt="Main" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* Right Grid */}
                    <div className="hidden  md:w-[42%] w-full md:grid grid-cols-2 gap-4">
                        <img src={img2} alt="Grid1" className="w-full h-full object-cover rounded-xl" />
                        <img src={img3} alt="Grid2" className="w-full h-full object-cover rounded-xl" />
                        <img src={img4} alt="Grid3" className="w-full h-full object-cover rounded-xl" />
                        <div className="relative rounded-xl overflow-hidden">
                            <img src={img5} alt="Grid4" className="w-full h-full object-cover rounded-xl" />
                            <button className="absolute bottom-3 right-3 bg-white text-black px-4 py-2 rounded-full text-sm shadow">
                                View all photos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PackageGallery;
