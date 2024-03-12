// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { localStorageStore } from "@skeletonlabs/skeleton"
import type { Writable } from "svelte/store"

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface CodeSnippetInput {
	title: string,
	language: string,
	code: string
}

interface CodeSnippet {
	title: string,
	language: string,
	code: string,
	favorite: boolean
}

interface Movie {
	Title: string,
	Year: string,
	Type: string,
	Poster: string,
	imdbID: string
}

const snippetLocalStore: Writable<CodeSnippet[]> = localStorageStore("snippetStore", []);