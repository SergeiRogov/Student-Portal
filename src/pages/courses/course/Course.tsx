import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
  lecturer: string;
  details: string;
}

export interface ICourseProps {
  courses: Course[];
}

const handleAddToCart = (course: Course) => {
  console.log("Added to cart:", course);
};

export function Course(props: ICourseProps) {
  const { id } = useParams();
  const courseId = parseInt(id || "");

  if (isNaN(courseId)) {
    return <div>Course not found</div>; // Invalid course ID
  }

  const course = props.courses.find((course) => course.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        {course.title}
      </Heading>
      <Text fontSize="lg" mb={2}>
        {course.description}
      </Text>
      <Text>
        <strong>Lecturer:</strong> {course.lecturer}
      </Text>
      <Text>
        <strong>Details:</strong> {course.details}
      </Text>
      <Flex justify="flex-end" mt="auto">
        <Button size="sm" maxW="100px" onClick={() => handleAddToCart(course)}>
          Add to cart
        </Button>
      </Flex>
    </Box>
  );
}
