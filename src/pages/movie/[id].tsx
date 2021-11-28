import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { MoviesContainer } from "../../containers/MoviesContainer";
import { Footer } from "../../components/Footer";
import { GetServerSideProps } from "next";
import { wrapper } from "../../store";
import { fetchMovieDetails, fetchMovies } from "../../store/asyncActions";
import { DetailedMovieInfoWrapper } from "../../containers/DetailedMovieInfoWrapper";

const MoviePage:React.FunctionComponent = () => {
    return (
        <MainLayout title="Movie">
            <MainLayout>
                <DetailedMovieInfoWrapper />
                <MoviesContainer />
                <Footer />
            </MainLayout>
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
