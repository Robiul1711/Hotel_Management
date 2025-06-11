import { CiLocationOn } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
const DashboardCard = ({ data, checkin, checkout }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden duration-300 w-full flex flex-col ">
      {/* Image Section */}

      <div className="relative  w-full">
        <img
          src={data?.thumbnail}
          className="w-full h-[250px] lg:h-[400px] object-cover"
          alt={data?.title || "Accommodation"}
        />
        <p className="text-white absolute top-3 left-3 sm:top-4 sm:left-4 bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
          Booked
        </p>
        <p className="text-white flex items-center gap-3 absolute top-3 sm:top-4 left-28 bg-black bg-opacity-10 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium backdrop-blur-sm rounded">
          <CiLocationOn /> {data?.location}
        </p>
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start gap-2 sm:items-center">
          <div className="flex justify-between  w-full">
            <p className="w-[70%] lg:text-2xl mb-0">{data?.villa_name}</p>
            <p className="lg:text-2xl mb-0">INR {data?.price_a_night}</p>
          </div>
        </div>

        <div className="flex  items-center">
          {checkin && checkout ? (
            <div className="flex justify-between items-center gap-5">
              <div>
                <h6 className="text-xs ">Check In</h6>
                <h6 className="text-sm text-gray-400">{checkin}</h6>
              </div>
              <HiArrowLongRight className="text-gray-400 text-2xl" />
              <div>
                <h6 className="text-xs ">Check Out</h6>
                <h6 className="text-sm text-gray-400">{checkout}</h6>
              </div>
            </div>
          ) : (
            // <button className="border inline-flex border-primary hover:text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl hover:bg-primary duration-300 transition-all whitespace-nowrap">
            //   Web Check In
            // </button>
            <></>
          )}
          {/* {
            pathname === '/dashboard/booking' ? (
              <button onClick={() => navigate(`/dashboard/view-detais`)} className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl hover:bg-orange-600 transition-all whitespace-nowrap">
                View Details
              </button>
            ) : (
              <button className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl hover:bg-orange-600 transition-all whitespace-nowrap">
                View Details
              </button>
            )
          } */}

        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
