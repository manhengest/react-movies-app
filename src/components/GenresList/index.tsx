import React from "react";

export const GenresList:React.FunctionComponent<{ genres: string[] }> = ({ genres }) => {
    return (
        <>
            { genres.join(", ") }
        </>
    )
}
