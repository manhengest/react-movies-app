import React from "react";
import "./movies.scss"
import { Filter } from "../Filter";
import { MoviesList } from "../MoviesList";
import ErrorBoundary from "../ErrorBoundary";

export const MoviesContainer:React.FunctionComponent = () => {
    return (
       <section className="movies">
           <Filter />
           <ErrorBoundary>
               <MoviesList />
           </ErrorBoundary>
       </section>
    )
}
