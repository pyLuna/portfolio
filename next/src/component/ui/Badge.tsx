import { ReactNode } from "react";

const Badge = ({
    children,
    className,
    color = "primary"
}: {
    children: ReactNode;
    className?: string;
    color?: "primary" | "secondary";
}) => {
    return <span className={`${className} w-fit px-2 py-1 text-xs font-semibold text-white bg-${color}-500 rounded-full`}>
        {children}
    </span>;
}

export default Badge;