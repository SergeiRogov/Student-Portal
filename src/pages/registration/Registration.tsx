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
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";

export function Registration() {
  const navigate = useNavigate();

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

          return errors;
        }}
        onSubmit={(values) => {
          navigate("/app/courses");
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
                      placeholder="firstName"
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

              <RadioGroup color={currentColor}>
                <Stack spacing={10} mb={4} direction="row">
                  <Radio value="1">male</Radio>
                  <Radio value="2">female</Radio>
                </Stack>
              </RadioGroup>

              <Flex>
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
                  </InputGroup>
                  <FormErrorMessage>{errors.telephone}</FormErrorMessage>
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
                      placeholder="dateOfBirth"
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
                      type="confirmPassword"
                      placeholder="confirm password"
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
            </VStack>
          </form>
        )}
      </Formik>
    </Flex>
  );
}
