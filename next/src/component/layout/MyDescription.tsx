"use client";

import { useBasicInfo } from "@/hooks/useBasicInfoHook";
import { usePathname } from "next/navigation";
import Loading from "../ui/Loading";

const MyDescription = () => {
    const path = usePathname();
    const basic_info = useBasicInfo();

    if (path.includes("admin")) return null;

    if (basic_info.isLoading) return (
        <div className="flex items-center justify-center h-12">
            <Loading />
        </div>
    );

    return (
        <aside className="text-center lg:text-left lg:sticky lg:top-24 self-start lg:mr-8 mt-12 mx-4 lg:m-0">
            <h1 className="text-xl font-bold mb-6">{basic_info.basicInfo?.full_name}</h1>
            <p className="whitespace-pre-line text-sm text-gray-600 dark:text-gray-400">{basic_info.basicInfo?.description}</p>
        </aside>
    )
}

export default MyDescription;