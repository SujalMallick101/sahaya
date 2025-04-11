import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import  toast  from 'react-hot-toast'; // Make sure this is installed

const Otp = () => {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const email = location?.state?.email || "";

    useEffect(() => {
        if (!email) {
            toast.error("Email not available in reset-pswd-otp");
            navigate("/"); // Redirect to home or login
        }
    }, [email, navigate]);

    const handleOTPVerification = async (e) => {
        e.preventDefault(); // Prevent form from refreshing
        setLoading(true);

        const trimmedOTP = otp.trim();
        if (!trimmedOTP) {
            toast.error("Enter valid OTP");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/auth/verify-otp", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inputOtp: trimmedOTP, email }),
            });

            const data = await res.json();

            if (data.success) {
                setTimeout(() => {
                    setLoading(false);
                    navigate("/", { state: { email } });
                }, 2000);
            } else {
                setLoading(false);
                toast.error("Incorrect OTP");
            }
        } catch (err) {
            setLoading(false);
            console.error("Error in reset password OTP:", err);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-sm space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-bold tracking-tight text-indigo-700">
                            OTP Verification
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Enter the OTP sent to your email
                        </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleOTPVerification}>
                        <div>
                            <label htmlFor="otp" className="block text-sm font-medium text-indigo-600">
                                OTP Code
                            </label>
                            <input
                                id="otp"
                                type="number"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-indigo-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Enter OTP"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none disabled:opacity-50"
                            >
                                {loading && (
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8H4z"
                                        />
                                    </svg>
                                )}
                                {loading ? "Verifying..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Otp;
