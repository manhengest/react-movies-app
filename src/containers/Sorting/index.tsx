import React from "react";
import "./sorting.scss"
import {SortingList} from "../../components/SortingList";

export const Sorting:React.FunctionComponent = () => {
    return (
        <div className="sorting">
            <span className="sorting__title">Sort by</span>
            <SortingList />
        </div>
    )
}
