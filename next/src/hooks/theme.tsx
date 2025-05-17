"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useThemeHook = () => {
    const [mounted, setMounted] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setMounted(true);
        theme.setTheme(v => {
            if (theme.systemTheme === 'dark') {
                return 'dark';
            }
            return 'light';
        })
    }, [])
    return {
        ...theme,
        mounted
    }
}

export {
    useThemeHook
};
