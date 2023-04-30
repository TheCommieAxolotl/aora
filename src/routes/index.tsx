import CommandPallette from "~/components/CommandPallette";
import Editor from "~/components/Editor";

import { langCommandPallette, setLangCommandPallette } from "~/state";

import { Transition } from "solid-transition-group";
import { Show } from "solid-js";

export default () => {
    return (
        <>
            <Transition
                onEnter={(ele, done) => {
                    ele.animate([{ opacity: 0 }, { opacity: 1 }], {
                        duration: 200,
                        easing: "ease-in-out",
                    }).onfinish = done;
                }}
                onExit={(ele, done) => {
                    ele.animate([{ opacity: 1 }, { opacity: 0 }], {
                        duration: 200,
                        easing: "ease-in-out",
                    }).onfinish = done;
                }}
            >
                <Show when={langCommandPallette()}>
                    <CommandPallette mode="language" />
                </Show>
            </Transition>
            <Editor />
        </>
    );
};
