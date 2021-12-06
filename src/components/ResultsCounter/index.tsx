import React from "react";
import { useSelector } from "react-redux";

import { totalCountSelector } from "../../store/reducers/movieReducer";

import style from "./results-counter.module.scss"

export const ResultsCounter:React.FunctionComponent = () => {
    const totalCount = useSelector(totalCountSelector)

    return (
        <div className={ style["results-counter"] }>
            <span className={ style["results-counter__text"] }><span className={ style["results-counter__quantity"] }>{ totalCount }</span> movies found</span>
        </div>
    )
}
