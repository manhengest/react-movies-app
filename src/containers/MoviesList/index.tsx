import React from "react";
import { useSelector } from 'react-redux'

import { Container } from "../Container";
import { MovieCard } from "../../components/MovieCard";
import { UniqMovie } from "../../components/MovieCard/interface";
import { moviesSelector } from "../../store/reducers/movieReducer";

import style from "./movie-list.module.scss"

export const MoviesList:React.FunctionComponent = () => {
    const movies = useSelector(moviesSelector)

    return (
        <div className={ style["movies-list"] }>
            <Container>
                <div className={ style["movies-list__inner"] }>
                    {
                        movies.map((movie: UniqMovie) =>
                            <MovieCard
                                key={ movie.id }
                                id={ movie.id }
                                poster_path={ movie.poster_path }
                                title={ movie.title }
                                genres={ movie.genres }
                                release_date={ movie.release_date }
                                runtime={ movie.runtime }
                                overview={ movie.overview }
                                vote_average={ movie.vote_average }
                            />
                        )
                    }
                </div>
            </Container>
        </div>
    )
}
