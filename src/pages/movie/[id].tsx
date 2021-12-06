import React from "react";
import { GetServerSideProps } from "next";

import { MainLayout } from "../../layouts/MainLayout";
import { MoviesContainer } from "../../containers/MoviesContainer";
import { Footer } from "../../components/Footer";
import { wrapper } from "../../store";
import { fetchMovieDetails, fetchMovies } from "../../store/asyncActions";
import { DetailedMovieInfoWrapper } from "../../containers/DetailedMovieInfoWrapper";

const MoviePage:React.FunctionComponent = () => {
    return (
        <MainLayout title="Movie">
            <DetailedMovieInfoWrapper />
            <MoviesContainer />
            <Footer />
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    await store.dispatch(fetchMovieDetails(ctx.query.id))
    await store.dispatch(fetchMovies(ctx.query))

    return {
        props: {}
    }
})

export default MoviePage
