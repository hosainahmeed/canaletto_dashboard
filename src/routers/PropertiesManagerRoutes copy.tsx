import ChangePassword from '../pages/admin/manage-profile/ChangePassword';
import UpdateProfile from '../pages/admin/manage-profile/UpdateProfile';
import AddNewClient from '../pages/propert-admin-manager/AddNewClient';
import Clients from '../pages/propert-admin-manager/Clients';
import PropertyManagerDashboard from '../pages/propert-admin-manager/PropertyManagerDashboard';
import PropertyManagerProfile from '../pages/propert-admin-manager/PropertyManagerProfile';

export const PropertiesManagerRoutes = {
  children: [
    {
      path: "/property-admin/dashboard",
      element: <PropertyManagerDashboard />
    },
    {
      path: "/property-admin/clients",
      element: <Clients />
    },
    {
      path: "/property-admin/properties",
      element: <h1>Manage Properties</h1>
    },
    {
      path: "/property-admin/profile",
      element: <PropertyManagerProfile />
    },
    {
      path: "/property-admin/profile/change-password",
      element: <ChangePassword />
    },
    {
      path: "/property-admin/profile/update-profile",
      element: <UpdateProfile />
    },
    {
      path: "/property-admin/add-client",
      element: <AddNewClient />
    },
  ],
};