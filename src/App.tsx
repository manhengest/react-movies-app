import React from "react";
import "./assets/styles/main.scss"
import { Footer } from "./components/Footer";
import { DialogProvider } from "./context/DialogContext";
import { ViewProvider } from "./context/ViewContext";
import { Modal } from "./components/Modal";
import { AppContainer } from "./containers/AppContainer";

export const App: React.FunctionComponent = () => {
    return (
        <React.StrictMode>
            <DialogProvider>
                <ViewProvider>
                    <AppContainer />
                </ViewProvider>

                <Footer />

                <Modal type="add"/>
                <Modal type="edit"/>
                <Modal type="delete"/>
            </DialogProvider>
        </React.StrictMode>
    )
}
