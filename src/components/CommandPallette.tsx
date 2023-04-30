import { For, Show, onCleanup, onMount } from "solid-js";

import { Grammar, common } from "@wooorm/starry-night";

import { setLangCommandPallette, setLanguage } from "~/state";
import grammars from "~/grammars";

import "./commandpallette.scss";

const makeLangFromScope = (scope: string) => {
    const lang = scope.split(".").slice(1).join(" + ");

    return lang;
};

export default (props: { mode: "language" | "command" }) => {
    let ref: HTMLDivElement | undefined;

    onMount(() => {
        requestAnimationFrame(() => {
            window.onclick = (e) => {
                if (ref && !ref.contains(e.target as Node)) {
                    setLangCommandPallette(false);
                }
            };
        });
    });

    onCleanup(() => {
        window.onclick = null;
    });

    return (
        <div class="commandpallette-container">
            <div class="commandpallette" ref={ref}>
                <div class="commandpallette-header">{props.mode === "language" ? "Select Language" : "Select Command"}</div>
                <div class="commandpallette-body">
                    <Show when={props.mode === "language"}>
                        <For each={[...common, ...grammars] as Grammar[]}>
                            {(lang) => {
                                return (
                                    <div
                                        class="commandpallette-body-item"
                                        onClick={() => {
                                            localStorage.setItem("language", lang.scopeName);

                                            setLanguage(lang.scopeName);

                                            setLangCommandPallette(false);
                                        }}
                                    >
                                        <div class="commandpallette-body-item-text">{makeLangFromScope(lang.scopeName) || "No Name"}</div>
                                        <div class="commandpallette-body-item-hint">{lang.scopeName}</div>
                                    </div>
                                );
                            }}
                        </For>
                    </Show>
                </div>
            </div>
        </div>
    );
};
