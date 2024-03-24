import { AtSignIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Formik } from "formik";
import { useState } from "react";

export function ForgotPassword() {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");

  const currentColor = useColorModeValue("primary.light", "primary.dark");
  return (
    <Box
      id="forgot-password"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading as="h1" size="xl" mb={4}>
        Forgot password ?
      </Heading>
      <Text mb={2}>Don't worry...</Text>
      <Formik
        initialValues={{
          username: "",
        }}
        validate={(values) => {
          const errors: any = {};

          if (!values.username) {
            errors.username = "Username is required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:3001/api/generateNewPassword", {
              ...values,
            })
            .then((response) => {
              const responseData = response.data.data;
              if (responseData && responseData.generatedPassword) {
                setPassword(responseData.generatedPassword);
              } else {
                setErrorMessage("Something went wrong...");
              }
            })
            .catch((error) => {
              if (error.response && error.response.status === 401) {
                setErrorMessage("User not found");
              } else {
                setErrorMessage("Request for a new password failed:" + error);
              }
            });
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.username && touched.username}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <InputGroup width="250px">
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    placeholder="username"
                    autoComplete="username"
                    variant="filled"
                  />
                  <InputRightElement pointerEvents="none">
                    <AtSignIcon color={currentColor} />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>

              {errorMessage && <Text color="red">{errorMessage}</Text>}

              <Button type="submit" width="250px">
                Request new password
              </Button>

              {password && (
                <Text mt={4} color="green.500">
                  Generated Password: {password}
                </Text>
              )}
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
}
