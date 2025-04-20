import Layout from "@/layout/Layout";
import Home from "@/pages/home/Home";
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
      }
    ],
  },
]);

export default router;
