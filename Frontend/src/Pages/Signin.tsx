import { useRef } from "react";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Signin = () => {
    const emailref = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(e: React.FormEvent) {
        e.preventDefault();  // Prevent page reload
    
        const email = emailref.current?.value;
        const password = passwordRef.current?.value;
    
        try {
            const response = await axios.post(`${BACKEND_URL}api/user/signin`, { email, password });
    
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
    
            console.log("Signin successful, navigating to dashboard...");
            navigate("/dashboard");
        } catch (error) {
            console.error("Signin failed", error);
        }
    }
    

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <Navbar />
            <div className="h-full flex justify-center items-center">
                <div className="bg-slate-700 bg-opacity-75 p-8 rounded-lg shadow-xl w-96 mt-24">
                    <h2 className="text-2xl font-semibold text-center text-white mb-6">Sign In</h2>
                    <form className="space-y-4" onSubmit={signin}>
                        <input type="email" ref={emailref} placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <input type="password" ref={passwordRef} placeholder="Password" className="w-full p-3 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />

                        <div className="flex justify-center">
                            <Button variant="primary" size="lg" text="SignIn" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
