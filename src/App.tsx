import React, { useEffect } from "react";
import "./assets/styles/main.scss"
import { Footer } from "./components/Footer";
import { fetchMovies } from "./store/reducers/movieReducer";
import { Provider, useDispatch, useSelector } from "react-redux";
import { MainBanner } from "./components/Banner";
import { DetailedMovieInfoWrapper } from "./containers/DetailedMovieInfoWrapper";
import { MoviesContainer } from "./containers/MoviesContainer";
import { Modals } from "./containers/Modals";
import store, { RootState } from "./store";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Search } from "./views/Search";
import { Popular } from "./views/Popular";


const App:React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search" />
                </Route>
                <Route exact path="/search">
                    <Popular />
                </Route>
                <Route path="/search/:searchQuery">
                    {/*{ viewMode === "search" ? <MainBanner /> : <DetailedMovieInfoWrapper /> }*/}
                    <Search />
                </Route>
                <Route path="*" component={ NotFound } />
            </Switch>

            <Modals />
        </Router>
    )
}

export const AppWrapper:React.FunctionComponent = () => {
    return (
        <React.StrictMode>
            <Provider store={ store }>
                <App />
            </Provider>
        </React.StrictMode>
    )
}
