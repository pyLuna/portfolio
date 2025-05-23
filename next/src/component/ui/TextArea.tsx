import { TextareaHTMLAttributes } from "react";

type TextAreaProps = {
    label: string;
    description?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = ({
    label,
    description,
    ...props
}: TextAreaProps) => {
    return (
        <label className="flex flex-col gap-1">
            <p>{label}</p>
            <textarea
                className="p-2 border rounded-md placeholder:text-gray-400"
                {...props}
                rows={4}
            />
            {description && (
                <small className="text-sm text-gray-400">{description}</small>
            )}
        </label>
    )
}

export default TextArea;