import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const ResultsCounter:React.FunctionComponent = () => {
    const totalCount = useSelector((state: RootState) => state.moviesData.total)

    return (
        <div className="filter__results">
            <span className="filter__results-text"><span className="filter__results-quantity">{ totalCount }</span> movies found</span>
        </div>
    )
}
