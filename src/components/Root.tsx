import { Outlet } from "react-router-dom";
import { LightDarkModeToggle } from "./LightDarkModeToggle";

export const Root = () => {
  return (
    <>
      <LightDarkModeToggle />
      <Outlet />
    </>
  );
};
