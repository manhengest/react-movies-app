import React, { useContext } from "react";
import "./movie-card.scss"
import { MovieCardProps } from "./interface"
import { MovieCardContextMenu } from "../MovieCardContextMenu";
import { actionControlView, ViewContext } from "../../context/ViewContext";

export const MovieCard:React.FunctionComponent<MovieCardProps> = ({ title, genre, link, year, posterUrl, duration, description, rating }) => {
    const { dispatch } = useContext(ViewContext)
    const setDetailedView = () => {
        dispatch(actionControlView("view", "detailed"))
    }
    const sendData = () => {
        dispatch(actionControlView("data", { title, genre, link, year, posterUrl, duration, description, rating }))
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
                href={ link }
            >
                <img className="movie-card__poster-img" src={ posterUrl } alt={ title }/>
            </a>
            <div className="movie-card__title-wrap">
                <a
                    onClick={ handleClick }
                    className="movie-card__title"
                    href={ link }
                >
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
