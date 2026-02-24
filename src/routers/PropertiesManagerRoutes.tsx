import ChangePassword from '../pages/admin/manage-profile/ChangePassword';
import UpdateProfile from '../pages/admin/manage-profile/UpdateProfile';
import AddNewClient from '../pages/propert-admin-manager/AddNewClient';
import Clients from '../pages/propert-admin-manager/Clients';
import AddPaymentPlan from '../pages/propert-admin-manager/details/AddPaymentPlan';
import AddPropertyFile from '../pages/propert-admin-manager/details/AddPropertyFile';
import ConstructionProgressPropetyPanel from '../pages/propert-admin-manager/details/ConstructionProgressPropetyPanel';
import EditAndUpdateFiles from '../pages/propert-admin-manager/details/EditAndUpdateFiles';
import PaymentInvoiceDetailsPropetyPanel from '../pages/propert-admin-manager/details/PaymentInvoiceDetailsPropetyPanel';
import PaymentInvoicesPropetyPanel from '../pages/propert-admin-manager/details/PaymentInvoicesPropetyPanel';
import PaymentPlanDetailsPropetyPanel from '../pages/propert-admin-manager/details/PaymentPlanDetailsPropetyPanel';
import PropertiseDetailsForPropertyPanel from '../pages/propert-admin-manager/details/PropertiseDetailsForPropertyPanel';
import PropertyFilesPropetyPanel from '../pages/propert-admin-manager/details/PropertyFilesPropetyPanel';
import PropertyClientDetails from '../pages/propert-admin-manager/PropertyClientDetails';
import PropertyManage from '../pages/propert-admin-manager/PropertyManage';
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
      path: "/property-admin/clients-details/:id",
      element: <PropertyClientDetails />
    },
    {
      path: "/property-admin/properties",
      element: <PropertyManage />
    },
    {
      path: "/property-admin/properties/details/:id",
      element: <PropertiseDetailsForPropertyPanel />
    },
    {
      path: "/property-admin/profile",
      element: <PropertyManagerProfile />
    },
    {
      path: "/property-admin/properties/files",
      element: <PropertyFilesPropetyPanel />
    },
    {
      path: "/property-files/create",
      element: <AddPropertyFile />
    },
    {
      path: "/property-files/edit/:id",
      element: <EditAndUpdateFiles />
    },
    {
      path: "/property-admin/properties/invoices",
      element: <PaymentInvoicesPropetyPanel />
    },
    {
      path: "/property-admin/properties/invoices/add",
      element: <AddPaymentPlan />
    },

    {
      path: "/property-admin/properties/progress",
      element: <ConstructionProgressPropetyPanel />
    },

    {
      path: "/property-admin/properties/invoices/:id",
      element: <PaymentInvoiceDetailsPropetyPanel />
    },
    {
      path: "/property-admin/properties/payment-plan/:id",
      element: <PaymentPlanDetailsPropetyPanel />
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