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
    id: 4,
    title: "Machine Learning",
    description: "ML course",
    lecturer: "Dr Parker",
  },
  {
    id: 5,
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
    id: 4,
    title: "Machine Learning",
    description: "ML course",
    lecturer: "Dr Parker",
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "ML course",
    lecturer: "Dr Parker",
  },
];

export function Courses() {
  return (
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
  );
}
