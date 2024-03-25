import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../data/cartStore";
import { useCoursesStore } from "../data/coursesStore";
import { useUsersStore } from "../data/usersStore";

export function AuthenticationProvider(props: any) {
  const navigate = useNavigate();
  const loggedIn = useUsersStore((state) => state.loggedIn);
  const getCourses = useCoursesStore((state) => state.getCourses);
  const getCart = useCartStore((state) => state.getCart);

  useEffect(() => {
    console.log(loggedIn);
    if (!loggedIn) {
      navigate("/login");
    } else {
      getCourses();
      getCart();
      navigate("/app/courses");
    }
  }, [loggedIn, navigate, getCourses, getCart]);

  //todo: replace null with a page "You are not allowed to enter this page..."

  return props.children;
}
