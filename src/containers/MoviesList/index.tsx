import React from "react";
import "./movie-list.scss"
import { Container } from "../Container";
import { MovieCard } from "../../components/MovieCard";
import { Genre } from "../../components/MovieCard/interface";

export const MoviesList:React.FunctionComponent = () => {
    // const movies = undefined
    const movies = [
        {
            id: 1,
            link: "#",
            year: 1998,
            title: "Pulp Fiction",
            genre: Genre.COMEDY,
            posterUrl: require("../../assets/images/poster-1.jpg")
        },
        {
            id: 2,
            link: "#",
            year: 2018,
            title: "Bohemian Rhapsody",
            genre: Genre.DOCUMENTARY,
            posterUrl: require("../../assets/images/poster-2.jpg")
        },
        {
            id: 3,
            link: "#",
            year: 2004,
            title: "Kill Bill: Vol 2",
            genre: Genre.COMEDY,
            posterUrl: require("../../assets/images/poster-3.jpg")
        },
        {
            id: 4,
            link: "#",
            year: 2019,
            title: "Avengers: War of Infinity",
            genre: Genre.HORROR,
            posterUrl: require("../../assets/images/poster-4.jpg")
        },
        {
            id: 5,
            link: "#",
            year: 2010,
            title: "Inception",
            genre: Genre.CRIME,
            posterUrl: require("../../assets/images/poster-5.jpg")
        },
        {
            id: 6,
            link: "#",
            year: 2007,
            title: "Reservoir dogs",
            genre: Genre.DOCUMENTARY,
            posterUrl: require("../../assets/images/poster-6.jpg")
        },
    ]

    return (
        <div className="movies-list">
            <Container>
                <div className="movies-list__inner">
                    {
                        movies.map(movie =>
                            <MovieCard
                                key={ movie.id }
                                posterUrl={ movie.posterUrl }
                                link={ movie.link }
                                title={ movie.title }
                                genre={ movie.genre }
                                year={ movie.year }
                            />
                        )
                    }
                </div>
            </Container>
        </div>
    )
}
