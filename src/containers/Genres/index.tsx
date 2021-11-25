import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { GenreItem } from "../../components/GenreItem";
import { genres } from "../../utils";
import { addOrRemoveFromArray } from "../../utils";
import { fetchMovies } from "../../store/asyncActions";
import useUpdatedUrl from "../../hooks/useUpdatedUrl";

import style from "./genres.module.scss"

export const Genres:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const { updateUrl } = useUpdatedUrl()
    const router = useRouter()
    const genresToArray = (genres: string | null) => genres ? genres.split(",") : [];

    let genresFromUrl = router.query?.genres as string | null
    let selectedGenres = genresToArray(genresFromUrl)

    const clickHandler = (title: string, id: number) => {
        selectedGenres = addOrRemoveFromArray(selectedGenres, title)
        updateUrl("", selectedGenres.join(",")).then((query) => dispatch(fetchMovies(query)))
    }

    return (
        <ul className={ style.genres }>
            {
                genres.map(genre =>
                    <li key={ genre.id } className={ style.genres__item }>
                        <GenreItem
                            id={ genre.id }
                            clickHandler={ clickHandler }
                            title={ genre.title }
                        />
                    </li>
                )
            }
        </ul>
    )
}
