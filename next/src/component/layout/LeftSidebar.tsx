"use client";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {

    const path = usePathname();

    if (path === '/') {
        return null;
    }

    return (
        <aside className="bg-yellow-100">
            <h1>LeftSideBar</h1>
        </aside>
    )
}

export default LeftSideBar;