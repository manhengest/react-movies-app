import React from "react";
import { useSelector } from "react-redux";

import { PrimaryTitle } from "../../components/PrimaryTitle";
import { Rating } from "../../components/Rating";
import { movieDurationConverter } from "../../utils";
import { GenresList } from "../../components/GenresList";
import { ReleaseDate } from "../../components/ReleaseDate";
import { RootState } from "../../store/reducers/rootReducer";

import style from "./detailed-movie-info.module.scss"

export const DetailedMovieInfo:React.FunctionComponent = () => {
    const data = useSelector((state: RootState) => state.appData.detailedViewData)
    const duration = movieDurationConverter(data.runtime)

    return (
        <div className={ style["detailed-movie-info__inner"] }>
            <div className={ style["detailed-movie-info__poster-wrap"] }>
                <img
                    src={ data.poster_path }
                    alt={ data.title }
                    className={ style["detailed-movie-info__poster"] }
                />
            </div>
            <div className={ style["detailed-movie-info__info-wrap"] }>
                <div className={ style["detailed-movie-info__title-wrap"] }>
                    <PrimaryTitle title={ data.title } />
                    { !!data.vote_average && <Rating rating={ data.vote_average } additionalClass={ style["detailed-movie-info__rating"] } /> }
                </div>
                <span className={ style["detailed-movie-info__genre"] }>
                    <GenresList genres={ data.genres } />
                </span>
                <div className={ style["detailed-movie-info__additional-info"] }>
                    <span className={ style["detailed-movie-info__primary-field"] }>
                        <ReleaseDate releaseDate={ data.release_date } />
                    </span>
                    { data.runtime && <span className={ style["detailed-movie-info__primary-field"] }>{ duration }</span> }
                </div>
                <p className={ style["detailed-movie-info__description"] }>{ data.overview }</p>
            </div>
        </div>
    )
}
