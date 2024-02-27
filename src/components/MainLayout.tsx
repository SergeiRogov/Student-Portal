import { Flex } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { LightDarkModeToggle } from "./LightDarkModeToggle";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  const location = useLocation();
  const showNavbar = location.pathname.includes("/app");

  return (
    <>
      <Flex justify="space-between" align="center">
        <LightDarkModeToggle />

        {showNavbar && <Navbar />}
      </Flex>
      <Outlet />
    </>
  );
};
