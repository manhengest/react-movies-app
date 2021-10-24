import React, { useState } from "react";
import "./sorting.scss"
import { CustomSelect } from "../../components/Forms/CustomSelect";
import { useDispatch } from "react-redux";
import { fetchMovies, updateSelectedSorting } from "../../store/reducers/movieReducer";

export const Sorting:React.FunctionComponent = () => {
    const dispatch = useDispatch()
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
        selectSorting(value, title)
        filterMovies()
    }

    const selectSorting = (value: string, title: string) => {
        setPlaceholder(title);
        dispatch(updateSelectedSorting(value))
    }

    const filterMovies = () => {
        dispatch(fetchMovies())
    }

    return (
        <div className="sorting">
            <span className="sorting__title">Sort by</span>
            <CustomSelect
                id="sort-by"
                placeholder={ placeholder }
                theme="as-button"
                buttonClass="sorting__trigger"
            >
                <ul>
                    {
                        sortBy.map((sortByItem: { title: string, value: string, id: number }) => (
                            <li key={ sortByItem.id }>
                                <button
                                    className="sorting__btn"
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
