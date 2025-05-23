import { ButtonHTMLAttributes, ReactNode } from "react";
import Loading from "./Loading";

type Variant = "primary" | "secondary" | "destructive" | "text";

/**
 * @description This has a default style that follows the theme of the app
 * @param children the content of the button
 * @param props the props of the button element
 * @returns 
 */
const Button = ({
    children,
    variant = "primary",
    loading = false,
    ...props
}:
    {
        children: ReactNode,
        loading?: boolean
        variant?: Variant
    }
    & ButtonHTMLAttributes<HTMLButtonElement>
) => {

    let className = "font-bold py-2 px-4 rounded ";

    if (variant === "text") className += "cursor-pointer hover:underline hover:text-primary-200 hover:font-bold bg-transparent";
    if (variant === "destructive") className += "text-white bg-red-500 hover:bg-red-700";
    if (variant === "secondary") className += "text-white bg-secondary-500 hover:bg-secondary-700";
    if (variant === "primary") className += "text-white bg-primary-500 hover:bg-primary-700";

    return (
        <button
            type="button"
            className={className}
            {...props}
        >
            {loading ? (
                <Loading></Loading>
            ) : (
                <>{children}</>
            )}
        </button>
    );
};

export default Button;