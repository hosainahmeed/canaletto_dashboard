import Chat from "../pages/support-manager/chat-manegment/Chat";

export const SupportManagerRoutes = {
    children: [
        {
            path: "/support-manager/dashboard",
            element: <h1>Dashboard</h1>
        },
        {
            path: "/support-manager/chat",
            element: <Chat/>
        },
        {
            path: "/support-manager/profile",
            element: <h1>Manage Profile</h1>
        },
    ],
};