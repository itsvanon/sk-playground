<script lang="ts">
	import type { Movie } from '../../../../app.js';
	import MoviesCard from '../../../../components/MoviesCard.svelte';

	export let data;

	let movies: Movie[];
	
	$: movies = data.movies;
	let turns;
	$: turns = movies;
	$: {
		console.log('Stuff:',movies);
	}

	let moviesAvailable = false;

	$: {
		moviesAvailable = movies !== undefined;
	}
</script>

<br /><br /><br /><br />
<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		{#if moviesAvailable}
			<MoviesCard {movies} />
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>
