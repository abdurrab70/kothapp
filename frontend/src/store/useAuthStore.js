import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "Abdur Rab", _id: 100, age: 26 },
  isloggedIn: false,
  isLoading: false,

  login: () => {
    console.log("i'm just logged in");
    set({ isloggedIn: true, isLoading: true });
  },
}));
