import AntdDualRangeSlider from "@/components/common/AntdDualRangeSlider";
import ToggleButton from "@/components/common/ToggleButton";
import SectionBanner from "@/components/home/SectionBanner";
import FilterBar from "@/components/stays/FilterBar";
import HotelResort from "@/components/stays/HotelResort";
import HotelVilla from "@/components/stays/HotelVilla";
import Keypoints from "@/components/stays/Keypoints";
import MobileFilterBar from "@/components/stays/MobileFilterBar";
import PrivateVilla from "@/components/stays/PrivateVilla";
import StayBanner from "@/components/stays/StayBanner";
import StayCard from "@/components/stays/StayCard";
import StayMobileCard from "@/components/stays/StayMobileCard";
import StaySearchBar from "@/components/stays/StaySearchBar";
import CommonPageWrapper from "@/lib/CommonPageWrapper";
import { StayData, StayHotelData, StayVillaData } from "@/lib/Database";
import React, { useState } from "react";

import nearby from "@/assets/images/high.png";
import pune from "@/assets/images/pune.png";
import mumbai from "@/assets/images/mumbai.png";
import delhi from "@/assets/images/delhi.png";
import goa from "@/assets/images/goa.png";
import { Helmet } from "react-helmet-async";
import { Link, ScrollRestoration } from "react-router-dom";
import StayHotelCard from "@/components/stays/StayHotelCard";
import StayVillaCard from "@/components/stays/StayVillaCard";
import useData from "@/hooks/useData";
import StayMobileCardVilla from "@/components/stays/StayMobileCardVilla";
import VillaForWeekdays from "@/components/stays/VillaForWeekdays";
import { X } from "lucide-react";

const data = [
  {
    id: 0,
    name: "Highlights",
    image: nearby,
  },
  {
    id: 1,
    name: "Property Name",
    image: pune,
  },
  {
    id: 2,
    name: "Property Name",
    image: mumbai,
  },
  {
    id: 3,
    name: "Property Name",
    image: delhi,
  },
  {
    id: 4,
    name: "Property Name",
    image: goa,
  },
];

const StayPage = () => {
  const [active, setActive] = useState("villa");
  const { hotelData, villaData, villaSearchResult } = useData();

  // State for mobile filter drawer
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <ScrollRestoration />
      <Helmet>
        <title>Stays</title>
      </Helmet>
      <StayBanner />
      <CommonPageWrapper>
        <div className="flex flex-col xmd:flex-row xmd:gap-14 mt-5 xmd:mt-20">
          {/* Desktop Filter */}
          <div className="hidden xmd:block xmd:w-[25%] border border-l-0 rounded-r-2xl p-4">
            <FilterBar />
          </div>

          {/* Mobile Filter Button */}
          <div className="xmd:hidden py-5 flex justify-end">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-orange-400 transition"
            >
              Filter
            </button>
          </div>

          {/* Mobile Filter Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
                        ${
                          isFilterOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
              <FilterBar />
            </div>
          </div>

          {/* Overlay */}
          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setIsFilterOpen(false)}
            />
          )}

          {/* Main Content */}
          <div className="xmd:w-[85%]">
            <HotelVilla active={active} setActive={setActive} />

            {/* Hotels Section */}
            <div className={`hotels ${active === "hotels" ? "" : "hidden"}`}>
              <div className="hidden lg:block space-y-12">
                {hotelData?.map((item) => (
                  <StayHotelCard key={item.id} data={item} />
                ))}
              </div>

              {/* Reels Section */}
              <div className="hidden flex-wrap gap-10 my-5">
                {data?.map((item) => (
                  <div
                    key={item?.id}
                    className="flex justify-center items-center flex-col gap-2"
                  >
                    <img src={item?.image} alt="" className="w-[70px]" />
                    <p className="font-extralight text-gray-400 text-sm">
                      {item?.name}
                    </p>
                  </div>
                ))}
              </div>

              {hotelData ? (
                <>
                  <div className="lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                    {hotelData?.map((item) => (
                      <Link
                        key={item?.id}
                        to={`/hotel-package-details/${item?.id}`}
                      >
                        <StayMobileCard key={item.id} data={item} />
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-primary text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
                  No Hotel Data Found
                </p>
              )}
            </div>

            {/* Villas Section */}
            <div className={`hotels ${active === "villa" ? "" : "hidden"}`}>
              {villaSearchResult ? (
                <>
                  {villaSearchResult?.length > 0 ? (
                    <div className="hidden lg:block space-y-12">
                      <p className="text-primary text-xl xmd:text-3xl xlg:text-5xl">
                        Your search result
                      </p>
                      {villaSearchResult?.map((item) => (
                        <StayVillaCard key={item.id} data={item} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-primary text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
                      No Villa Data Found
                    </p>
                  )}
                </>
              ) : (
                <div className="hidden lg:block space-y-12">
                  {villaData?.map((item) => (
                    <StayVillaCard key={item.id} data={item} />
                  ))}
                </div>
              )}

              {/* Reels Section */}
              <div className="hidden flex-wrap gap-10 my-5">
                {data?.map((item) => (
                  <div
                    key={item?.id}
                    className="flex justify-center items-center flex-col gap-2"
                  >
                    <img src={item?.image} alt="" className="w-[70px]" />
                    <p className="font-extralight text-gray-400 text-sm">
                      {item?.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile View */}
              {villaData ? (
                <>
                  {villaSearchResult ? (
                    <div className="lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                      <p className="text-primary text-xl xmd:text-3xl xlg:text-5xl">
                        This is search result
                      </p>
                      {villaSearchResult?.map((item) => (
                        <Link
                          key={item.id}
                          to={`/villa-package-details/${item?.id}`}
                        >
                          <StayMobileCardVilla key={item.id} data={item} />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="lg:hidden gap-4 grid grid-cols-1 sm:grid-cols-2">
                      {villaData?.map((item) => (
                        <Link
                          key={item.id}
                          to={`/villa-package-details/${item?.id}`}
                        >
                          <StayMobileCardVilla key={item.id} data={item} />
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-primary text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
                  No Villa Data Found
                </p>
              )}
            </div>
          </div>
        </div>
      </CommonPageWrapper>
      <SectionBanner />
    </>
  );
};

export default StayPage;
