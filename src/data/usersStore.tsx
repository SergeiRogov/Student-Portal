import axios from "axios";
import { create } from "zustand";

interface LoginValues {
  username: string;
  password: string;
}

export interface IUserStore {
  loggedIn: boolean;
  errorMessage: string;
  loginUser: (values: LoginValues) => void;
  logoutUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  loggedIn: false,
  errorMessage: "",
  loginUser: (values: LoginValues) => {
    axios
      .post("http://localhost:3001/api/login", {
        ...values,
      })
      .then(() => set({ loggedIn: true }))
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          set({ errorMessage: "Incorrect username or password" });
        } else {
          set({ errorMessage: "Login failed:" + error });
        }
      });
  },
  logoutUser: () => set({ loggedIn: false }),
}));
