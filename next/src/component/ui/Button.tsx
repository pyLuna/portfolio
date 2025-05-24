import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
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
    customClass = false,
    ...props
}:
    {
        children: ReactNode,
        loading?: boolean
        variant?: Variant
        customClass?: boolean
    }
    & ButtonHTMLAttributes<HTMLButtonElement>
) => {

    props.className = twMerge(props.className, "font-bold py-2 px-4 rounded text-white");

    if (variant === "text") props.className = twMerge(props.className, "!cursor-pointer hover:underline hover:!text-primary-200 hover:!font-bold bg-transparent");
    if (variant === "destructive") props.className = twMerge(props.className, "bg-red-500 hover:bg-red-700");
    if (variant === "secondary") props.className = twMerge(props.className, "bg-secondary-500 hover:bg-secondary-700");
    if (variant === "primary") props.className = twMerge(props.className, "bg-primary-500 hover:bg-primary-700");

    return (
        <button
            type="button"
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