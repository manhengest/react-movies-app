import { act } from "@testing-library/react";
import React, { PropsWithChildren, RefObject, useEffect, useRef } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (ref: RefObject<HTMLElement>, fn: () => void) => {
    act(() => {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            const handleClickOutside = (event: any) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    fn()
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    });
}

/**
 * Component that alerts if you click outside of it
 */
export const OutsideAlerter: React.FunctionComponent<{ fn: () => void, children: PropsWithChildren<{}> }> = ({ fn, children }) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, fn);

    return (
        <div ref={ wrapperRef }>
            { children }
        </div>
    )
}
