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
  cartCourses: ICourse[];
  errorMessage: string;
  getCart: () => void;
  addToCart: (courseToAdd: ICourse) => void;
  clearCart: () => void;
  removeFromCart: (courseToRemoveID: number) => void;
}

export const useCartStore = create<ICartStore>((set, get) => ({
  cartCourses: [],
  errorMessage: "",
  getCart: () => {
    axios
      .get("http://localhost:3001/api/cart")
      .then(({ data }) => {
        if (data.data.cart.length === 0) {
          set({ errorMessage: "Cart is empty" });
        } else {
          set({ cartCourses: data.data.cart });
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          set({ errorMessage: "Cart is empty" });
        } else {
          set({ errorMessage: "Failed to load cart. " + error });
        }
      })
      .finally(() => console.log(get()));
  },
  addToCart: (courseToAdd: ICourse) => {
    axios
      .post("http://localhost:3001/api/cart", courseToAdd)
      .then(() => {
        // get().getCart(); // alternative
        set({ cartCourses: [...get().cartCourses, courseToAdd] });
      })
      .catch((error) => {
        set({ errorMessage: "Failed to add to cart. " + error });
      })
      .finally(() => console.log(get()));
  },
  clearCart: () => {
    axios
      .post("http://localhost:3001/api/clearCart")
      .then(() => {
        set({ cartCourses: [] });
      })
      .catch((error) => {
        set({ errorMessage: "Failed to clear cart. " + error });
      })
      .finally(() => console.log(get()));
  },
  removeFromCart: (courseToRemoveID: number) => {
    axios
      .post("http://localhost:3001/api/removeFromCart", courseToRemoveID)
      .then(() => {
        // get().getCart(); // alternative
        const updatedCart = get().cartCourses.filter(
          (course: ICourse) => course.id !== courseToRemoveID
        );
        set({ cartCourses: updatedCart });
      })
      .catch((error) => {
        set({ errorMessage: "Failed to remove from cart. " + error });
      })
      .finally(() => console.log(get()));
  },
}));
