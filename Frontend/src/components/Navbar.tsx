import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full px-12 py-5 bg-slate-900 shadow-lg">
            <div className="text-blue-400 text-3xl font-bold tracking-wide">
                Finovate
            </div>

            <div className="flex space-x-10 text-white text-lg font-medium">
                <nav className="hover:text-blue-400 transition duration-300 cursor-pointer">Dashboard</nav>
                <nav className="hover:text-blue-400 transition duration-300 cursor-pointer">Analyse</nav>
                <nav className="hover:text-blue-400 transition duration-300 cursor-pointer">Predict</nav>
                <nav className="hover:text-blue-400 transition duration-300 cursor-pointer">Chat</nav>
            </div>

            <div className="flex space-x-6">
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
            </div>
        </div>
    );
};
