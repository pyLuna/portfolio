"use client";
import { SpinnerGapIcon } from "@phosphor-icons/react";

const Loading = () => {
    return (
        <div className="animate-spin w-fit">
            <SpinnerGapIcon></SpinnerGapIcon>
        </div>
    )
}

export default Loading;