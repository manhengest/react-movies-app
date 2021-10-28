import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./genres.scss"
import { GenreItem } from "../../components/GenreItem";
import { Genre } from "../../components/MovieCard/interface";
import { addOrRemoveFromArray } from "../../utils/utils";
import { fetchMovies, updateSelectedGenres } from "../../store/reducers/movieReducer";

export const Genres:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const selectedGenres = useSelector((state: any) => state.moviesData.selectedGenres)
    const genres = Object
        .values(Genre)
        .map((title, _id) => ({
            title,
            id: _id + 1,
            active: !_id
        }))

    const clickHandler = (title: string, id: number) => {
        selectGenre(title, id)
        filterMovies()
    }

    const selectGenre = (title: string, id: number) => {
        if (id !== 1) {
            const selectedList = addOrRemoveFromArray([...selectedGenres], title);
            dispatch(updateSelectedGenres(selectedList))
        } else {
            dispatch(updateSelectedGenres([]))
        }
    }

    const filterMovies = () => {
        dispatch(fetchMovies())
    }

    return (
        <ul className="genres">
            {
                genres.map(genre =>
                    <li key={ genre.id } className="genres__item">
                        <GenreItem
                            id={ genre.id }
                            clickHandler={ clickHandler }
                            title={ genre.title }
                            activeGenres={ selectedGenres }
                        />
                    </li>
                )
            }
        </ul>
    )
}
