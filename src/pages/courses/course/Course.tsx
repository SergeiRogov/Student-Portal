import { useParams } from "react-router-dom";

export interface ICourseProps {}

export function Course(props: ICourseProps) {
  const { id } = useParams();

  return <div>Course {id}</div>;
}
