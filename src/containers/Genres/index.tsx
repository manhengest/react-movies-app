import React from "react";
import "./genres.scss"
import { GenreItem } from "../../components/GenreItem";

export const Genres:React.FunctionComponent = () => {
    const genres = [
        {
            title: "All",
            id: 1,
            active: true
        },
        {
            title: "Documentary",
            id: 2,
            active: false
        },
        {
            title: "Comedy",
            id: 3,
            active: false
        },
        {
            title: "Horror",
            id: 4,
            active: false
        },
        {
            title: "Crime",
            id: 5,
            active: false
        }
    ];

    const testCb = () => {
        console.log("test");
    }

    return (
        <ul className="genres">
            {
                genres.map(genre => <GenreItem cb={ testCb } title={ genre.title } active={ genre.active } />)
            }
        </ul>
    )
}
