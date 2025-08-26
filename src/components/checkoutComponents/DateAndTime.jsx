import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import useData from "@/hooks/useData";

function Input({ ...props }) {
  return <input {...props} className="border rounded px-2 py-1 w-full " />;
}

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition "
    >
      {children}
    </button>
  );
}

const isPastDate = (date) => date.isBefore(dayjs(), "day");

// Function to format price in "k" format (e.g., 1500 -> 1.5k, 7000 -> 7k)
const formatPrice = (price) => {
  if (price >= 1000) {
    return `₹ ${(price / 1000).toFixed(price % 1000 === 0 ? 0 : 1)}k`;
  }
  return `₹${price}`;
};

const CalendarGrid = ({ month, selectedRange, onSelect, pricesData }) => {
  const startOfMonth = dayjs(month).startOf("month");
  const endOfMonth = dayjs(month).endOf("month");
  const days = [];
  const offset = startOfMonth.day() === 0 ? 6 : startOfMonth.day() - 1;

  for (let i = 0; i < offset; i++) days.push(null);
  for (let d = 1; d <= endOfMonth.date(); d++)
    days.push(dayjs(startOfMonth).date(d));

  const isInRange = (date) =>
    selectedRange.start &&
    selectedRange.end &&
    date.isAfter(selectedRange.start, "day") &&
    date.isBefore(selectedRange.end, "day");

  const getPrice = (date) => {
    const dateString = date.format("YYYY-MM-DD");
    const priceObj = pricesData.find((p) => p.date === dateString);
    return priceObj ? formatPrice(priceObj.price) : "-";
  };

  return (
    <div>
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div
            key={d}
            className="text-center font-semibold text-gray-500 text-[12px]"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {days.map((date, idx) => {
          if (!date) return <div key={idx} className="h-12"></div>;

          const isStart = selectedRange.start?.isSame(date, "day");
          const isEnd = selectedRange.end?.isSame(date, "day");
          const inRange = isInRange(date);
          const price = getPrice(date);
          const past = isPastDate(date);
          const isToday = date.isSame(dayjs(), "day");

          return (
            <div
              key={idx}
              onClick={() => !past && onSelect(date)}
              className={`
                h-12 flex flex-col items-center justify-center rounded cursor-pointer border text-[12px] duration-300 ease-in-out
                border-gray-200
                ${past ? "bg-gray-200 text-gray-400 cursor-not-allowed" : ""}
                ${isStart || isEnd ? "bg-[#2D66A1] text-white shadow-lg" : ""}
                ${inRange && !(isStart || isEnd) ? "bg-blue-200" : ""}
                ${isToday && !(isStart || isEnd) ? "border-2 border-[#2D66A1]" : ""}
                ${!past && !isStart && !isEnd ? "hover:bg-[#2D66A1] hover:text-white" : ""}
              `}
            >
              <div
                className={`font-semibold ${
                  isToday && !isStart && !isEnd ? "text-red-500" : ""
                }`}
              >
                {date.date()}
              </div>
              <div
                className={`mt-1 text-[10px] ${
                  past
                    ? "text-gray-400"
                    : isStart || isEnd
                    ? "text-white"
                    : "text-green-600"
                }`}
              >
                {price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function DateAndTime({ CalendarData }) {
  const { setBookingDate, setTotalBookingPrice } = useData();
  
  const [open, setOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });
  const [month, setMonth] = useState(dayjs());

  // Extract prices data from CalendarData
  const pricesData = CalendarData?.prices || [];

  const handleSelect = (date) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      if (isPastDate(date)) return;
      setSelectedRange({ start: date, end: null });
    } else if (date.isAfter(selectedRange.start)) {
      setSelectedRange({ ...selectedRange, end: date });
    } else {
      setSelectedRange({ start: date, end: null });
    }
  };

  const formatDisplay = (date) => (date ? date.format("MMM DD, YYYY") : "");

  // Calculate total price for selected range
  const calculateTotalPrice = () => {
    if (!selectedRange.start || !selectedRange.end) return 0;
    
    let total = 0;
    let currentDate = selectedRange.start.clone();
    
    while (currentDate.isBefore(selectedRange.end)) {
      const dateString = currentDate.format("YYYY-MM-DD");
      const priceObj = pricesData.find((p) => p.date === dateString);
      if (priceObj) {
          total += parseFloat(priceObj.price) ;
        }
      
      currentDate = currentDate.add(1, 'day');
    }
    
    return total;
  };

  // Calculate number of nights
  const calculateNights = () => {
    if (!selectedRange.start || !selectedRange.end) return 0;
    return selectedRange.end.diff(selectedRange.start, 'day');
  };

//   // Format total price for display
//   const formatTotalPrice = (price) => {
//     if (price >= 1000000) {
//       return `₹ ${(price / 1000000).toFixed(1)}M`;
//     } else if (price >= 1000) {
//       return `₹ ${(price / 1000).toFixed(1)}k`;
//     }
//     return `₹ ${price}`;
//   };

  // ✅ Sync with global context
  useEffect(() => {
    if (selectedRange.start && selectedRange.end) {
      setBookingDate({
        checkIn: dayjs(selectedRange.start).format("YYYY-MM-DD"),
        checkOut: dayjs(selectedRange.end).format("YYYY-MM-DD"),
      });
      setTotalBookingPrice(calculateTotalPrice());
    } else {
      setBookingDate(null);
      setTotalBookingPrice(0);
    }
  }, [selectedRange, setBookingDate, setTotalBookingPrice]);

  return (
    <div className="">
      <label className="font-semibold mb-2 block text-sm">
        Select Check-in & Check-out
      </label>

      <div className="flex items-center gap-2 mb-4 w-full max-w-md">
        <Input
          placeholder="Check-in"
          value={formatDisplay(selectedRange.start)}
          readOnly
          onFocus={() => setOpen(true)}
          className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md py-2 px-3"
        />

        <span className="text-gray-500 font-medium px-1">→</span>

        <Input
          placeholder="Check-out"
          value={formatDisplay(selectedRange.end)}
          readOnly
          onFocus={() => setOpen(true)}
          className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md py-2 px-3"
        />

        <Button
          onClick={() => setOpen(!open)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md flex items-center justify-center"
        >
          <CalendarIcon className="w-4 h-4" />
        </Button>
      </div>

      {open && (
        <div className="border rounded-xl p-4 bg-white shadow-xl max-w-md mx-auto">
          {/* Month Navigation */}
          <div className="flex justify-between items-center mb-3 bg-gray-50 rounded-md p-2">
            <button
              onClick={() => setMonth(month.subtract(1, "month"))}
              className="px-3 py-1 rounded-md hover:bg-blue-100 text-blue-600 font-medium transition"
            >
              ◀ Prev
            </button>

            <span className="font-semibold text-gray-800 text-sm">
              {month.format("MMMM YYYY")}
            </span>

            <button
              onClick={() => setMonth(month.add(1, "month"))}
              className="px-3 py-1 rounded-md hover:bg-blue-100 text-blue-600 font-medium transition"
            >
              Next ▶
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-md p-2 shadow-inner">
            <CalendarGrid
              month={month}
              selectedRange={selectedRange}
              onSelect={handleSelect}
              pricesData={pricesData}
            />
          </div>
        </div>
      )}

      {selectedRange.start && selectedRange.end && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-blue-800 mb-2">Booking Summary</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <div className="text-sm text-blue-600">Check-in</div>
              <div className="font-medium">{formatDisplay(selectedRange.start)}</div>
            </div>
            <div>
              <div className="text-sm text-blue-600">Check-out</div>
              <div className="font-medium">{formatDisplay(selectedRange.end)}</div>
            </div>
          </div>
          
          <div className="border-t border-blue-200 pt-2">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-blue-700">{calculateNights()} nights</span>
              <span className="font-medium">₹ {(calculateTotalPrice())}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-700">Total</span>
              <span className="font-bold text-blue-800">₹ {(calculateTotalPrice())}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}