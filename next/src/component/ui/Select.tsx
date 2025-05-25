import { ReactNode, SelectHTMLAttributes } from "react";

const Select = ({
    children,
    label,
    ...props
}: {
    children: ReactNode,
    label?: string
} & SelectHTMLAttributes<HTMLSelectElement>
) => {
    return (
        <label className="flex flex-col gap-1">
            {label && <p>{label}</p>}
            <select
                {...props}
                className="p-2 border rounded-md placeholder:text-gray-400">
                {children}
            </select>
        </label>
    )
}
export default Select