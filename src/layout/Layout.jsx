import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import MobileNavbar from "@/shared/navbar/MobileNavbar"; // import this
import { Outlet, useLocation } from "react-router-dom";
import FloatingNav from "@/shared/navbar/FloatingNav";
import MobileTopNav from "@/shared/navbar/MobileTopNav";
import { useEffect } from "react";
import Lenis from "lenis";

const Layout = () => {

  // useEffect(()=>{
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smooth: true
  //   });

  //   function raf(time){
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return ()=>{
  //     lenis.destroy();
  //   }
  // }, [])

  const {pathname} = useLocation();
  const isVillaPackagePage = /^\/villa-package-details\/\d+$/.test(pathname);


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

      <FloatingNav />
      {isVillaPackagePage && (
        <div className="md:hidden fixed bottom-12 z-[9999] left-0 right-0 bg-white shadow-lg p-4">
          <button 
            onClick={() => {
              const descSection = document.getElementById('description');
              if (descSection) {
                descSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                const villaId = pathname.split('/').pop();
                navigate(`/checkout/${villaId}`, { state: { from: 'villa' } });
              }
            }}
            className="w-full py-3 rounded-full text-lg bg-primary text-white shadow-lg"
          >
            Reserve Now
          </button>
        </div>
      )}

      {/* Mobile Nav (only visible on small screens) */}
      <div className="sm:hidden">

        <MobileNavbar />
      </div>
    </>
  );
};

export default Layout;
