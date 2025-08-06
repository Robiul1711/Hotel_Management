import SectionBanner from "@/components/home/SectionBanner";
import checkoutBanner from "@/assets/images/checkoutBanner.png";
import AnySpecialRequests from "@/components/checkoutComponents/AnySpecialRequests";
import SunshineAndSoul from "@/components/checkoutComponents/SunshineAndSoul";
import BookingCancellationPolicy from "@/components/checkoutComponents/BookingCancellationPolicy";
import PriceDetails from "@/components/checkoutComponents/PriceDetails";
import { ScrollRestoration, useLocation, useParams } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import MealPackageCard from "./MealPackageCard";
import useMealPackageHook from "@/hooks/useMealPackageHook";
import useAddOnHooks from "@/hooks/useAddOnHooks";
import AddOnCard from "./AddOnCard";
import { useEffect, useState } from "react";
import ComplaintForm from "./ComplaintForm";
const Checkout = () => {

  const { id } = useParams();
  // console.log(id);
  const axiosPublic = useAxiosPublic();

  // price related state 
  // Track selected add-ons and total price
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [addOnPrice, setAddOnPrice] = useState([]);
  const [addOnId, setAddOnId] = useState([]);

  // Track selected meal packages and total price 
  const [selectedMealPackages, setSelectedMealPackages] = useState([]);

  // Calculate total add-on price whenever selectedAddOns changes
  useEffect(() => {
    const prices = selectedAddOns.map(addOn => addOn.price);
    const addOnIds = selectedAddOns.map(addOn => addOn.id);
    setAddOnPrice(prices);
    setAddOnId(addOnIds);
  }, [selectedAddOns]);



  const toggleAddOn = (addOn) => {
    setSelectedAddOns(prev => {
      const isSelected = prev.some(item => item.id === addOn.id);
      if (isSelected) {
        return prev.filter(item => item.id !== addOn.id);
      } else {
        return [...prev, addOn];
      }
    });
  };

  // For multiple select 
  // const toggleMealPackage = (mealPackage) => {
  //   setSelectedMealPackages(prev => {
  //     const isSelected = prev.some(item => item.id === mealPackage.id);
  //     if (isSelected) {
  //       return prev.filter(item => item.id !== mealPackage.id);
  //     } else {
  //       return [...prev, mealPackage];
  //     }
  //   });
  // };

  // For single select 
  const toggleMealPackage = (mealPackage) => {
    setSelectedMealPackages(prev => {
      if (prev.some(item => item.id === mealPackage.id)) {
        return [];
      }
      return [mealPackage];
    })
  }


  const { data: villa } = useQuery({
    queryKey: ['villa', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/single/villa/${id}`);
      return res?.data;
    }
  })


  const { mealPackages } = useMealPackageHook();
  const { addOnData } = useAddOnHooks();
 
  return (
    <div>
      <ScrollRestoration />
      <div
        className="bg-no-repeat bg-cover bg-center pt-10"
        style={{ backgroundImage: `url(${checkoutBanner})` }}
      >
        {/* <img src={checkoutBanner} alt="" className="w-full h-full" /> */}
        <div className=" w-full section-padding-x flex flex-col xlg:flex-row  justify-between gap-6">
          <div className="space-y-7  xlg:w-[70%]">
            <div className="flex flex-col xlg:flex-col gap-4">
              <SunshineAndSoul villa={villa?.specificVilla} />
              <div className="xlg:hidden">
                <PriceDetails villa={villa?.specificVilla} />
              </div>


              {/* <BookingCancellationPolicy /> */}

              {/* ======================Meal package=================================== */}

              {
                villa?.specificVilla?.meal_packages?.map(item => <MealPackageCard
                  key={item.id}
                  data={item}
                  isSelected={selectedMealPackages.some(selected => selected.id === item.id)}
                  onToggle={toggleMealPackage}
                />)
              }

              {/* ===============Add ons ========================= */}
              <div className="my-10">
                <p className="lg:text-2xl font-semibold"> ADD-ONS</p>
                <div className="grid grid-cols-2 gap-5">
                  {
                    addOnData?.map(item => <AddOnCard
                      key={item.id}
                      data={item}
                      isSelected={selectedAddOns.some(selected => selected.id === item.id)}
                      onToggle={toggleAddOn}
                    />)
                  }
                </div>
              </div>



            </div>
            <div className="flex flex-col xmd:flex-row w-full xlg:flex-col items-start gap-4 py-5">
              <div className="flex items-start sm:items-center justify-between w-full bg-[#FEF7DA] p-4 rounded-xl ">
                <h1 className="text-xs xxs:text-sm sm:text-base">
                  Any issue to complete your booking?
                </h1>

                <ComplaintForm vilaDetails ={villa?.specificVilla} />
              </div>
              {/* <AnySpecialRequests /> */}
            </div>
          </div>

          {/* =====================Price Card ======================= */}
          <div className="xlg:w-[30%] hidden xlg:block">
            <PriceDetails villa={villa} addOnPrice={addOnPrice} selectedAddOnId={addOnId} selectedMealPackages={selectedMealPackages} />
          </div>
        </div>
      </div>

      <SectionBanner />
    </div>
  );
};

export default Checkout;
