import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Machine Learning",
    description: "ML course",
    lecturer: "Dr Parker",
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "ML course",
    lecturer: "Dr Parker",
  },
  {
    id: 3,
    title: "Machine Learning",
    description: "ML course",
    lecturer: "Dr Parker",
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "ML course",
    lecturer: "Dr Parker",
  },
];

interface Course {
  id: number;
  title: string;
  description: string;
  lecturer: string;
}

export function ShoppingCart() {
  return (
    <>
      <SimpleGrid p="10px" spacing={8} minChildWidth="300px">
        {courses.map((course: Course) => (
          <Card key={course.id}>
            <CardHeader>
              <Text>{course.title}</Text>
            </CardHeader>
            <CardBody>
              <Text>{course.description}</Text>
            </CardBody>
            <CardFooter>
              <Text>{course.lecturer}</Text>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <Flex justify="center">
        <Flex justify="flex-end" width="100%">
          <ReactRouterLink to="/app/shopping-cart/payment">
            <Button variant="primary">Purchase</Button>
          </ReactRouterLink>
        </Flex>
      </Flex>
    </>
  );
}
