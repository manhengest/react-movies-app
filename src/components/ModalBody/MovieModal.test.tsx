import React from "react";
import { renderWithRedux } from "../../utils/test-helpers";
import { MovieModal } from "./MovieModal";
import userEvent from "@testing-library/user-event";

describe("Movie modal", () => {
    test("render modal", () => {
        const { getByText, getAllByRole } = renderWithRedux(<MovieModal modalType="isAddModalOpened" />)

        expect(getAllByRole("textbox").length).toBe(3)
        expect(getByText(/reset/i)).toBeInTheDocument()
        expect(getByText(/submit/i)).toBeInTheDocument()
    })
    test("title is writable", () => {
        const { getByPlaceholderText } = renderWithRedux(<MovieModal modalType="isAddModalOpened" />)

        userEvent.type(getByPlaceholderText("Movie Title"), "Lord")
        expect(getByPlaceholderText("Movie Title")).toHaveValue("Lord")
    })
})
