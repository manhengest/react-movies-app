import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { CustomSelect } from "../../components/Forms/CustomSelect";
import { fetchMovies } from "../../store/asyncActions";
import useUpdatedUrl from "../../hooks/useUpdatedUrl";

import style from "./sorting.module.scss"

export const Sorting:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const { updateUrl } = useUpdatedUrl()

    const sortBy = [
        {
            title: "Release date",
            value: "release_date",
            id: 1
        },
        {
            title: "Rating",
            value: "vote_average",
            id: 2
        }
    ]
    const [placeholder, setPlaceholder] = useState("Release date")

    const clickHandler = (value: string, title: string) => {
        setPlaceholder(title);
        updateUrl("", "", value).then((query) => dispatch(fetchMovies(query)))
    }

    return (
        <div className={ style.sorting }>
            <span className={ style.sorting__title }>Sort by</span>
            <CustomSelect
                id="sort-by"
                placeholder={ placeholder }
                theme="as-button"
                buttonClass={ style.sorting__trigger }
            >
                <ul>
                    {
                        sortBy.map((sortByItem: { title: string, value: string, id: number }) => (
                            <li key={ sortByItem.id }>
                                <button
                                    className={ style.sorting__btn }
                                    onClick={ () => clickHandler(sortByItem.value, sortByItem.title) }
                                >
                                    { sortByItem.title }
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </CustomSelect>
        </div>
    )
}
