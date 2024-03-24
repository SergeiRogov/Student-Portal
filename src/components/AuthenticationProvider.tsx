import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCoursesStore } from "../data/coursesStore";
import { useUsersStore } from "../data/usersStore";

export function AuthenticationProvider(props: any) {
  const navigate = useNavigate();
  const loggedIn = useUsersStore((state) => state.loggedIn);
  const getCourses = useCoursesStore((state) => state.getCourses);

  useEffect(() => {
    console.log(loggedIn);
    if (!loggedIn) {
      navigate("/login");
    } else {
      getCourses();
      navigate("/app/courses");
    }
  }, [loggedIn, navigate, getCourses]);

  //todo: replace null with a page "You are not allowed to enter this page..."

  return props.children;
}
