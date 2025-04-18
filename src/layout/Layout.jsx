import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import MobileNavbar from "@/shared/navbar/MobileNavbar"; // import this
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="hidden sm:block">
        <Navbar />
      </div>

      <Outlet />
      <div className="hidden sm:block">
        <Footer />
      </div>

      {/* Mobile Nav (only visible on small screens) */}
      <div className="sm:hidden">

        <MobileNavbar />
      </div>
    </>
  );
};

export default Layout;
