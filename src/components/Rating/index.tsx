import React from "react";

import style from "./rating.module.scss";

interface RatingProps {
    rating: number,
    additionalClass?: string
}

export const Rating:React.FunctionComponent<RatingProps> = ({ rating, additionalClass }) => {
    return (
        <div className={`${ style.rating } ${ additionalClass }`}>
            <span className={ style.rating__number }>
                { rating }
            </span>
        </div>
    )
}
