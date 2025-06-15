import MenuModal from "@/components/common/MenuModal";
import PriceModal from "@/components/common/PriceModal";
import { mealPlans } from "@/lib/Database";
import { Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Aminities = ({ amenityData, data }) => {
  const [showAll, setShowAll] = useState(false);
  // console.log("amenityData", amenityData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const displayedAmenities = showAll ? amenityData : amenityData?.slice(0, 6);

  return (
    <div>
      <p className="text-[24px] font-bold">Amenities</p>

      <div
        id="hotel-aminities"
        className="grid grid-cols-2 gap-2"
      >
        {displayedAmenities?.length > 0 ? (
          <>
            {displayedAmenities?.map((item, index) => (
              <div key={index} className="flex items-center gap-4  ">
                <img src={item?.amenitie?.media} alt="" className="w-8" />

                <p className="text-gray-400 mb-0">{item.amenitie?.name}</p>
              </div>
            ))}
          </>
        ) : (
          <p className="">No Amenities Found</p>
        )}
      </div>


      <>
        {
          amenityData?.length > 3 && (
            <button
              onClick={showModal}
              className="bg-transparent text-[#FF4800] md:px-16 px-4 md:py-3 py-2 rounded-full  border-[1px] border-orange-600 transition-all mt-10"
            >
              View More Amenities
            </button>
          )
        }

        <Modal
          title="Amenities"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {amenityData?.map((item, index) => (
            <div key={index} className="flex items-center gap-6 ">
              <div className=" w-[40px]">
                <img
                  src={item?.amenitie?.media}
                  alt=""
                  className="object-cover"
                />
              </div>

              <p className="text-gray-400 mt-4">{item.amenitie?.name}</p>
            </div>
          ))}
        </Modal>
      </>

      <div className="" id="hotel-meals">
        <p className="text-[24px] font-bold mt-10">Meals</p>
        <p className="text-gray-400">
          Holiday without good Food? No Ways ;) You can book your meals in
          advance! (And don’t worry—you can change your preferences up to 24
          hours before check-in. We get it, moods change! 🙂
        </p>
      </div>

      <div className="flex gap-4">
        {/* <MenuModal pdfUrl={data?.menu} /> */}
        {
          data?.menu ? (
            <Link to={data?.menu ? data?.menu : "#"} target="_blank">
              <button className="bg-transparent border-[1px] border-primary  text-primary md:px-16 py-2 px-4 md:py-3 rounded-full  transition-all mt-10">
                View Menu
              </button>
            </Link>
          ) :
            (
              <button className="bg-transparent border-[1px] border-primary  text-primary md:px-16 py-2 px-4 md:py-3 rounded-full  transition-all mt-10">
                No Menu Given
              </button>
            )
        }
        {/* <PriceModal mealPlans={data?.meal_pricing} /> */}
      </div>
    </div>
  );
};

export default Aminities;
