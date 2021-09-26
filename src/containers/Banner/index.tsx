import React from "react";
import "./banner.scss"

export const MainBanner:React.FunctionComponent = (props) => {
    return (
        <section className="banner">
            <div className="banner__inner">
                { props.children }
            </div>
        </section>
    )
}
