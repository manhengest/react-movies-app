import React, { JSXElementConstructor, ReactElement } from "react";
import Head from "next/head";

interface MainLayoutProps {
    children: ReactElement<any, string | JSXElementConstructor<any>> | JSX.Element[],
    title?: string
}

export const MainLayout:React.FunctionComponent<MainLayoutProps> = ({ children, title = "Netflix Roulette" }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta charSet="utf-8" />
            </Head>
            <main>
                { children }
            </main>
        </>
    )
}
