import { Navbar } from "../components/Navbar";

export const Landing = () => {
    return (
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col items-center text-center mt-24">
                <h1 className="text-white text-6xl font-extrabold">
                    Welcome to <span className="text-blue-400">Finovate</span>
                </h1>
                <p className="text-gray-300 text-xl mt-4 max-w-md">
                    Invest • Predict • Summarize the Stock Market 📈
                </p>
            </div>
        </div>
    );
};
