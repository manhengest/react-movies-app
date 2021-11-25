import React from "react";

import { SecondaryHeader } from "../../components/SecondaryHeader";
import { DetailedMovieInfo } from "../DetailedMovieInfo";
import { Container } from "../Container";

export const DetailedMovieInfoWrapper:React.FunctionComponent = () => {
    return (
        <div className="detailed-movie-info">
            <Container>
                <SecondaryHeader />
                <DetailedMovieInfo />
            </Container>
        </div>
    )
}
