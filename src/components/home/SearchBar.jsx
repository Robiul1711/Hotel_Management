import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dayjs from "dayjs";
import useAuth from "@/hooks/useAuth";

const popularDestinations = ["Lonavala", "Karjat", "Alibaug", "Palghar", "Goa","Panvel", "Khopoli", "Matheran"];

const SearchBar = () => {
  const { allFilters, setAllFilters, searchFunction } = useAuth();
  // console.log(allFilters);
  const navigate = useNavigate();
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      destination: "Lonavala", // default selected location
      checkIn: dayjs().toDate(),
      checkOut: dayjs().add(1, "day").toDate(),
    },
  });

  const onSubmit = (data) => {
    const newFilters = {
      ...allFilters,
      location: data.destination, // update location
    };

    setAllFilters(newFilters); // update global state

    // Pass updated filters to searchFunction
    if (searchFunction) {
      searchFunction(newFilters);
    }

    navigate("/stays");
  };

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-4">
      <div className="flex">
        <button
          onClick={() => {}}
          className="px-4 py-2 font-semibold rounded-t-md text-sm sm:text-base bg-orange-500 text-white"
        >
          Stays
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-xl bg-white shadow-md p-4 md:p-6 lg:p-8 flex items-center justify-between flex-wrap gap-4">
          {/* Destination */}
          <div className="flex flex-col relative w-full sm:w-auto">
            <span className="text-sm md:text-lg text-black font-semibold mb-1">
              Destination
            </span>
            <Controller
              name="destination"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  value={field.value}
                  onValueChange={(value) => setValue("destination", value)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Destination" />
                  </SelectTrigger>
                  <SelectContent
                    portalled={false}
                    className="max-h-60 overflow-auto"
                  >
                    {popularDestinations.map((dest) => (
                      <SelectItem key={dest} value={dest}>
                        {dest}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Check-in */}
          <div className="flex flex-col basis-[48%] sm:basis-auto">
            <span className="text-sm md:text-lg text-black font-semibold mb-1">
              Check-in
            </span>
            <Controller
              name="checkIn"
              control={control}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Input
                      readOnly
                      value={dayjs(field.value).format("DD MMM 'YY")}
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50" portal={false}>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => field.onChange(date)}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col basis-[48%] sm:basis-auto">
            <span className="text-sm md:text-lg text-black font-semibold mb-1">
              Check-out
            </span>
            <Controller
              name="checkOut"
              control={control}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Input
                      readOnly
                      value={dayjs(field.value).format("DD MMM 'YY")}
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50" portal={false}>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => field.onChange(date)}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>

          {/* Search button */}
          <Button
            type="submit"
            className="bg-primary text-white text-sm sm:text-base md:text-lg py-2 px-6 rounded-full hover:bg-orange-600 mt-2 sm:mt-0"
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
