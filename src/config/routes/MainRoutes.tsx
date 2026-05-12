import { MainLayout } from "../../shared/layouts";
import { Navigate } from "react-router-dom";

// pages
import { HomePage } from "../../components/pages/Home";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
};

export default MainRoutes;
