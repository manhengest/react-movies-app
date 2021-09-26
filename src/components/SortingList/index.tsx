import React from "react";
import "./sorting-list.scss"

export const SortingList:React.FunctionComponent = () => {
    return (
        <div className="sorting-list">
            <button className="sorting-list__trigger">Release date</button>
            {/*<ul>
                <li>Popularity</li>
                <li>Date added</li>
            </ul>*/}
        </div>
    )
}
