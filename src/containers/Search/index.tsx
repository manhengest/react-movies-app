import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { PrimaryTitle } from "../../components/PrimaryTitle";
import { SearchField } from "../../components/SearchField";
import { Button } from "../../components/Button";
import { fetchMovies } from "../../store/asyncActions";

import style from "./search.module.scss"
import useUpdatedUrl from "../../hooks/useUpdatedUrl";

export const Search:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const { updateUrl } = useUpdatedUrl()
    const [searchQuery, setSearchQuery] = useState<string>("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }
    const submit = () => {
        updateUrl(searchQuery).then((query) => dispatch(fetchMovies(query)))
        setSearchQuery('')
    }
    const submitHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            submit()
        }
    }

    return (
        <div className={ style.search }>
            <PrimaryTitle
                title={ "FIND YOUR MOViE" }
                additionalClass={ style.search__title }
            />
            <div className={ style.search__inner }>
                <SearchField
                    searchQuery={ searchQuery }
                    changeHandler={ changeHandler }
                    submitHandler={ submitHandler }
                />
                <Button
                    clickHandler={ submit }
                    title={ "Search" }
                    buttonType="primary-button"
                    additionalClass={ style.search__btn }
                />
            </div>
        </div>
    )
}
