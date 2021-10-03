import React, { useContext } from "react";
import "./primary-header.scss"
import { Logo } from "../Logo";
import { Button } from "../Button";
import { DialogContext, actionControlVisibility } from "../../context/DialogContext";

export const PrimaryHeader:React.FunctionComponent = () => {
    const { dispatch } = useContext(DialogContext)
    const onAddDialogOpen = () => dispatch(
        actionControlVisibility('add', true)
    )

    return (
        <header className="primary-header">
            <Logo type={ "bold" } />
            <Button clickHandler={ onAddDialogOpen } title={ "+ add movie" } type="transparent-button" />
        </header>
    )
}
