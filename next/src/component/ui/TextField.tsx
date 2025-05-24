import { InputHTMLAttributes } from "react";
import Input from "./Input";

type TextFieldProps = {
    label?: string;
    description?: string;
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
    label,
    description,
    ...props
}: TextFieldProps) => {
    return (
        <label className="flex flex-col gap-1">
            {label && <p>{label}</p>}
            <Input {...props} />
            {description && (
                <small className="text-sm text-gray-400">{description}</small>
            )}
        </label>
    )
}

export default TextField;