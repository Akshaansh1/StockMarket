import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";  

interface DecodedToken {
    firstname: string;
}

export const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<DecodedToken | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        try {
            const decoded: DecodedToken = jwtDecode(token);
            setUser(decoded);
        } catch (error) {
            console.error("Invalid token:", error);
            localStorage.removeItem("token");
            setUser(null);
        }
    }, []);

    function handleLogout() {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/signin");
    }

    return (
        <div className="flex justify-between items-center w-full px-12 py-5 bg-slate-900 shadow-lg">
            <Link to='/'>
                <div className="text-blue-400 text-3xl font-bold tracking-wide">
                    Finovate
                </div>
            </Link>

            <div className="flex space-x-10 text-white text-lg font-medium">
                <Link to="/dashboard">
                    <nav className="hover:text-blue-400 transition duration-300 cursor-pointer">Dashboard</nav>
                </Link>
                <nav className="hover:text-blue-400 transition duration-300 cursor-pointer">Analyse</nav>
                <nav className="hover:text-blue-400 transition duration-300 cursor-pointer">Predict</nav>
                <nav className="hover:text-blue-400 transition duration-300 cursor-pointer">Chat</nav>
            </div>

            <div className="flex space-x-6">
                {user ? (
                    <>
                        <p className="text-white font-medium">Hello, {user.firstname}!</p>
                        <button 
                            onClick={handleLogout}
                            className="text-white font-medium cursor-pointer hover:text-red-400 transition duration-300"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signup">
                            <p className="text-white font-medium cursor-pointer hover:text-blue-400 transition duration-300">
                                Signup
                            </p>
                        </Link>
                        <Link to="/signin">
                            <p className="text-white font-medium cursor-pointer hover:text-blue-400 transition duration-300">
                                Signin
                            </p>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};
