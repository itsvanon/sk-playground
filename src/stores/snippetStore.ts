import { writable, get } from "svelte/store";
import type { CodeSnippet, CodeSnippetInput } from "../app";

export const snippetStore = writable<CodeSnippet[]>([]);

export function addSnippet(input: CodeSnippetInput) {
    let snippets = get(snippetStore);
    snippetStore.update(() => {
        return [{...input, favorite: false}, ...snippets]
    })
}

export function deleteSnippets(index: number) {
    let snippets = get(snippetStore);
    snippets.splice(index, 1);
    snippetStore.update(() => {
        return snippets
    });
}

export function toggleFavorite(index: number) {
    let snippets = get(snippetStore);
    snippetStore.update(() => {
        return snippets.map((snippet, snippetIndex) => {
            if(snippetIndex == index) {
                return { ...snippet, favorite: !snippet.favorite}
            }
            return snippet;
        });
    });
}