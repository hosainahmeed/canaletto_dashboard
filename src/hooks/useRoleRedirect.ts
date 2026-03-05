import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROLE_ROUTES } from '../constant/roleRoutes';
import { useGetProfileQuery } from '../redux/services/profileApis';
import type { UserRole } from '../types/roles';

export const useRoleRedirect = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetProfileQuery(undefined);

  useEffect(() => {
    if (isLoading) return;

    if (isError || !data) {
      navigate("/login", { replace: true });
      return;
    }

    const role = data?.role as UserRole;

    const redirectPath = ROLE_ROUTES[role];

    if (!redirectPath) {
      navigate("/login", { replace: true });
      return;
    }

    navigate(redirectPath, { replace: true });
  }, [data, isLoading, isError, navigate]);
};