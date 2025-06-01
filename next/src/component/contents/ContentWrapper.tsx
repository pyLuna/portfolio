import { ReactNode } from "react";

const ContentContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <article
            className={`flex flex-col ease-in-out duration-300 hover:shadow-lg border border-foreground/30 rounded-md p-4 ${className}`}
        >
            {children}
        </article>
    )
}

export default ContentContainer;