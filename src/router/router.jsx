import Experience from "@/components/home/Experience";
import Layout from "@/layout/Layout";
import ExperiencePage from "@/pages/experience/ExperiencePage";
import Home from "@/pages/home/Home";
import HotelPackage from "@/pages/hotelPackage/HotelPackage";
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
      }
    ],
  },
]);

export default router;
