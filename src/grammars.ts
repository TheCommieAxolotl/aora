import { Grammar } from "@wooorm/starry-night";

export default [
    {
        scopeName: "source.etcher",
        names: ["etcher"],
        extensions: [".xtml"],
        patterns: [
            {
                begin: "(<)(style)(.*?lang=['\"]scss['\"].*?)(>)",
                beginCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        patterns: [
                            {
                                include: "#attribute",
                            },
                        ],
                    },
                    "4": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                end: "(</)(style)(>)",
                endCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                patterns: [
                    {
                        include: "source.css.scss",
                    },
                ],
            },
            {
                begin: "(<)(style)(.*?lang=['\"]less['\"].*?)(>)",
                beginCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        patterns: [
                            {
                                include: "#attribute",
                            },
                        ],
                    },
                    "4": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                end: "(</)(style)(>)",
                endCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                patterns: [
                    {
                        include: "source.css.less",
                    },
                ],
            },
            {
                begin: "(<)(style)(.*?lang=['\"]stylus['\"].*?)(>)",
                beginCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        patterns: [
                            {
                                include: "#attribute",
                            },
                        ],
                    },
                    "4": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                end: "(</)(style)(>)",
                endCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },

                    "3": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                patterns: [
                    {
                        include: "source.stylus",
                    },
                ],
            },
            {
                begin: "(<)(style)(.*?)(>)",
                beginCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        patterns: [
                            {
                                include: "#attribute",
                            },
                        ],
                    },
                    "4": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                end: "(</)(style)(.*?)(>)",
                endCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                patterns: [
                    {
                        include: "source.css",
                    },
                ],
            },
            {
                begin: "(<)(script)(.*?)(>)",
                beginCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        patterns: [
                            {
                                include: "#attribute",
                            },
                        ],
                    },
                    "4": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                end: "(</)(script)(>)",
                endCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                patterns: [
                    {
                        include: "source.js",
                    },
                ],
            },
            {
                begin: "<!--",
                end: "-->",
                name: "comment.block.html",
            },
            {
                begin: "<!(?=(?i:DOCTYPE\\s))",
                beginCaptures: {
                    "0": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                },
                end: ">",
                endCaptures: {
                    "0": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                name: "meta.tag.metadata.doctype.html",
                patterns: [
                    {
                        match: "\\G(?i:DOCTYPE)",
                        name: "entity.name.tag.html",
                    },
                    {
                        begin: '"',
                        end: '"',
                        name: "string.quoted.double.html",
                    },
                    {
                        match: "[^\\s>]+",
                        name: "entity.other.attribute-name.html",
                    },
                ],
            },
            {
                begin: "(</?)((\\w[^\\s>]*))(?<!/)",
                beginCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.begin.html",
                    },
                    "2": {
                        name: "entity.name.tag.html",
                    },
                    "3": {
                        patterns: [
                            {
                                include: "#attribute",
                            },
                        ],
                    },
                },
                end: "((?: ?/)?>)",
                endCaptures: {
                    "1": {
                        name: "punctuation.definition.tag.end.html",
                    },
                },
                name: "entity.name.tag.html",
                patterns: [
                    {
                        include: "#attribute",
                    },
                ],
            },
            {
                match: "(\\w+)(=)",
                captures: {
                    "1": {
                        name: "entity.other.attribute-name.html",
                    },
                    "2": {
                        name: "punctuation.separator.key-value.html",
                    },
                },
            },
            {
                begin: "(?:(?:([#@]?[a-zA-Z0-9\\-:]+):([a-zA-Z0-9\\-:]+))\\s*(=)\\s*)?\\{",
                end: "\\}",
                beginCaptures: {
                    "0": {
                        name: "punctuation.definition.interpolation.begin.etcher",
                    },
                    "1": {
                        name: "entity.other.attribute-name.etcher",
                    },
                    "2": {
                        name: "entity.name.tag.etcher",
                    },
                    "3": {
                        name: "punctuation.definition.interpolation.begin.etcher",
                    },
                },
                endCaptures: {
                    "0": {
                        name: "punctuation.definition.interpolation.begin.etcher",
                    },
                },
                patterns: [
                    {
                        include: "source.js",
                    },
                    {
                        include: "#interpolation",
                    },
                ],
            },
            {
                include: "text.html.basic",
            },
            {
                begin: '"',
                beginCaptures: {
                    "0": {
                        name: "punctuation.definition.string.begin.html",
                    },
                },
                end: '"',
                endCaptures: {
                    "0": {
                        name: "punctuation.definition.string.end.html",
                    },
                },
                name: "string.quoted.double.html",
                patterns: [
                    {
                        include: "#entity",
                    },
                ],
            },
            {
                begin: "'",
                beginCaptures: {
                    "0": {
                        name: "punctuation.definition.string.begin.html",
                    },
                },
                end: "'",
                endCaptures: {
                    "0": {
                        name: "punctuation.definition.string.end.html",
                    },
                },
                name: "string.quoted.single.html",
                patterns: [
                    {
                        include: "#entity",
                    },
                ],
            },

            {
                match: "&(\\w+);",
                captures: {
                    "1": {
                        name: "constant.character.entity.html",
                    },
                },
            },
            {
                match: "&#[0-9]+;",
                name: "constant.character.entity.html",
            },
            {
                match: "&#[xX][0-9a-fA-F]+;",
                name: "constant.character.entity.html",
            },
            {
                include: "#strings",
            },

            {
                begin: '"',
                beginCaptures: {
                    "0": {
                        name: "punctuation.definition.string.begin.html",
                    },
                },
                end: '"',
                endCaptures: {
                    "0": {
                        name: "punctuation.definition.string.end.html",
                    },
                },
                name: "string.quoted.double.html",
                patterns: [
                    {
                        include: "#entity",
                    },
                ],
            },
            {
                begin: "'",
                beginCaptures: {
                    "0": {
                        name: "punctuation.definition.string.begin.html",
                    },
                },
                end: "'",
                endCaptures: {
                    "0": {
                        name: "punctuation.definition.string.end.html",
                    },
                },
                name: "string.quoted.single.html",
                patterns: [
                    {
                        include: "#entity",
                    },
                ],
            },
            {
                name: "meta.interpolation.etcher",
                begin: "\\{\\{",
                end: "\\}\\}",
                beginCaptures: {
                    "0": {
                        name: "punctuation.definition.interpolation.begin.etcher",
                    },
                },
                endCaptures: {
                    "0": {
                        name: "punctuation.definition.interpolation.end.etcher",
                    },
                },
                contentName: "source.js.embedded.etcher",
                patterns: [
                    {
                        include: "source.js",
                    },
                ],
            },
        ],
    },
] satisfies Grammar[];
