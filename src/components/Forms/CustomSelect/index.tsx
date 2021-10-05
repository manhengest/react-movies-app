import React, { useState } from "react";
import { CustomLabel } from "../CustomLabel";

interface CustomSelectProps {
    id: string,
    placeholder: string,
    theme: "as-button" | "as-field"
    label?: string
}

export const CustomSelect:React.FunctionComponent<CustomSelectProps> = ({ id, placeholder, theme, label, children }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)

    return (
        <div className={ `custom-select ${ label && "custom-field" }` }>
            { label && <CustomLabel id={ id } label={ label } /> }

            <div className="custom-select__dropdown-wrap">
                <button
                    className={`custom-input custom-select__trigger ${ theme }`}
                    onClick={ () => toggleDropdown() }
                >
                    { placeholder }
                </button>
                <div className={ `custom-select__dropdown ${ isDropdownOpen ? "active" : "" }` }>
                    { children }
                </div>
            </div>
        </div>
    )
}
