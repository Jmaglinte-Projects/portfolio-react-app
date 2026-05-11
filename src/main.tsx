import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./config/routes/index.ts";

import "./assets/css/colors.css";
import "./assets/css/style.css";
import AppProvider from "./provider/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  </React.StrictMode>
);
