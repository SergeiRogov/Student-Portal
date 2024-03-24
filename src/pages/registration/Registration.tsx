import { AtSignIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Formik } from "formik";
import { useState } from "react";
import { useUsersStore } from "../../data/usersStore";

export function Registration() {
  const [loginUser] = useUsersStore((state) => [state.loginUser]);
  const [errorMessage, setErrorMessage] = useState("");

  const currentColor = useColorModeValue("primary.light", "primary.dark");

  return (
    <Flex
      flexDirection="column"
      justifyContent="center" // Center vertically
      alignItems="center" // Center horizontally
    >
      <Formik
        initialValues={{
          firstName: "",
          surname: "",
          gender: "",
          email: "",
          dateOfBirth: "",
          nationality: "",
          telephone: "",
          cardNumber: "",
          country: "",
          region: "",
          city: "",
          street: "",
          house: "",
          flat: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors: any = {};

          if (!values.firstName) {
            errors.firstName = "First name is required";
          }

          if (!values.surname) {
            errors.surname = "Surname is required";
          }

          if (!values.gender) {
            errors.gender = "Gender is required";
          }

          if (!values.email) {
            errors.email = "Email is required";
          }

          if (!values.telephone) {
            errors.telephone = "Telephone is required";
          }

          if (!values.country) {
            errors.country = "Country is required";
          }

          if (!values.username) {
            errors.username = "Username is required";
          }

          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = "Password is required";
          } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords don't match";
          } else if (values.confirmPassword.length < 6) {
            errors.confirmPassword = "Password must be at least 6 characters";
          }

          return errors;
        }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:3001/api/registration", {
              ...values,
            })
            .then(() => {
              loginUser({
                username: values.username,
                password: values.password,
              });
            })
            .catch((error) => {
              if (error.response && error.response.status === 401) {
                setErrorMessage("Username already exists");
              } else {
                setErrorMessage("Error:" + error);
              }
            });
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="center">
              <Text
                mb={4}
                fontWeight="extrabold"
                fontSize="25"
                color={currentColor}
              >
                Registration
              </Text>
              <Text mb={4} fontSize="25" color={currentColor}>
                Personal information
              </Text>

              <Flex>
                <FormControl
                  isInvalid={!!errors.firstName && touched.firstName}
                >
                  <FormLabel htmlFor="firstName">First name</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      placeholder="first name"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl isInvalid={!!errors.surname && touched.surname}>
                  <FormLabel htmlFor="surname">Surname</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="surname"
                      name="surname"
                      placeholder="surname"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.surname}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl
                  isInvalid={!!errors.gender && touched.gender}
                  width="250px"
                >
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <Field id="gender" name="gender">
                    {({ field, form }: { field: any; form: any }) => (
                      <RadioGroup
                        color={currentColor}
                        value={field.value}
                        onChange={(value) =>
                          form.setFieldValue(field.name, value)
                        }
                        width="250px"
                      >
                        <Stack
                          spacing={4}
                          direction="row"
                          justifyContent="space-around"
                        >
                          <Radio value="male">Male</Radio>
                          <Radio value="female">Female</Radio>
                        </Stack>
                      </RadioGroup>
                    )}
                  </Field>
                  <FormErrorMessage>{errors.gender}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email"
                      autoComplete="email"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl
                  isInvalid={!!errors.dateOfBirth && touched.dateOfBirth}
                >
                  <FormLabel htmlFor="dateOfBirth">Date of birth</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="dateOfBirth"
                      name="dateOfBirth"
                      placeholder="date of birth"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.dateOfBirth}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl
                  isInvalid={!!errors.nationality && touched.nationality}
                >
                  <FormLabel htmlFor="nationality">Nationality</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="nationality"
                      name="nationality"
                      placeholder="nationality"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.telephone}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl
                  isInvalid={!!errors.telephone && touched.telephone}
                >
                  <FormLabel htmlFor="telephone">Telephone</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="telephone"
                      name="telephone"
                      placeholder="telephone"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.telephone}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Text mb={4} fontSize="25" color={currentColor}>
                Billing details
              </Text>

              <Flex>
                <FormControl
                  isInvalid={!!errors.cardNumber && touched.cardNumber}
                >
                  <FormLabel htmlFor="cardNumber">Card number</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="cardNumber"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.country}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Text mb={4} fontSize="25" color={currentColor}>
                Home address
              </Text>

              <Flex>
                <FormControl isInvalid={!!errors.country && touched.country}>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="country"
                      name="country"
                      placeholder="country"
                      autoComplete="on"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.country}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl isInvalid={!!errors.region && touched.region}>
                  <FormLabel htmlFor="region">Region</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="region"
                      name="region"
                      placeholder="region"
                      autoComplete="on"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.region}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl isInvalid={!!errors.city && touched.city}>
                  <FormLabel htmlFor="city">City</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="city"
                      name="city"
                      placeholder="city"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.city}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl isInvalid={!!errors.street && touched.street}>
                  <FormLabel htmlFor="street">Street</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="street"
                      name="street"
                      placeholder="street"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.street}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl isInvalid={!!errors.house && touched.house}>
                  <FormLabel htmlFor="house">House</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="house"
                      name="house"
                      placeholder="house"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.street}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl isInvalid={!!errors.flat && touched.flat}>
                  <FormLabel htmlFor="flat">Flat</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="flat"
                      name="flat"
                      placeholder="flat"
                      variant="filled"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.flat}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Text mb={4} fontSize="25" color={currentColor}>
                Credentials
              </Text>
              <Flex>
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
              </Flex>
              <Flex>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="password"
                      autoComplete="new-password"
                      variant="filled"
                    />
                    <InputRightElement pointerEvents="none">
                      <UnlockIcon color={currentColor} />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex>
                <FormControl
                  isInvalid={
                    !!errors.confirmPassword && touched.confirmPassword
                  }
                >
                  <FormLabel htmlFor="confirmPassword">
                    Confirm password
                  </FormLabel>
                  <InputGroup width="250px">
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="confirm password"
                      autoComplete="new-password"
                      variant="filled"
                    />
                    <InputRightElement pointerEvents="none">
                      <UnlockIcon color={currentColor} />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                </FormControl>
              </Flex>

              <Button type="submit" width="250px">
                Register
              </Button>

              {errorMessage && <Text color="red">{errorMessage}</Text>}
            </VStack>
          </form>
        )}
      </Formik>
    </Flex>
  );
}
