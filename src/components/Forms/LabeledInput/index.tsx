import React from "react";
import "../inputs.scss"
import { CustomLabel } from "../CustomLabel";

interface LabeledInputProps {
    type: string,
    label: string,
    name: string,
    id: string,
    placeholder?: string
}

export const LabeledInput:React.FunctionComponent<LabeledInputProps> = ({ type, label, placeholder, name, id }) => {
    return (
        <div className="custom-field">
            <CustomLabel id={ id } label={ label } />
            {
                type === "textarea" ?
                <textarea
                    id={ id }
                    name={ name }
                    placeholder={ placeholder }
                    className="custom-input custom-textarea"
                /> :
                <input
                    id={ id }
                    type={ type }
                    name={ name }
                    placeholder={ placeholder }
                    className="custom-input"
                />
            }
        </div>
    )
}
