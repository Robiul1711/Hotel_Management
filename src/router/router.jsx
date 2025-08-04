import Experience from "@/components/home/Experience";
import DashboardLayout from "@/layout/DashboardLayout";
import Layout from "@/layout/Layout";
import AuthForm from "@/pages/auth/AuthForm";
import AuthLayout from "@/pages/auth/AuthLayout";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import NewPassword from "@/pages/auth/NewPassword";
import VerifyOTP from "@/pages/auth/VerifyOTP";
import Checkout from "@/pages/checkout/Checkout";
import Booking from "@/pages/dashboard/booking/Booking";
import ViewDetails from "@/pages/dashboard/booking/ViewDetails";
import BookingHistory from "@/pages/dashboard/bookingHistory/BookingHistory";
import CheckIn from "@/pages/dashboard/checkin/CheckIn";
import SubmitForm from "@/pages/dashboard/checkin/SubmitForm";
import WebCheckForm from "@/pages/dashboard/checkin/WebCheckForm";
import Dashboard from "@/pages/dashboard/Dashboard";
import Settings from "@/pages/dashboard/settings/Settings";
import OpenSupportTicket from "@/pages/dashboard/support/OpenSupportTicket";
import Support from "@/pages/dashboard/support/Support";
import ExperiencePage from "@/pages/experience/ExperiencePage";
import Home from "@/pages/home/Home";
import HotelPackage from "@/pages/hotelPackage/HotelPackage";
import MyBooking from "@/pages/mybooking/MyBooking";
import SearchPage from "@/pages/searchPage/SearchPage";
import StayPage from "@/pages/stays/StayPage";
import VillaPackageDetails from "@/pages/villaPackage/VillaPackageDetails";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HotelCheckout from "@/pages/hotelCheckout/HotelCheckout";
import PaymentSuccess from "@/pages/PaymentSuccess";

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
        element: <StayPage />
      },
      // {
      //   path: "/experience",
      //   element: <ExperiencePage />
      // },
      {
        path: "/hotel-package-details/:id",
        element: <HotelPackage />
      },
      {
        path: "/villa-package-details/:id",
        element: <VillaPackageDetails />
      },
      // {
      //   path: "/my-booking",
      //   element: <MyBooking />
      // },
      {
        path: "/search-result",
        element: <SearchPage />
      },
      {
        path: "/villa-checkout/:id",
        element: <PrivateRoute>
          <Checkout />
        </PrivateRoute>
      },
      {
        path: "/hotel-checkout/:id",
        element: <PrivateRoute>
          <HotelCheckout />
        </PrivateRoute>
      },
      
    ],
  },

  // user dashboard 
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: 'booking',
        element: <Booking />
      },
      {
        path: 'view-detais',
        element: <ViewDetails />
      },
      {
        path: 'booking-history',
        element: <BookingHistory />
      },
      {
        path: 'check-in',
        element: <CheckIn />
      },
      {
        path: 'web-check-form',
        element: <WebCheckForm />
      },
      {
        path: 'submit-form',
        element: <SubmitForm />
      },

      {
        path: 'support',
        element: <Support />
      },

      {
        path: 'open-support-ticket',
        element: <OpenSupportTicket />
      },

      {
        path: 'settings',
        element: <Settings />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'registration',
        element: <AuthForm />
      },
      {
        path: 'forget-password',
        element: <ForgetPassword />
      },
      {
        path: 'verify-otp',
        element: <VerifyOTP />
      },
      {
        path: 'new-password',
        element: <NewPassword />
      }
    ]
  }
]);

export default router;
