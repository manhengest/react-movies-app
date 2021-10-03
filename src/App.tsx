import React from "react";
import "./assets/styles/main.scss"
import { MainBanner } from "./components/Banner";
import { MoviesContainer } from "./containers/MoviesContainer";
import { Footer } from "./components/Footer";
import {DialogProvider} from "./context/DialogContext";
import {Modal} from "./components/Modal";


export const App: React.FunctionComponent = () => {
    return (
        <React.StrictMode>
            <DialogProvider>
                <MainBanner />
                <MoviesContainer />
                <Footer />

                <Modal type="add"/>
                <Modal type="edit"/>
                <Modal type="delete"/>
            </DialogProvider>
        </React.StrictMode>
    )
}
