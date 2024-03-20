import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUsersStore } from "../data/usersStore";

export function AuthenticationProvider(props: any) {
  const navigate = useNavigate();
  const loggedIn = useUsersStore((state) => state.loggedIn);

  useEffect(() => {
    console.log(loggedIn);
    if (!loggedIn) {
      navigate("/login");
    } else {
      navigate("/app/courses");
    }
  }, [loggedIn, navigate]);

  //todo: replace null with a page "You are not allowed to enter this page..."

  return props.children;
}
