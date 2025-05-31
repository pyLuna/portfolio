import { ReactNode } from "react";

const Badge = ({ children }: { children: ReactNode }) => {
    return <span className="w-fit px-2 py-1 text-xs font-semibold text-white bg-primary-500 rounded-full">{children}</span>;
}

export default Badge;