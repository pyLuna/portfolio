import { InputHTMLAttributes } from "react";

const Input = ({ ...props }:
    & InputHTMLAttributes<HTMLInputElement>
) => {

    return (
        <input
            className="p-2 border rounded-md"
            type="text"
            {...props}
        />
    )
}

export default Input;