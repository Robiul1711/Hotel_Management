import React, { useEffect, useState } from "react";
import ToggleButton from "../common/ToggleButton";
import AntdDualRangeSlider from "../common/AntdDualRangeSlider";
import { Slider } from "@/components/ui/slider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useData from "@/hooks/useData";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
const FilterBar = () => {
  let [quantity, setQuantity] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const { allFilters, setAllFilters, setSearchFunction } = useAuth();
  const [isEnabled, setIsEnabled] = useState(false);
  console.log(allFilters);
  const axiosPublic = useAxiosPublic();
  const { setVillaSearchResult } = useData();

  const { data: aminities } = useQuery({
    queryKey: ["aminities"],
    queryFn: async () => {
      const res = await axiosPublic.get("/villa/allAmenities");
      return res?.data?.allamenities;
    },
  });
  const displayedAmenities = showAll ? aminities : aminities?.slice(0, 6);
  // console.log('All amenities:', aminities);

  const handleSearch = async (filters = allFilters) => {
    let payload = {};
    isEnabled
      ? (payload = { one_rupe: 1 })
      : (payload = {
          minPrice,
          maxPrice,
          amenity_id: selectedAmenities,
          room_count: quantity,
          location: filters?.location, // use passed filters
        });

    console.log(payload); // check if location is correct
    setAllFilters(payload); // update global state

    const toastId = toast.loading("Searching...");
    try {
      const res = await axiosPublic.post("/villa/allfilterdatas", payload);
      setVillaSearchResult(res?.data?.allVillas);
      scrollTo(0, 400);
      toast.success("Villas found", { id: toastId });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId });
    }
  };

  // Register the search function globally when component mounts
  useEffect(() => {
    setSearchFunction(() => handleSearch);
  }, []);

  return (
    <div className="relative">
      <p className="text-lg">
        <span className="text-primary">Home</span> {">"}{" "}
        <span className="text-gray-400">Villas in Lonavala</span>
      </p>
      <div className="flex items-center justify-between sticky xmd:top-[90px] -top-4 bg-white z-10 py-2 border-b ">
        <button
          onClick={() =>
            handleSearch({
              location: allFilters.location,
              minPrice,
              maxPrice,
              amenity_id: selectedAmenities,
              room_count: quantity,
            })
          }
          className="border py-3 px-8  rounded-xl"
        >
          Apply
        </button>
        <p
          onClick={() => {
            setSelectedAmenities([]);
            setMinPrice(1000);
            setMaxPrice(500000);
            setVillaSearchResult(null);
            scrollTo(0, 400);
          }}
          className="underline cursor-pointer text-gray-400 mb-0"
        >
          Clear All
        </p>
      </div>

      <div className="border-b-2 space-y-3 xmd:my-5 my-3 xmd:pb-8 pb-4">
        <p className="xmd:text-2xl text-lg">One Rupee Villa</p>
        <p className="text-lg">Price per night with taxes</p>
        <ToggleButton enabled={isEnabled} onToggle={setIsEnabled} />
      </div>

      <div className="xmd:py-8 py-4 border-b-2 flex items-center justify-between ">
        <div className="">
          <p className="xmd:text-2xl text-lg">Rooms</p>
          <p className="text-lg">No. of Rooms</p>
        </div>
        <div className="border xmd:p-5 p-2.5 rounded-xl flex gap-3">
          <button onClick={() => setQuantity(--quantity)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(++quantity)}>+</button>
        </div>
      </div>

      <div className="xmd:py-8 py-4 border-b-2 flex flex-col gap-3">
        <p className="xmd:text-2xl text-lg">Key Amenities</p>

        {displayedAmenities?.map((item) => (
          <label key={item?.id} className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              value={item?.id}
              onChange={(e) => {
                const id = e.target.value;
                setSelectedAmenities((prev) =>
                  e.target.checked
                    ? [...prev, id]
                    : prev.filter((aid) => aid !== id)
                );
              }}
            />
            <span>{item?.name}</span>
          </label>
        ))}

        <p
          onClick={() => setShowAll(!showAll)}
          className="underline text-gray-400"
        >
          {showAll ? "See Less" : "See More"}
        </p>
      </div>

      <div className="xmd:py-8 py-4 border-b-2 flex flex-col gap-3">
        <p className="xmd:text-2xl text-lg">Price Per Night</p>

        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            onChange={() => {
              setMinPrice(1000);
              setMaxPrice(10000);
            }}
            checked={minPrice === 1000 && maxPrice === 10000}
          />
          <span>Under ₹10,000</span>
        </label>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            onChange={() => {
              setMinPrice(10000);
              setMaxPrice(20000);
            }}
            checked={minPrice === 10000 && maxPrice === 20000}
          />
          <span>₹10,000 - ₹20,000</span>
        </label>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            onChange={() => {
              setMinPrice(20000);
              setMaxPrice(35000);
            }}
            checked={minPrice === 20000 && maxPrice === 35000}
          />
          <span>₹20,000 - ₹35,000</span>
        </label>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            onChange={() => {
              setMinPrice(35000);
              setMaxPrice(50000);
            }}
            checked={minPrice === 35000 && maxPrice === 50000}
          />
          <span>₹35,000 - ₹50,000</span>
        </label>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            onChange={() => {
              setMinPrice(50000);
              setMaxPrice(500000);
            }}
            checked={minPrice === 50000 && maxPrice === 500000}
          />
          <span>More than ₹50,000</span>
        </label>
      </div>

      <div className="xmd:py-8 py-4 flex flex-col gap-3"></div>
    </div>
  );
};

export default FilterBar;
