import Dashboard from "../pages/Dashboard";

export const adminRoutes = {
    children: [
        {
            path: "/admin/dashboard",
            element: <Dashboard />
        },
        {
            path: "/admin/clients",
            element: <h1>Clients</h1>
        },
        {
            path: "/admin/properties",
            element: <h1>Manage Properties</h1>
        },
        {
            path: "/admin/property-manager",
            element: <h1>Property Manager</h1>
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