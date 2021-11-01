import { Field } from "formik";
import React from "react";

interface CustomCheckboxProps {
    name: string,
    title: string,
    id: string
}

export const CustomCheckbox:React.FunctionComponent<CustomCheckboxProps> = ({ name, title, id }) => {
    return (
        <div className="custom-checkbox">
            <Field
                id={ id }
                name={ name }
                value={ title }
                type="checkbox"
                className="custom-checkbox__input"
            />
            <label
                htmlFor={ id }
                className="custom-checkbox__label-wrap"
            >
                <span className="custom-checkbox__box" />
                <span className="custom-checkbox__label">
                    { title }
                </span>
            </label>
        </div>
    )
}
