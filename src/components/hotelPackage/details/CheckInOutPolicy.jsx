import { LocationIcons } from "@/lib/CustomIcons";
import { MdKey, MdLocationPin } from "react-icons/md";

const CheckInOutPolicy = () => {
  return (
    <div className="mx-auto space-y-12">

      <div className="space-y-3">
        <p className="text-[24px]">Location</p>
        <p className="text-[#495560]">Frichley Hill Rd, Lonavala, Maharashtra </p>
        <div className="flex items-center">
          <LocationIcons/>
          <p className="text-[#495560]">Open in Maps</p>
        </div>
      </div>
      {/* Check-in Section */}
      <div className="py-4 border-b flex items-center gap-12 ">
        <h1 className="text-2xl font-bold flex items-center gap-2"><MdKey />Check-in</h1>
        <p className="text-gray-700 ">From 14:00</p>
      </div>

      {/* Check-out Section */}
      <div className="py-4 border-b flex items-center gap-8">
        <h1 className="text-2xl font-bold flex items-center gap-2 "><MdKey />Check-out</h1>
        <p className="text-gray-700 ">From 14:00</p>
      </div>



      {/* Property Policies */}
      <div className="flex flex-col md:flex-row my-5">
        <h3 className="text-lg font-semibold md:w-1/3 ">Property Policies</h3>

        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li>Guest must be over 18 years of age to check-in to this hotel.</li>

          <li>
            As per Government regulations, it is mandatory for all guests above 18 years of age to carry a valid photo identity card & address proof at the time of check-in. Please note that failure to abide by this can result with the hotel denying a check-in. Hotels normally do not provide any refund for such cancellations.
          </li>

          <li>
            The standard check-in and check-out times are 12 noon. Early check-in or late check-out is subject to hotel availability and may also be chargeable by the hotel. Any early check-in or late check-out request must be directed to and reconfirmed with the hotel directly.
          </li>

          <li>
            Failure to check-in to the hotel, will attract the full cost of stay or penalty as per the hotel cancellation policy.
          </li>

          <li>
            Hotels charge a compulsory Gala Dinner Supplement during Christmas, New Year's eve or other special events and festivals like Diwali or Dusshers. These additional charge are not included in the booking amount and will be collected directly at the hotel.
          </li>

          <li>
            There might be seasonal variation in hotel tariff rates during Peak days, for example UR5 period in Ajmer or Lord Jagannath Rath Yatra in Puri, the room tariff differences if any will have to be borne and paid by the customer directly at the hotel, if the booking stay period falls during such dates.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <p className="text-[24px]">Contact Hotel</p>
        <div className="space-x-5">
          <button
            className={` px-4 py-2 rounded-full text-lg  bg-secondary text-white `}
          >
            Whatsapp Us
          </button>
          <button
            className={` px-4 py-2 rounded-full text-lg  bg-secondary text-white `}
          >
            Call Us
          </button>
        </div>
      </div>

    </div>
  );
};

export default CheckInOutPolicy;