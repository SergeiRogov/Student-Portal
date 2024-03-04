import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export interface IProtectedRouteProps {
  user?: object;
}

export function ProtectedRoute(props: IProtectedRouteProps) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.user) {
      navigate("/login");
    }
  }, [props.user]);

  //todo: replace null with a page "You are not allowed to enter this page..."

  return props.user ? <Outlet /> : null;
}
