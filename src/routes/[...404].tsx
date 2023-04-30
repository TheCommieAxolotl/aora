import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
    return (
        <main>
            <HttpStatusCode code={404} />
        </main>
    );
}
