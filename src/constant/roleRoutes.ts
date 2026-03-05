import type { UserRole } from '../types/roles';

export const ROLE_ROUTES: Record<UserRole, string> = {
  admin: "/admin/dashboard",
  property_admin: "/property-admin/dashboard",
  content_admin: "/content-manager/dashboard",
  support_member: "/support-manager/dashboard",
};