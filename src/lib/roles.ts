interface UserRole {
  SUPER_ADMIN: 'SUPER_ADMIN',
  PROPERTY_MANAGER: 'PROPERTY_MANAGER',
  CONTENT_ADMIN: 'content_admin',
  SUPPORT_MEMBER: 'support_member',
}

export const ROLES: UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  PROPERTY_MANAGER: 'PROPERTY_MANAGER',
  CONTENT_ADMIN: 'content_admin',
  SUPPORT_MEMBER: 'support_member',
} as const

export type Role = typeof ROLES[keyof typeof ROLES]
