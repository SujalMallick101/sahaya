
import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";


const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/";

export const useAuthStore = create((set, get) => (
    {
        authUser: null,
        isSigningUp: false,
        isLoggingIn: false,



        signup: async (data) => {
            set({ isSigningUp: true });
            try {
                const res = await axiosInstance.post("/auth/signup", data);
                set({ authUser: res.data });
                toast.success("Account created successfully");
            } catch (error) {
                toast.error(error.response.data.message);
            } finally {
                set({ isSigningUp: false });
            }
        },

        login: async (data) => {
            set({ isLogginIn: true });

            try {
                const res = await axiosInstance.post("/auth/login", data);
                set({ authUser: res.data });
                toast.success("Logged in successfully");
            } catch (error) {
                toast.error(error.response.data.message);
            } finally {
                set({ isLoggingIn: false });
            }
        },

        logout: async () => {
            try {
                await axiosInstance.get("/auth/logout");
                set({ authUser: null });
                toast.success("Logged out successfully");
            } catch (error) {
                toast.error(error.response.data.message);
            }
        },
    }
))