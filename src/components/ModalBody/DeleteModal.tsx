import React from "react";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, fetchMovies } from "../../store/reducers/movieReducer";
import { toggleModal } from "../../store/reducers/appReducer";
import { RootState } from "../../store";

export const DeleteModal:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const selectedMovieId = useSelector((state: RootState) => state.appData.movieId)

    const handleDelete = () => {
        dispatch(deleteMovie(selectedMovieId)).then(() => {
            dispatch(fetchMovies())
        })
        dispatch(toggleModal("isDeleteModalOpened", false))

    }

    return (
        <div className="delete-modal">
            <div className="modal__body">
                <p className="modal__txt">
                    Are you sure you want to delete this movie?
                </p>
            </div>
            <div className="modal__footer">
                <Button
                    clickHandler={ handleDelete }
                    title="Confirm"
                    buttonType="primary-button"
                />
            </div>
        </div>
    )
}
