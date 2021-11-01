import React, { useEffect, useState } from "react";
import { LabeledInput } from "../Forms/LabeledInput";
import { CustomSelect } from "../Forms/CustomSelect";
import { Button } from "../Button";
import { CustomCheckbox } from "../Forms/CustomCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/reducers/appReducer";
import { genres } from "../../utils/common";
import { createMovie, fetchMovies, getMovie, updateMovie } from "../../store/reducers/movieReducer";
import { Formik, Form, ErrorMessage } from 'formik';
import { RootState } from "../../store";

export const MovieModal:React.FunctionComponent<{ modalType: string }> = ({ modalType }) => {
    const dispatch = useDispatch()
    const selectedMovieId = useSelector((state: RootState) => state.appData.movieId)
    const closeModal = () => {
        if (modalType === "isAddModalOpened") {
            dispatch(toggleModal("isAddModalOpened", false))
        } else {
            dispatch(toggleModal("isEditModalOpened", false))
        }
    }

    const initialValues = {
        id: undefined,
        title: "",
        poster_path: "",
        release_date: "",
        vote_average: "",
        runtime: "",
        overview: "",
        genres: []
    }

    return (
        <div className="movie-modal">
            <Formik
                initialValues={ initialValues }
                validate={ values => {
                    interface Errors {
                        title?: string,
                        poster_path?: string,
                        release_date?: string,
                        overview?: string,
                        genres?: string
                    }

                    const errors: Errors = {};

                    if (!values.title) {
                        errors.title = "This field cannot be empty.";
                    }
                    if (!values.poster_path) {
                        errors.poster_path = "This field cannot be empty.";
                    }
                    if (!values.release_date) {
                        errors.release_date = "Choose the release date, please.";
                    }
                    if (!values.overview) {
                        errors.overview = "This field cannot be empty.";
                    }
                    if (!values.genres.length) {
                        errors.genres = "Select at least one genre to proceed.";
                    }

                    return errors;
                } }
                onSubmit={ (values, { setSubmitting } ) => {
                    if (modalType === "isAddModalOpened") {
                        dispatch(createMovie(values)).then(() => {
                            setSubmitting(false);
                            closeModal()
                            dispatch(toggleModal("isSuccessModalOpened", true))
                            dispatch(fetchMovies())
                        })
                    } else {
                        dispatch(updateMovie(values)).then(() => {
                            setSubmitting(false);
                            closeModal()
                            dispatch(toggleModal("isSuccessModalOpened", true))
                            dispatch(fetchMovies())
                        })
                    }
                }}
            >
                {({ isSubmitting, setFieldValue  }) => {
                    const [movie, setMovie] = useState({});

                    useEffect(() => {
                        if (modalType === "isEditModalOpened") {
                            dispatch(getMovie(selectedMovieId)).then((movie) => {
                                const fields = ["id", "poster_path", "title", "genres", "release_date", "runtime", "overview", "vote_average"];
                                fields.forEach(field => setFieldValue(field, movie.data[field], false));
                                setMovie(movie);
                            });
                        }
                    }, []);

                    return (
                        <Form>
                            <div className="movie-modal__top-fields">
                                <div className="movie-modal__top-col-wide">
                                    <LabeledInput
                                        type="text"
                                        label="Title"
                                        placeholder="Movie Title"
                                        name="title"
                                        id="edit-movie-title"
                                    />
                                    <LabeledInput
                                        type="url"
                                        label="Movie Poster url"
                                        placeholder="https://"
                                        name="poster_path"
                                        id="edit-movie-poster-url"
                                    />
                                    <div className="relative">
                                        <CustomSelect
                                            id="edit-movie-genres"
                                            label="Genre"
                                            placeholder="Select genre"
                                            theme="as-field">
                                            <ul role="group" aria-labelledby="checkbox-group">
                                                {
                                                    genres.filter(genre => genre.id > 1).map(genre => (
                                                        <li key={ genre.id }>
                                                            <CustomCheckbox
                                                                name="genres"
                                                                id={ `genre-${ genre.id }` }
                                                                title={ genre.title }
                                                            />
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </CustomSelect>

                                        <ErrorMessage
                                            name="genres"
                                            component="span"
                                            className="validation-error"
                                        />
                                    </div>
                                </div>
                                <div className="movie-modal__top-col-narrow">
                                    <LabeledInput
                                        type="date"
                                        label="Release Date"
                                        name="release_date"
                                        id="edit-movie-date"
                                    />
                                    <LabeledInput
                                        type="number"
                                        label="Rating"
                                        placeholder="7.8"
                                        name="vote_average"
                                        id="edit-movie-rating"
                                    />
                                    <LabeledInput
                                        type="number"
                                        label="Runtime"
                                        placeholder="minutes"
                                        name="runtime"
                                        id="edit-movie-runtime"
                                    />
                                </div>
                            </div>
                            <LabeledInput
                                type="textarea"
                                label="Overview"
                                placeholder="Movie description"
                                name="overview"
                                id="edit-movie-overview"
                            />
                            <div className="modal__footer">
                                <Button
                                    clickHandler={ closeModal }
                                    title="Reset"
                                    buttonType="info-button"
                                />
                                <Button
                                    title="Submit"
                                    type="submit"
                                    disabled={ isSubmitting }
                                    buttonType="primary-button"
                                />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
