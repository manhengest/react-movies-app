import React, { useEffect } from "react";
import "./assets/styles/main.scss"
import { Footer } from "./components/Footer";
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
import { Home } from "./views/Home";

const App:React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search" />
                </Route>
                <Route path="/search/:searchQuery?">
                    <Home />
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
