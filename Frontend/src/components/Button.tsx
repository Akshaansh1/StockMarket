export interface ButtonProps {
    variant: "primary" | "secondary";
    onClick?: any;
    size: "lg" | "md" | "sm";
    text: string;
    type : "submit" | "button"
}

const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-100",
};

const sizes = {
    lg: "px-8 py-4",
    md: "px-6 py-3",
    sm: "px-4 py-2",
};

const baseStyles = "w-28 rounded-2xl cursor-pointer transition-all";

export const Button = ({ variant, onClick, size, text , type }: ButtonProps) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${sizes[size]}`}
        >
            {text}
        </button>
    );
};
