import { ReactNode } from "react";

const ContentContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <div
            className={`flex flex-col w-full hover-content ${className}`}
        >
            {children}
        </div>
    )
}

export default ContentContainer;