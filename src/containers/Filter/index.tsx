import React from "react";
import style from "./filter.module.scss"
import { Genres } from "../Genres";
import { Sorting } from "../Sorting";
import { Container } from "../Container";
import { ResultsCounter } from "../../components/ResultsCounter";

export const Filter:React.FunctionComponent = () => {
    return (
        <div className={ style.filter }>
            <Container>
                <div className={ style.filter__inner }>
                    <Genres />
                    <Sorting />
                </div>
                <ResultsCounter />
            </Container>
        </div>
    )
}
