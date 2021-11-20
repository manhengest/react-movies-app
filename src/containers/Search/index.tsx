import React, { useState } from "react";
import style from "./search.module.scss"
import { PrimaryTitle } from "../../components/PrimaryTitle";
import { SearchField } from "../../components/SearchField";
import { Button } from "../../components/Button";
// import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/asyncActions";

import {useRouter} from "next/router";

export const Search:React.FunctionComponent = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    // const history = useHistory();
    const urlParams = new URLSearchParams(router.pathname);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }
    const submit = () => {
        const genre = urlParams.get('genre');
        // history.push({
        //     pathname: `/search/${searchQuery}${genre ? "?genre=" + genre : ""}`,
        // });
        dispatch(fetchMovies(searchQuery))
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
