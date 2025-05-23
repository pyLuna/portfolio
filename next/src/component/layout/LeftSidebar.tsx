"use client";

import { useBasicInfo } from "@/hooks/useBasicInfoHook";
import { usePathname } from "next/navigation";

/*******  8039df0f-2678-4dfe-8775-231f97655915  *******/const LeftSideBar = () => {
    const path = usePathname();
    const basic_info = useBasicInfo();

    if (path.includes("admin")) return null;

    return (
        <aside className="md:sticky md:top-24 self-start m-4">
            <h1 className="text-xl font-bold mb-6">{basic_info.basicInfo?.full_name}</h1>
            <p className="whitespace-pre-line text-sm text-gray-500">{basic_info.basicInfo?.description}</p>
        </aside>
    )
}

export default LeftSideBar;