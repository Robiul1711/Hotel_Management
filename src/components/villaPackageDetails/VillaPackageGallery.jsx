import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import img1 from '@/assets/images/villa1.png';
import img2 from '@/assets/images/villa2.png';
import img3 from '@/assets/images/villa3.png';
import img4 from '@/assets/images/villa4.png';
import img5 from '@/assets/images/villa5.png';
import { CustomLoveIcon, CustomPdfIcon, CustomShareIcon } from '@/lib/CustomIconPackage';
import StarRatings from 'react-star-ratings';
import { IoMdCloseCircle } from 'react-icons/io';

const VillaPackageGallery = ({ thumbnail, media }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // Gallery images
    const images = [img1, img2, img3, img4, img5];

    // Open modal with selected image
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    return (
        <div>
            <div className="flex justify-between items-center ">
                <div className=" gap-3 justify-center items-center hidden md:flex">
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
                    <div>
                        <CustomLoveIcon />
                    </div>
                </div>

                <div className="md:hidden">
                    <div className="">
                        <p className=" text-xl font-semibold text-primary mb-0">The Peninsula Beverly Hills</p>
                        <p className="flex items-center gap-2 text-sm md:text-[20px] text-gray-600">
                            Lush green valley view

                        </p>
                    </div>
                </div>
                {/* <div className="flex items-center">
                    <CustomPdfIcon />
                    <CustomShareIcon />
                </div> */}
            </div>

            <div className="md:px-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Left Large Image */}
                    <div className="md:w-[58%] w-full aspect-square md:aspect-video md:rounded-xl overflow-hidden">
                        <img
                            src={thumbnail}
                            alt="Main"
                            className="w-full h-full object-cover md:rounded-xl"
                        />
                    </div>

                    {/* Right Grid */}
                    <div className="relative hidden md:w-[42%] w-full md:grid grid-cols-2 gap-4">
                        {media?.slice(0, 4)?.map((item, index) => (
                            <div key={index} className="aspect-square overflow-hidden rounded-xl">
                                <img
                                    src={item?.media_name}
                                    alt={`Grid ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}

                        <button
                            onClick={() => openModal(thumbnail)}
                            className="absolute bottom-3 right-3 bg-white text-black px-4 py-2 rounded-full text-sm shadow"
                        >
                            View all photos
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white p-4 rounded-lg max-w-7xl w-full max-h-[90vh] flex flex-col">
                        <div className="flex justify-end">
                            <button
                                onClick={closeModal}
                                className="text-red-500 font-bold text-xl flex items-center gap-2"
                            >
                                Close <IoMdCloseCircle />
                            </button>
                        </div>

                        {/* Main image */}
                        <div className="mt-4 flex-1">
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="w-full h-full max-h-[40vh] object-contain rounded-xl"
                            />
                        </div>

                        {/* Thumbnail grid */}
                        <div className="mt-4 border-t pt-4">
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 h-[30vh] overflow-y-auto">
                                {media?.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`relative cursor-pointer border-4 ${selectedImage === image?.media_name ? 'border-primary rounded-lg' : 'border-transparent'}`}
                                        onClick={() => setSelectedImage(image?.media_name)}
                                    >
                                        <img
                                            src={image?.media_name}
                                            alt={`Gallery image ${index + 1}`}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VillaPackageGallery;