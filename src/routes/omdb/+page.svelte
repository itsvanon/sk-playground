<script lang="ts">
	import type { Movie } from '../../app';
	import MoviesCard from '../../components/MoviesCard.svelte';

	export let data;

    const randomMovies: Movie[] = data.randomMovies;
    
    let randomMoviesAvailable = false;

    $: { randomMoviesAvailable = randomMovies !== undefined; }
</script>

<br /><br /><br /><br />
<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		{#if randomMoviesAvailable}
			<MoviesCard movies={randomMovies} />
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>
