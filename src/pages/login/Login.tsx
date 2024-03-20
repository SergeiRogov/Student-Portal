import { AtSignIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import { useUsersStore } from "../../data/usersStore";

interface LoginValues {
  username: string;
  password: string;
}

export function Login() {
  const [loginUser, errorMessage] = useUsersStore((state) => [
    state.loginUser,
    state.errorMessage,
  ]);

  const currentColor = useColorModeValue("primary.light", "primary.dark");

  return (
    <Flex
      flexDirection="column"
      justifyContent="center" // Center vertically
      alignItems="center" // Center horizontally
      height="100vh" // Set the height to the full viewport height
      align="center"
      justify="center"
      h="100vh"
    >
      <Box p={6} rounded="md">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={(values) => {
            const errors: any = {};

            if (!values.username) {
              errors.username = "Username is required";
            }

            if (!values.password) {
              errors.password = "Password is required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be at least 6 characters";
            }

            return errors;
          }}
          onSubmit={(values: LoginValues) => {
            loginUser(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <Text
                  mb={4}
                  fontWeight="extrabold"
                  fontSize="25"
                  color={currentColor}
                >
                  Login
                </Text>
                {/* todo: get rid of input field text overlapping wit icon */}
                <FormControl isInvalid={!!errors.username && touched.username}>
                  <FormLabel htmlFor="email">Username</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="username"
                      name="username"
                      placeholder="username"
                      variant="filled"
                    />
                    <InputRightElement pointerEvents="none">
                      <AtSignIcon color={currentColor} />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="password"
                      variant="filled"
                    />
                    <InputRightElement pointerEvents="none">
                      <UnlockIcon color={currentColor} />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {errorMessage && <Text color="red">{errorMessage}</Text>}
                <Button type="submit" width="250px">
                  Sign in
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        <Flex flexDirection="column" alignItems="center">
          <ChakraLink as={RouterLink} to="/forgot-password">
            forgot password
          </ChakraLink>
          <Text mt={4} mb={6}>
            or
          </Text>
          <ChakraLink as={RouterLink} to="/registration">
            <Button variant="primary">Create new account</Button>
          </ChakraLink>
        </Flex>
      </Box>
    </Flex>
  );
}
