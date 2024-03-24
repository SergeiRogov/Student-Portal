import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useCoursesStore } from "../../data/coursesStore";

interface ICourse {
  id: number;
  title: string;
  description: string;
  lecturer: string;
  details: string;
  price: number;
}

const handleAddToCart = (course: ICourse) => {
  console.log("Added to cart:", course);
};

export const Courses = () => {
  const [courses, errorMessage] = useCoursesStore((state) => [
    state.courses,
    state.errorMessage,
  ]);
  return (
    <Box p={4}>
      <Flex alignItems="center" mb={4}>
        <InputGroup width="200px">
          <Input
            name="course search"
            placeholder="Search courses"
            width="100%"
            minHeight="40px"
          />
          <InputRightElement pointerEvents="none">
            <Search2Icon
              color={useColorModeValue("primary.light", "primary.dark")}
            />
          </InputRightElement>
        </InputGroup>
        <Select
          placeholder="Filter by lecturer"
          width="200px"
          height="40px"
          ml={4}
        >
          <option value="">All lecturers</option>
        </Select>
      </Flex>
      <SimpleGrid p="10px" spacing={8} minChildWidth="300px">
        {errorMessage && <Text color="red">{errorMessage}</Text>}
        {courses?.map((course: ICourse) => (
          <Card key={course.id}>
            <Link key={course.id} to={`/app/courses/${course.id}`}>
              <CardHeader>
                <Heading size="md">{course.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{course.description}</Text>
                <Text>{course.lecturer}</Text>
              </CardBody>
            </Link>
            <CardFooter display="flex" justifyContent="flex-end" p={2}>
              <Button
                size="sm"
                maxW="100px"
                onClick={() => handleAddToCart(course)}
              >
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};
