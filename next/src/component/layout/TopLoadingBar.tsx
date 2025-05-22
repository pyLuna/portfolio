// components/TopLoadingBar.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TopLoadingBar = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // Simulate loading delay
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 300); // adjust as needed

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div
            className={`fixed top-0 left-0 h-1 bg-primary-500 z-50 transition-all duration-300 ${loading ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
        />
    );
};

export default TopLoadingBar;
