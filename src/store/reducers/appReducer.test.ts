import appReducer, { toggleModal, initialState, setViewMode } from "./appReducer";

describe("App Reducer", () => {
    test("open add modal", () => {
        const action = toggleModal("isAddModalOpened", true)
        const newState = appReducer(initialState, action)

        expect(newState.isAddModalOpened).toBe(true)
    })
    test("change viewMode", () => {
        const action = setViewMode("detailed")
        const newState = appReducer(initialState, action)

        expect(newState.viewMode).toBe("detailed")
    })
    test("movie id has been set after edit modal was called", () => {
        const action = toggleModal("isEditModalOpened", true, 1)
        const newState = appReducer(initialState, action)

        expect(newState.movieId).toBe(1)
    })
})
