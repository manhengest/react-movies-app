import React from "react";
import { useSelector } from 'react-redux'
import "./movie-list.scss"
import { Container } from "../Container";
import { MovieCard } from "../../components/MovieCard";
import { Movie } from "../../components/MovieCard/interface";

export const MoviesList:React.FunctionComponent = () => {
    /*const movies = [
        {
            id: 1,
            link: "#",
            year: 1998,
            title: "Pulp Fiction",
            genre: Genre.COMEDY,
            posterUrl: require("../../assets/images/poster-1.jpg"),
            duration: 90,
            rating: 7.7,
            description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
        },
        {
            id: 2,
            link: "#",
            year: 2018,
            title: "Bohemian Rhapsody",
            genre: Genre.DOCUMENTARY,
            posterUrl: require("../../assets/images/poster-2.jpg"),
            duration: 120,
            rating: 8.7,
            description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
        },
        {
            id: 3,
            link: "#",
            year: 2004,
            title: "Kill Bill: Vol 2",
            genre: Genre.COMEDY,
            posterUrl: require("../../assets/images/poster-3.jpg"),
            duration: 110,
            rating: 9.7,
            description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
        },
        {
            id: 4,
            link: "#",
            year: 2019,
            title: "Avengers: War of Infinity",
            genre: Genre.HORROR,
            posterUrl: require("../../assets/images/poster-4.jpg"),
            duration: 112,
            rating: 5.7,
            description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
        },
        {
            id: 5,
            link: "#",
            year: 2010,
            title: "Inception",
            genre: Genre.CRIME,
            posterUrl: require("../../assets/images/poster-5.jpg"),
            duration: 101,
            rating: 6.7,
            description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
        },
        {
            id: 6,
            link: "#",
            year: 2007,
            title: "Reservoir dogs",
            genre: Genre.DOCUMENTARY,
            posterUrl: require("../../assets/images/poster-6.jpg"),
            duration: 111,
            rating: 9,
            description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
        },
    ]*/
    const movies = useSelector((state: any) => state.moviesData.movies)

    return (
        <div className="movies-list">
            <Container>
                <div className="movies-list__inner">
                    {
                        movies.map((movie: Movie) =>
                            <MovieCard
                                key={ movie.id }
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
