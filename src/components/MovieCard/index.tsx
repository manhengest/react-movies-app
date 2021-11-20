import React from "react";
import style from "./movie-card.module.scss"
import { Movie } from "./interface"
import { MovieCardContextMenu } from "../MovieCardContextMenu";
import { useDispatch } from "react-redux";
import { setDetailedViewData, setViewMode } from "../../store/reducers/appReducer";
import { GenresList } from "../GenresList";
import { ReleaseDate } from "../ReleaseDate";

export const MovieCard:React.FunctionComponent<Movie> = ({ id, title, genres, release_date, poster_path, runtime, overview, vote_average }) => {
    const dispatch = useDispatch()
    const setDetailedView = () => {
        dispatch(setViewMode("detailed"))
    }
    const sendData = () => {
        dispatch(setDetailedViewData({ id, title, genres, release_date, poster_path, runtime, overview, vote_average }))
    }
    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        sendData()
        setDetailedView()
    }

    return (
        <div className={ style["movie-card"] }>
            <MovieCardContextMenu id={ id } />
            <a
                onClick={ handleClick }
                className={ style["movie-card__poster"] }
                href="#"
            >
                <img className={ style["movie-card__poster-img"] } src={ poster_path } alt={ title }/>
            </a>
            <div className={ style["movie-card__title-wrap"] }>
                <button
                    onClick={ handleClick }
                    className={ style["movie-card__title"] }
                >
                    { title }
                </button>
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
