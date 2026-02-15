import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageClients from '../pages/admin/clients/ManageClients';
import ManagePropertise from '../pages/admin/properties/ManagePropertise';
import PropertyManager from '../pages/admin/property-manager/PropertyManager';

export const adminRoutes = {
  children: [
    {
      path: "/admin/dashboard",
      element: <AdminDashboard />
    },
    {
      path: "/admin/clients",
      element: <ManageClients />
    },
    {
      path: "/admin/properties",
      element: <ManagePropertise />
    },
    {
      path: "/admin/property-manager",
      element: <PropertyManager/>
    },
    {
      path: "/admin/content-management",
      element: <h1>Manage Content</h1>
    },
    {
      path: "/admin/content-manager",
      element: <h1>Content Manager</h1>
    },
    {
      path: "/admin/support",
      element: <h1>Support Team</h1>
    },
    {
      path: "/admin/terms-and-conditions",
      element: <h1>Terms & Conditions</h1>
    },
    {
      path: "/admin/privacy-policy",
      element: <h1>Privacy Policy</h1>
    },
    {
      path: "/admin/legal",
      element: <h1>Legal & Company Info</h1>
    },
    {
      path: "/admin/profile",
      element: <h1>Manage Profile</h1>
    },
  ],
};