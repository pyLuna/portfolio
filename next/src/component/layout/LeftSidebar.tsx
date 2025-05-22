"use client";

import { usePathname } from "next/navigation";

const LeftSideBar = () => {
    const path = usePathname();

    if (path.includes("admin")) return null;

    return (
        <aside className="sticky top-20 self-start hidden lg:block">
            <h1>LeftSideBar</h1>
        </aside>
    )
}

export default LeftSideBar;