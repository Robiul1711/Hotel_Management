import { Outlet } from "react-router-dom";
import regUI from "@/assets/images/regUI.png";
import banner from "@/assets/images/regBanner.png";
import { RattingIcons } from "@/lib/CustomIcons";
const AuthLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex w-full bg-[#FFF7DA]  min-h-screen">
        <div className="lg:w-[50%] xlg:w-[40%] w-full">
          <Outlet />
        </div>
        <div className="w-[50%] lg:w-[60%] relative overflow-hidden hidden lg:block">
          <div className="xl:pl-[100px] p-16 xl:pt-[100px] max-w-[900px] w-full">
            <h1 className="text-2xl font-medium mb-6 font-lexend ">
           “Lorem ipsum dolor sit amet consectetur. Etiam nibh faucibus quis sed elementum est malesuada nunc. Sagittis volutpat in eu sem amet lectus magna.”
            </h1>
            <div className="flex items-center gap-2 mb-6">
                <RattingIcons />
                <RattingIcons />
                <RattingIcons />
                <RattingIcons />
                <RattingIcons />
            </div>
            <p className="text-xl">
            — Priya Nair, Unit 7B, <span className="text-base"> Lakeview Residency</span> 
            </p>
          </div>

          <img src={regUI} alt="" className=" absolute right-0 lg:top-[10%] xlg:top-[20%]  lg:mt-5 pl-5 xl:pl-0"/>
          <img src={banner} alt="" className="w-full absolute bottom-0 lg:top-[50%] xl:top-[40%] lg:left-[10%] lg:mt-5 pl-5 xl:pl-0"/>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AuthLayout;
