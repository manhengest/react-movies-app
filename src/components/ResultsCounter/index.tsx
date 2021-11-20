import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import style from "./results-counter.module.scss"

export const ResultsCounter:React.FunctionComponent = () => {
    const totalCount = useSelector((state: RootState) => state.moviesData.total)

    return (
        <div className={ style["results-counter"] }>
            <span className={ style["results-counter__text"] }><span className={ style["results-counter__quantity"] }>{ totalCount }</span> movies found</span>
        </div>
    )
}
