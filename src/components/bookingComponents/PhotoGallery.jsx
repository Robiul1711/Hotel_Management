import React from "react";
import details from "@/assets/images/details.png";
const PhotoGallery = () => {
  const images = [
    details, // Large image
    details,
    details,
    details,
  details,
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-3 ">
      {/* Left - Large Image */}
      <div className="col-span-2 row-span-2">
        <img
          src={images[0]}
          alt="Main Room"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Top-right image */}
      <div>
        <img
          src={images[1]}
          alt="Hallway"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Top-right image */}
      <div>
        <img
          src={images[2]}
          alt="Bedroom"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Bottom-right image */}
      <div>
        <img
          src={images[3]}
          alt="Bar"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Bottom-right image with overlay button */}
      <div className="relative">
        <img
          src={images[4]}
          alt="Decor"
          className="w-full h-full object-cover rounded-xl"
        />
        <button className="absolute inset-0 flex items-center justify-center text-white bg-black/50 backdrop-blur rounded-xl text-sm font-medium">
          View all photos
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
