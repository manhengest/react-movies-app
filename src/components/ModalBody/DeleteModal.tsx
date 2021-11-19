import React from "react";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/reducers/appReducer";
import { RootState } from "../../store";
import { deleteMovie } from "../../api/movies";
import { fetchMovies } from "../../store/asyncActions";

export const DeleteModal:React.FunctionComponent<{ modalType: string }> = ({ modalType }) => {
    const dispatch = useDispatch()
    const selectedMovieId = useSelector((state: RootState) => state.appData.movieId)

    const handleDelete = () => {
        deleteMovie(selectedMovieId).then(() => {
            dispatch(fetchMovies())
        })
        dispatch(toggleModal("isDeleteModalOpened", false))
    }
    const visible = modalType === "isDeleteModalOpened"

    return visible ? (
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
                    additionalClass="delete-movie"
                />
            </div>
        </div>
    ) : null
}
