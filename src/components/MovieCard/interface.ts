export enum Genre {
    ALL = "All",
    DOCUMENTARY = "Action",
    COMEDY = "Comedy",
    HORROR = "Horror",
    CRIME = "Crime"
}

export interface MovieCardProps {
    posterUrl: string,
    link: string,
    title: string,
    genre: Genre,
    year: number,
    duration: number,
    description: string,
    rating: number
}
