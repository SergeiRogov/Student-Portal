import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface Course {
  id: number;
  title: string;
  description: string;
  lecturer: string;
}

export function Courses() {
  return (
    <SimpleGrid p="10px" spacing={8} minChildWidth="250px">
      <Card>
        <CardHeader>
          <Text>course.title</Text>
        </CardHeader>
        <CardBody>
          <Text>course.description</Text>
        </CardBody>
        <CardFooter>
          <Text>course.lecturer</Text>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Text>course.title</Text>
        </CardHeader>
        <CardBody>
          <Text>course.description</Text>
        </CardBody>
        <CardFooter>
          <Text>course.lecturer</Text>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Text>course.title</Text>
        </CardHeader>
        <CardBody>
          <Text>course.description</Text>
        </CardBody>
        <CardFooter>
          <Text>course.lecturer</Text>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Text>course.title</Text>
        </CardHeader>
        <CardBody>
          <Text>course.description</Text>
        </CardBody>
        <CardFooter>
          <Text>course.lecturer</Text>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Text>course.title</Text>
        </CardHeader>
        <CardBody>
          <Text>course.description</Text>
        </CardBody>
        <CardFooter>
          <Text>course.lecturer</Text>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
