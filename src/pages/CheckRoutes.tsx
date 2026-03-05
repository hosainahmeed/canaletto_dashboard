import { useRoleRedirect } from '../hooks/useRoleRedirect';

function CheckRoutes() {
  useRoleRedirect();

  return <div>Checking authentication...</div>;
}

export default CheckRoutes
