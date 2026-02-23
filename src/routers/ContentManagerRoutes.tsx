import ContentManagerDashboard from '../pages/content-manager/ContentManagerDashboard';
import AddNewMarket from '../pages/content-manager/ManageMarket/AddNewMarket';
import ManageContentUserProfile from '../pages/content-manager/ManageMarket/ManageContentUserProfile';
import ManageMarket from '../pages/content-manager/ManageMarket/ManageMarket';
import ManageMarketDetails from '../pages/content-manager/ManageMarket/ManageMarketDetails';
import UpdateMarket from '../pages/content-manager/ManageMarket/UpdateMarket';
import SupportManagerProfile from '../pages/support-manager/support-manager-profile/SupportManagerProfile';

export const ContentManagerRoutes = {
  children: [
    {
      path: "/content-manager/dashboard",
      element: <ContentManagerDashboard />
    },
    {
      path: "/content-manager/manage-markets",
      element: <ManageMarket/>
    },
    {
      path: "/content-manager/manage-markets/add-market",
      element: <AddNewMarket/>
    },
    {
      path: "/content-manager/manage-markets/edit-market/:id",
      element: <UpdateMarket/>
    },
    {
      path: "/content-manager/manage-markets/:id",
      element: <ManageMarketDetails/>
    },
    {
      path: "/content-manager/manage-markets/profile/:id",
      element: <ManageContentUserProfile/>
    },
    {
      path: "/content-manager/manage-legal",
      element: <h1>Manage Legal</h1>
    },
    {
      path: "/content-manager/manage-lifestyles",
      element: <h1>Manage Lifestyles</h1>
    },
    {
      path: "/content-manager/manage-projects",
      element: <h1>Manage Projects</h1>
    },
    {
      path: "/content-manager/manage-profile",
      element: <SupportManagerProfile />
    },
  ],
};