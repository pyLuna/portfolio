"use client";
import { IconContext } from "@phosphor-icons/react";
import { ReactNode } from "react";

const IconContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <IconContext.Provider
            value={{
                size: 24,
                weight: "regular",
            }}>
            {children}
        </IconContext.Provider>
    );
};

export default IconContextProvider;