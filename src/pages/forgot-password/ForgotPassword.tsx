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
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const navigate = useNavigate();

  const currentColor = useColorModeValue("primary.light", "primary.dark");
  return (
    <Box
      id="error-page"
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
          email: "",
        }}
        validate={(values) => {
          const errors: any = {};

          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values) => {
          navigate("/login");
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <InputGroup width="250px">
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    placeholder="email"
                    variant="filled"
                  />
                  <InputRightElement pointerEvents="none">
                    <AtSignIcon color={currentColor} />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <Button type="submit" width="250px">
                Request new password
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
}
