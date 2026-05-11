import { MainLayout } from "../../shared/layouts";

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
  ],
};

export default MainRoutes;
