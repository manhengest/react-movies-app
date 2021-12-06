import React from "react";
import Link from "next/link";

import { UniqMovie } from "./interface"
import { MovieCardContextMenu } from "../MovieCardContextMenu";
import { GenresList } from "../GenresList";
import { ReleaseDate } from "../ReleaseDate";

import style from "./movie-card.module.scss"

export const MovieCard:React.FunctionComponent<UniqMovie> = ({ id, title, genres, release_date, poster_path, runtime, overview, vote_average }) => {
    return (
        <div className={ style["movie-card"] }>
            <MovieCardContextMenu id={ id } />
            <Link href={`/movie/${encodeURIComponent(id)}`}>
                <a className={ style["movie-card__poster"] }>
                    <img className={ style["movie-card__poster-img"] } src={ poster_path } alt={ title }/>
                </a>
            </Link>
            <div className={ style["movie-card__title-wrap"] }>
                <Link href={`/movie/${encodeURIComponent(id)}`}>
                    <a className={ style["movie-card__title"] }>
                        { title }
                    </a>
                </Link>
                <span className={ style["movie-card__year"] }>
                    <ReleaseDate releaseDate={ release_date } />
                </span>
            </div>
            <span className={ style["movie-card__genre"] }>
                <GenresList genres={ genres } />
            </span>
        </div>
    )
}
