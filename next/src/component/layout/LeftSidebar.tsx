"use client";

import { usePathname } from "next/navigation";

const LeftSideBar = () => {
    const path = usePathname();

    if (path.includes("admin")) return null;

    return (
        <aside className="md:sticky md:top-20 self-start">
            <h1>LeftSideBar</h1>
        </aside>
    )
}

export default LeftSideBar;