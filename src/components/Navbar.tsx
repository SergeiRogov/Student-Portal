import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useUsersStore } from "../data/usersStore";

export function Navbar() {
  const username = "sergeirogov";
  const logoutUser = useUsersStore((state) => state.logoutUser);
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
      <Box>{username}</Box>
      <Button width="85px" onClick={(logoutUser)}>Sign out</Button>
    </Flex>
  );
}
