import React, { useContext } from "react";
import "./secondary-header.scss"
import { Container } from "../../containers/Container";
import { Logo } from "../Logo";
import { SearchButton } from "../SearchButton";
import { actionControlView, ViewContext } from "../../context/ViewContext";

export const SecondaryHeader:React.FunctionComponent = () => {
    const { dispatch } = useContext(ViewContext)
    const changeView = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(actionControlView("view", "search"))
    }

    return (
        <header className="secondary-header">
            <Container>
                <div className="secondary-header__inner">
                    <Logo type="regular" />
                    <SearchButton handler={ changeView } />
                </div>
            </Container>
        </header>
    )
}
