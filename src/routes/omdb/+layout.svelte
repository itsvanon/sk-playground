<script lang="ts">

    import { goto, invalidateAll } from '$app/navigation';

    let searchValue = '';

    const handleKeyPress = async (event: { key: string; }) => {
        if(event.key === 'Enter') {
            await goto(`/omdb/search/${encodeURIComponent(searchValue)}`);
            await invalidateAll();
        }
    }

</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h2 class="text-center py-6">Welcome to MovieFi</h2>
		<div class="card p-4 w-full text-token space-y-4">
            <input class="input" type="text" placeholder="Search for a movie" bind:value={searchValue} on:keypress={handleKeyPress} />
        </div>
	</div>
</div>


<slot />