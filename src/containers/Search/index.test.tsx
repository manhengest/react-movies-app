import React from "react";
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import configureMockStore from 'redux-mock-store'
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux'
import { Router } from "react-router-dom";
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { Search } from "./index";
import { initialState } from "../../store/reducers/movieReducer";
import { MOVIES_TYPES } from "../../store/types";
import { renderWithRedux } from "../../utils/test-helpers";
import { fetchMovies } from "../../store/asyncActions";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(initialState)
const mock = new MockAdapter(axios);

describe("Search", () => {
    beforeEach(() => {
        store.clearActions();
    });

    test("load movies", () => {
        mock.onGet("http://localhost:4000/movies").reply(200, {
            data: [
                {
                    id: 1,
                    poster_path: "/test/path",
                    title: "test title",
                    genres: ["test"],
                    release_date: "test",
                    runtime: 20,
                    overview: "test",
                    vote_average: 5
                }
            ],
            totalAmount: 1
        });

        store.dispatch(fetchMovies()).then(() => {
            const expectedActions = [
                {
                    type: MOVIES_TYPES.LOAD_MOVIES,
                    payload: [
                        {
                            id: 1,
                            poster_path: "/test/path",
                            title: "test title",
                            genres: ["test"],
                            release_date: "test",
                            runtime: 20,
                            overview: "test",
                            vote_average: 5
                        }
                    ]
                },
                {
                    type: MOVIES_TYPES.UPDATE_MOVIES_COUNT,
                    payload: 1
                }
            ]

            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    test("render Search snapshot", () => {
        const { asFragment } = renderWithRedux(<Search/>);
        expect(asFragment()).toMatchSnapshot();
    })
    test("render important elements", () => {
        renderWithRedux(<Search/>)

        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    })
    test("search field events", () => {
        const history = createMemoryHistory()

        render(
            <Router history={ history }>
                <Provider store={ store }>
                    <Search/>
                </Provider>
            </Router>
        )

        userEvent.type(screen.getByRole("textbox"), "Lord")
        expect(screen.getByRole("textbox")).toHaveValue("Lord")

        userEvent.click(screen.getByRole("button"))
        expect(history.location.pathname).toContain("/search/Lord")
        expect(screen.getByRole("textbox")).toHaveValue("")
    })
})
