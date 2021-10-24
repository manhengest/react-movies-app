export enum Genre {
    ALL = "All",
    DOCUMENTARY = "Action",
    COMEDY = "Comedy",
    HORROR = "Horror",
    CRIME = "Crime"
}

export interface Movie {
    id?: number,
    poster_path: string,
    title: string,
    genres: string[],
    release_date: string,
    runtime: number,
    overview: string,
    vote_average: number
}

export interface MoviesResponse {
    data: {
        data: Movie[],
        limit: number,
        offset: number,
        totalAmount: number
    }
}

export interface ReduxAction {
    type: string,
    payload: any
}
