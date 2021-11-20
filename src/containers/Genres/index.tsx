import React from "react";
import { useDispatch } from "react-redux";
import style from "./genres.module.scss"
import { GenreItem } from "../../components/GenreItem";
import { genres } from "../../utils/common";
import { addOrRemoveFromArray } from "../../utils/utils";
import { useHistory } from "react-router-dom";
import { fetchMovies } from "../../store/asyncActions";
import { useRouter } from "next/router";

export const Genres:React.FunctionComponent = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const history = useHistory();
    const urlParams = new URLSearchParams(router.pathname);
    const query = router.pathname.split("/")[2]
    let selectedGenres: string[] = []

    const clickHandler = (title: string, id: number) => {
        updateUrl(title, id)
        dispatch(fetchMovies(query))
    }

    const updateUrl = (title: string, id: number) => {
        const genre = urlParams.get('genre');
        const genresToArray = () => genre ? genre.split(",") : [];

        if (id !== 1) {
            selectedGenres = addOrRemoveFromArray(genresToArray(), title);
        } else {
            selectedGenres = []
        }

        urlParams.set('genre', selectedGenres.join(","));

        history.push({
            pathname: `/search/${query}${selectedGenres.length ? "?genre=" + selectedGenres.join(",") : ""}`,
        });
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
