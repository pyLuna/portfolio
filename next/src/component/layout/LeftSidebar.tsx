"use client";

import { useBasicInfo } from "@/hooks/useBasicInfoHook";
import { usePathname } from "next/navigation";
import SkeletonLeftSideBar from "../skeleton/LeftSideBar";

const LeftSideBar = () => {
    const path = usePathname();
    const basic_info = useBasicInfo();

    if (path.includes("admin")) return null;

    if (basic_info.isLoading) return <SkeletonLeftSideBar></SkeletonLeftSideBar>;

    return (
        <aside className="text-center md:text-left md:sticky md:top-24 self-start m-4">
            <h1 className="text-xl font-bold mb-6">{basic_info.basicInfo?.full_name}</h1>
            <p className="whitespace-pre-line text-sm text-gray-600 dark:text-gray-400">{basic_info.basicInfo?.description}</p>
        </aside>
    )
}

export default LeftSideBar;