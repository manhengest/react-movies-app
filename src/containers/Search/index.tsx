import React from "react";
import "./search.scss"
import { PrimaryTitle } from "../../components/PrimaryTitle";
import { SearchField } from "../../components/SearchField";
import {Button} from "../../components/Button";

export const Search:React.FunctionComponent = () => {
    const textCb = () => {
        console.log("test");
    }

    return (
        <div className="search">
            <PrimaryTitle title={ "FIND YOUR MOViE" } additionalClass={ "search" } />
            <div className="search__inner">
                <SearchField />
                <Button
                    clickHandler={ textCb }
                    title={ "Search" }
                    type="primary-button"
                    additionalClass="search__btn"
                />
            </div>
        </div>
    )
}
