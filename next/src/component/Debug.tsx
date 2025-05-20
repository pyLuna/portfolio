import { ReactNode } from "react";

const Debug = ({ children }: { children: ReactNode }) => {
    const isDevelopment = process.env.NODE_ENV === "development";

    if (!isDevelopment) return null;

    return <div>{children}</div>;
}

export default Debug;