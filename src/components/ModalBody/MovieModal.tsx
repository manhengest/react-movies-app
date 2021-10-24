import React from "react";
import { LabeledInput } from "../Forms/LabeledInput";
import { CustomSelect } from "../Forms/CustomSelect";
import { Button } from "../Button";
import { CustomCheckbox } from "../Forms/CustomCheckbox";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/reducers/appReducer";

export const MovieModal:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const resetHandler = () => {
        toggleEditModal()
        toggleAddModal()
    }
    const toggleEditModal = () => dispatch(
        toggleModal("isEditModalOpened", true)
    )
    const toggleAddModal = () => dispatch(
        toggleModal("isAddModalOpened", true)
    )

    return (
        <div className="movie-modal">
            <div className="movie-modal__top-fields">
                <div className="movie-modal__top-col-wide">
                    <LabeledInput type="text" label="Title" placeholder="Movie Title" name="movie_title" id="edit-movie-title" />
                    <LabeledInput type="url" label="Movie url" placeholder="https://" name="movie_url" id="edit-movie-url" />
                    <CustomSelect id="edit-movie-genre" label="Genre" placeholder="Select genre" theme="as-field" >
                        <ul>
                            <li>
                                <CustomCheckbox />
                            </li>
                            <li>
                                <CustomCheckbox />
                            </li>
                        </ul>
                    </CustomSelect>
                </div>
                <div className="movie-modal__top-col-narrow">
                    <LabeledInput type="date" label="Release Date" name="movie_date" id="edit-movie-date" />
                    <LabeledInput type="number" label="Rating" placeholder="7.8" name="movie_rating" id="edit-movie-rating" />
                    <LabeledInput type="text" label="Runtime" placeholder="minutes" name="movie_runtime" id="edit-movie-runtime" />
                </div>
            </div>
            <div>
                <LabeledInput type="textarea" label="Overview" placeholder="Movie description" name="movie_overview" id="edit-movie-overview" />
            </div>
            <div className="modal__footer">
                <Button clickHandler={ resetHandler } title="Reset" type="info-button" />
                <Button clickHandler={ resetHandler } title="Submit" type="primary-button" />
            </div>
        </div>
    )
}
