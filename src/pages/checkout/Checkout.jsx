import SectionBanner from "@/components/home/SectionBanner";
import checkoutBanner from "@/assets/images/checkoutBanner.png";
import AnySpecialRequests from "@/components/checkoutComponents/AnySpecialRequests";
import SunshineAndSoul from "@/components/checkoutComponents/SunshineAndSoul";
import BookingCancellationPolicy from "@/components/checkoutComponents/BookingCancellationPolicy";
import PriceDetails from "@/components/checkoutComponents/PriceDetails";
const Checkout = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center pt-10"
        style={{ backgroundImage: `url(${checkoutBanner})` }}
      >
        {/* <img src={checkoutBanner} alt="" className="w-full h-full" /> */}
        <div className=" w-full section-padding-x flex flex-col xlg:flex-row  justify-between gap-6">
          <div className="space-y-7  xlg:w-[70%]">
            <div className="flex flex-col xlg:flex-col gap-4">
              <SunshineAndSoul />
              <div className="xlg:hidden">
                <PriceDetails />
              </div>
              <BookingCancellationPolicy />
            </div>
            <div className="flex flex-col xmd:flex-row w-full xlg:flex-col items-start gap-4">
              <div className="flex items-start sm:items-center justify-between w-full bg-[#FEF7DA] p-4 rounded-xl ">
                <h1 className="text-xs xxs:text-sm sm:text-base">
                  Any issue to complete your booking?
                </h1>
                <button className="border border-primary px-4 py-2 text-xs xxs:text-sm sm:text-base rounded-md">
                  Click here
                </button>
              </div>
              <AnySpecialRequests />
            </div>
          </div>
          <div className="xlg:w-[30%] hidden xlg:block">
            <PriceDetails />
          </div>
        </div>
      </div>

      <SectionBanner />
    </div>
  );
};

export default Checkout;
