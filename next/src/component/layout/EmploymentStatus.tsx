import { useBasicInfo } from "@/hooks/useBasicInfoHook";

const EmploymentStatus = () => {
    const { basicInfo } = useBasicInfo();

    if (!basicInfo?.employment_status) return null;

    return (
        <div className="flex gap-4 items-center w-full bg-primary-300 p-3 px-4">
            <div className="animate-pulse rounded-full bg-green-500 size-3" />
            <span className="text-white">
                <small className="font-semibold">Open for a new projects, work, or job opportunities</small>
            </span>
        </div>
    )
}

export default EmploymentStatus;