import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
  lecturer: string;
  details: string;
}

interface CoursesProps {
  courses: Course[]; // Assuming Course is your data type for each course
}

export const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <SimpleGrid p="10px" spacing={8} minChildWidth="300px">
      {courses.map((course: Course) => (
        <Link key={course.id} to={`/app/courses/${course.id}`}>
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
        </Link>
      ))}
    </SimpleGrid>
  );
};
