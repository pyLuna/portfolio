"use client";
import { CodeIcon } from "@phosphor-icons/react";

const ViewSourceCode = () => {
    return (
        <a target="_blank" href={"https://github.com/pyLuna/portfolio/tree/main/next"} className="fixed bottom-5 right-5 z-50 bg-blue-50 rounded-full px-4 py-2 flex gap-2 w-fit" >
            <CodeIcon /> Next Js
        </a>
    )
}

export default ViewSourceCode;