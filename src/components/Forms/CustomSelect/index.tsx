import React, { useState } from "react";
import { CustomLabel } from "../CustomLabel";
import { OutsideAlerter } from "../../../containers/OutsideAlerter";

interface CustomSelectProps {
    id: string,
    placeholder: string,
    theme: "as-button" | "as-field",
    buttonClass?: string,
    label?: string
}

export const CustomSelect:React.FunctionComponent<CustomSelectProps> = (
    {
        id,
        placeholder,
        theme,
        label,
        buttonClass = "",
        children
    }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)
    const closeDropdown = () => setDropdownOpen(false)

    // could you please advise smth better than this approach?
    const handleChildClick = (e: any) => {
        if (e.target.className.includes("sorting__btn")) {
            closeDropdown()
        }
    }

    return (
        <div className={ `custom-select ${ label && "custom-field" }` }>
            { label && <CustomLabel id={ id } label={ label } /> }

            <OutsideAlerter fn={ closeDropdown }>
                <div className="custom-select__dropdown-wrap">
                    <button
                        type="button"
                        className={`custom-input custom-select__trigger ${ theme } ${ buttonClass }`}
                        onClick={ toggleDropdown }
                    >
                        { placeholder }
                    </button>
                    <div
                        onClick={ handleChildClick }
                        className={ `custom-select__dropdown ${ isDropdownOpen ? "active" : "" }` }
                    >
                        { children }
                    </div>
                </div>
            </OutsideAlerter>
        </div>
    )
}
