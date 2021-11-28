import React from "react";
import { useSelector } from 'react-redux'
import style from "./movie-list.module.scss"
import { Container } from "../Container";
import { MovieCard } from "../../components/MovieCard";
import { Movie } from "../../components/MovieCard/interface";
import { RootState } from "../../store";

export const MoviesList:React.FunctionComponent = () => {
    const movies = useSelector((state: RootState) => state.moviesData.movies)

    return (
        <div className={ style["movies-list"] }>
            <Container>
                <div className={ style["movies-list__inner"] }>
                    {
                        movies.map((movie: Movie) =>
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
