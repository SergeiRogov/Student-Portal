import { AtSignIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export function Login() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center" // Center vertically
      alignItems="center" // Center horizontally
      height="100vh" // Set the height to the full viewport height
    >
      <Text
        mb={4}
        fontWeight="extrabold"
        fontSize="25"
        color={useColorModeValue("primary.light", "primary.dark")}
      >
        Login
      </Text>

      <Flex alignItems="center">
        <InputGroup width="250px">
          <InputLeftElement pointerEvents="none">
            <AtSignIcon
              color={useColorModeValue("primary.light", "primary.dark")}
            />
          </InputLeftElement>
          <Input
            type="username"
            placeholder="username"
            width="100%" // Use 100% width for the Input
            mb={4}
            minHeight="40px"
          />
        </InputGroup>
      </Flex>

      <Flex alignItems="center">
        <InputGroup width="250px">
          <InputLeftElement pointerEvents="none">
            <UnlockIcon
              color={useColorModeValue("primary.light", "primary.dark")}
            />
          </InputLeftElement>
          <Input
            placeholder="password"
            width="250px" // Set the width of the input field
            mb={4} // Adds margin-bottom for spacing
            minHeight="40px"
          />
        </InputGroup>
      </Flex>

      <ReactRouterLink to="/courses">
        <Button variant="primary">Sign in</Button>
      </ReactRouterLink>

      <ChakraLink
        as={ReactRouterLink}
        to="/forgot-password"
        mb={4}
        fontSize="15"
      >
        forgot password
      </ChakraLink>

      <Text mb={4}>or</Text>

      <ReactRouterLink to="/register">
        <Button variant="primary">Create new account</Button>
      </ReactRouterLink>
    </Flex>
  );
}
