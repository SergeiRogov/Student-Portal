import { Text, Box, Card, CardBody, CardFooter, CardHeader, SimpleGrid } from "@chakra-ui/react";

export function Courses() {
  return (
    <SimpleGrid p="10px" spacing={8} minChildWidth="250px">
      <Card>
        <CardHeader>
          <Text>
            Header
          </Text>
        </CardHeader>
        <CardBody>
          <Text>
            Body
          </Text>
        </CardBody>
        <CardFooter>
          <Text>
            Footer
          </Text>
        </CardFooter>
      </Card>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid>
  );
}
