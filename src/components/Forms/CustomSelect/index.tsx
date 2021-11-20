import React, { useState } from "react";
import { CustomLabel } from "../CustomLabel";
import { OutsideAlerter } from "../../../containers/OutsideAlerter";
import style from "./custom-select.module.scss"

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
        <div className={ `${ style["custom-select"] } ${ label ? style["custom-field"] : "" }` }>
            { label && <CustomLabel id={ id } label={ label } /> }

            <OutsideAlerter fn={ closeDropdown }>
                <div className={ style["custom-select__dropdown-wrap"] }>
                    <button
                        type="button"
                        className={`custom-input ${ style["custom-select__trigger"] } ${ style[theme] } ${ buttonClass }`}
                        onClick={ toggleDropdown }
                    >
                        { placeholder }
                    </button>
                    <div
                        onClick={ handleChildClick }
                        className={ `${ style["custom-select__dropdown"] } ${ isDropdownOpen ? style.active : "" }` }
                    >
                        { children }
                    </div>
                </div>
            </OutsideAlerter>
        </div>
    )
}
