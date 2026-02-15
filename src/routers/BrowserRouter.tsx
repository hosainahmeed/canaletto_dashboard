import { createBrowserRouter } from "react-router";
import { adminRoutes } from "./AdminRoutes";
import { authRoutes } from './AuthRoutes';
import { ContentManagerRoutes } from "./ContentManagerRoutes";
import MainLayOut from "./MainLayOut";
import { PropertiesManagerRoutes } from "./PropertiesManagerRoutes copy";
import { SupportManagerRoutes } from "./SupportManagerRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      adminRoutes,
      ContentManagerRoutes,
      SupportManagerRoutes,
      PropertiesManagerRoutes,
      authRoutes,
      {
        path: "*",
        element: <h1>404</h1>
      }
    ]
  },

])

export default router