"use client";
import { SpinnerGapIcon } from "@phosphor-icons/react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="animate-spin w-fit">
                <SpinnerGapIcon></SpinnerGapIcon>
            </div>
        </div>
    )
}

export default Loading;