import React, { useState } from "react";
import "./search.scss"
import { PrimaryTitle } from "../../components/PrimaryTitle";
import { SearchField } from "../../components/SearchField";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/reducers/movieReducer";

export const Search:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const urlParams = new URLSearchParams(location.search);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }
    const submit = () => {
        const genre = urlParams.get('genre');
        history.push({
            pathname: `/search/${searchQuery}?genre=${genre}`,
        });
        dispatch(fetchMovies(searchQuery))
        setSearchQuery('')
    }
    const submitHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            submit()
        }
    }

    return (
        <div className="search">
            <PrimaryTitle
                title={ "FIND YOUR MOViE" }
                additionalClass={ "search" }
            />
            <div className="search__inner">
                <SearchField
                    searchQuery={ searchQuery }
                    changeHandler={ changeHandler }
                    submitHandler={ submitHandler }
                />
                <Button
                    clickHandler={ submit }
                    title={ "Search" }
                    buttonType="primary-button"
                    additionalClass="search__btn"
                />
            </div>
        </div>
    )
}
