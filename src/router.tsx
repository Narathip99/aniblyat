import { createBrowserRouter } from "react-router-dom";

// pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PopularThisSeason from "./pages/PopularThisSeason";
import UpcomingNextSeason from "./pages/UpcomingNextSeason";

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
        path: "/popular-this-season",
        element: <PopularThisSeason />,
      },
      {
        path: "/upcoming-next-season",
        element: <UpcomingNextSeason />,
      },
    ],
  },
]);

export default router;
