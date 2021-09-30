import React from "react";
import "./search.scss"
import { PrimaryTitle } from "../../components/PrimaryTitle";
import { SearchField } from "../../components/SearchField";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";

export const Search:React.FunctionComponent = () => {
    const textCb = () => {
        console.log("test");
    }

    return (
        <div className="search">
            <PrimaryTitle title={ "FIND YOUR MOViE" } additionalClass={ "search" } />
            <div className="search__inner">
                <SearchField />
                <PrimaryButton clickHandler={ textCb } title={ "Search" } />
            </div>
        </div>
    )
}
