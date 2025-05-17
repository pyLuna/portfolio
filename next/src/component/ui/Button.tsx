import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * @description This has a default style that follows the theme of the app
 * @param children the content of the button
 * @param props the props of the button element
 * @returns 
 */
const Button = ({ children, ...props }: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;