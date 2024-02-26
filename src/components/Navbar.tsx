import { Box, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar() {
  const username = "John Doe";
  return (
    <Box>
      <Flex justify="space-between" alignItems="center" p="4">
        <Tabs variant="enclosed" width="auto">
          <TabList>
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Tab>Courses</Tab>
            </Link>
            <Link to="/history" style={{ textDecoration: "none" }}>
              <Tab>History</Tab>
            </Link>
            <Link to="/shopping-cart" style={{ textDecoration: "none" }}>
              <Tab>Shopping Cart</Tab>
            </Link>
          </TabList>
        </Tabs>
        <Text>{username}</Text>
      </Flex>
    </Box>
  );
}
