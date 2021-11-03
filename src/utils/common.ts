import { Genre } from "../components/MovieCard/interface";

export const genres = Object
    .values(Genre)
    .map((title, _id) => ({
        title,
        id: _id + 1,
        active: !_id
    }))
