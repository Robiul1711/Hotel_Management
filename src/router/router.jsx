import Experience from "@/components/home/Experience";
import DashboardLayout from "@/layout/DashboardLayout";
import Layout from "@/layout/Layout";
import Booking from "@/pages/dashboard/booking/Booking";
import BookingHistory from "@/pages/dashboard/bookingHistory/BookingHistory";
import CheckIn from "@/pages/dashboard/checkin/CheckIn";
import Dashboard from "@/pages/dashboard/Dashboard";
import Settings from "@/pages/dashboard/settings/Settings";
import Support from "@/pages/dashboard/support/Support";
import ExperiencePage from "@/pages/experience/ExperiencePage";
import Home from "@/pages/home/Home";
import HotelPackage from "@/pages/hotelPackage/HotelPackage";
import MyBooking from "@/pages/mybooking/MyBooking";
import SearchPage from "@/pages/searchPage/SearchPage";
import StayPage from "@/pages/stays/StayPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stays",
        element: <StayPage/>
      },
      {
        path: "/experience",
        element: <ExperiencePage/>
      },
      {
        path: "/hotel-package",
        element:<HotelPackage/>
      },
      {
        path: "/my-booking",
        element: <MyBooking/>
      },
      {
        path: "/search-result",
        element: <SearchPage/>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: 'booking',
        element: <Booking/>
      },
      {
        path: 'booking-history',
        element: <BookingHistory/>
      },
      {
        path: 'check-in',
        element: <CheckIn/>
      },
      {
        path: 'support',
        element: <Support/>
      },
      {
        path: 'settings',
        element:<Settings/>
      }
    ]
  }
]);

export default router;
