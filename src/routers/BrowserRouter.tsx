import { createBrowserRouter } from "react-router";
import MainLayOut from "./MainLayOut";
import { adminRoutes } from "./AdminRoutes";
import { ContentManagerRoutes } from "./ContentManagerRoutes";
import { SupportManagerRoutes } from "./SupportManagerRoutes";
import { PropertiesManagerRoutes } from "./PropertiesManagerRoutes copy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        children: [
            adminRoutes,
            ContentManagerRoutes,
            SupportManagerRoutes,
            PropertiesManagerRoutes,
        ]
    },

])

export default router