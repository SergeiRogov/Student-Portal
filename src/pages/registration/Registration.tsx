import { AtSignIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export function Registration() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center" // Center vertically
      alignItems="center" // Center horizontally
    >
      <Text
        mb={4}
        fontWeight="extrabold"
        fontSize="25"
        color={useColorModeValue("primary.light", "primary.dark")}
      >
        Registration
      </Text>

      <Text
        mb={4}
        fontSize="25"
        color={useColorModeValue("primary.light", "primary.dark")}
      >
        Personal information
      </Text>

      <Input
        type="name"
        placeholder="username"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Input
        type="surname"
        placeholder="surname"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <RadioGroup color={useColorModeValue("primary.light", "primary.dark")}>
        <Stack spacing={10} mb={4} direction="row">
          <Radio value="1">male</Radio>
          <Radio value="2">female</Radio>
        </Stack>
      </RadioGroup>

      <Input
        type="email"
        placeholder="email"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Input
        type="date-of-birth"
        placeholder="date of birth"
        width="250px"
        mb={4}
        minHeight="40px"
        alignItems="center"
      />

      <Input
        type="nationality"
        placeholder="nationality"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Input
        type="telephone"
        placeholder="telephone"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Text
        mb={4}
        fontSize="25"
        color={useColorModeValue("primary.light", "primary.dark")}
      >
        Billing details
      </Text>

      <Input
        type="card-number"
        placeholder="card number"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Text
        mb={4}
        fontSize="25"
        color={useColorModeValue("primary.light", "primary.dark")}
      >
        Home address
      </Text>

      <Input
        type="country"
        placeholder="country"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Input
        type="region"
        placeholder="region"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Input
        type="city"
        placeholder="city"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Input
        type="street"
        placeholder="street"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Input
        type="house"
        placeholder="house"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Input
        type="flat"
        placeholder="flat"
        width="250px"
        mb={4}
        minHeight="40px"
      />

      <Text
        mb={4}
        fontSize="25"
        color={useColorModeValue("primary.light", "primary.dark")}
      >
        Credentials
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

      <Flex alignItems="center">
        <InputGroup width="250px">
          <InputLeftElement pointerEvents="none">
            <UnlockIcon
              color={useColorModeValue("primary.light", "primary.dark")}
            />
          </InputLeftElement>
          <Input
            placeholder="confirm password"
            width="250px" // Width of the input field
            mb={4} // Margin-bottom for spacing
            minHeight="40px"
          />
        </InputGroup>
      </Flex>

      <ReactRouterLink to="/app/courses">
        <Button variant="primary">Register</Button>
      </ReactRouterLink>
    </Flex>
  );
}
function mode(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
