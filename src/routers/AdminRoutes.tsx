import AdminDashboard from '../pages/admin/AdminDashboard';
import ClientDetails from '../pages/admin/clients/ClientDetails';
import ManageClients from '../pages/admin/clients/ManageClients';
import ManageContent from '../pages/admin/content-manage/ManageContent';
import MarketUpdateDetails from '../pages/admin/content-manage/market-updates/MarketUpdateDetails';
import AddContentManager from '../pages/admin/content-manager-manage/AddContentManager';
import ContenManagerDetails from '../pages/admin/content-manager-manage/conten-manager-details/ContenManagerDetails';
import ContentManager from '../pages/admin/content-manager-manage/ContentManager';
import LegalCompanyInfo from '../pages/admin/documents/LegalCompanyInfo';
import PrivacyPolicy from '../pages/admin/documents/PrivacyPolicy';
import Terms from '../pages/admin/documents/Terms';
import UpdateCompanyInfo from '../pages/admin/documents/UpdateCompanyInfo';
import AdminProfile from '../pages/admin/manage-profile/AdminProfile';
import ChangePassword from '../pages/admin/manage-profile/ChangePassword';
import UpdateProfile from '../pages/admin/manage-profile/UpdateProfile';
import AssignedManager from '../pages/admin/properties/details/AssignedManager';
import ConstructionProgress from '../pages/admin/properties/details/ConstructionProgress';
import PaymentInvoiceDetails from '../pages/admin/properties/details/PaymentInvoiceDetails';
import PaymentInvoices from '../pages/admin/properties/details/PaymentInvoices';
import PaymentPlanDetails from '../pages/admin/properties/details/PaymentPlanDetails';
import PropertyDetails from '../pages/admin/properties/details/PropertyDetails';
import PropertyFiles from '../pages/admin/properties/details/PropertyFiles';
import ManagePropertise from '../pages/admin/properties/ManagePropertise';
import AddPropertyManager from '../pages/admin/property-manager/AddPropertyManager';
import PropertyManager from '../pages/admin/property-manager/PropertyManager';
import PropertyManagerDetails from '../pages/admin/property-manager/PropertyManagerDetails';

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
      path: "/admin/clients/:id",
      element: <ClientDetails />
    },
    {
      path: "/admin/properties",
      element: <ManagePropertise />
    },
    {
      path: "/admin/properties/:id",
      element: <PropertyDetails />
    },
    {
      path: "/admin/property-manager",
      element: <PropertyManager />
    },
    {
      path: "/admin/property-manager/:id",
      element: <PropertyManagerDetails />
    },
    {
      path: "/admin/property-manager/add",
      element: <AddPropertyManager />
    },
    {
      path: "/admin/content-management",
      element: <ManageContent />,
    },
    {
      path: "/admin/content-manager",
      element: <ContentManager />
    },
    {
      path: "/admin/content-manager/:id",
      element: <ContenManagerDetails />
    },
    {
      path: "/admin/content-manager/add",
      element: <AddContentManager />
    },
    {
      path: "/admin/content-manage/market-updates/:id",
      element: <MarketUpdateDetails />
    },
    {
      path: "/admin/support",
      element: <h1>Support Team</h1>
    },
    {
      path: "/admin/terms-and-conditions",
      element: <Terms />
    },
    {
      path: "/admin/privacy-policy",
      element: <PrivacyPolicy />
    },
    {
      path: "/admin/legal",
      element: <LegalCompanyInfo />
    },
    {
      path: "/admin/legal-company-info/edit",
      element: <UpdateCompanyInfo />
    },
    {
      path: "/admin/profile",
      element: <AdminProfile />
    },
    {
      path: "/admin/profile/update",
      element: <UpdateProfile />
    },
    {
      path: "/admin/profile/change-password",
      element: <ChangePassword />
    },
    {
      path: "/admin/properties/files",
      element: <PropertyFiles />
    },
    {
      path: "/admin/properties/invoices",
      element: <PaymentInvoices />
    },
    {
      path: "/admin/properties/invoices/:id",
      element: <PaymentInvoiceDetails />
    },
    {
      path: "/admin/properties/payment-plan/:id",
      element: <PaymentPlanDetails />
    },
    {
      path: "/admin/properties/progress",
      element: <ConstructionProgress />
    },
    {
      path: "/admin/properties/manager",
      element: <AssignedManager />
    }
  ],
};