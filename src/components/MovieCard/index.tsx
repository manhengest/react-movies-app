import React from "react";
import "./movie-card.scss"
import { MovieCardProps } from "./models"

export const MovieCard:React.FunctionComponent<MovieCardProps> = ({ title, genre, link, year, posterUrl }) => {
    return (
        <div className="movie-card">
            <a className="movie-card__poster" href={ link }>
                <img className="movie-card__poster-img" src={ posterUrl } alt={ title }/>
            </a>
            <div className="movie-card__title-wrap">
                <a className="movie-card__title" href={ link }>
                    { title }
                </a>
                <span className="movie-card__year">
                    { year }
                </span>
            </div>
            <span className="movie-card__genre">{ genre }</span>
        </div>
    )
}
