import React from "react";
import Link from "next/link"
import { Container } from "../containers/Container";
import { MainLayout } from "../layouts/MainLayout";

const NotFound:React.FunctionComponent = () => {
    return (
        <MainLayout title="Page not found">
            <Container>
                <h1>404. Sorry, page not found :(</h1>
                <Link href={ "/search" } ><a>Go to index page</a></Link>
            </Container>
        </MainLayout>
    )
}

export default NotFound
