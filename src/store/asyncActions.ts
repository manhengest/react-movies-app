import { MoviesResponse } from "../components/MovieCard/interface";
import { updateMovies, updateMoviesCount } from "./reducers/movieReducer";
import { getMovies } from "../api/movies";
import { AxiosResponse } from "axios";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "./index";

export const fetchMovies = (query?: string) => {
    const urlParams = new URLSearchParams(location.search);
    const genre = urlParams.get('genre');
    const filterParams = {
        search: "",
        searchBy: "",
        sortBy: "",
        filter: "",
        sortOrder: "desc",
        limit: 9
    }
    if (query) {
        filterParams.searchBy = "title"
        filterParams.search = query
    }
    if (!query && genre) {
        filterParams.searchBy = "genres"
    }
    if (genre) {
        filterParams.filter = genre
    }

    return (dispatch: ThunkDispatch<RootState, void, Action>) => {
        getMovies(filterParams).then((response: AxiosResponse<MoviesResponse>) => {
            dispatch(updateMovies(response.data.data))
            dispatch(updateMoviesCount(response.data.totalAmount))
        })
    }
}

