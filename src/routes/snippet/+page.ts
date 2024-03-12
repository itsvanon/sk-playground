import type { PageLoad } from "./$types";

export const load = (() => {

    return {
        snippets: [
            {
                title: "Stuff 1",
                language: "html",
                code: "<div>Divlul</div>",
                favorite: false
            }
        ]
    }
}) satisfies PageLoad;