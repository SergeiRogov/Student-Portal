import {
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";

export interface IPaymentProps {}

export function Payment(props: IPaymentProps) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      creditCardNumber: "",
      securityCode: "",
      cardExpiration: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
          Select payment method
        </Text>

        <RadioGroup color={useColorModeValue("primary.light", "primary.dark")}>
          <VStack spacing={10} mb={4} alignItems="flex-start">
            <Radio value="1">use my card</Radio>
            <Radio value="2">use other card</Radio>
          </VStack>
        </RadioGroup>

        <Input
          name="firstName"
          placeholder="First Name"
          width="250px"
          mb={4}
          minHeight="40px"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <Input
          name="lastName"
          placeholder="Last Name"
          width="250px"
          mb={4}
          minHeight="40px"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <Input
          name="creditCardNumber"
          placeholder="Credit Card Number"
          width="250px"
          mb={4}
          minHeight="40px"
          onChange={formik.handleChange}
          value={formik.values.creditCardNumber}
        />

        <Input
          name="securityCode"
          placeholder="Security Code"
          width="250px"
          mb={4}
          minHeight="40px"
          onChange={formik.handleChange}
          value={formik.values.securityCode}
        />

        <Input
          name="cardExpiration"
          placeholder="Card Expiration"
          width="250px"
          mb={4}
          minHeight="40px"
          onChange={formik.handleChange}
          value={formik.values.cardExpiration}
        />

        {/* <ReactRouterLink to="/app/courses"> */}
        <Button variant="primary" type="submit">
          Purchase
        </Button>
        {/* </ReactRouterLink> */}
      </Flex>
    </form>
  );
}
