import React from "react";
import "./secondary-header.scss"
import { Container } from "../../containers/Container";
import { Logo } from "../Logo";
import { SearchButton } from "../SearchButton";
import { useDispatch } from "react-redux";
import { setViewMode } from "../../store/reducers/appReducer";

export const SecondaryHeader:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const changeView = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(setViewMode("search"))
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
