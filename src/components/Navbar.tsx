import {
  Box,
  Flex,
  Spacer,
  Tab,
  TabList,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar() {
  const username = "John Doe";
  return (
    <Flex as="nav" justify="space-between" alignItems="center" gap="10px" p="4">
      <Box>
        <Tabs variant="enclosed" width="auto">
          <TabList>
            <Link to="app/courses">
              <Tab
                _selected={{
                  color: useColorModeValue("white", "black"),
                  bg: useColorModeValue("primary.light", "primary.dark"),
                }}
              >
                Courses
              </Tab>
            </Link>
            <Link to="app/history">
              <Tab
                _selected={{
                  color: useColorModeValue("white", "black"),
                  bg: useColorModeValue("primary.light", "primary.dark"),
                }}
              >
                History
              </Tab>
            </Link>
            <Link to="app/shopping-cart">
              <Tab
                _selected={{
                  color: useColorModeValue("white", "black"),
                  bg: useColorModeValue("primary.light", "primary.dark"),
                }}
              >
                Shopping Cart
              </Tab>
            </Link>
          </TabList>
        </Tabs>
      </Box>
      <Spacer />
      <Box>{username}</Box>
    </Flex>
  );
}
