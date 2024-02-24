import { Box, Heading, Text } from "@chakra-ui/react"; 
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  // Check if error has statusText or message properties before accessing them
  const errorMessage = error && (error.statusText || error.message);

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
        Oops!
      </Heading>
      <Text mb={2}>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <i>{errorMessage}</i>
      </Text>
    </Box>
  );
}
