import React from "react";
import { CustomLabel } from "../CustomLabel";
import { ErrorMessage, Field } from "formik";

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
                    <Field
                        as="textarea"
                        id={ id }
                        name={ name }
                        placeholder={ placeholder }
                        className="custom-input custom-textarea"
                    /> :
                    <Field
                        id={ id }
                        type={ type }
                        name={ name }
                        placeholder={ placeholder }
                        className="custom-input"
                    />
            }
            <ErrorMessage
                name={ name }
                className="validation-error"
                component="span"
            />
        </div>
    )
}
