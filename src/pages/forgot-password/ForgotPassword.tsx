import { Box, Heading, Text } from "@chakra-ui/react";

export function ForgotPassword() {
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
      <Text mb={2}>Don't worry. Do the following: ...</Text>
    </Box>
  );
}
