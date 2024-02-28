import { Box, SimpleGrid } from "@chakra-ui/react";

export function Courses() {
  return (
    <SimpleGrid p="10px" spacing={8} minChildWidth="250px">
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid>
  );
}
