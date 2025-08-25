import { DataContext } from "@/context";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const DataProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [bookingDate, setBookingDate] = useState("");
  const [totalBookingPrice, setTotalBookingPrice] = useState("");
  const [hotelRoom, setHotelRoom] = useState(null);
  const [villaSearchResult, setVillaSearchResult] = useState(null);

  const { data: villaData } = useQuery({
    queryKey: ["villaData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/villa/all");
      return res?.data?.allVillas;
    },
  });
  const { data: hotelData } = useQuery({
    queryKey: ["hotelData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/hotel/all");
      return res?.data?.allHotel;
    },
  });

  return (
    <DataContext.Provider
      value={{
        villaData,
        hotelData,
        hotelRoom,
        setHotelRoom,
        villaSearchResult,
        setVillaSearchResult,
        bookingDate,
        setBookingDate,
        totalBookingPrice,
        setTotalBookingPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
