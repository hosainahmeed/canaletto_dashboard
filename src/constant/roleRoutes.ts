import type { UserRole } from '../types/roles';

// hossain vai
// export const ROLE_ROUTES: Record<UserRole, string> = {
//   admin: "/admin/dashboard",
//   property_admin: "/property-admin/dashboard",
//   content_admin: "/content-manager/dashboard",
//   support_member: "/support-manager/dashboard",
// };

// me
export const ROLE_ROUTES: Record<UserRole, string> = {
  SUPER_ADMIN: "/admin/dashboard",
  PROPERTY_MANAGER: "/property-admin/dashboard",
  content_admin: "/content-manager/dashboard",
  support_member: "/support-manager/dashboard",
};