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
import { useCartStore } from "../../data/cartStore";

interface ICourse {
  id: number;
  title: string;
  description: string;
  lecturer: string;
  details: string;
  price: number;
}

export function ShoppingCart() {
  const [coursesCart, errorMessage] = useCartStore((state) => [
    state.coursesCart,
    state.errorMessage,
  ]);
  return (
    <>
      <SimpleGrid p="10px" spacing={8} minChildWidth="300px">
        {errorMessage && <Text color="red">{errorMessage}</Text>}
        {coursesCart?.map((course: ICourse) => (
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
