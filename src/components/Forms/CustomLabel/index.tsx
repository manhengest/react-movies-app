import React from "react";

interface CustomLabelProps {
    id: string,
    label: string
}

export const CustomLabel:React.FunctionComponent<CustomLabelProps> = ({ id, label }) => {
    return (
        <label
            htmlFor={ id }
            className="custom-label"
        >
            { label }
        </label>
    )
}
