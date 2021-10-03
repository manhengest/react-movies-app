import React from "react";
import "./sorting.scss"
import {CustomSelect} from "../../components/Forms/CustomSelect";

export const Sorting:React.FunctionComponent = () => {
    return (
        <div className="sorting">
            <span className="sorting__title">Sort by</span>
            <CustomSelect id="sort-by" placeholder="Release date" theme="as-button">
                <ul>
                    <li><button className="sorting__btn">Rating</button></li>
                    <li><button className="sorting__btn">Budget</button></li>
                </ul>
            </CustomSelect>
        </div>
    )
}
