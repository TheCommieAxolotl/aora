import { createSignal, createMemo, onMount } from "solid-js";

import { createStarryNight, common, Root, Grammar } from "@wooorm/starry-night";
import { toHtml } from "hast-util-to-html";

import { setLangCommandPallette, language, setLanguage } from "~/state";
import Icon from "./Icon";

import "./editor.scss";
import grammars from "~/grammars";

let highlighter: null | {
    flagToScope: (flag: string) => string | undefined;
    scopes: () => string[];
    missingScopes: () => string[];
    register: (grammars: Grammar[]) => Promise<void>;
    highlight: (value: string, scope: string) => Root;
} = null;

(async () => {
    highlighter = await createStarryNight([...common, ...grammars] as Grammar[]);
})();

export default () => {
    const [raw, setRaw] = createSignal("");

    let input: HTMLDivElement | undefined;
    let content: HTMLDivElement | undefined;

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has("code")) {
            setRaw(decodeURIComponent(atob(urlParams.get("code")!)));

            input!.innerText = decodeURIComponent(atob(urlParams.get("code")!));
        } else if (localStorage.getItem("editorText") !== null) {
            setRaw(localStorage.getItem("editorText")!);

            input!.innerText = localStorage.getItem("editorText")!;
        }

        if (localStorage.getItem("language") !== null) {
            setLanguage(localStorage.getItem("language")!);
        }

        input!.focus();

        requestAnimationFrame(() => {
            setRaw((r) => r + " ");

            setTimeout(() => {
                setRaw((r) => r.slice(0, -1));
            }, 200);
        });
    });

    const code = createMemo<Root>(() => {
        // NOTE: this call does nothing. but solid will non re-evaluate the memo if I remove this. so, I'm keeping it :)
        raw();

        if (!highlighter) {
            (async () => {
                highlighter = await createStarryNight([...common, ...grammars] as Grammar[]);
            })();
        }

        return highlighter
            ? highlighter.highlight(raw(), language())
            : {
                  type: "root",
                  children: [],
              };
    });

    return (
        <div class="editor">
            <div
                ref={input}
                class="editor-hidden-input-div"
                spellcheck={false}
                contentEditable={true}
                style={{
                    color: content?.innerHTML.length ? "transparent" : "inherit",
                }}
                onKeyDown={(e) => {
                    if (e.key === "Tab") {
                        e.preventDefault();

                        document.execCommand("insertText", false, "    ");
                    }

                    if (e.key === "p" && (e.ctrlKey || e.metaKey)) {
                        e.preventDefault();

                        setLangCommandPallette((e) => !e);
                    }
                }}
                onInput={(e) => {
                    const text = e.currentTarget.innerText.replaceAll(/\n\n/g, "\n");

                    setRaw(text);

                    localStorage.setItem("editorText", text);
                }}
            />
            <div
                ref={content}
                class="editor-content"
                innerHTML={(() => {
                    const state = code();

                    return state ? toHtml(state) : "";
                })()}
            >
                Start typing...
            </div>
            <div class="editor-info">
                <button
                    class="copylink"
                    onClick={(e) => {
                        const link = `${window.location.origin}/?code=${encodeURIComponent(btoa(raw()))}`;

                        navigator.clipboard.writeText(link);

                        window.history.replaceState({}, "", link);

                        e.target!.closest("button")?.classList.add("copied");

                        setTimeout(() => {
                            e.target!.closest("button")?.classList.remove("copied");
                        }, 3000);
                    }}
                >
                    <Icon name="link" />
                </button>
                <div class="separator" />
                <button
                    class="scope"
                    onClick={() => {
                        setLangCommandPallette((e) => !e);
                    }}
                >
                    {language()}
                </button>
            </div>
        </div>
    );
};
