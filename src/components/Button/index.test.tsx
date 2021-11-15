import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./index";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
    test("check button click handler", () => {
        const handleClick = jest.fn()
        const { getByRole } = render(<Button title="test" buttonType="primary-button" clickHandler={ handleClick } />)

        userEvent.click(getByRole("button"))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
