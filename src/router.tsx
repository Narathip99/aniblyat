import { createBrowserRouter } from "react-router-dom";

// pages
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
]);

export default router;
