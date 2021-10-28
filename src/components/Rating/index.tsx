import React from "react";
import "./rating.scss";

interface RatingProps {
    rating: number,
    additionalClass?: string
}

export const Rating:React.FunctionComponent<RatingProps> = ({ rating, additionalClass }) => {
    return (
        <div className={`rating ${additionalClass}`}>
            <span className="rating__number">
                { rating }
            </span>
        </div>
    )
}
