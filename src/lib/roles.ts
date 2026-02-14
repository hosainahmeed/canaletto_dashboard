interface UserRole {
  ADMIN: 'admin',
  PROPERTY_ADMIN: 'property_admin',
  CONTENT_ADMIN: 'content_admin',
  SUPPORT_MEMBER: 'support_member',
}

export const ROLES: UserRole = {
  ADMIN: 'admin',
  PROPERTY_ADMIN: 'property_admin',
  CONTENT_ADMIN: 'content_admin',
  SUPPORT_MEMBER: 'support_member',
} as const

export type Role = typeof ROLES[keyof typeof ROLES]
