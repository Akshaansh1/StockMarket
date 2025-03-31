import { Navbar } from "../components/Navbar";
import { Typewriter } from "react-simple-typewriter";

export const Landing = () => {
    return (
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col items-center justify-center text-center flex-grow">
                <h1 className="text-white text-6xl font-extrabold">
                    Welcome to <span className="text-blue-400">Finovate</span>
                </h1>
                <p className="text-gray-300 text-3xl mt-6 max-w-lg">
                    <Typewriter
                        words={["Analyze", "Invest", "Predict", "Summarize"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1200}
                    />
                </p>
                <p className="text-gray-300 text-3xl mt-4 font-semibold">Your Stock Market needs in one place 📈</p>

                <button className="mt-8 px-8 py-4 bg-blue-500 text-white text-xl rounded-2xl hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-500/30">
                    Get Started
                </button>
            </div>
        </div>
    );
};
