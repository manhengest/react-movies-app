import React from "react";

export const CustomCheckbox:React.FunctionComponent = () => {
    return (
        <div className="custom-checkbox">
            <input
                id="12"
                type="checkbox"
                className="custom-checkbox__input"
            />
            <label className="custom-checkbox__label-wrap" htmlFor="12">
                <span className="custom-checkbox__box" />
                <span className="custom-checkbox__label">Crime</span>
            </label>
        </div>
    )
}
