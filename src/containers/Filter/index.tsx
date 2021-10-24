import React from "react";
import "./filter.scss"
import { Genres } from "../Genres";
import { Sorting } from "../Sorting";
import { Container } from "../Container";
import { ResultsCounter } from "../../components/ResultsCounter";

export const Filter:React.FunctionComponent = () => {
    return (
        <div className="filter">
            <Container>
                <div className="filter__inner">
                    <Genres />
                    <Sorting />
                </div>
                <ResultsCounter />
            </Container>
        </div>
    )
}
