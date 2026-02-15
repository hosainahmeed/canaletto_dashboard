
import type { Role } from './roles'

export function RedirectByRole(role: Role, navigate: any) {
  switch (role) {
    case 'admin':
      navigate('/admin/dashboard')
      break
    case 'property_admin':
      navigate('/property-admin/dashboard')
      break
    case 'content_admin':
      navigate('/content-admin/dashboard')
      break
    case 'support_member':
      navigate('/support/dashboard')
      break
    default:
      navigate('/')
      break
  }
}
