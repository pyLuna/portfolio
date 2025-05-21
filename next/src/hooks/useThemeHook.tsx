"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useThemeHook = () => {
    const [mounted, setMounted] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);
    return {
        ...theme,
        mounted
    }
}

export {
    useThemeHook
};

