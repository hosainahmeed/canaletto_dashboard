import ContentManagerDashboard from '../pages/content-manager/ContentManagerDashboard';
import AddNewLegal from '../pages/content-manager/ManageLegal/AddNewLegal';
import ManageLegal from '../pages/content-manager/ManageLegal/ManageLegal';
import ManageLegalDetails from '../pages/content-manager/ManageLegal/ManageLegalDetails';
import UpdateLegal from '../pages/content-manager/ManageLegal/UpdateLegal';
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
      element: <ManageLegal/>
    },
    {
      path: "/content-manager/manage-legal/update-legal/:id",
      element: <UpdateLegal/>
    },
    {
      path: "/content-manager/manage-legal/:id",
      element: <ManageLegalDetails/>
    },
    {
      path: "/content-manager/manage-legal/add-legal",
      element: <AddNewLegal/>
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