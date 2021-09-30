import React from "react";
import "./filter.scss"
import { Genres } from "../Genres";
import { Sorting } from "../Sorting";
import { Container } from "../Container";

export const Filter:React.FunctionComponent = () => {
    return (
        <div className="filter">
            <Container>
                <div className="filter__inner">
                    <Genres />
                    <Sorting />
                </div>
                <div className="filter__results">
                    <span className="filter__results-text"><span>39</span> movies found</span>
                </div>
            </Container>
        </div>
    )
}
