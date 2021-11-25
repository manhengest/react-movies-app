import React from "react";
import { GetServerSideProps, NextPage } from 'next'

import { MainBanner } from "../../components/Banner";
import { MoviesContainer } from "../../containers/MoviesContainer";
import { Footer } from "../../components/Footer";
import { MainLayout } from "../../layouts/MainLayout";
import { wrapper } from "../../store";
import { fetchMovies } from "../../store/asyncActions";

const SearchPage:NextPage = () => {
    return (
        <MainLayout>
            <MainBanner />
            <MoviesContainer />
            <Footer />
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    await store.dispatch(fetchMovies(ctx.query))

    return {
        props: {}
    }
})

export default SearchPage
