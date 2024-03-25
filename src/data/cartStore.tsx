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

export interface ICartStore {
  coursesCart: ICourse[];
  errorMessage: string;
  getCart: () => void;
  addToCart: (courseToAdd: ICourse) => void;
}

export const useCartStore = create<ICartStore>((set, get) => ({
  coursesCart: [],
  errorMessage: "",
  getCart: () => {
    axios
      .get("http://localhost:3001/api/cart")
      .then(({ data }) => set({ coursesCart: data.data.cart }))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          set({ errorMessage: "Cart is empty" });
        } else {
          set({ errorMessage: "Failed to load cart. " + error });
        }
      });
  },
  addToCart: (courseToAdd: ICourse) => {
    axios
      .post("http://localhost:3001/api/cart", courseToAdd)
      .then(() => {
        get().getCart();
      })
      .catch((error) => {
        set({ errorMessage: "Failed to add to cart. " + error });
      });
  },
}));
