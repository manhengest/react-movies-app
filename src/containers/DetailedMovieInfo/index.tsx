import React, { useContext } from "react";
import { PrimaryTitle } from "../../components/PrimaryTitle";
import { Rating } from "../../components/Rating";
import { ViewContext } from "../../context/ViewContext";
import { movieDurationConverter } from "../../utils/utils";

export const DetailedMovieInfo:React.FunctionComponent = () => {
    const { state } = useContext(ViewContext)
    const data = state["data"]
    const duration = movieDurationConverter(data.duration)

    return (
        <div className="detailed-movie-info__inner">
            <div className="detailed-movie-info__poster-wrap">
                <img src={data.posterUrl} alt={data.title} className="detailed-movie-info__poster"/>
            </div>
            <div className="detailed-movie-info__info-wrap">
                <div className="detailed-movie-info__title-wrap">
                    <PrimaryTitle title={data.title} />
                    <Rating rating={data.rating} additionalClass="detailed-movie-info__rating" />
                </div>
                <span className="detailed-movie-info__genre">{data.genre}</span>
                <div className="detailed-movie-info__additional-info">
                    <span className="detailed-movie-info__primary-field">{data.year}</span>
                    <span className="detailed-movie-info__primary-field">{duration}</span>
                </div>
                <p className="detailed-movie-info__description">{data.description}</p>
            </div>
        </div>
    )
}
