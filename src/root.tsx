// @refresh reload
import { Suspense } from "solid-js";
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from "solid-start";

import "./root.scss";

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>aora</Title>
                <Meta charset="utf-8" />
                <Meta name="description" content="A barebones code editor" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
                <Link rel="icon" href="/icon.png" />
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <Routes>
                            <FileRoutes />
                        </Routes>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}
