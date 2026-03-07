interface UserRole {
  SUPER_ADMIN: 'SUPER_ADMIN',
  PROPERTY_MANAGER: 'PROPERTY_MANAGER',
  CONTENT_MANAGER: 'CONTENT_MANAGER',
  SUPPORT_MEMBER: 'support_member',
}

export const ROLES: UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  PROPERTY_MANAGER: 'PROPERTY_MANAGER',
  CONTENT_MANAGER: 'CONTENT_MANAGER',
  SUPPORT_MEMBER: 'support_member',
} as const

export type Role = typeof ROLES[keyof typeof ROLES]
