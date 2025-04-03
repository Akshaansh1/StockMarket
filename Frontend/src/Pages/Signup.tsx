import { useRef } from "react";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signup(e: React.FormEvent) {
        e.preventDefault(); 
        console.log("Signup function triggered!");
    
        const username = usernameRef.current?.value;
        const firstname = firstnameRef.current?.value;
        const lastname = lastnameRef.current?.value;
        const password = passwordRef.current?.value;
    
        console.log({ username, firstname, lastname, password });
    
        try {
            await axios.post(`${BACKEND_URL}api/user/signup`, {
                email : username,
                firstname,
                lastname,
                password,
            });
    
            alert("You Have Signed Up");
            navigate('/signin');
        } catch (error) {
            console.error("Signup failed", error);
        }
    }
    

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <Navbar />
            <div className="h-full flex justify-center items-center">
                <div className="bg-slate-700 bg-opacity-75 p-8 rounded-lg shadow-xl w-96 mt-24" >
                    <h2 className="text-2xl font-semibold text-center text-white mb-6">Sign Up</h2>
                    <form className="space-y-4" onSubmit={signup}>
                        <input type="email" ref={usernameRef} placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <input type="text" ref={firstnameRef} placeholder="First Name" className="w-full p-3 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <input type="text" ref={lastnameRef} placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <input type="password" ref={passwordRef} placeholder="Password" className="w-full p-3 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />

                        <div className="flex justify-center">
                            <Button variant="primary" size="lg" text="SignUp" type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
