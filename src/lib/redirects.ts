
import { useNavigate } from "react-router-dom"

export function RedirectByRole(role: string) {
  const navigate = useNavigate()
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
