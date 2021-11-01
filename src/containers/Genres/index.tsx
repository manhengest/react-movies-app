import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./genres.scss"
import { GenreItem } from "../../components/GenreItem";
import { genres } from "../../utils/common";
import { addOrRemoveFromArray } from "../../utils/utils";
import { fetchMovies, updateSelectedGenres } from "../../store/reducers/movieReducer";
import { RootState } from "../../store";

export const Genres:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const selectedGenres = useSelector((state: RootState) => state.moviesData.selectedGenres)

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
