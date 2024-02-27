import {
  Box,
  Flex,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar() {
  const username = "John Doe";
  return (
    <Box>
      <Flex justify="space-between" alignItems="center" p="4">
        <Tabs variant="enclosed" width="auto" mx="auto">
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
        <Text ml="4">{username}</Text>
      </Flex>
    </Box>
  );
}
