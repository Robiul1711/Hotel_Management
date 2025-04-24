import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import MobileNavbar from "@/shared/navbar/MobileNavbar"; // import this
import { Outlet } from "react-router-dom";
import FloatingNav from "@/shared/navbar/FloatingNav";
import MobileTopNav from "@/shared/navbar/MobileTopNav";

const Layout = () => {
  return (
    <>
      <div className="hidden sticky top-0 z-50 sm:block bg-white">
        <Navbar />
      </div>
      <div className="md:hidden">
        <MobileTopNav />
      </div>

      <Outlet />
      <div className="">
        <Footer />
      </div>

      <FloatingNav />f

      {/* Mobile Nav (only visible on small screens) */}
      <div className="sm:hidden">

        <MobileNavbar />
      </div>
    </>
  );
};

export default Layout;
