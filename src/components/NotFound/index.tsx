import React from "react";
import { Link } from "react-router-dom";

export const NotFound:React.FunctionComponent = () => {
    return (
        <div>
            <h1>404. Sorry, page not found :(</h1>
            <Link to="/search" >Go to index page</Link>
        </div>
    )
}
