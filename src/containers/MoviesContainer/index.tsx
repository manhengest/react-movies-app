import React from "react";
import style from "./movies.module.scss"
import { Filter } from "../Filter";
import { MoviesList } from "../MoviesList";
import ErrorBoundary from "../ErrorBoundary";

export const MoviesContainer:React.FunctionComponent = () => {
    return (
       <section className={ style.movies }>
           <Filter />
           <ErrorBoundary>
               <MoviesList />
           </ErrorBoundary>
       </section>
    )
}
