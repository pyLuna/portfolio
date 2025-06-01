import { InputHTMLAttributes } from "react";
import Input from "./Input";

type TextFieldProps = {
    label?: string;
    labelClass?: string;
    description?: string;
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
    label,
    labelClass,
    description,
    ...props
}: TextFieldProps) => {
    return (
        <label className={`${labelClass} flex flex-col gap-1`}>
            {label && <p>{label}</p>}
            <Input {...props} />
            {description && (
                <small className="text-sm text-gray-400">{description}</small>
            )}
        </label>
    )
}

export default TextField;