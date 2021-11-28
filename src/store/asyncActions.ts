import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AxiosResponse } from "axios";
import { ParsedUrlQuery } from "node:querystring";

import { MoviesResponse } from "../components/MovieCard/interface";
import { updateMovies, updateMoviesCount } from "./reducers/movieReducer";
import { getMovie, getMovies } from "../api/movies";
import { RootState } from "./reducers/rootReducer";
import { setDetailedViewData } from "./reducers/appReducer";

export const fetchMovies = (query?: ParsedUrlQuery) => {
    const searchQuery = query?.query as string[];
    const genres = query?.genres as string;
    const sortBy = query?.sortBy || "release_date";

    const filterParams = {
        search: "",
        searchBy: "",
        sortBy,
        filter: "",
        sortOrder: "desc",
        limit: 9
    }

    if (searchQuery && searchQuery.length) {
        filterParams.searchBy = "title"
        filterParams.search = searchQuery.join(",")
    }
    if (!(searchQuery && searchQuery.length) && genres) {
        filterParams.searchBy = "genres"
    }
    if (genres) {
        filterParams.filter = genres
    }

    return async function(dispatch: ThunkDispatch<RootState, void, Action>) {
        return getMovies(filterParams).then((response: AxiosResponse<MoviesResponse>) => {
            dispatch(updateMovies(response.data.data))
            dispatch(updateMoviesCount(response.data.totalAmount))
        })
    }
}

export const fetchMovieDetails = (id: number) => {
    return async function(dispatch: ThunkDispatch<RootState, void, Action>) {
        return getMovie(id).then((response: AxiosResponse<any>) => {
            const { id, title, genres, release_date, poster_path, runtime, overview, vote_average } = response.data
            dispatch(setDetailedViewData({ id, title, genres, release_date, poster_path, runtime, overview, vote_average }))
        })
    }
}
