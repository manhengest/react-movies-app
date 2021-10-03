import React from "react";
import "./genres.scss"
import { GenreItem } from "../../components/GenreItem";
import { Genre } from "../../components/MovieCard/interface";

export const Genres:React.FunctionComponent = () => {
    const genres = Object
        .values(Genre)
        .map((title, _id) => ({
            title,
            id: _id + 1,
            active: !_id
        }))

    const testCb = () => {
        console.log("test");
    }

    return (
        <ul className="genres">
            {
                genres.map(genre =>
                    <GenreItem
                        key={ genre.id }
                        clickHandler={ testCb }
                        title={ genre.title }
                        active={ genre.active }
                    />
                )
            }
        </ul>
    )
}
