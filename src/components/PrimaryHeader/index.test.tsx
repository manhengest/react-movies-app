import React from "react";
import { renderWithRedux } from "../../utils/test-helpers";
import { PrimaryHeader } from "./index";

describe("Primary Header", () => {
    test("render open modal button", () => {
        const { getByRole, getByText } = renderWithRedux(<PrimaryHeader />)

        expect(getByRole("button")).toBeInTheDocument()
        expect(getByText(/add/i)).toBeInTheDocument()
    })
})
