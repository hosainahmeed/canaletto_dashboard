
import type { Role } from './roles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RedirectByRole(role: Role, navigate: any) {
  switch (role) {
    case 'admin':
      navigate('/admin/dashboard')
      break
    case 'property_admin':
      navigate('/property-admin/dashboard')
      break
    case 'content_admin':
      navigate('/content-manager/dashboard')
      break
    case 'support_member':
      navigate('/support/dashboard')
      break
    default:
      navigate('/')
      break
  }
}
