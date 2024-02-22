import { Outlet } from "react-router-dom";
import { LightDarkModeToggle } from "./LightDarkModeToggle";

export interface IRootProps {}

export function Root(props: IRootProps) {
  return (
    <>
      <LightDarkModeToggle />
      <Outlet />
    </>
  );
}
