import React from "react";

export const ReleaseDate:React.FunctionComponent<{ releaseDate: string }> = ({ releaseDate }) => {
    return (
        <>
            { releaseDate.split("-")[0] }
        </>
    )
}
