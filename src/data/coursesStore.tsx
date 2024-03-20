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

export const useCoursesStore = create<ICoursesStore>((set) => ({
  courses: [],
  errorMessage: "",
  getCourses: () => {
    axios
      .post("http://localhost:3001/api/courses")
      .then((response) => set({ courses: response.data.courses }))
      .catch((error) => {
        set({ errorMessage: "Failed to load courses:" + error });
      });
  },
}));
