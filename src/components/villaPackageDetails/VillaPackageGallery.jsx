import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import img1 from '@/assets/images/villa1.png';
import img2 from '@/assets/images/villa2.png';
import img3 from '@/assets/images/villa3.png';
import img4 from '@/assets/images/villa4.png';
import img5 from '@/assets/images/villa5.png';
import { CustomLoveIcon, CustomPdfIcon, CustomShareIcon } from '@/lib/CustomIconPackage';
import StarRatings from 'react-star-ratings';
import { IoMdCloseCircle } from 'react-icons/io';
import PropertyBanner from '../common/PropertyBanner';

const VillaPackageGallery = ({ thumbnail, media }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');


    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        if (media?.length) {
            setSelectedImage(media[selectedImageIndex]?.media_name);
        }
    }, [selectedImageIndex]);


    const showNextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex + 1 < media.length ? prevIndex + 1 : 0
        );
    };

    const showPrevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex - 1 >= 0 ? prevIndex - 1 : media.length - 1
        );
    };


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


            <div className="md:px-4">
                <div className=" flex flex-col md:flex-row gap-4">
                    <div className="md:hidden">
                        <PropertyBanner banners={media} />
                    </div>

                    {/* Left Large Image */}
                    <div className="hidden md:flex md:w-[58%] w-full aspect-square md:aspect-video md:rounded-xl overflow-hidden">
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

                        {
                            media?.length > 0 &&
                            <button
                                onClick={() => openModal(thumbnail)}
                                className="absolute bottom-3 right-3 bg-white text-black px-4 py-2 rounded-full text-sm shadow"
                            >
                                View all photos
                            </button>
                        }

                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white text-2xl z-50"
                    >
                        <IoMdCloseCircle />
                    </button>
                    {/* Overlay for selected image with navigation */}
                    <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
                        {/* Close Button */}


                        {/* Left Navigation */}
                        <button
                            onClick={showPrevImage}
                            className="absolute left-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full z-40"
                        >
                            &#8592;
                        </button>

                        {/* Selected Image */}
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                        />

                        {/* Right Navigation */}
                        <button
                            onClick={showNextImage}
                            className="absolute right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full z-40"
                        >
                            &#8594;
                        </button>
                    </div>

                    {/* Thumbnails Grid Below */}
                    <div className="absolute bottom-4 w-full max-w-6xl mx-auto px-4">
                        <div className="bg-white p-2 rounded-lg shadow max-h-[20vh] overflow-y-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                            {media?.map((image, index) => (
                                <div
                                    key={index}
                                    className={`cursor-pointer border-4 ${selectedImage === image?.media_name ? 'border-primary rounded-lg' : 'border-transparent'}`}
                                    onClick={() => setSelectedImage(image?.media_name)}
                                >
                                    <img
                                        src={image?.media_name}
                                        alt={`Thumb ${index + 1}`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default VillaPackageGallery;