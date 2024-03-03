import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { LightDarkModeToggle } from "./LightDarkModeToggle";
import { Navbar } from "./Navbar";

export const Root = () => {
  const location = useLocation();
  const showNavbar = location.pathname.includes("/app");

  return (
    <Grid templateRows="auto 1fr" gap={4}>
      <GridItem>
        <Flex justify="space-between" align="center">
          <LightDarkModeToggle />
          {showNavbar && <Navbar />}
        </Flex>
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
