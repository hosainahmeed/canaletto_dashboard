import ContentManagerDashboard from '../pages/content-manager/ContentManagerDashboard';

export const ContentManagerRoutes = {
  children: [
    {
      path: "/content-manager/dashboard",
      element: <ContentManagerDashboard />
    },
    {
      path: "/content-manager/manage-markets",
      element: <h1>Manage Markets</h1>
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
      element: <h1>Manage Profile</h1>
    },
  ],
};