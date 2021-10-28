import React from "react";
import "./movie-card.scss"
import { Movie } from "./interface"
import { MovieCardContextMenu } from "../MovieCardContextMenu";
import { useDispatch } from "react-redux";
import { setDetailedViewData, setViewMode } from "../../store/reducers/appReducer";
import { GenresList } from "../GenresList";
import { ReleaseDate } from "../ReleaseDate";

export const MovieCard:React.FunctionComponent<Movie> = ({ title, genres, release_date, poster_path, runtime, overview, vote_average }) => {
    const dispatch = useDispatch()
    const setDetailedView = () => {
        dispatch(setViewMode("detailed"))
    }
    const sendData = () => {
        dispatch(setDetailedViewData({ title, genres, release_date, poster_path, runtime, overview, vote_average }))
    }
    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        sendData()
        setDetailedView()
    }

    return (
        <div className="movie-card">
            <MovieCardContextMenu />
            <a
                onClick={ handleClick }
                className="movie-card__poster"
                href="#"
            >
                <img className="movie-card__poster-img" src={ poster_path } alt={ title }/>
            </a>
            <div className="movie-card__title-wrap">
                <button
                    onClick={ handleClick }
                    className="movie-card__title"
                >
                    { title }
                </button>
                <span className="movie-card__year">
                    <ReleaseDate releaseDate={ release_date } />
                </span>
            </div>
            <span className="movie-card__genre">
                <GenresList genres={ genres } />
            </span>
        </div>
    )
}
