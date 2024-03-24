import axios from "axios";
import { create } from "zustand";

interface ICourse {
  id: number;
  title: string;
  description: string;
  lecturer: string;
  details: string;
  price: number;
}

export interface ICoursesStore {
  courses: ICourse[];
  errorMessage: string;
  getCourses: () => void;
}
// &f1+p@3cG-XjXw

export const useCoursesStore = create<ICoursesStore>((set, get) => ({
  courses: [],
  errorMessage: "",
  getCourses: () => {
    axios
      .get("http://localhost:3001/api/courses")
      .then(({data}) => set({ courses: data.data.courses }))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          set({ errorMessage: "No courses found" });
        } else {
          set({ errorMessage: "Failed to load courses. " + error });
        }
      })
      .finally(() => console.log(get()));
  },
}));
