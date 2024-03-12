<script lang="ts">
	import type { Movie } from "../app";

    export let movies: Movie[];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each movies as movie}
        <a class="card card-hover overflow-hidden" href={`/omdb/search/${movie.imdbID}`}>
            <header>
                <img src={movie.Poster} class="bg-black/50 w-full aspect-[6/6]" alt={movie.Title} />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>{movie.Year}</h6>
                <h3 class="h3" data-toc-ignore>{movie.Title}</h3>
            </div>
        </a>
    {/each}
</div>