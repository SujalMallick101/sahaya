import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:3000/api/auth"  // matches your Express mount
    : "/api/auth",  // for production, adjust as needed
  withCredentials: true,  // important if you use cookies/sessions
});
