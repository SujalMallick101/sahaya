import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Sidebar from "../components/Sidebar";
import toast from "react-hot-toast";

export default function SignupPage() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!formData.username.trim() || !formData.email.includes("@")) {
            toast.error("Please enter valid info");
        }

        setLoading(true);

        const { username, email, password } = formData;

        try{
            const res = await fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, email, password}),
            })
            const data = await res.json();

            if(res.ok) {
                setTimeout(() => {
                    setLoading(false);
                    toast.success("OTP sent to your email");
                    navigate("/verify-otp", {state: {email, username}});
                }, 2000);
            } else {
                setLoading(false);
                toast.error(data.message);
            }
        } catch(err) {
            console.log("Signup error : ", err);
            setLoading(false);
            toast.error("Something went wrong!");
        }

    };

    return (
        <div className="flex min-h-screen h-dvh bg-gray-50">
            <Sidebar />

            <div className="flex min-h-full flex-1 flex-col justify-start">
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-indigo-700">Create your account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-sm text-center mt-6 text-gray-600">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-indigo-600 font-medium hover:underline cursor-pointer"
                        >
                            Login here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
